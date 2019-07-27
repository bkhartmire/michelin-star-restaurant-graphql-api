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
          stars: 1,
          price: "$$$",
          cuisine_name: "Innovative",
          city_name: "Taipei"
        },
        {
          name: "Shoun RyuGin",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese contemporary",
          city_name: "Taipei"
        },
        {
          name: "Taïrroir",
          stars: 1,
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
          stars: 1,
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
          stars: 1,
          price: "$$",
          cuisine_name: "Sichuan-Huai Yang",
          city_name: "Taipei"
        },
        {
          name: "Le Palais",
          stars: 1,
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
          stars: 1,
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
          stars: 1,
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
          stars: 1,
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
          stars: 1,
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
          city_name: ""
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
          stars: 1,
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
          stars: 1,
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
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Innovative",
          city_name: "Hong Kong"
        },
        {
          name: "Lung King Heen",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Cantonese",
          city_name: "Hong Kong"
        },
        {
          name: "Sushi Saito",
          stars: 1,
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
          stars: 1,
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
          stars: 1,
          price: "$$$$",
          cuisine_name: "French contemporary",
          city_name: "Hong Kong"
        },
        {
          name: "Ying Jee Club",
          stars: 1,
          price: "$$",
          cuisine_name: "Cantonese",
          city_name: "Hong Kong"
        },
        {
          name: "8½ Otto e Mezzo - Bombana",
          stars: 1,
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
          stars: 1,
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
          stars: 1,
          price: "$$$$",
          cuisine_name: "French contemporary",
          city_name: "Hong Kong"
        },
        {
          name: "Arbor",
          stars: 1,
          price: "$$$",
          cuisine_name: "Innovative",
          city_name: ""
        },
        {
          name: "Écriture",
          stars: 1,
          price: "$$$",
          cuisine_name: "French contemporary",
          city_name: "Hong Kong"
        },
        {
          name: "Ta Vie",
          stars: 1,
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
          stars: 1,
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
          stars: 1,
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
          stars: 1,
          price: "$",
          cuisine_name: "Hunanese and Sichuan",
          city_name: "Macau"
        },
        {
          name: "Golden Flower",
          stars: 1,
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
          stars: 1,
          price: "$$$$",
          cuisine_name: "French contemporary",
          city_name: "Macau"
        },
        {
          name: "Mizumi (Macau)",
          stars: 1,
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
          stars: 1,
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
          stars: 1,
          price: "$$",
          cuisine_name: "Cantonese",
          city_name: "Macau"
        },
        {
          name: "The Tasting Room",
          stars: 1,
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
          stars: 1,
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
          stars: 1,
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
          stars: 1,
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
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Innovative",
          city_name: "Bangkok"
        },
        {
          name: "Le Normandie",
          stars: 1,
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
          stars: 1,
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
          stars: 1,
          price: "$$$",
          cuisine_name: "French",
          city_name: "Singapore"
        },
        {
          name: "Shisen Hanten",
          stars: 1,
          price: "$",
          cuisine_name: "Chinese",
          city_name: "Singapore"
        },
        {
          name: "Odette",
          stars: 1,
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
          stars: 1,
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
          city_name: "Helsingfors / Helsinki"
        },
        {
          name: "Palace",
          stars: 1,
          price: "$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Helsingfors / Helsinki"
        },
        {
          name: "Olo",
          stars: 1,
          price: "$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Helsingfors / Helsinki"
        },
        {
          name: "Demo",
          stars: 1,
          price: "$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Helsingfors / Helsinki"
        },
        {
          name: "Grön",
          stars: 1,
          price: "$$$",
          cuisine_name: "Finnish",
          city_name: "Helsingfors / Helsinki"
        },
        {
          name: "Ora",
          stars: 1,
          price: "$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Helsingfors / Helsinki"
        },
        {
          name: "Fäviken Magasinet",
          stars: 1,
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
          stars: 1,
          price: "$$$$",
          cuisine_name: "Creative",
          city_name: "Stockholm"
        },
        {
          name: "Oaxen Krog",
          stars: 1,
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
          stars: 1,
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
          stars: 1,
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
          stars: 1,
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
          stars: 1,
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
          stars: 1,
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
          stars: 1,
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
          stars: 1,
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
          stars: 1,
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
          stars: 1,
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
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "San Francisco"
        },
        {
          name: "Benu",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Asian",
          city_name: "San Francisco"
        },
        {
          name: "Saison",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Californian",
          city_name: "San Francisco"
        },
        {
          name: "Californios",
          stars: 1,
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
          city_name: "South San Francisco"
        },
        {
          name: "Commis",
          stars: 1,
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
          city_name: "South San Francisco"
        },
        {
          name: "Baumé",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "South San Francisco"
        },
        {
          name: "Chez TJ",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "South San Francisco"
        },
        {
          name: "Plumed Horse",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "South San Francisco"
        },
        {
          name: "Manresa",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "South San Francisco"
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
          stars: 1,
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
          stars: 1,
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
          stars: 1,
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
          city_name: "København"
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
          city_name: "København"
        },
        {
          name: "Geranium",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Creative",
          city_name: "København   Ø"
        },
        {
          name: "noma",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Creative",
          city_name: "København   K"
        },
        {
          name: "Kokkeriet",
          stars: 1,
          price: "$$$",
          cuisine_name: "Modern cuisine",
          city_name: "København   K"
        },
        {
          name: "a‚o‚c",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Modern cuisine",
          city_name: "København   K"
        },
        {
          name: "108",
          stars: 1,
          price: "$$$",
          cuisine_name: "Modern cuisine",
          city_name: "København   K"
        },
        {
          name: "Clou",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Modern cuisine",
          city_name: "København   K"
        },
        {
          name: "Stud!o at The Standard",
          stars: 1,
          price: "$$$",
          cuisine_name: "Creative",
          city_name: "København   K"
        },
        {
          name: "Marchal",
          stars: 1,
          price: "$$",
          cuisine_name: "Modern cuisine",
          city_name: "København   K"
        },
        {
          name: "Kiin Kiin",
          stars: 1,
          price: "$$",
          cuisine_name: "Thai",
          city_name: "København   N"
        },
        {
          name: "Kong Hans Kælder",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Classic French",
          city_name: "København   K"
        },
        {
          name: "Era Ora",
          stars: 1,
          price: "$$",
          cuisine_name: "Italian",
          city_name: "København   K"
        },
        {
          name: "Kadeau Copenhagen",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Modern cuisine",
          city_name: "København   K"
        },
        {
          name: "Relæ",
          stars: 1,
          price: "$$",
          cuisine_name: "Modern cuisine",
          city_name: "København   N"
        },
        {
          name: "Alouette",
          stars: 1,
          price: "$$$",
          cuisine_name: "Modern cuisine",
          city_name: "København   S"
        },
        {
          name: "formel B",
          stars: 1,
          price: "$$",
          cuisine_name: "Modern cuisine",
          city_name: "København   C"
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
          stars: 1,
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
          stars: 1,
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
          stars: 1,
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
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Creative",
          city_name: "Wien"
        },
        {
          name: "Mraz & Sohn",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Creative",
          city_name: "Wien"
        },
        {
          name: "Das Loft",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Wien"
        },
        {
          name: "Konstantin Filippou",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Wien"
        },
        {
          name: "Edvard",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Wien"
        },
        {
          name: "Walter Bauer",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Classic cuisine",
          city_name: "Wien"
        },
        {
          name: "Pramerl & the Wolf",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Creative",
          city_name: "Wien"
        },
        {
          name: "Silvio Nickol Gourmet Restaurant",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Wien"
        },
        {
          name: "Steirereck im Stadtpark",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Creative",
          city_name: "Wien"
        },
        {
          name: "Tian",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Vegetarian",
          city_name: "Wien"
        },
        {
          name: "SHIKI",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Japanese",
          city_name: "Wien"
        },
        {
          name: "Le Ciel by Toni Mörwald",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Classic cuisine",
          city_name: "Wien"
        },
        {
          name: "aend",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Modern cuisine",
          city_name: "Wien"
        },
        {
          name: "Loch Bay",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Waternish  IV GA"
        },
        {
          name: "The Cellar",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Anstruther  KY AA"
        },
        {
          name: "The Peat Inn",
          stars: 1,
          price: null,
          cuisine_name: "Classic cuisine",
          city_name: "Peat Inn  KY LH"
        },
        {
          name: "Andrew Fairlie at Gleneagles",
          stars: 1,
          price: null,
          cuisine_name: "Creative French",
          city_name: "Auchterarder  PH NF"
        },
        {
          name: "Kitchin",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Leith  EH LX"
        },
        {
          name: "Martin Wishart",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Leith  EH RA"
        },
        {
          name: "21212",
          stars: 1,
          price: null,
          cuisine_name: "Creative",
          city_name: "Edinburgh  EH AB"
        },
        {
          name: "Number One",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Edinburgh  EH EQ"
        },
        {
          name: "House of Tides",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Newcastle upon Tyne  NE RF"
        },
        {
          name: "Braidwoods",
          stars: 1,
          price: null,
          cuisine_name: "Classic cuisine",
          city_name: "Dalry  KA LN"
        },
        {
          name: "Raby Hunt",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Summerhouse  DL UD"
        },
        {
          name: "Pfefferschiff",
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Classic cuisine",
          city_name: "Hallwang"
        },
        {
          name: "SENNS.Restaurant",
          stars: 1,
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
          stars: 1,
          price: "$$$$$",
          cuisine_name: "Creative",
          city_name: "Salzburg"
        },
        {
          name: "Star Inn at Harome",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Harome  YO JE"
        },
        {
          name: "Black Swan",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Oldstead  YO BL"
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
          city_name: "South Dalton  HU PN"
        },
        {
          name: "Yorke Arms",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Pateley Bridge  HG RL"
        },
        {
          name: "Winteringham Fields",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Winteringham  DN ND"
        },
        {
          name: "Forest Side",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Grasmere  LA RN"
        },
        {
          name: "Morston Hall",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Morston  NR AA"
        },
        {
          name: "HRiSHi",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "BownessonWindermere  LA NE"
        },
        {
          name: "The Man Behind The Curtain",
          stars: 1,
          price: null,
          cuisine_name: "Creative",
          city_name: "Leeds  LS JH"
        },
        {
          name: "L'Enclume",
          stars: 1,
          price: null,
          cuisine_name: "Creative",
          city_name: "Cartmel  LA PZ"
        },
        {
          name: "Rogan & Co",
          stars: 1,
          price: null,
          cuisine_name: "Creative British",
          city_name: "Cartmel  LA QD"
        },
        {
          name: "The Neptune",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Hunstanton  PE HZ"
        },
        {
          name: "White Swan",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Fence  BB QA"
        },
        {
          name: "Northcote",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Langho  BB BE"
        },
        {
          name: "Fischer's at Baslow Hall",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Baslow  DE RR"
        },
        {
          name: "OX",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Belfast  BT LA"
        },
        {
          name: "Eipic",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Belfast  BT PF"
        },
        {
          name: "Moor Hall",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Aughton  L RT"
        },
        {
          name: "Restaurant Sat Bains",
          stars: 1,
          price: null,
          cuisine_name: "Creative",
          city_name: "Nottingham  NG SA"
        },
        {
          name: "Hambleton Hall",
          stars: 1,
          price: null,
          cuisine_name: "Classic cuisine",
          city_name: "Upper Hambleton  LE TH"
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
          city_name: "Mountsorrel  LE AR"
        },
        {
          name: "Fraiche",
          stars: 1,
          price: null,
          cuisine_name: "Creative",
          city_name: "Birkenhead  CH SG"
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
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Cambridge  CB HA"
        },
        {
          name: "Simon Radley at Chester Grosvenor",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Chester  CH LT"
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
          city_name: "Little Dunmow  CM HT"
        },
        {
          name: "Spondi",
          stars: 1,
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
          city_name: "Hampton in Arden  B ODQ"
        },
        {
          name: "Purnell's",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Birmingham  B DH"
        },
        {
          name: "Adam's",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Birmingham  B UG"
        },
        {
          name: "The Cross at Kenilworth",
          stars: 1,
          price: null,
          cuisine_name: "Classic cuisine",
          city_name: "Kenilworth  CV EZ"
        },
        {
          name: "Simpsons",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Birmingham  B DU"
        },
        {
          name: "Carters of Moseley",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Birmingham  B EZ"
        },
        {
          name: "Sosban & The Old Butchers",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Menai Bridge/Porthaethwy  LL EE"
        },
        {
          name: "Fordwich Arms",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Fordwich  CT DB"
        },
        {
          name: "The Sportsman",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Seasalter  CT BP"
        },
        {
          name: "Tyddyn Llan",
          stars: 1,
          price: null,
          cuisine_name: "Classic cuisine",
          city_name: "Llandrillo  LL OST"
        },
        {
          name: "Salt",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "StratforduponAvon  CV HB"
        },
        {
          name: "The Clove Club",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Shoreditch  ECV LT"
        },
        {
          name: "Brat",
          stars: 1,
          price: null,
          cuisine_name: "Traditional British",
          city_name: "Shoreditch  E JL"
        },
        {
          name: "Lyle's",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Shoreditch  E JJ"
        },
        {
          name: "Leroy",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Shoreditch  ECA NU"
        },
        {
          name: "Galvin La Chapelle",
          stars: 1,
          price: null,
          cuisine_name: "French",
          city_name: "Spitalfields  E DY"
        },
        {
          name: "Angler",
          stars: 1,
          price: null,
          cuisine_name: "Seafood",
          city_name: "Finsbury  ECM AF"
        },
        {
          name: "City Social",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "City of London  ECN HQ"
        },
        {
          name: "St John",
          stars: 1,
          price: null,
          cuisine_name: "Traditional British",
          city_name: "Clerkenwell  ECM AY"
        },
        {
          name: "La Dame de Pic",
          stars: 1,
          price: null,
          cuisine_name: "Modern French",
          city_name: "City of London  ECN AJ"
        },
        {
          name: "Club Gascon",
          stars: 1,
          price: null,
          cuisine_name: "French",
          city_name: "London  ECA DS"
        },
        {
          name: "Story",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Bermondsey  SE JX"
        },
        {
          name: "Kitchen Table at Bubbledogs",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Bloomsbury  WT QG"
        },
        {
          name: "Pied à Terre",
          stars: 1,
          price: null,
          cuisine_name: "Creative",
          city_name: "Bloomsbury  WT NH"
        },
        {
          name: "The Ninth",
          stars: 1,
          price: null,
          cuisine_name: "Mediterranean cuisine",
          city_name: "Bloomsbury  WT NB"
        },
        {
          name: "Hakkasan Hanway Place",
          stars: 1,
          price: null,
          cuisine_name: "Chinese",
          city_name: "Bloomsbury  WT HD"
        },
        {
          name: "Portland",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Regent's Park  WW QQ"
        },
        {
          name: "Barrafina",
          stars: 1,
          price: null,
          cuisine_name: "Spanish",
          city_name: "Soho  WD LL"
        },
        {
          name: "Yauatcha Soho",
          stars: 1,
          price: null,
          cuisine_name: "Chinese",
          city_name: "Soho  WF DL"
        },
        {
          name: "Social Eating House",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Soho  WF NR"
        },
        {
          name: "Roganic",
          stars: 1,
          price: null,
          cuisine_name: "Creative British",
          city_name: "Marylebone  WU DB"
        },
        {
          name: "Trishna",
          stars: 1,
          price: null,
          cuisine_name: "Indian",
          city_name: "Marylebone  WU DG"
        },
        {
          name: "Pollen Street Social",
          stars: 1,
          price: null,
          cuisine_name: "Creative",
          city_name: "Mayfair  WS NQ"
        },
        {
          name: "Sketch (The Lecture Room & Library)",
          stars: 1,
          price: null,
          cuisine_name: "Modern French",
          city_name: "Mayfair  WS XG"
        },
        {
          name: "Ikoyi",
          stars: 1,
          price: null,
          cuisine_name: "Creative",
          city_name: "Saint James's  SWY AH"
        },
        {
          name: "The Araki",
          stars: 1,
          price: null,
          cuisine_name: "Japanese",
          city_name: "Mayfair  WS BF"
        },
        {
          name: "Sabor",
          stars: 1,
          price: null,
          cuisine_name: "Spanish",
          city_name: "Mayfair  WB BR"
        },
        {
          name: "Aquavit",
          stars: 1,
          price: null,
          cuisine_name: "Scandinavian",
          city_name: "Saint James's  SWY QQ"
        },
        {
          name: "Veeraswamy",
          stars: 1,
          price: null,
          cuisine_name: "Indian",
          city_name: "Mayfair  WB RS"
        },
        {
          name: "Alyn Williams at The Westbury",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Mayfair  WS YF"
        },
        {
          name: "Umu",
          stars: 1,
          price: null,
          cuisine_name: "Japanese",
          city_name: "Mayfair  WJ LX"
        },
        {
          name: "The Square",
          stars: 1,
          price: null,
          cuisine_name: "Creative French",
          city_name: "Mayfair  WJ PU"
        },
        {
          name: "Locanda Locatelli",
          stars: 1,
          price: null,
          cuisine_name: "Italian",
          city_name: "Marylebone  WH JZ"
        },
        {
          name: "Hakkasan Mayfair",
          stars: 1,
          price: null,
          cuisine_name: "Chinese",
          city_name: "Mayfair  WJ QB"
        },
        {
          name: "Texture",
          stars: 1,
          price: null,
          cuisine_name: "Creative",
          city_name: "Marylebone  WH BY"
        },
        {
          name: "Gymkhana",
          stars: 1,
          price: null,
          cuisine_name: "Indian",
          city_name: "Mayfair  WS JH"
        },
        {
          name: "Benares",
          stars: 1,
          price: null,
          cuisine_name: "Indian",
          city_name: "Mayfair  WJ BS"
        },
        {
          name: "Ritz Restaurant",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Westminster  WJ BR"
        },
        {
          name: "Hélène Darroze at The Connaught",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Mayfair  WK AL"
        },
        {
          name: "Seven Park Place",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Saint James's  SWA LS"
        },
        {
          name: "Le Gavroche",
          stars: 1,
          price: null,
          cuisine_name: "French",
          city_name: "Mayfair  WK QR"
        },
        {
          name: "Hide",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Mayfair  WJ NB"
        },
        {
          name: "Murano",
          stars: 1,
          price: null,
          cuisine_name: "Italian",
          city_name: "Mayfair  WJ PP"
        },
        {
          name: "Kai",
          stars: 1,
          price: null,
          cuisine_name: "Chinese",
          city_name: "Mayfair  WK QU"
        },
        {
          name: "Greenhouse",
          stars: 1,
          price: null,
          cuisine_name: "Creative",
          city_name: "Mayfair  WJ NY"
        },
        {
          name: "Alain Ducasse at The Dorchester",
          stars: 1,
          price: null,
          cuisine_name: "French",
          city_name: "Mayfair  WK QA"
        },
        {
          name: "Galvin at Windows",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Mayfair  WK BE"
        },
        {
          name: "Quilon",
          stars: 1,
          price: null,
          cuisine_name: "Indian",
          city_name: "Victoria  SWE AF"
        },
        {
          name: "Céleste",
          stars: 1,
          price: null,
          cuisine_name: "Creative French",
          city_name: "Belgravia  SWX TA"
        },
        {
          name: "Marcus",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Belgravia  SWX RL"
        },
        {
          name: "Dining Room at The Goring",
          stars: 1,
          price: null,
          cuisine_name: "Traditional British",
          city_name: "Victoria  SWW JW"
        },
        {
          name: "Dinner by Heston Blumenthal",
          stars: 1,
          price: null,
          cuisine_name: "Traditional British",
          city_name: "Hyde Park  SWX LA"
        },
        {
          name: "Ledbury",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "North Kensington  W AQ"
        },
        {
          name: "Pétrus",
          stars: 1,
          price: null,
          cuisine_name: "French",
          city_name: "Belgravia  SWX EA"
        },
        {
          name: "A. Wong",
          stars: 1,
          price: null,
          cuisine_name: "Chinese",
          city_name: "Victoria  SWV DE"
        },
        {
          name: "Amaya",
          stars: 1,
          price: null,
          cuisine_name: "Indian",
          city_name: "Belgravia  SWX JT"
        },
        {
          name: "CORE by Clare Smyth",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "North Kensington  W PN"
        },
        {
          name: "Five Fields",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Chelsea  SW SP"
        },
        {
          name: "Claude Bosi at Bibendum",
          stars: 1,
          price: null,
          cuisine_name: "French",
          city_name: "Chelsea  SW RD"
        },
        {
          name: "Elystan Street",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Chelsea  SW NT"
        },
        {
          name: "Kitchen W8",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Kensington  W AH"
        },
        {
          name: "Gordon Ramsay",
          stars: 1,
          price: null,
          cuisine_name: "French",
          city_name: "Chelsea  SW HP"
        },
        {
          name: "The Checkers",
          stars: 1,
          price: null,
          cuisine_name: "French",
          city_name: "Montgomery/Trefaldwyn  SY PN"
        },
        {
          name: "Trinity",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Clapham Common  SW JG"
        },
        {
          name: "Harwood Arms",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Fulham  SW QP"
        },
        {
          name: "Nut Tree",
          stars: 1,
          price: null,
          cuisine_name: "Traditional British",
          city_name: "Murcott  OX RE"
        },
        {
          name: "River Café",
          stars: 1,
          price: null,
          cuisine_name: "Italian",
          city_name: "Hammersmith  W HA"
        },
        {
          name: "La Trompette",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Chiswick  W EU"
        },
        {
          name: "Chez Bruce",
          stars: 1,
          price: null,
          cuisine_name: "French",
          city_name: "Wandsworth  SW EG"
        },
        {
          name: "The Glasshouse",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Kew  TW PZ"
        },
        {
          name: "West House",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Biddenden  TN AH"
        },
        {
          name: "Belmond Le Manoir aux Quat' Saisons",
          stars: 1,
          price: null,
          cuisine_name: "French",
          city_name: "Great Milton  OX PD"
        },
        {
          name: "Oxford Kitchen",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Oxford  OX HQ"
        },
        {
          name: "The Coach",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Marlow  SL LS"
        },
        {
          name: "Hand and Flowers",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Marlow  SL BP"
        },
        {
          name: "Hinds Head",
          stars: 1,
          price: null,
          cuisine_name: "Traditional British",
          city_name: "Bray  SL AB"
        },
        {
          name: "Fat Duck",
          stars: 1,
          price: null,
          cuisine_name: "Creative",
          city_name: "Bray  SL AQ"
        },
        {
          name: "Waterside Inn",
          stars: 1,
          price: null,
          cuisine_name: "Classic French",
          city_name: "Bray  SL AT"
        },
        {
          name: "Crown",
          stars: 1,
          price: null,
          cuisine_name: "Regional cuisine",
          city_name: "Burchett's Green  SL QZ"
        },
        {
          name: "Tudor Room",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Egham  TW UR"
        },
        {
          name: "Chapter One",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "City Centre  D"
        },
        {
          name: "Patrick Guilbaud",
          stars: 1,
          price: null,
          cuisine_name: "Modern French",
          city_name: "City Centre  D"
        },
        {
          name: "Greenhouse",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "City Centre  D"
        },
        {
          name: "L'Ecrivain",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "City Centre  D"
        },
        {
          name: "Coworth Park",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Ascot  SL SE"
        },
        {
          name: "Heron & Grey",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Blackrock"
        },
        {
          name: "Ynyshir",
          stars: 1,
          price: null,
          cuisine_name: "Creative",
          city_name: "Machynlleth  SY TA"
        },
        {
          name: "Le Champignon Sauvage",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Cheltenham  GL AQ"
        },
        {
          name: "Clock House",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Ripley  GU AQ"
        },
        {
          name: "Sorrel",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Dorking  RH JU"
        },
        {
          name: "Matt Worswick at The Latymer",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Bagshot  GU EU"
        },
        {
          name: "Gravetye Manor",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Gravetye  RH LJ"
        },
        {
          name: "L'Ortolan",
          stars: 1,
          price: null,
          cuisine_name: "French",
          city_name: "Shinfield  RG BY"
        },
        {
          name: "Restaurant Tristan",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Horsham  RH HU"
        },
        {
          name: "Blackbird",
          stars: 1,
          price: null,
          cuisine_name: "Classic cuisine",
          city_name: "Newbury  RG AQ"
        },
        {
          name: "Woodspeen",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Newbury  RG BN"
        },
        {
          name: "The Dining Room",
          stars: 1,
          price: null,
          cuisine_name: "Asian influences",
          city_name: "Malmesbury  SN RB"
        },
        {
          name: "The Whitebrook",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Whitebrook  NP TX"
        },
        {
          name: "Walnut Tree",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Llanddewi Skirrid  NP AW"
        },
        {
          name: "Bybrook",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Castle Combe  SN HR"
        },
        {
          name: "Restaurant Hywel Jones by Lucknam Park",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Colerne  SN AZ"
        },
        {
          name: "Red Lion Freehouse",
          stars: 1,
          price: null,
          cuisine_name: "Classic cuisine",
          city_name: "East Chisenbury  SN AQ"
        },
        {
          name: "Black Rat",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Winchester  SO HX"
        },
        {
          name: "Olive Tree",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Bath  BA QF"
        },
        {
          name: "wilks",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Bristol  BS PG"
        },
        {
          name: "Bulrush",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Bristol  BS TZ"
        },
        {
          name: "Casamia",
          stars: 1,
          price: null,
          cuisine_name: "Creative",
          city_name: "Bristol  BS FU"
        },
        {
          name: "Paco Tapas",
          stars: 1,
          price: null,
          cuisine_name: "Spanish",
          city_name: "Bristol  BS FU"
        },
        {
          name: "Pony & Trap",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Chew Magna  BS TQ"
        },
        {
          name: "James Sommerin",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Penarth  CF AU"
        },
        {
          name: "Loam",
          stars: 1,
          price: null,
          cuisine_name: "Creative",
          city_name: "Gaillimh/Galway"
        },
        {
          name: "Aniar",
          stars: 1,
          price: null,
          cuisine_name: "Creative",
          city_name: "Gaillimh/Galway"
        },
        {
          name: "Campagne",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Cill Chainnigh/Kilkenny"
        },
        {
          name: "Lady Helen",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Baile Mhic Andáin/Thomastown"
        },
        {
          name: "Wild Honey Inn",
          stars: 1,
          price: null,
          cuisine_name: "Classic cuisine",
          city_name: "Lios Dúin Bhearna/Lisdoonvarna"
        },
        {
          name: "Thomas Carr @ The Olive Room",
          stars: 1,
          price: null,
          cuisine_name: "Seafood",
          city_name: "Ilfracombe  EX DJ"
        },
        {
          name: "Masons Arms",
          stars: 1,
          price: null,
          cuisine_name: "Classic French",
          city_name: "Knowstone  EX RY"
        },
        {
          name: "Lympstone Manor",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Lympstone  EX NZ"
        },
        {
          name: "House",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Aird Mhór/Ardmore"
        },
        {
          name: "Gidleigh Park",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Chagford  TQ HH"
        },
        {
          name: "Elephant",
          stars: 1,
          price: null,
          cuisine_name: "Modern British",
          city_name: "Torquay  TQ BH"
        },
        {
          name: "Ichigo Ichie",
          stars: 1,
          price: null,
          cuisine_name: "Japanese",
          city_name: "Corcaigh/Cork"
        },
        {
          name: "Restaurant Nathan Outlaw",
          stars: 1,
          price: null,
          cuisine_name: "Seafood",
          city_name: "Port Isaac  PL SB"
        },
        {
          name: "Outlaw's Fish Kitchen",
          stars: 1,
          price: null,
          cuisine_name: "Seafood",
          city_name: "Port Isaac  PL RH"
        },
        {
          name: "Paul Ainsworth at No.6",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Padstow  PL AP"
        },
        {
          name: "Samphire",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Saint Helier/SaintHélier  JE TQ"
        },
        {
          name: "Bohemia",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Saint Helier/SaintHélier  JE UH"
        },
        {
          name: "Driftwood",
          stars: 1,
          price: null,
          cuisine_name: "Modern cuisine",
          city_name: "Portscatho  TR EW"
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
          stars: 1,
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
          stars: 1,
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
          stars: 1,
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
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "Chicago"
        },
        {
          name: "Sushi Inoue",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "New York"
        },
        {
          name: "Satsuki",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "New York"
        },
        {
          name: "Masa",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "New York"
        },
        {
          name: "Jean-Georges",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "New York"
        },
        {
          name: "Per Se",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "New York"
        },
        {
          name: "Café Boulud",
          stars: 1,
          price: "$$$$",
          cuisine_name: "French",
          city_name: "New York"
        },
        {
          name: "Marea",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Seafood",
          city_name: "New York"
        },
        {
          name: "Sushi Noz",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "New York"
        },
        {
          name: "Le Bernardin",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Seafood",
          city_name: "New York"
        },
        {
          name: "Daniel",
          stars: 1,
          price: "$$$$",
          cuisine_name: "French",
          city_name: "New York"
        },
        {
          name: "The Modern",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "New York"
        },
        {
          name: "Caviar Russe",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "New York"
        },
        {
          name: "Aquavit",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Scandinavian",
          city_name: "New York"
        },
        {
          name: "Gabriel Kreuther",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "New York"
        },
        {
          name: "Del Posto",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Italian",
          city_name: "New York"
        },
        {
          name: "Okuda",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "New York"
        },
        {
          name: "L'Atelier de Joël Robuchon",
          stars: 1,
          price: "$$$$",
          cuisine_name: "French",
          city_name: "New York"
        },
        {
          name: "Le Grill de Joël Robuchon",
          stars: 1,
          price: "$$$$",
          cuisine_name: "French",
          city_name: "New York"
        },
        {
          name: "Sushi Ginza Onodera",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "New York"
        },
        {
          name: "Ai Fiori",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Italian",
          city_name: "New York"
        },
        {
          name: "Agern",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Scandinavian",
          city_name: "New York"
        },
        {
          name: "Café China",
          stars: 1,
          price: "$$",
          cuisine_name: "Chinese",
          city_name: "New York"
        },
        {
          name: "Sushi Yasuda",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "New York"
        },
        {
          name: "NoMad",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "New York"
        },
        {
          name: "Sushi Amane",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "New York"
        },
        {
          name: "Noda",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "New York"
        },
        {
          name: "Junoon",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Indian",
          city_name: "New York"
        },
        {
          name: "Kosaka",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "New York"
        },
        {
          name: "Tempura Matsui",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "New York"
        },
        {
          name: "Wallsé",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Austrian",
          city_name: "New York"
        },
        {
          name: "Bouley at Home",
          stars: 1,
          price: "$$$",
          cuisine_name: "Contemporary",
          city_name: "New York"
        },
        {
          name: "Atomix",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Korean",
          city_name: "New York"
        },
        {
          name: "Eleven Madison Park",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "New York"
        },
        {
          name: "The Clocktower",
          stars: 1,
          price: "$$$",
          cuisine_name: "Contemporary",
          city_name: "New York"
        },
        {
          name: "Aldea",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Mediterranean",
          city_name: "New York"
        },
        {
          name: "Jeju Noodle Bar",
          stars: 1,
          price: "$$",
          cuisine_name: "Korean",
          city_name: "New York"
        },
        {
          name: "Cote",
          stars: 1,
          price: "$$$",
          cuisine_name: "Korean",
          city_name: "New York"
        },
        {
          name: "Gramercy Tavern",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "New York"
        },
        {
          name: "Sushi Nakazawa",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "New York"
        },
        {
          name: "Babbo",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Italian",
          city_name: "New York"
        },
        {
          name: "Blue Hill",
          stars: 1,
          price: "$$$$",
          cuisine_name: "American",
          city_name: "New York"
        },
        {
          name: "Gotham Bar and Grill",
          stars: 1,
          price: "$$$$",
          cuisine_name: "American",
          city_name: "New York"
        },
        {
          name: "Casa Mono",
          stars: 1,
          price: "$$$",
          cuisine_name: "Spanish",
          city_name: "New York"
        },
        {
          name: "Nix",
          stars: 1,
          price: "$$$",
          cuisine_name: "Vegetarian",
          city_name: "New York"
        },
        {
          name: "Carbone",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Italian",
          city_name: "New York"
        },
        {
          name: "ZZ's Clam Bar",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Seafood",
          city_name: "New York"
        },
        {
          name: "Casa Enríque",
          stars: 1,
          price: "$$",
          cuisine_name: "Mexican",
          city_name: "New York"
        },
        {
          name: "Hirohisa",
          stars: 1,
          price: "$$$",
          cuisine_name: "Japanese",
          city_name: "New York"
        },
        {
          name: "Kanoyama",
          stars: 1,
          price: "$$$",
          cuisine_name: "Japanese",
          city_name: "New York"
        },
        {
          name: "Ko",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "New York"
        },
        {
          name: "Jewel Bako",
          stars: 1,
          price: "$$$",
          cuisine_name: "Japanese",
          city_name: "New York"
        },
        {
          name: "Jungsik",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Korean",
          city_name: "New York"
        },
        {
          name: "Bâtard",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "New York"
        },
        {
          name: "Kajitsu",
          stars: 1,
          price: "$$$",
          cuisine_name: "Japanese",
          city_name: "New York"
        },
        {
          name: "The Musket Room",
          stars: 1,
          price: "$$$",
          cuisine_name: "Contemporary",
          city_name: "New York"
        },
        {
          name: "Kyo Ya",
          stars: 1,
          price: "$$$",
          cuisine_name: "Japanese",
          city_name: "New York"
        },
        {
          name: "Le Coucou",
          stars: 1,
          price: "$$$",
          cuisine_name: "French",
          city_name: "New York"
        },
        {
          name: "Uncle Boons",
          stars: 1,
          price: "$$",
          cuisine_name: "Thai",
          city_name: "New York"
        },
        {
          name: "Atera",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "New York"
        },
        {
          name: "Bar Uchū",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "New York"
        },
        {
          name: "Ichimura at Uchū",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Japanese",
          city_name: "New York"
        },
        {
          name: "L'Appart",
          stars: 1,
          price: "$$$$",
          cuisine_name: "French",
          city_name: "New York"
        },
        {
          name: "Tuome",
          stars: 1,
          price: "$$",
          cuisine_name: "Fusion",
          city_name: "New York"
        },
        {
          name: "Contra",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "New York"
        },
        {
          name: "Oxomoco",
          stars: 1,
          price: "$$$",
          cuisine_name: "Mexican",
          city_name: "New York"
        },
        {
          name: "The River Café",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "New York"
        },
        {
          name: "Aska",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Scandinavian",
          city_name: "New York"
        },
        {
          name: "Meadowsweet",
          stars: 1,
          price: "$$$",
          cuisine_name: "Mediterranean",
          city_name: "New York"
        },
        {
          name: "Peter Luger",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Steakhouse",
          city_name: "New York"
        },
        {
          name: "Chef's Table at Brooklyn Fare",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "New York"
        },
        {
          name: "Blanca",
          stars: 1,
          price: "$$$$",
          cuisine_name: "Contemporary",
          city_name: "New York"
        },
        
      ]);
    });
};
