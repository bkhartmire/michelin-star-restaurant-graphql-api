const rp = require("request-promise");
const $ = require("cheerio");
let page = 1;

const baseURL =
  "https://guide.michelin.com/en/restaurants/3-stars-michelin/2-stars-michelin/1-star-michelin/page/";
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
  let price;
  cuisineAndPrice[1] ? (price = cuisineAndPrice[1].trim()) : (price = null);
  if (
    !cuisineSeeds.some(cuisine => cuisine.name === cuisineAndPrice[0].trim())
  ) {
    cuisineSeeds.push({ name: cuisineAndPrice[0].trim() });
  }
  if (!citySeeds.some(cityObj => cityObj.name === city)) {
    citySeeds.push({ name: city });
  }
  const starSymbol = $(".fa-michelin", html).text();
  let stars;
  switch (starSymbol) {
    case "m":
      stars = 1;
      break;
    case "n":
      stars = 2;
      break;
    case "o":
      stars = 3;
      break;
    default:
      stars = null;
  }
  restaurantSeeds.push({
    name: name,
    stars: stars,
    price: price,
    cuisine_name: cuisineAndPrice[0].trim(),
    city_name: city
  });
};

const scraper = () => {
  return rp(baseURL + page)
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
        await rp(baseURL + page).then(resp => {
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
  await scraper();
  //insert console log statements here to see final results
};

getRestaurants();
