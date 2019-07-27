const rp = require("request-promise");
const $ = require("cheerio");

let page = 1;
let stars = 1;
const baseURL = "https://guide.michelin.com/en/restaurants";
const restaurantSeeds = [];
const cuisineSeeds = [];
const citySeeds = [];

const parseRestaurant = html => {
  const name = $("h5", html)
    .text()
    .trim();
  const cuisineAndPrice = $(".card__menu-footer--price", html)
    .text()
    .split(" · ");
  const city = $(".card__menu-footer--location", html)
    .text()
    .replace(/[-+\d]/g, "")
    .trim();

  if (
    !cuisineSeeds.some(cuisine => cuisine.name === cuisineAndPrice[0].trim())
  ) {
    cuisineSeeds.push({ name: cuisineAndPrice[0].trim() });
  }
  if (!citySeeds.some(cityObj => cityObj.name === city)) {
    citySeeds.push({ name: city });
  }
  // if (!cuisineSeeds.has({ name: cuisineAndPrice[0].trim() })) {
  //   cuisineSeeds.add({ name: cuisineAndPrice[0].trim() });
  // }
  // if (!citySeeds.has({ name: city })) citySeeds.add({ name: city });
  restaurantSeeds.push({
    name: name,
    stars: stars,
    price: cuisineAndPrice[1].trim(),
    cuisine_name: cuisineAndPrice[0].trim(),
    city_name: city
  });
};

const scraper = () => {
  let url;
  if (stars === 1) {
    url = `${baseURL}/${stars}-star-michelin/page/${page}`;
  } else {
    url = `${baseURL}/${stars}-stars-michelin/page/${page}`;
  }
  return rp(url)
    .then(resp => {
      const totalRestaurantsString = $("div .flex-fill h1", resp)
        .text()
        .split("of ")
        .pop()
        .split(" ")[0];
      const totalRestaurantsInt = ~~totalRestaurantsString.replace(",", "");
      return Math.ceil(totalRestaurantsInt / 20);
    })
    .then(async totalPages => {
      while (page <= totalPages) {
        if (stars === 1) {
          url = `${baseURL}/${stars}-star-michelin/page/${page}`;
        } else {
          url = `${baseURL}/${stars}-stars-michelin/page/${page}`;
        }
        await rp(url).then(resp => {
          const restaurants = $("div .card__menu", resp);
          for (let i = 0; i < restaurants.length; i++) {
            parseRestaurant(restaurants[i]);
          }
        });
        page++;
      }
    })
    .catch(err => console.log(err));
};

const getRestaurants = async () => {
  while (stars <= 3) {
    await scraper();
    console.log("length: ", restaurantSeeds.length);
    // console.log("hello");
    // console.log(cuisineSeeds);
    // console.log(citySeeds);
    // console.log("hello");
    stars++;
    page = 1;
  }
  // console.log(cuisineSeeds);
  // console.log(citySeeds);
  console.log(restaurantSeeds.slice(-16));
  // console.log(restaurantSeeds.slice(0, 100));
  // console.log(restaurantSeeds.slice(100, 200));
  // console.log(restaurantSeeds.slice(200, 300));
  // console.log(restaurantSeeds.slice(300, 400));
  // console.log(restaurantSeeds.slice(400, 500));
  // console.log(restaurantSeeds.slice(500));
  // console.log([...citySeeds]);
  // console.log([...cuisineSeeds]);
};

getRestaurants();

// module.exports = { getRestaurants, restaurantSeeds, cuisineSeeds, citySeeds };
