exports.seed = function(knex) {
  return knex("restaurants")
    .del()
    .then(function() {
      return knex("restaurants").insert([
        {
          name: "Golden Formosa",
          stars: 1,
          price: "$$",
          cuisine_name: "Taiwanese",
          city_name: "Taipei"
        },
        {
          name: "RAW",
          stars: 2,
          price: "$$$",
          cuisine_name: "Innovative",
          city_name: "Taipei"
        },
        {
          name: "Shoun RyuGin",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Japanese contemporary",
          city_name: "Taipei"
        },
        {
          name: "Taïrroir",
          stars: 2,
          price: "$$$",
          cuisine_name: "Innovative",
          city_name: "Taipei"
        },
        {
          name: "Danny's Steakhouse",
          stars: 1,
          price: "$$",
          cuisine_name: "Steakhouse",
          city_name: "Taipei"
        },
        {
          name: "L'Atelier de Joël Robuchon",
          stars: 1,
          price: "$$$",
          cuisine_name: "French contemporary",
          city_name: "Taipei"
        },
        {
          name: "Kitcho",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Sushi",
          city_name: "Taipei"
        },
        {
          name: "Sushi Amamoto",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Sushi",
          city_name: "Taipei"
        },
        {
          name: "Da-Wan",
          stars: 1,
          price: "$$$",
          cuisine_name: "Barbecue",
          city_name: "Taipei"
        },
        {
          name: "Sushi Nomura",
          stars: 1,
          price: "$$$",
          cuisine_name: "Sushi",
          city_name: "Taipei"
        },
        {
          name: "Tien Hsiang Lo",
          stars: 1,
          price: "$$",
          cuisine_name: "Hang Zhou",
          city_name: "Taipei"
        },
        {
          name: "logy",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Asian contemporary",
          city_name: "Taipei"
        },
        {
          name: "Ya Ge",
          stars: 1,
          price: "$$",
          cuisine_name: "Cantonese",
          city_name: "Taipei"
        },
        {
          name: "Ken An Ho",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "Taipei"
        },
        {
          name: "MUME",
          stars: 1,
          price: "$$$",
          cuisine_name: "European contemporary",
          city_name: "Taipei"
        },
        {
          name: "Ming Fu",
          stars: 1,
          price: "$$$",
          cuisine_name: "Taiwanese",
          city_name: "Taipei"
        },
        {
          name: "Sushi Ryu",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Sushi",
          city_name: "Taipei"
        },
        {
          name: "Impromptu by Paul Lee",
          stars: 1,
          price: "$$$",
          cuisine_name: "Innovative",
          city_name: "Taipei"
        },
        {
          name: "Longtail",
          stars: 1,
          price: "$$",
          cuisine_name: "Innovative",
          city_name: "Taipei"
        },
        {
          name: "Mountain and Sea House",
          stars: 1,
          price: "$$",
          cuisine_name: "Taiwanese",
          city_name: "Taipei"
        },
        {
          name: "The Guest House",
          stars: 2,
          price: "$$",
          cuisine_name: "Sichuan-Huai Yang",
          city_name: "Taipei"
        },
        {
          name: "Le Palais",
          stars: 3,
          price: "$$",
          cuisine_name: "Cantonese",
          city_name: "Taipei"
        },
        {
          name: "Da San Yuan",
          stars: 1,
          price: "$",
          cuisine_name: "Cantonese",
          city_name: "Taipei"
        },
        {
          name: "Tainan Tan Tsu Mien Seafood",
          stars: 1,
          price: "$$",
          cuisine_name: "Seafood",
          city_name: "Taipei"
        },
        {
          name: "Loaf On",
          stars: 1,
          price: "$$",
          cuisine_name: "Cantonese",
          city_name: "Hong Kong"
        },
        {
          name: "Lei Garden (Kwun Tong)",
          stars: 1,
          price: "$",
          cuisine_name: "Cantonese",
          city_name: "Hong Kong"
        },
        {
          name: "Tim Ho Wan (Sham Shui Po)",
          stars: 1,
          price: "$",
          cuisine_name: "Dim Sum",
          city_name: "Hong Kong"
        },
        {
          name: "Lei Garden (Mong Kok)",
          stars: 1,
          price: "$",
          cuisine_name: "Cantonese",
          city_name: "Hong Kong"
        },
        {
          name: "Ming Court",
          stars: 1,
          price: "$$$",
          cuisine_name: "Cantonese",
          city_name: "Hong Kong"
        },
        {
          name: "Yat Tung Heen (Jordan)",
          stars: 1,
          price: "$$",
          cuisine_name: "Cantonese",
          city_name: "Hong Kong"
        },
        {
          name: "IM Teppanyaki & Wine",
          stars: 1,
          price: "$$",
          cuisine_name: "Teppanyaki",
          city_name: "Hong Kong"
        },
        {
          name: "Shang Palace",
          stars: 1,
          price: "$$$",
          cuisine_name: "Cantonese",
          city_name: "Hong Kong"
        },
        {
          name: "Fu Ho (Tsim Sha Tsui)",
          stars: 1,
          price: "$$",
          cuisine_name: "Cantonese",
          city_name: "Hong Kong"
        },
        {
          name: "Sun Tung Lok",
          stars: 2,
          price: "$$",
          cuisine_name: "Cantonese",
          city_name: "Hong Kong"
        },
        {
          name: "Yee Tung Heen",
          stars: 1,
          price: "$$",
          cuisine_name: "Cantonese",
          city_name: "Hong Kong"
        },
        {
          name: "Ah Yat Harbour View (Tsim Sha Tsui)",
          stars: 1,
          price: "$$",
          cuisine_name: "Cantonese",
          city_name: "Hong Kong"
        },
        {
          name: "Rech",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Seafood",
          city_name: "Hong Kong"
        },
        {
          name: "Yan Toh Heen",
          stars: 2,
          price: "$$$",
          cuisine_name: "Cantonese",
          city_name: "Hong Kong"
        },
        {
          name: "Spring Moon",
          stars: 1,
          price: "$$$",
          cuisine_name: "Cantonese",
          city_name: "Hong Kong"
        },
        {
          name: "Forum",
          stars: 2,
          price: "$$",
          cuisine_name: "Cantonese",
          city_name: "Hong Kong"
        },
        {
          name: "Ho Hung Kee",
          stars: 1,
          price: "$",
          cuisine_name: "Noodles and congee",
          city_name: "Hong Kong"
        },
        {
          name: "T'ang Court",
          stars: 3,
          price: "$$$",
          cuisine_name: "Cantonese",
          city_name: "Hong Kong"
        },
        {
          name: "Imperial Treasure Fine Chinese Cuisine",
          stars: 1,
          price: "$$",
          cuisine_name: "Cantonese",
          city_name: "Hong Kong"
        },
        {
          name: "Sushi Tokami",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Sushi",
          city_name: "Hong Kong"
        },
        {
          name: "Épure",
          stars: 1,
          price: "$$$",
          cuisine_name: "French",
          city_name: "Hong Kong"
        },
        {
          name: "Yè Shanghai (Tsim Sha Tsui)",
          stars: 1,
          price: "$",
          cuisine_name: "Shanghainese",
          city_name: "Hong Kong"
        },
        {
          name: "Tin Lung Heen",
          stars: 2,
          price: "$$$",
          cuisine_name: "Cantonese",
          city_name: "Hong Kong"
        },
        {
          name: "Tosca",
          stars: 1,
          price: "$$$",
          cuisine_name: "Italian",
          city_name: "Hong Kong"
        },
        {
          name: "Tenku RyuGin",
          stars: 2,
          price: "$$$$$",
          cuisine_name: "Japanese",
          city_name: "Hong Kong"
        },
        {
          name: "Jardin de Jade (Wan Chai)",
          stars: 1,
          price: "$$",
          cuisine_name: "Shanghainese",
          city_name: "Hong Kong"
        },
        {
          name: "Zhejiang Heen",
          stars: 1,
          price: "$$",
          cuisine_name: "Shanghainese",
          city_name: "Hong Kong"
        },
        {
          name: "Pang's Kitchen",
          stars: 1,
          price: "$",
          cuisine_name: "Cantonese",
          city_name: "Hong Kong"
        },
        {
          name: "Takumi by Daisuke Mori",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Innovative",
          city_name: "Hong Kong"
        },
        {
          name: "Kam's Roast Goose",
          stars: 1,
          price: "$",
          cuisine_name: "Cantonese Roast Meats",
          city_name: "Hong Kong"
        },
        {
          name: "Xin Rong Ji",
          stars: 1,
          price: "$$$",
          cuisine_name: "Taizhou",
          city_name: "Hong Kong"
        },
        {
          name: "Qi (Wan Chai)",
          stars: 1,
          price: "$",
          cuisine_name: "Sichuan",
          city_name: "Hong Kong"
        },
        {
          name: "Bo Innovation",
          stars: 3,
          price: "$$$$$",
          cuisine_name: "Innovative",
          city_name: "Hong Kong"
        },
        {
          name: "Lung King Heen",
          stars: 3,
          price: "$$$$",
          cuisine_name: "Cantonese",
          city_name: "Hong Kong"
        },
        {
          name: "Sushi Saito",
          stars: 2,
          price: "$$$$$",
          cuisine_name: "Sushi",
          city_name: "Hong Kong"
        },
        {
          name: "The Ocean",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "French",
          city_name: "Hong Kong"
        },
        {
          name: "Caprice",
          stars: 3,
          price: "$$$$",
          cuisine_name: "French",
          city_name: "Hong Kong"
        },
        {
          name: "Summer Palace",
          stars: 1,
          price: "$$$",
          cuisine_name: "Cantonese",
          city_name: "Hong Kong"
        },
        {
          name: "Man Wah",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Cantonese",
          city_name: "Hong Kong"
        },
        {
          name: "Pierre",
          stars: 2,
          price: "$$$$",
          cuisine_name: "French contemporary",
          city_name: "Hong Kong"
        },
        {
          name: "Ying Jee Club",
          stars: 2,
          price: "$$",
          cuisine_name: "Cantonese",
          city_name: "Hong Kong"
        },
        {
          name: "8½ Otto e Mezzo - Bombana",
          stars: 3,
          price: "$$$$",
          cuisine_name: "Italian",
          city_name: "Hong Kong"
        },
        {
          name: "Octavium",
          stars: 1,
          price: "$$$",
          cuisine_name: "Italian",
          city_name: "Hong Kong"
        },
        {
          name: "L'Atelier de Joël Robuchon",
          stars: 3,
          price: "$$$$",
          cuisine_name: "French contemporary",
          city_name: "Hong Kong"
        },
        {
          name: "Guo Fu Lou",
          stars: 1,
          price: "$$$",
          cuisine_name: "Cantonese",
          city_name: "Hong Kong"
        },
        {
          name: "Mandarin Grill + Bar",
          stars: 1,
          price: "$$$$",
          cuisine_name: "European contemporary",
          city_name: "Hong Kong"
        },
        {
          name: "Amber",
          stars: 2,
          price: "$$$$",
          cuisine_name: "French contemporary",
          city_name: "Hong Kong"
        },
        {
          name: "Arbor",
          stars: 1,
          price: "$$$",
          cuisine_name: "Innovative",
          city_name: "Hong Kong"
        },
        {
          name: "Écriture",
          stars: 2,
          price: "$$$",
          cuisine_name: "French contemporary",
          city_name: "Hong Kong"
        },
        {
          name: "Ta Vie",
          stars: 2,
          price: "$$$$$",
          cuisine_name: "Innovative",
          city_name: "Hong Kong"
        },
        {
          name: "Yat Lok",
          stars: 1,
          price: "$",
          cuisine_name: "Cantonese Roast Meats",
          city_name: "Hong Kong"
        },
        {
          name: "Duddell's",
          stars: 1,
          price: "$$$",
          cuisine_name: "Cantonese",
          city_name: "Hong Kong"
        },
        {
          name: "Beefbar",
          stars: 1,
          price: "$$",
          cuisine_name: "Steakhouse",
          city_name: "Hong Kong"
        },
        {
          name: "Arcane",
          stars: 1,
          price: "$$$",
          cuisine_name: "European contemporary",
          city_name: "Hong Kong"
        },
        {
          name: "Sushi Wadatsumi",
          stars: 1,
          price: "$$$",
          cuisine_name: "Sushi",
          city_name: "Hong Kong"
        },
        {
          name: "Kashiwaya",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "Hong Kong"
        },
        {
          name: "VEA",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Innovative",
          city_name: "Hong Kong"
        },
        {
          name: "Celebrity Cuisine",
          stars: 1,
          price: "$$",
          cuisine_name: "Cantonese",
          city_name: "Hong Kong"
        },
        {
          name: "Sushi Shikon",
          stars: 3,
          price: "$$$$$",
          cuisine_name: "Sushi",
          city_name: "Hong Kong"
        },
        {
          name: "New Punjab Club",
          stars: 1,
          price: "$$",
          cuisine_name: "Indian",
          city_name: "Hong Kong"
        },
        {
          name: "Belon",
          stars: 1,
          price: "$$$",
          cuisine_name: "French",
          city_name: "Hong Kong"
        },
        {
          name: "Tate",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Innovative",
          city_name: "Hong Kong"
        },
        {
          name: "Kaiseki Den by Saotome",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Japanese",
          city_name: "Hong Kong"
        },
        {
          name: "Feng Wei Ju",
          stars: 2,
          price: "$",
          cuisine_name: "Hunanese and Sichuan",
          city_name: "Macau"
        },
        {
          name: "Golden Flower",
          stars: 2,
          price: "$$",
          cuisine_name: "Chinese",
          city_name: "Macau"
        },
        {
          name: "Wing Lei",
          stars: 1,
          price: "$$",
          cuisine_name: "Cantonese",
          city_name: "Macau"
        },
        {
          name: "The Kitchen",
          stars: 1,
          price: "$$$",
          cuisine_name: "Steakhouse",
          city_name: "Macau"
        },
        {
          name: "Robuchon au Dôme",
          stars: 3,
          price: "$$$$",
          cuisine_name: "French contemporary",
          city_name: "Macau"
        },
        {
          name: "Mizumi (Macau)",
          stars: 2,
          price: "$$",
          cuisine_name: "Japanese",
          city_name: "Macau"
        },
        {
          name: "Tim's Kitchen",
          stars: 1,
          price: "$$",
          cuisine_name: "Cantonese",
          city_name: "Macau"
        },
        {
          name: "The Eight",
          stars: 3,
          price: "$$$",
          cuisine_name: "Chinese",
          city_name: "Macau"
        },
        {
          name: "King",
          stars: 1,
          price: "$",
          cuisine_name: "Cantonese",
          city_name: "Macau"
        },
        {
          name: "Jade Dragon",
          stars: 3,
          price: "$$",
          cuisine_name: "Cantonese",
          city_name: "Macau"
        },
        {
          name: "The Tasting Room",
          stars: 2,
          price: "$$$",
          cuisine_name: "French contemporary",
          city_name: "Macau"
        },
        {
          name: "Ying",
          stars: 1,
          price: "$$",
          cuisine_name: "Cantonese",
          city_name: "Macau"
        },
        {
          name: "Shinji by Kanesaka",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Sushi",
          city_name: "Macau"
        },
        {
          name: "The Golden Peacock",
          stars: 1,
          price: "$",
          cuisine_name: "Indian",
          city_name: "Macau"
        },
        {
          name: "Alain Ducasse at Morpheus",
          stars: 2,
          price: "$$$$$",
          cuisine_name: "French contemporary",
          city_name: "Macau"
        },
        {
          name: "Zi Yat Heen",
          stars: 1,
          price: "$$",
          cuisine_name: "Cantonese",
          city_name: "Macau"
        },
        {
          name: "Pearl Dragon",
          stars: 1,
          price: "$$$",
          cuisine_name: "Cantonese",
          city_name: "Macau"
        },
        {
          name: "8 1/2 Otto e Mezzo - Bombana",
          stars: 1,
          price: "$$$",
          cuisine_name: "Italian",
          city_name: "Macau"
        },
        {
          name: "Lai Heen",
          stars: 1,
          price: "$$",
          cuisine_name: "Cantonese",
          city_name: "Macau"
        },
        {
          name: "Suan Thip",
          stars: 1,
          price: "$",
          cuisine_name: "Thai",
          city_name: "Bangkok"
        },
        {
          name: "Upstairs at Mikkeller",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Innovative",
          city_name: "Bangkok"
        },
        {
          name: "R-Haan",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Thai",
          city_name: "Bangkok"
        },
        {
          name: "Canvas",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Innovative",
          city_name: "Bangkok"
        },
        {
          name: "Chim by Siam Wisdom",
          stars: 1,
          price: "$$$",
          cuisine_name: "Thai",
          city_name: "Bangkok"
        },
        {
          name: "Bo.lan",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Thai",
          city_name: "Bangkok"
        },
        {
          name: "Sorn",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Southern Thai",
          city_name: "Bangkok"
        },
        {
          name: "Elements",
          stars: 1,
          price: "$$$$",
          cuisine_name: "French contemporary",
          city_name: "Bangkok"
        },
        {
          name: "Sra Bua by Kiin Kiin",
          stars: 1,
          price: "$$$",
          cuisine_name: "Thai Contemporary",
          city_name: "Bangkok"
        },
        {
          name: "Savelberg",
          stars: 1,
          price: "$$$",
          cuisine_name: "French contemporary",
          city_name: "Bangkok"
        },
        {
          name: "Paste",
          stars: 1,
          price: "$$$",
          cuisine_name: "Thai",
          city_name: "Bangkok"
        },
        {
          name: "Ginza Sushi ichi",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Sushi",
          city_name: "Bangkok"
        },
        {
          name: "Saneh Jaan",
          stars: 1,
          price: "$$",
          cuisine_name: "Thai",
          city_name: "Bangkok"
        },
        {
          name: "Gaa",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Innovative",
          city_name: "Bangkok"
        },
        {
          name: "Gaggan",
          stars: 2,
          price: "$$$$$",
          cuisine_name: "Innovative",
          city_name: "Bangkok"
        },
        {
          name: "J'AIME by Jean-Michel Lorain",
          stars: 1,
          price: "$$$",
          cuisine_name: "French contemporary",
          city_name: "Bangkok"
        },
        {
          name: "Nahm",
          stars: 1,
          price: "$$$",
          cuisine_name: "Thai",
          city_name: "Bangkok"
        },
        {
          name: "Saawaan",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Thai Contemporary",
          city_name: "Bangkok"
        },
        {
          name: "Sühring",
          stars: 2,
          price: "$$$$",
          cuisine_name: "European contemporary",
          city_name: "Bangkok"
        },
        {
          name: "Le Du",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Thai",
          city_name: "Bangkok"
        },
        {
          name: "Methavalai Sorndaeng",
          stars: 1,
          price: "$$",
          cuisine_name: "Thai",
          city_name: "Bangkok"
        },
        {
          name: "Jay Fai",
          stars: 1,
          price: "$$",
          cuisine_name: "Street Food",
          city_name: "Bangkok"
        },
        {
          name: "Mezzaluna",
          stars: 2,
          price: "$$$$$",
          cuisine_name: "Innovative",
          city_name: "Bangkok"
        },
        {
          name: "Le Normandie",
          stars: 2,
          price: "$$$$",
          cuisine_name: "French contemporary",
          city_name: "Bangkok"
        },
        {
          name: "Ruean Panya",
          stars: 1,
          price: "$$",
          cuisine_name: "Thai",
          city_name: "Bangkok"
        },
        {
          name: "PRU",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Innovative",
          city_name: "Phuket"
        },
        {
          name: "Putien (Kitchener Road)",
          stars: 1,
          price: "$",
          cuisine_name: "Fujian",
          city_name: "Singapore"
        },
        {
          name: "Hill Street Tai Hwa Pork Noodle",
          stars: 1,
          price: "$",
          cuisine_name: "Street Food",
          city_name: "Singapore"
        },
        {
          name: "Chef Kang's",
          stars: 1,
          price: "$$$",
          cuisine_name: "Cantonese",
          city_name: "Singapore"
        },
        {
          name: "Garibaldi",
          stars: 1,
          price: "$",
          cuisine_name: "Italian",
          city_name: "Singapore"
        },
        {
          name: "Summer Pavilion",
          stars: 1,
          price: "$$",
          cuisine_name: "Cantonese",
          city_name: "Singapore"
        },
        {
          name: "Shinji (Bras Basah Road)",
          stars: 1,
          price: "$$",
          cuisine_name: "Sushi",
          city_name: "Singapore"
        },
        {
          name: "The Song of India",
          stars: 1,
          price: "$",
          cuisine_name: "Indian",
          city_name: "Singapore"
        },
        {
          name: "Lei Garden",
          stars: 1,
          price: "$",
          cuisine_name: "Cantonese",
          city_name: "Singapore"
        },
        {
          name: "Whitegrass",
          stars: 1,
          price: "$$",
          cuisine_name: "Australian",
          city_name: "Singapore"
        },
        {
          name: "Alma",
          stars: 1,
          price: "$",
          cuisine_name: "European contemporary",
          city_name: "Singapore"
        },
        {
          name: "Jaan",
          stars: 1,
          price: "$$$",
          cuisine_name: "French contemporary",
          city_name: "Singapore"
        },
        {
          name: "Labyrinth",
          stars: 1,
          price: "$$",
          cuisine_name: "Innovative",
          city_name: "Singapore"
        },
        {
          name: "Cut",
          stars: 1,
          price: "$$$",
          cuisine_name: "Steakhouse",
          city_name: "Singapore"
        },
        {
          name: "Waku Ghin",
          stars: 2,
          price: "$$$$$",
          cuisine_name: "Japanese contemporary",
          city_name: "Singapore"
        },
        {
          name: "Béni",
          stars: 1,
          price: "$$",
          cuisine_name: "French contemporary",
          city_name: "Singapore"
        },
        {
          name: "Les Amis",
          stars: 2,
          price: "$$$",
          cuisine_name: "French",
          city_name: "Singapore"
        },
        {
          name: "Shisen Hanten",
          stars: 2,
          price: "$",
          cuisine_name: "Chinese",
          city_name: "Singapore"
        },
        {
          name: "Odette",
          stars: 2,
          price: "$$$$",
          cuisine_name: "French contemporary",
          city_name: "Singapore"
        },
        {
          name: "Crystal Jade Golden Palace",
          stars: 1,
          price: "$",
          cuisine_name: "Chinese",
          city_name: "Singapore"
        },
        {
          name: "Imperial Treasure Fine Teochew Cuisine (Orchard)",
          stars: 1,
          price: "$",
          cuisine_name: "Chinese",
          city_name: "Singapore"
        },
        {
          name: "Sushi Ichi",
          stars: 1,
          price: "$$$",
          cuisine_name: "Sushi",
          city_name: "Singapore"
        },
        {
          name: "Shoukouwa",
          stars: 2,
          price: "$$$$$",
          cuisine_name: "Sushi",
          city_name: "Singapore"
        },
        {
          name: "Sushi Kimura",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Sushi",
          city_name: "Singapore"
        },
        {
          name: "Saint Pierre",
          stars: 1,
          price: "$$",
          cuisine_name: "French contemporary",
          city_name: "Singapore"
        },
        {
          name: "Iggy's",
          stars: 1,
          price: "$$$",
          cuisine_name: "European contemporary",
          city_name: "Singapore"
        },
        {
          name: "Jiang-Nan Chun",
          stars: 1,
          price: "$$$",
          cuisine_name: "Cantonese",
          city_name: "Singapore"
        },
        {
          name: "Braci",
          stars: 1,
          price: "$$",
          cuisine_name: "Italian contemporary",
          city_name: "Singapore"
        },
        {
          name: "Corner House",
          stars: 1,
          price: "$$",
          cuisine_name: "Innovative",
          city_name: "Singapore"
        },
        {
          name: "Shinji (Tanglin Road)",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Sushi",
          city_name: "Singapore"
        },
        {
          name: "Bacchanalia",
          stars: 1,
          price: "$$",
          cuisine_name: "Innovative",
          city_name: "Singapore"
        },
        {
          name: "Summer Palace",
          stars: 1,
          price: "$",
          cuisine_name: "Cantonese",
          city_name: "Singapore"
        },
        {
          name: "Cheek by Jowl",
          stars: 1,
          price: "$",
          cuisine_name: "Australian",
          city_name: "Singapore"
        },
        {
          name: "Nouri",
          stars: 1,
          price: "$",
          cuisine_name: "Innovative",
          city_name: "Singapore"
        },
        {
          name: "Liao Fan Hong Kong Soya Sauce Chicken Rice & Noodle",
          stars: 1,
          price: "$",
          cuisine_name: "Street Food",
          city_name: "Singapore"
        },
        {
          name: "Burnt Ends",
          stars: 1,
          price: "$$",
          cuisine_name: "Barbecue",
          city_name: "Singapore"
        },
        {
          name: "Rhubarb",
          stars: 1,
          price: "$",
          cuisine_name: "French contemporary",
          city_name: "Singapore"
        },
        {
          name: "Meta",
          stars: 1,
          price: "$$",
          cuisine_name: "Innovative",
          city_name: "Singapore"
        },
        {
          name: "Candlenut",
          stars: 1,
          price: "$",
          cuisine_name: "Peranakan",
          city_name: "Singapore"
        },
        {
          name: "Ma Cuisine",
          stars: 1,
          price: "$",
          cuisine_name: "French",
          city_name: "Singapore"
        },
        {
          name: "Ask",
          stars: 1,
          price: "$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Helsinki"
        },
        {
          name: "Palace",
          stars: 1,
          price: "$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Helsinki"
        },
        {
          name: "Olo",
          stars: 1,
          price: "$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Helsinki"
        },
        {
          name: "Demo",
          stars: 1,
          price: "$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Helsinki"
        },
        {
          name: "Grön",
          stars: 1,
          price: "$$$",
          cuisine_name: "Finnish",
          city_name: "Helsinki"
        },
        {
          name: "Ora",
          stars: 1,
          price: "$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Helsinki"
        },
        {
          name: "Fäviken Magasinet",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Creative",
          city_name: "Järpen"
        },
        {
          name: "Credo",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Creative",
          city_name: "Trondheim"
        },
        {
          name: "FAGN",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Trondheim"
        },
        {
          name: "Volt",
          stars: 1,
          price: "$$$",
          cuisine_name: "Creative",
          city_name: "Stockholm"
        },
        {
          name: "Agrikultur",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Stockholm"
        },
        {
          name: "Ekstedt",
          stars: 1,
          price: "$$$",
          cuisine_name: "Meats and grills",
          city_name: "Stockholm"
        },
        {
          name: "Gastrologik",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Creative",
          city_name: "Stockholm"
        },
        {
          name: "Oaxen Krog",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Creative",
          city_name: "Stockholm"
        },
        {
          name: "Mathias Dahlgren-Matbaren",
          stars: 1,
          price: "$$",
          cuisine_name: "Modern cuisine",
          city_name: "Stockholm"
        },
        {
          name: "Operakällaren",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Classic cuisine",
          city_name: "Stockholm"
        },
        {
          name: "Sushi Sho",
          stars: 1,
          price: "$$$",
          cuisine_name: "Japanese",
          city_name: "Stockholm"
        },
        {
          name: "Frantzén",
          stars: 3,
          price: "$$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Stockholm"
        },
        {
          name: "Aloë",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Creative",
          city_name: "Stockholm"
        },
        {
          name: "Madrona Manor",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "San Francisco"
        },
        {
          name: "SingleThread",
          stars: 3,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "San Francisco"
        },
        {
          name: "Farmhouse Inn & Restaurant",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Californian",
          city_name: "San Francisco"
        },
        {
          name: "The Restaurant at Meadowood",
          stars: 3,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "San Francisco"
        },
        {
          name: "Auberge du Soleil",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Californian",
          city_name: "San Francisco"
        },
        {
          name: "The French Laundry",
          stars: 3,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "San Francisco"
        },
        {
          name: "Bouchon",
          stars: 1,
          price: "$$$",
          cuisine_name: "French",
          city_name: "San Francisco"
        },
        {
          name: "Madcap",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "San Francisco"
        },
        {
          name: "Kenzo",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "San Francisco"
        },
        {
          name: "La Toque",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "San Francisco"
        },
        {
          name: "Wako",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "San Francisco"
        },
        {
          name: "Spruce",
          stars: 1,
          price: "$$$",
          cuisine_name: "Californian",
          city_name: "San Francisco"
        },
        {
          name: "Sorrel",
          stars: 1,
          price: "$$$",
          cuisine_name: "Californian",
          city_name: "San Francisco"
        },
        {
          name: "Bar Crenn",
          stars: 1,
          price: "$$$",
          cuisine_name: "French",
          city_name: "San Francisco"
        },
        {
          name: "Atelier Crenn",
          stars: 3,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "San Francisco"
        },
        {
          name: "Gary Danko",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "San Francisco"
        },
        {
          name: "SPQR",
          stars: 1,
          price: "$$$",
          cuisine_name: "Italian",
          city_name: "San Francisco"
        },
        {
          name: "Kinjo",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "San Francisco"
        },
        {
          name: "jū-ni",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "San Francisco"
        },
        {
          name: "State Bird Provisions",
          stars: 1,
          price: "$$",
          cuisine_name: "American",
          city_name: "San Francisco"
        },
        {
          name: "The Progress",
          stars: 1,
          price: "$$$",
          cuisine_name: "Californian",
          city_name: "San Francisco"
        },
        {
          name: "Lord Stanley",
          stars: 1,
          price: "$$$",
          cuisine_name: "Californian",
          city_name: "San Francisco"
        },
        {
          name: "Octavia",
          stars: 1,
          price: "$$$",
          cuisine_name: "Californian",
          city_name: "San Francisco"
        },
        {
          name: "Acquerello",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Italian",
          city_name: "San Francisco"
        },
        {
          name: "Keiko à Nob Hill",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Fusion",
          city_name: "San Francisco"
        },
        {
          name: "Rich Table",
          stars: 1,
          price: "$$$",
          cuisine_name: "Contemporary",
          city_name: "San Francisco"
        },
        {
          name: "Coi",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "San Francisco"
        },
        {
          name: "Mister Jiu's",
          stars: 1,
          price: "$$$",
          cuisine_name: "Chinese",
          city_name: "San Francisco"
        },
        {
          name: "Quince",
          stars: 3,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "San Francisco"
        },
        {
          name: "Sons & Daughters",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "San Francisco"
        },
        {
          name: "Nico",
          stars: 1,
          price: "$$$",
          cuisine_name: "Contemporary",
          city_name: "San Francisco"
        },
        {
          name: "Campton Place",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Indian",
          city_name: "San Francisco"
        },
        {
          name: "Kin Khao",
          stars: 1,
          price: "$$",
          cuisine_name: "Thai",
          city_name: "San Francisco"
        },
        {
          name: "Michael Mina",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "San Francisco"
        },
        {
          name: "Hashiri",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "San Francisco"
        },
        {
          name: "Birdsong",
          stars: 1,
          price: "$$$$",
          cuisine_name: "American",
          city_name: "San Francisco"
        },
        {
          name: "Luce",
          stars: 1,
          price: "$$$",
          cuisine_name: "Contemporary",
          city_name: "San Francisco"
        },
        {
          name: "In Situ",
          stars: 1,
          price: "$$$$",
          cuisine_name: "International",
          city_name: "San Francisco"
        },
        {
          name: "Mourad",
          stars: 1,
          price: "$$$",
          cuisine_name: "Moroccan",
          city_name: "San Francisco"
        },
        {
          name: "Commonwealth",
          stars: 1,
          price: "$$",
          cuisine_name: "Contemporary",
          city_name: "San Francisco"
        },
        {
          name: "Lazy Bear",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "San Francisco"
        },
        {
          name: "Benu",
          stars: 3,
          price: "$$$$",
          cuisine_name: "Asian",
          city_name: "San Francisco"
        },
        {
          name: "Saison",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Californian",
          city_name: "San Francisco"
        },
        {
          name: "Californios",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Mexican",
          city_name: "San Francisco"
        },
        {
          name: "Omakase",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "San Francisco"
        },
        {
          name: "Al's Place",
          stars: 1,
          price: "$$",
          cuisine_name: "Californian",
          city_name: "San Francisco"
        },
        {
          name: "Maum",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Korean",
          city_name: "San Francisco"
        },
        {
          name: "Commis",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "San Francisco"
        },
        {
          name: "Rasa",
          stars: 1,
          price: "$$",
          cuisine_name: "Indian",
          city_name: "San Francisco"
        },
        {
          name: "Sushi Yoshizumi",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "San Francisco"
        },
        {
          name: "Wakuriya",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "San Francisco"
        },
        {
          name: "The Village Pub",
          stars: 1,
          price: "$$$",
          cuisine_name: "Contemporary",
          city_name: "San Francisco"
        },
        {
          name: "Madera",
          stars: 1,
          price: "$$$",
          cuisine_name: "Contemporary",
          city_name: "San Francisco"
        },
        {
          name: "Protégé",
          stars: 1,
          price: "$$$",
          cuisine_name: "Contemporary",
          city_name: "San Francisco"
        },
        {
          name: "Baumé",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "San Francisco"
        },
        {
          name: "Chez TJ",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "San Francisco"
        },
        {
          name: "Plumed Horse",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "San Francisco"
        },
        {
          name: "Manresa",
          stars: 3,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "San Francisco"
        },
        {
          name: "Kontrast",
          stars: 1,
          price: "$$$",
          cuisine_name: "Scandinavian",
          city_name: "Oslo"
        },
        {
          name: "Maaemo",
          stars: 3,
          price: "$$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Oslo"
        },
        {
          name: "Statholdergaarden",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Classic cuisine",
          city_name: "Oslo"
        },
        {
          name: "Galt",
          stars: 1,
          price: "$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Oslo"
        },
        {
          name: "PM & Vänner",
          stars: 1,
          price: "$$$",
          cuisine_name: "Creative",
          city_name: "Växjö"
        },
        {
          name: "Upper House",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Creative",
          city_name: "Göteborg"
        },
        {
          name: "SK Mat & Människor",
          stars: 1,
          price: "$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Göteborg"
        },
        {
          name: "Bhoga",
          stars: 1,
          price: "$$$",
          cuisine_name: "Creative",
          city_name: "Göteborg"
        },
        {
          name: "28+",
          stars: 1,
          price: "$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Göteborg"
        },
        {
          name: "Thörnströms Kök",
          stars: 1,
          price: "$$$",
          cuisine_name: "Classic cuisine",
          city_name: "Göteborg"
        },
        {
          name: "Koka",
          stars: 1,
          price: "$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Göteborg"
        },
        {
          name: "Senses",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Warszawa"
        },
        {
          name: "atelier Amaro",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Warszawa"
        },
        {
          name: "Daniel Berlin",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Creative",
          city_name: "SkåneTranås"
        },
        {
          name: "Kadeau Bornholm",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Creative",
          city_name: "Pedersker"
        },
        {
          name: "Sabi Omakase",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Sushi",
          city_name: "Stavanger"
        },
        {
          name: "RE-NAA",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Creative",
          city_name: "Stavanger"
        },
        {
          name: "Vollmers",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Creative",
          city_name: "Malmö"
        },
        {
          name: "Bloom in the Park",
          stars: 1,
          price: "$$",
          cuisine_name: "Creative",
          city_name: "Malmö"
        },
        {
          name: "Søllerød Kro",
          stars: 1,
          price: "$$",
          cuisine_name: "Modern cuisine",
          city_name: "Copenhagen"
        },
        {
          name: "SAV",
          stars: 1,
          price: "$$$",
          cuisine_name: "Creative",
          city_name: "Malmö"
        },
        {
          name: "Jordnær",
          stars: 1,
          price: "$$$",
          cuisine_name: "Danish",
          city_name: "Copenhagen"
        },
        {
          name: "Geranium",
          stars: 3,
          price: "$$$$",
          cuisine_name: "Creative",
          city_name: "Copenhagen"
        },
        {
          name: "noma",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Creative",
          city_name: "Copenhagen"
        },
        {
          name: "Kokkeriet",
          stars: 1,
          price: "$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Copenhagen"
        },
        {
          name: "a‚o‚c",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Copenhagen"
        },
        {
          name: "108",
          stars: 1,
          price: "$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Copenhagen"
        },
        {
          name: "Clou",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Copenhagen"
        },
        {
          name: "Stud!o at The Standard",
          stars: 1,
          price: "$$$",
          cuisine_name: "Creative",
          city_name: "Copenhagen"
        },
        {
          name: "Marchal",
          stars: 1,
          price: "$$",
          cuisine_name: "Modern cuisine",
          city_name: "Copenhagen"
        },
        {
          name: "Kiin Kiin",
          stars: 1,
          price: "$$",
          cuisine_name: "Thai",
          city_name: "Copenhagen"
        },
        {
          name: "Kong Hans Kælder",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Classic French",
          city_name: "Copenhagen"
        },
        {
          name: "Era Ora",
          stars: 1,
          price: "$$",
          cuisine_name: "Italian",
          city_name: "Copenhagen"
        },
        {
          name: "Kadeau Copenhagen",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Copenhagen"
        },
        {
          name: "Relæ",
          stars: 1,
          price: "$$",
          cuisine_name: "Modern cuisine",
          city_name: "Copenhagen"
        },
        {
          name: "Alouette",
          stars: 1,
          price: "$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Copenhagen"
        },
        {
          name: "formel B",
          stars: 1,
          price: "$$",
          cuisine_name: "Modern cuisine",
          city_name: "Copenhagen"
        },
        {
          name: "Slotskøkkenet",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Creative",
          city_name: "Hørve"
        },
        {
          name: "KOKS",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Creative",
          city_name: "Leynar"
        },
        {
          name: "Domestic",
          stars: 1,
          price: "$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Aarhus"
        },
        {
          name: "Gastromé",
          stars: 1,
          price: "$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Aarhus"
        },
        {
          name: "Substans",
          stars: 1,
          price: "$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Aarhus"
        },
        {
          name: "Frederikshøj",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Creative",
          city_name: "Aarhus"
        },
        {
          name: "Frederiksminde",
          stars: 1,
          price: "$$$",
          cuisine_name: "Creative",
          city_name: "Præstø"
        },
        {
          name: "Me‚Mu",
          stars: 1,
          price: "$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Vejle"
        },
        {
          name: "Ti Trin Ned",
          stars: 1,
          price: "$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Fredericia"
        },
        {
          name: "Henne Kirkeby Kro",
          stars: 2,
          price: "$$$",
          cuisine_name: "Classic cuisine",
          city_name: "Henne"
        },
        {
          name: "Stand",
          stars: 1,
          price: "$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Budapest"
        },
        {
          name: "Borkonyha Winekitchen",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Budapest"
        },
        {
          name: "Costes Downtown",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Budapest"
        },
        {
          name: "Onyx",
          stars: 2,
          price: "$$$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Budapest"
        },
        {
          name: "Costes",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Budapest"
        },
        {
          name: "Babel",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Budapest"
        },
        {
          name: "La Degustation Bohême Bourgeoise",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Praha"
        },
        {
          name: "Field",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Praha"
        },
        {
          name: "Amador",
          stars: 3,
          price: "$$$$$",
          cuisine_name: "Creative",
          city_name: "Vienna"
        },
        {
          name: "Mraz & Sohn",
          stars: 2,
          price: "$$$$$",
          cuisine_name: "Creative",
          city_name: "Vienna"
        },
        {
          name: "Das Loft",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Vienna"
        },
        {
          name: "Konstantin Filippou",
          stars: 2,
          price: "$$$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Vienna"
        },
        {
          name: "Edvard",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Vienna"
        },
        {
          name: "Walter Bauer",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Classic cuisine",
          city_name: "Vienna"
        },
        {
          name: "Pramerl & the Wolf",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Creative",
          city_name: "Vienna"
        },
        {
          name: "Silvio Nickol Gourmet Restaurant",
          stars: 2,
          price: "$$$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Vienna"
        },
        {
          name: "Steirereck im Stadtpark",
          stars: 2,
          price: "$$$$$",
          cuisine_name: "Creative",
          city_name: "Vienna"
        },
        {
          name: "Tian",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Vegetarian",
          city_name: "Vienna"
        },
        {
          name: "SHIKI",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Japanese",
          city_name: "Vienna"
        },
        {
          name: "Le Ciel by Toni Mörwald",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Classic cuisine",
          city_name: "Vienna"
        },
        {
          name: "aend",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Vienna"
        },
        {
          name: "Loch Bay",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Waternish"
        },
        {
          name: "The Cellar",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Anstruther"
        },
        {
          name: "The Peat Inn",
          stars: 1,
          price: null,
          cuisine_name: "Classic cuisine",
          city_name: "Peat Inn"
        },
        {
          name: "Andrew Fairlie at Gleneagles",
          stars: 2,
          price: null,
          cuisine_name: "Creative French",
          city_name: "Auchterarder"
        },
        {
          name: "Kitchin",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Leith"
        },
        {
          name: "Martin Wishart",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Leith"
        },
        {
          name: "21212",
          stars: 1,
          price: null,
          cuisine_name: "Creative",
          city_name: "Edinburgh"
        },
        {
          name: "Number One",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Edinburgh"
        },
        {
          name: "House of Tides",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Newcastle upon Tyne"
        },
        {
          name: "Braidwoods",
          stars: 1,
          price: null,
          cuisine_name: "Classic cuisine",
          city_name: "Dalry"
        },
        {
          name: "Raby Hunt",
          stars: 2,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Summerhouse"
        },
        {
          name: "Pfefferschiff",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Classic cuisine",
          city_name: "Salzburg"
        },
        {
          name: "SENNS.Restaurant",
          stars: 2,
          price: "$$$$$",
          cuisine_name: "Creative",
          city_name: "Salzburg"
        },
        {
          name: "Esszimmer",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Creative",
          city_name: "Salzburg"
        },
        {
          name: "Carpe Diem",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Market cuisine",
          city_name: "Salzburg"
        },
        {
          name: "Ikarus",
          stars: 2,
          price: "$$$$$",
          cuisine_name: "Creative",
          city_name: "Salzburg"
        },
        {
          name: "Star Inn at Harome",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Harome"
        },
        {
          name: "Black Swan",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Oldstead"
        },
        {
          name: "Noel",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Zagreb"
        },
        {
          name: "Pipe and Glass",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "South Dalton"
        },
        {
          name: "Yorke Arms",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Pateley Bridge"
        },
        {
          name: "Winteringham Fields",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Winteringham"
        },
        {
          name: "Forest Side",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Grasmere"
        },
        {
          name: "Morston Hall",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Morston"
        },
        {
          name: "HRiSHi",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Bownesson-on-Windermere"
        },
        {
          name: "The Man Behind The Curtain",
          stars: 1,
          price: null,
          cuisine_name: "Creative",
          city_name: "Leeds"
        },
        {
          name: "L'Enclume",
          stars: 2,
          price: null,
          cuisine_name: "Creative",
          city_name: "Cartmel"
        },
        {
          name: "Rogan & Co",
          stars: 1,
          price: null,
          cuisine_name: "Creative British",
          city_name: "Cartmel"
        },
        {
          name: "The Neptune",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Hunstanton"
        },
        {
          name: "White Swan",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Fence"
        },
        {
          name: "Northcote",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Langho"
        },
        {
          name: "Fischer's at Baslow Hall",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Baslow"
        },
        {
          name: "OX",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Belfast"
        },
        {
          name: "Eipic",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Belfast"
        },
        {
          name: "Moor Hall",
          stars: 2,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Aughton"
        },
        {
          name: "Restaurant Sat Bains",
          stars: 2,
          price: null,
          cuisine_name: "Creative",
          city_name: "Nottingham"
        },
        {
          name: "Hambleton Hall",
          stars: 1,
          price: null,
          cuisine_name: "Classic cuisine",
          city_name: "Upper Hambleton"
        },
        {
          name: "Draga di Lovrana",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Lovran"
        },
        {
          name: "John's House",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Mountsorrel"
        },
        {
          name: "Fraiche",
          stars: 1,
          price: null,
          cuisine_name: "Creative",
          city_name: "Birkenhead"
        },
        {
          name: "360º",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Dubrovnik"
        },
        {
          name: "Midsummer House",
          stars: 2,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Cambridge"
        },
        {
          name: "Simon Radley at Chester Grosvenor",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Chester"
        },
        {
          name: "Botrini's",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Mediterranean",
          city_name: "Athína"
        },
        {
          name: "Kilian Stuba",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Creative",
          city_name: "Kleinwalsertal"
        },
        {
          name: "Tim Allen's Flitch of Bacon",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Little Dunmow"
        },
        {
          name: "Spondi",
          stars: 2,
          price: "$$$$$",
          cuisine_name: "French",
          city_name: "Athína"
        },
        {
          name: "Hytra",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Athína"
        },
        {
          name: "Varoulko Seaside",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Seafood",
          city_name: "Athína"
        },
        {
          name: "Pelegrini",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Šibenik"
        },
        {
          name: "Monte",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Creative",
          city_name: "Rovinj"
        },
        {
          name: "Peel's",
          stars: 1,
          price: null,
          cuisine_name: "Creative British",
          city_name: "Hampton in Arden"
        },
        {
          name: "Purnell's",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Birmingham"
        },
        {
          name: "Adam's",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Birmingham"
        },
        {
          name: "The Cross at Kenilworth",
          stars: 1,
          price: null,
          cuisine_name: "Classic cuisine",
          city_name: "Kenilworth"
        },
        {
          name: "Simpsons",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Birmingham"
        },
        {
          name: "Carters of Moseley",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Birmingham"
        },
        {
          name: "Sosban & The Old Butchers",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Menai Bridge"
        },
        {
          name: "Fordwich Arms",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Fordwich"
        },
        {
          name: "The Sportsman",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Seasalter"
        },
        {
          name: "Tyddyn Llan",
          stars: 1,
          price: null,
          cuisine_name: "Classic cuisine",
          city_name: "Llandrillo"
        },
        {
          name: "Salt",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Stratford-upon-Avon"
        },
        {
          name: "The Clove Club",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "London"
        },
        {
          name: "Brat",
          stars: 1,
          price: null,
          cuisine_name: "Traditional British",
          city_name: "London"
        },
        {
          name: "Lyle's",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "London"
        },
        {
          name: "Leroy",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "London"
        },
        {
          name: "Galvin La Chapelle",
          stars: 1,
          price: null,
          cuisine_name: "French",
          city_name: "London"
        },
        {
          name: "Angler",
          stars: 1,
          price: null,
          cuisine_name: "Seafood",
          city_name: "London"
        },
        {
          name: "City Social",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "London"
        },
        {
          name: "St John",
          stars: 1,
          price: null,
          cuisine_name: "Traditional British",
          city_name: "London"
        },
        {
          name: "La Dame de Pic",
          stars: 1,
          price: null,
          cuisine_name: "Modern French",
          city_name: "London"
        },
        {
          name: "Club Gascon",
          stars: 1,
          price: null,
          cuisine_name: "French",
          city_name: "London"
        },
        {
          name: "Story",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "London"
        },
        {
          name: "Kitchen Table at Bubbledogs",
          stars: 2,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "London"
        },
        {
          name: "Pied à Terre",
          stars: 1,
          price: null,
          cuisine_name: "Creative",
          city_name: "London"
        },
        {
          name: "The Ninth",
          stars: 1,
          price: null,
          cuisine_name: "Mediterranean cuisine",
          city_name: "London"
        },
        {
          name: "Hakkasan Hanway Place",
          stars: 1,
          price: null,
          cuisine_name: "Chinese",
          city_name: "London"
        },
        {
          name: "Portland",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "London"
        },
        {
          name: "Barrafina",
          stars: 1,
          price: null,
          cuisine_name: "Spanish",
          city_name: "London"
        },
        {
          name: "Yauatcha Soho",
          stars: 1,
          price: null,
          cuisine_name: "Chinese",
          city_name: "London"
        },
        {
          name: "Social Eating House",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "London"
        },
        {
          name: "Roganic",
          stars: 1,
          price: null,
          cuisine_name: "Creative British",
          city_name: "London"
        },
        {
          name: "Trishna",
          stars: 1,
          price: null,
          cuisine_name: "Indian",
          city_name: "London"
        },
        {
          name: "Pollen Street Social",
          stars: 1,
          price: null,
          cuisine_name: "Creative",
          city_name: "London"
        },
        {
          name: "Sketch (The Lecture Room & Library)",
          stars: 2,
          price: null,
          cuisine_name: "Modern French",
          city_name: "London"
        },
        {
          name: "Ikoyi",
          stars: 1,
          price: null,
          cuisine_name: "Creative",
          city_name: "London"
        },
        {
          name: "The Araki",
          stars: 3,
          price: null,
          cuisine_name: "Japanese",
          city_name: "London"
        },
        {
          name: "Sabor",
          stars: 1,
          price: null,
          cuisine_name: "Spanish",
          city_name: "London"
        },
        {
          name: "Aquavit",
          stars: 1,
          price: null,
          cuisine_name: "Scandinavian",
          city_name: "London"
        },
        {
          name: "Veeraswamy",
          stars: 1,
          price: null,
          cuisine_name: "Indian",
          city_name: "London"
        },
        {
          name: "Alyn Williams at The Westbury",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "London"
        },
        {
          name: "Umu",
          stars: 2,
          price: null,
          cuisine_name: "Japanese",
          city_name: "London"
        },
        {
          name: "The Square",
          stars: 1,
          price: null,
          cuisine_name: "Creative French",
          city_name: "London"
        },
        {
          name: "Locanda Locatelli",
          stars: 1,
          price: null,
          cuisine_name: "Italian",
          city_name: "London"
        },
        {
          name: "Hakkasan London",
          stars: 1,
          price: null,
          cuisine_name: "Chinese",
          city_name: "London"
        },
        {
          name: "Texture",
          stars: 1,
          price: null,
          cuisine_name: "Creative",
          city_name: "London"
        },
        {
          name: "Gymkhana",
          stars: 1,
          price: null,
          cuisine_name: "Indian",
          city_name: "London"
        },
        {
          name: "Benares",
          stars: 1,
          price: null,
          cuisine_name: "Indian",
          city_name: "London"
        },
        {
          name: "Ritz Restaurant",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "London"
        },
        {
          name: "Hélène Darroze at The Connaught",
          stars: 2,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "London"
        },
        {
          name: "Seven Park Place",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "London"
        },
        {
          name: "Le Gavroche",
          stars: 2,
          price: null,
          cuisine_name: "French",
          city_name: "London"
        },
        {
          name: "Hide",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "London"
        },
        {
          name: "Murano",
          stars: 1,
          price: null,
          cuisine_name: "Italian",
          city_name: "London"
        },
        {
          name: "Kai",
          stars: 1,
          price: null,
          cuisine_name: "Chinese",
          city_name: "London"
        },
        {
          name: "Greenhouse",
          stars: 2,
          price: null,
          cuisine_name: "Creative",
          city_name: "London"
        },
        {
          name: "Alain Ducasse at The Dorchester",
          stars: 3,
          price: null,
          cuisine_name: "French",
          city_name: "London"
        },
        {
          name: "Galvin at Windows",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "London"
        },
        {
          name: "Quilon",
          stars: 1,
          price: null,
          cuisine_name: "Indian",
          city_name: "London"
        },
        {
          name: "Céleste",
          stars: 1,
          price: null,
          cuisine_name: "Creative French",
          city_name: "London"
        },
        {
          name: "Marcus",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "London"
        },
        {
          name: "Dining Room at The Goring",
          stars: 1,
          price: null,
          cuisine_name: "Traditional British",
          city_name: "London"
        },
        {
          name: "Dinner by Heston Blumenthal",
          stars: 2,
          price: null,
          cuisine_name: "Traditional British",
          city_name: "London"
        },
        {
          name: "Ledbury",
          stars: 2,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "London"
        },
        {
          name: "Pétrus",
          stars: 1,
          price: null,
          cuisine_name: "French",
          city_name: "London"
        },
        {
          name: "A. Wong",
          stars: 1,
          price: null,
          cuisine_name: "Chinese",
          city_name: "London"
        },
        {
          name: "Amaya",
          stars: 1,
          price: null,
          cuisine_name: "Indian",
          city_name: "London"
        },
        {
          name: "CORE by Clare Smyth",
          stars: 2,
          price: null,
          cuisine_name: "Modern British",
          city_name: "London"
        },
        {
          name: "Five Fields",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "London"
        },
        {
          name: "Claude Bosi at Bibendum",
          stars: 2,
          price: null,
          cuisine_name: "French",
          city_name: "London"
        },
        {
          name: "Elystan Street",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "London"
        },
        {
          name: "Kitchen W8",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "London"
        },
        {
          name: "Gordon Ramsay",
          stars: 3,
          price: null,
          cuisine_name: "French",
          city_name: "London"
        },
        {
          name: "The Checkers",
          stars: 1,
          price: null,
          cuisine_name: "French",
          city_name: "Montgomery"
        },
        {
          name: "Trinity",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "London"
        },
        {
          name: "Harwood Arms",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "London"
        },
        {
          name: "Nut Tree",
          stars: 1,
          price: null,
          cuisine_name: "Traditional British",
          city_name: "Murcott"
        },
        {
          name: "River Café",
          stars: 1,
          price: null,
          cuisine_name: "Italian",
          city_name: "London"
        },
        {
          name: "La Trompette",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "London"
        },
        {
          name: "Chez Bruce",
          stars: 1,
          price: null,
          cuisine_name: "French",
          city_name: "London"
        },
        {
          name: "The Glasshouse",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "London"
        },
        {
          name: "West House",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Biddenden"
        },
        {
          name: "Belmond Le Manoir aux Quat' Saisons",
          stars: 2,
          price: null,
          cuisine_name: "French",
          city_name: "Great Milton"
        },
        {
          name: "Oxford Kitchen",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Oxford"
        },
        {
          name: "The Coach",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Marlow"
        },
        {
          name: "Hand and Flowers",
          stars: 2,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Marlow"
        },
        {
          name: "Hinds Head",
          stars: 1,
          price: null,
          cuisine_name: "Traditional British",
          city_name: "Bray"
        },
        {
          name: "Fat Duck",
          stars: 3,
          price: null,
          cuisine_name: "Creative",
          city_name: "Bray"
        },
        {
          name: "Waterside Inn",
          stars: 3,
          price: null,
          cuisine_name: "Classic French",
          city_name: "Bray"
        },
        {
          name: "Crown",
          stars: 1,
          price: null,
          cuisine_name: "Regional cuisine",
          city_name: "Burchett's Green"
        },
        {
          name: "Tudor Room",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Egham"
        },
        {
          name: "Chapter One",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Dublin"
        },
        {
          name: "Patrick Guilbaud",
          stars: 2,
          price: null,
          cuisine_name: "Modern French",
          city_name: "Dublin"
        },
        {
          name: "Greenhouse",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Dublin"
        },
        {
          name: "L'Ecrivain",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Dublin"
        },
        {
          name: "Coworth Park",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Ascot"
        },
        {
          name: "Heron & Grey",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Dublin"
        },
        {
          name: "Ynyshir",
          stars: 1,
          price: null,
          cuisine_name: "Creative",
          city_name: "Machynlleth"
        },
        {
          name: "Le Champignon Sauvage",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Cheltenham"
        },
        {
          name: "Clock House",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Ripley"
        },
        {
          name: "Sorrel",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Dorking"
        },
        {
          name: "Matt Worswick at The Latymer",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Bagshot"
        },
        {
          name: "Gravetye Manor",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Gravetye"
        },
        {
          name: "L'Ortolan",
          stars: 1,
          price: null,
          cuisine_name: "French",
          city_name: "Shinfield"
        },
        {
          name: "Restaurant Tristan",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Horsham"
        },
        {
          name: "Blackbird",
          stars: 1,
          price: null,
          cuisine_name: "Classic cuisine",
          city_name: "Newbury"
        },
        {
          name: "Woodspeen",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Newbury"
        },
        {
          name: "The Dining Room",
          stars: 1,
          price: null,
          cuisine_name: "Asian influences",
          city_name: "Malmesbury"
        },
        {
          name: "The Whitebrook",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Whitebrook"
        },
        {
          name: "Walnut Tree",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Llanddewi Skirrid"
        },
        {
          name: "Bybrook",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Castle Combe"
        },
        {
          name: "Restaurant Hywel Jones by Lucknam Park",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Colerne"
        },
        {
          name: "Red Lion Freehouse",
          stars: 1,
          price: null,
          cuisine_name: "Classic cuisine",
          city_name: "East Chisenbury"
        },
        {
          name: "Black Rat",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Winchester"
        },
        {
          name: "Olive Tree",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Bath"
        },
        {
          name: "wilks",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Bristol"
        },
        {
          name: "Bulrush",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Bristol"
        },
        {
          name: "Casamia",
          stars: 1,
          price: null,
          cuisine_name: "Creative",
          city_name: "Bristol"
        },
        {
          name: "Paco Tapas",
          stars: 1,
          price: null,
          cuisine_name: "Spanish",
          city_name: "Bristol"
        },
        {
          name: "Pony & Trap",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Chew Magna"
        },
        {
          name: "James Sommerin",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Penarth"
        },
        {
          name: "Loam",
          stars: 1,
          price: null,
          cuisine_name: "Creative",
          city_name: "Galway"
        },
        {
          name: "Aniar",
          stars: 1,
          price: null,
          cuisine_name: "Creative",
          city_name: "Galway"
        },
        {
          name: "Campagne",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Kilkenny"
        },
        {
          name: "Lady Helen",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Thomastown"
        },
        {
          name: "Wild Honey Inn",
          stars: 1,
          price: null,
          cuisine_name: "Classic cuisine",
          city_name: "Lisdoonvarna"
        },
        {
          name: "Thomas Carr @ The Olive Room",
          stars: 1,
          price: null,
          cuisine_name: "Seafood",
          city_name: "Ilfracombe"
        },
        {
          name: "Masons Arms",
          stars: 1,
          price: null,
          cuisine_name: "Classic French",
          city_name: "Knowstone"
        },
        {
          name: "Lympstone Manor",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Lympstone"
        },
        {
          name: "House",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Ardmore"
        },
        {
          name: "Gidleigh Park",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Chagford"
        },
        {
          name: "Elephant",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Torquay"
        },
        {
          name: "Ichigo Ichie",
          stars: 1,
          price: null,
          cuisine_name: "Japanese",
          city_name: "Cork"
        },
        {
          name: "Restaurant Nathan Outlaw",
          stars: 2,
          price: null,
          cuisine_name: "Seafood",
          city_name: "Port Isaac"
        },
        {
          name: "Outlaw's Fish Kitchen",
          stars: 1,
          price: null,
          cuisine_name: "Seafood",
          city_name: "Port Isaac"
        },
        {
          name: "Paul Ainsworth at No.6",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Padstow"
        },
        {
          name: "Samphire",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Saint Helier"
        },
        {
          name: "Bohemia",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Saint Helier"
        },
        {
          name: "Driftwood",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Portscatho"
        },
        {
          name: "Chestnut",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Ballydehob"
        },
        {
          name: "Mews",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Baltimore"
        },
        {
          name: "Goosefoot",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "Chicago"
        },
        {
          name: "Elizabeth",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "Chicago"
        },
        {
          name: "Band of Bohemia",
          stars: 1,
          price: "$$$",
          cuisine_name: "Gastropub",
          city_name: "Chicago"
        },
        {
          name: "Parachute",
          stars: 1,
          price: "$$",
          cuisine_name: "Fusion",
          city_name: "Chicago"
        },
        {
          name: "Entente",
          stars: 1,
          price: "$$$",
          cuisine_name: "Contemporary",
          city_name: "Chicago"
        },
        {
          name: "North Pond",
          stars: 1,
          price: "$$$",
          cuisine_name: "Contemporary",
          city_name: "Chicago"
        },
        {
          name: "Schwa",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "Chicago"
        },
        {
          name: "Boka",
          stars: 1,
          price: "$$$",
          cuisine_name: "Contemporary",
          city_name: "Chicago"
        },
        {
          name: "Alinea",
          stars: 3,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "Chicago"
        },
        {
          name: "Temporis",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "Chicago"
        },
        {
          name: "Smyth",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "Chicago"
        },
        {
          name: "Elske",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "Chicago"
        },
        {
          name: "Roister",
          stars: 1,
          price: "$$$",
          cuisine_name: "Contemporary",
          city_name: "Chicago"
        },
        {
          name: "Spiaggia",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Italian",
          city_name: "Chicago"
        },
        {
          name: "Oriole",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "Chicago"
        },
        {
          name: "EL Ideas",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "Chicago"
        },
        {
          name: "Blackbird",
          stars: 1,
          price: "$$$",
          cuisine_name: "Contemporary",
          city_name: "Chicago"
        },
        {
          name: "Topolobampo",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Mexican",
          city_name: "Chicago"
        },
        {
          name: "Sepia",
          stars: 1,
          price: "$$$",
          cuisine_name: "American",
          city_name: "Chicago"
        },
        {
          name: "Everest",
          stars: 1,
          price: "$$$$",
          cuisine_name: "French",
          city_name: "Chicago"
        },
        {
          name: "Dusek's (Board & Beer)",
          stars: 1,
          price: "$$",
          cuisine_name: "Gastropub",
          city_name: "Chicago"
        },
        {
          name: "Acadia",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "Chicago"
        },
        {
          name: "Sushi Inoue",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "New York City"
        },
        {
          name: "Satsuki",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "New York City"
        },
        {
          name: "Masa",
          stars: 3,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "New York City"
        },
        {
          name: "Jean-Georges",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "New York City"
        },
        {
          name: "Per Se",
          stars: 3,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "New York City"
        },
        {
          name: "Café Boulud",
          stars: 1,
          price: "$$$$",
          cuisine_name: "French",
          city_name: "New York City"
        },
        {
          name: "Marea",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Seafood",
          city_name: "New York City"
        },
        {
          name: "Sushi Noz",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "New York City"
        },
        {
          name: "Le Bernardin",
          stars: 3,
          price: "$$$$",
          cuisine_name: "Seafood",
          city_name: "New York City"
        },
        {
          name: "Daniel",
          stars: 2,
          price: "$$$$",
          cuisine_name: "French",
          city_name: "New York City"
        },
        {
          name: "The Modern",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "New York City"
        },
        {
          name: "Caviar Russe",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "New York City"
        },
        {
          name: "Aquavit",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Scandinavian",
          city_name: "New York City"
        },
        {
          name: "Gabriel Kreuther",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "New York City"
        },
        {
          name: "Del Posto",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Italian",
          city_name: "New York City"
        },
        {
          name: "Okuda",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "New York City"
        },
        {
          name: "L'Atelier de Joël Robuchon",
          stars: 2,
          price: "$$$$",
          cuisine_name: "French",
          city_name: "New York City"
        },
        {
          name: "Le Grill de Joël Robuchon",
          stars: 1,
          price: "$$$$",
          cuisine_name: "French",
          city_name: "New York City"
        },
        {
          name: "Sushi Ginza Onodera",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "New York City"
        },
        {
          name: "Ai Fiori",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Italian",
          city_name: "New York City"
        },
        {
          name: "Agern",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Scandinavian",
          city_name: "New York City"
        },
        {
          name: "Café China",
          stars: 1,
          price: "$$",
          cuisine_name: "Chinese",
          city_name: "New York City"
        },
        {
          name: "Sushi Yasuda",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "New York City"
        },
        {
          name: "NoMad",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "New York City"
        },
        {
          name: "Sushi Amane",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "New York City"
        },
        {
          name: "Noda",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "New York City"
        },
        {
          name: "Junoon",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Indian",
          city_name: "New York City"
        },
        {
          name: "Kosaka",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "New York City"
        },
        {
          name: "Tempura Matsui",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "New York City"
        },
        {
          name: "Wallsé",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Austrian",
          city_name: "New York City"
        },
        {
          name: "Bouley at Home",
          stars: 1,
          price: "$$$",
          cuisine_name: "Contemporary",
          city_name: "New York City"
        },
        {
          name: "Atomix",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Korean",
          city_name: "New York City"
        },
        {
          name: "Eleven Madison Park",
          stars: 3,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "New York City"
        },
        {
          name: "The Clocktower",
          stars: 1,
          price: "$$$",
          cuisine_name: "Contemporary",
          city_name: "New York City"
        },
        {
          name: "Aldea",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Mediterranean",
          city_name: "New York City"
        },
        {
          name: "Jeju Noodle Bar",
          stars: 1,
          price: "$$",
          cuisine_name: "Korean",
          city_name: "New York City"
        },
        {
          name: "Cote",
          stars: 1,
          price: "$$$",
          cuisine_name: "Korean",
          city_name: "New York City"
        },
        {
          name: "Gramercy Tavern",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "New York City"
        },
        {
          name: "Sushi Nakazawa",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "New York City"
        },
        {
          name: "Babbo",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Italian",
          city_name: "New York City"
        },
        {
          name: "Blue Hill",
          stars: 1,
          price: "$$$$",
          cuisine_name: "American",
          city_name: "New York City"
        },
        {
          name: "Gotham Bar and Grill",
          stars: 1,
          price: "$$$$",
          cuisine_name: "American",
          city_name: "New York City"
        },
        {
          name: "Casa Mono",
          stars: 1,
          price: "$$$",
          cuisine_name: "Spanish",
          city_name: "New York City"
        },
        {
          name: "Nix",
          stars: 1,
          price: "$$$",
          cuisine_name: "Vegetarian",
          city_name: "New York City"
        },
        {
          name: "Carbone",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Italian",
          city_name: "New York City"
        },
        {
          name: "ZZ's Clam Bar",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Seafood",
          city_name: "New York City"
        },
        {
          name: "Casa Enríque",
          stars: 1,
          price: "$$",
          cuisine_name: "Mexican",
          city_name: "New York City"
        },
        {
          name: "Hirohisa",
          stars: 1,
          price: "$$$",
          cuisine_name: "Japanese",
          city_name: "New York City"
        },
        {
          name: "Kanoyama",
          stars: 1,
          price: "$$$",
          cuisine_name: "Japanese",
          city_name: "New York City"
        },
        {
          name: "Ko",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "New York City"
        },
        {
          name: "Jewel Bako",
          stars: 1,
          price: "$$$",
          cuisine_name: "Japanese",
          city_name: "New York City"
        },
        {
          name: "Jungsik",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Korean",
          city_name: "New York City"
        },
        {
          name: "Bâtard",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "New York City"
        },
        {
          name: "Kajitsu",
          stars: 1,
          price: "$$$",
          cuisine_name: "Japanese",
          city_name: "New York City"
        },
        {
          name: "The Musket Room",
          stars: 1,
          price: "$$$",
          cuisine_name: "Contemporary",
          city_name: "New York City"
        },
        {
          name: "Kyo Ya",
          stars: 1,
          price: "$$$",
          cuisine_name: "Japanese",
          city_name: "New York City"
        },
        {
          name: "Le Coucou",
          stars: 1,
          price: "$$$",
          cuisine_name: "French",
          city_name: "New York City"
        },
        {
          name: "Uncle Boons",
          stars: 1,
          price: "$$",
          cuisine_name: "Thai",
          city_name: "New York City"
        },
        {
          name: "Atera",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "New York City"
        },
        {
          name: "Bar Uchū",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "New York City"
        },
        {
          name: "Ichimura at Uchū",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "New York City"
        },
        {
          name: "L'Appart",
          stars: 1,
          price: "$$$$",
          cuisine_name: "French",
          city_name: "New York City"
        },
        {
          name: "Tuome",
          stars: 1,
          price: "$$",
          cuisine_name: "Fusion",
          city_name: "New York City"
        },
        {
          name: "Contra",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "New York City"
        },
        {
          name: "Oxomoco",
          stars: 1,
          price: "$$$",
          cuisine_name: "Mexican",
          city_name: "New York City"
        },
        {
          name: "The River Café",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "New York City"
        },
        {
          name: "Aska",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Scandinavian",
          city_name: "New York City"
        },
        {
          name: "Meadowsweet",
          stars: 1,
          price: "$$$",
          cuisine_name: "Mediterranean",
          city_name: "New York City"
        },
        {
          name: "Peter Luger",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Steakhouse",
          city_name: "New York City"
        },
        {
          name: "Chef's Table at Brooklyn Fare",
          stars: 3,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "New York City"
        },
        {
          name: "Blanca",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "New York City"
        },
        {
          name: "Faro",
          stars: 1,
          price: "$$",
          cuisine_name: "American",
          city_name: "New York City"
        },
        {
          name: "The Finch",
          stars: 1,
          price: "$$$",
          cuisine_name: "American",
          city_name: "New York City"
        },
        {
          name: "Claro",
          stars: 1,
          price: "$$",
          cuisine_name: "Mexican",
          city_name: "New York City"
        },
        {
          name: "The Inn at Little Washington",
          stars: 3,
          price: "$$$$",
          cuisine_name: "American",
          city_name: "Washington, D.C."
        },
        {
          name: "Tail Up Goat",
          stars: 1,
          price: "$$",
          cuisine_name: "Contemporary",
          city_name: "Washington, D.C."
        },
        {
          name: "Bresca",
          stars: 1,
          price: "$$",
          cuisine_name: "Contemporary",
          city_name: "Washington, D.C."
        },
        {
          name: "Blue Duck Tavern",
          stars: 1,
          price: "$$$",
          cuisine_name: "American",
          city_name: "Washington, D.C."
        },
        {
          name: "Komi",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Mediterranean",
          city_name: "Washington, D.C."
        },
        {
          name: "Sushi Taro",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "Washington, D.C."
        },
        {
          name: "Plume",
          stars: 1,
          price: "$$$$",
          cuisine_name: "European",
          city_name: "Washington, D.C."
        },
        {
          name: "The Dabney",
          stars: 1,
          price: "$$",
          cuisine_name: "American",
          city_name: "Washington, D.C."
        },
        {
          name: "Métier",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "Washington, D.C."
        },
        {
          name: "Kinship",
          stars: 1,
          price: "$$$",
          cuisine_name: "Contemporary",
          city_name: "Washington, D.C."
        },
        {
          name: "Masseria",
          stars: 1,
          price: "$$$",
          cuisine_name: "Italian",
          city_name: "Washington, D.C."
        },
        {
          name: "minibar",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "Washington, D.C."
        },
        {
          name: "Fiola",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Italian",
          city_name: "Washington, D.C."
        },
        {
          name: "Pineapple and Pearls",
          stars: 2,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "Washington, D.C."
        },
        {
          name: "Rose's Luxury",
          stars: 1,
          price: "$$",
          cuisine_name: "Contemporary",
          city_name: "Washington, D.C."
        }
      ]);
    });
};
