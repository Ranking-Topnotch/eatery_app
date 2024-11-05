

const categories = [
    {
        "_id": "6537ece708ff5b7de97d0695",
        "title": "Fried Rice",
        "value": "fried_rice",
        "imageUrl": "https://allnigerianfoods.com/wp-content/uploads/fried_rice_recipe.jpg",
        "createdAt": "2023-10-24T16:12:23.571Z",
        "updatedAt": "2023-10-24T16:12:23.571Z",
        "__v": 0
    },
    {
        "_id": "65310f3381e4d98d60b093c5",
        "title": "Curry",
        "value": "curry",
        "imageUrl": "https://www.inspiredtaste.net/wp-content/uploads/2023/08/Chicken-Curry-Recipe-Video.jpg",
        "__v": 0
    },
    {
        "_id": "6531206cbbe4998e90af3feb",
        "title": "Pizza",
        "value": "pizza",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_y0UJ8gUAGadziRuqwO4MWWBkxbOPNTssQ&s",
        "__v": 0
    },
    {
        "_id": "6531209dbbe4998e90af3fef",
        "title": "Pasta",
        "value": "pasta",
        "imageUrl": "https://www.realfoodwithsarah.com/wp-content/uploads/2024/05/authentic-italian-pasta-sauce-3.jpg",
        "__v": 0
    },
    {
        "_id": "653120babbe4998e90af3ff1",
        "title": "Beverages",
        "value": "beverages",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPWIhZbUYqKrQPD76IbrcJSuLAk_H6gxUuYA&s",
        "__v": 0
    },
    {
        "_id": "65312084bbe4998e90af3fed",
        "title": "Burgers",
        "value": "burgers",
        "imageUrl": "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
        "__v": 0
    },
    {
        "_id": "65310efb81e4d98d60b093c3",
        "title": "Chicken",
        "value": "chicken",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMgZG3x99SMnWwv6OkticJ4JQG1m9Qg3Wu0g&s",
        "__v": 0
    },
    {
        "_id": "653120e1bbe4998e90af3ff3",
        "title": "More",
        "value": "more",
        "imageUrl": "https://cdn.icon-icons.com/icons2/1144/PNG/512/fourdots_80930.png",
        "__v": 0
    }
]

const restaurants = [
    {
        "_id": "6530ebbcc9e72013e5b65933",
        "title": "Lapisara Eatery",
        "time": "15 min",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ1YnCOCOPwNy7f6kHRWoLYPK1jJ2Yx-26og&s",
        "owner": "fdfsdfsdfs",
        "code": "41007428",
        "logoUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ1YnCOCOPwNy7f6kHRWoLYPK1jJ2Yx-26og&s",
        "rating": 5,
        "ratingCount": "6765",
        "coords": {
            "id": "2023",
            "latitude": 6.4696136,
            "longitude": 3.3090986,
            "address": "698 Post St, San Francisco, CA 94109, United States",
            "title": "Lapisara Eatery",
            "latitudeDelta": 0.0122,
            "longitudeDelta": 0.0221
        }
    },
    {
        "_id": "6530ea6bc9e72013e5b6592d",
        "title": "Burger King",
        "time": "30 min",
        "imageUrl": "https://www.amrest.eu/sites/default/files/styles/730x756/public/2022-02/BurgerKing_restaurant%281%29.jpg?itok=e2wfUJ7f",
        "owner": "sjgdsjgfjshhjs",
        "code": "41007428",
        "logoUrl": "https://www.amrest.eu/sites/default/files/styles/730x756/public/2022-02/BurgerKing_restaurant%281%29.jpg?itok=e2wfUJ7f",
        "rating": 5,
        "ratingCount": "3278",
        "coords": {
            "id": "2020",
            "latitude": 6.4696136,
            "longitude": 3.3720986,
            "address": "333 O'Farrell St, San Francisco, CA 94102, United States",
            "title": "Burger King",
            "latitudeDelta": 0.0122,
            "longitudeDelta": 0.0221
        }
    },
    {
        "_id": "6530eb66c9e72013e5b65931",
        "title": "Kilimanjago Resturant",
        "time": "25 min",
        "imageUrl": "https://cimages.timbu.com/guides/2020/01/Kili.jpg",
        "owner": "fgdgdfgd",
        "code": "41007428",
        "logoUrl": "https://cimages.timbu.com/guides/2020/01/Kili.jpg",
        "rating": 5,
        "ratingCount": "5666",
        "coords": {
            "id": "2022",
            "latitude": 11.1076,
            "longitude": 8.6321,
            "address": "333 O'Farrell St, San Francisco, CA 94102, United States",
            "title": "La Foods",
            "latitudeDelta": 0.0122,
            "longitudeDelta": 0.0221
        }
    },
    {
        "_id": "6530eb23c9e72013e5b6592f",
        "title": "Shoprite Eatery",
        "time": "35 min",
        "imageUrl": "https://nairametrics.com/wp-content/uploads/2024/06/Shoprite.jpeg",
        "owner": "sjgdsjgfjshhjs",
        "code": "41007428",
        "logoUrl": "https://nairametrics.com/wp-content/uploads/2024/06/Shoprite.jpeg",
        "rating": 5,
        "ratingCount": "3278",
        "coords": {
            "id": "2021",
            "latitude": 7.0559,
            "longitude": 4.0063,
            "address": "333 O'Farrell St, San Francisco, CA 94102, United States",
            "title": "Italian Restaurant",
            "latitudeDelta": 0.0122,
            "longitudeDelta": 0.0221
        }
    }
]

const foods = [
    {
        "_id": "65316968f94c6496dc84f3c1",
        "title": "Tiramisu",
        "foodTags": [
            "Italian",
            "Dessert",
            "Coffee",
            "Mascarpone",
            "Cocoa"
        ],
        "foodType": [
            "Dessert"
        ],
        "code": "41007428",
        "isAvailable": true,
        "restaurant": "6530ea6bc9e72013e5b6592d",
        "rating": 4.9,
        "ratingCount": "420",
        "description": "A classic Italian dessert made of layers of coffee-soaked ladyfingers and creamy mascarpone, topped with cocoa.",
        "price": 7.99,
        "additives": [
            {
                "id": 1,
                "title": "Ladyfingers",
                "price": "1.00"
            },
            {
                "id": 2,
                "title": "Coffee",
                "price": "1.50"
            },
            {
                "id": 3,
                "title": "Mascarpone Cheese",
                "price": "2.50"
            },
            {
                "id": 4,
                "title": "Cocoa",
                "price": "0.50"
            },
            {
                "id": 5,
                "title": "Sugar",
                "price": "0.50"
            }
        ],
        "imageUrl": [
            "https://mrbiggs.com.ng/wp-content/uploads/2022/09/MB-Store-1-1024x833.jpeg"
        ],
        "__v": 0,
        "category": "6531209dbbe4998e90af3fef",
        "time": "35 min"
    },
    {
        "_id": "653168e9f94c6496dc84f3bf",
        "title": "Spaghetti Carbonara",
        "foodTags": [
            "Italian",
            "Creamy",
            "Pasta",
            "Bacon",
            "Egg"
        ],
        "foodType": [
            "Main Course",
            "Lunch",
            null
        ],
        "code": "41007428",
        "isAvailable": true,
        "restaurant": "6530ea6bc9e72013e5b6592d",
        "rating": 4.7,
        "ratingCount": "310",
        "description": "A traditional Italian pasta dish with creamy egg sauce, pancetta, and cheese.",
        "price": 14.99,
        "additives": [
            {
                "id": 1,
                "title": "Egg",
                "price": "1.00"
            },
            {
                "id": 2,
                "title": "Pancetta",
                "price": "3.00"
            },
            {
                "id": 3,
                "title": "Parmesan Cheese",
                "price": "2.00"
            },
            {
                "id": 4,
                "title": "Black Pepper",
                "price": "0.50"
            },
            {
                "id": 5,
                "title": "Pasta",
                "price": "3.00"
            }
        ],
        "imageUrl": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDAMp3eaEVw3Qu3neLcbUM-SnmSY1mcNwJww&s"
        ],
        "__v": 2,
        "category": "6531209dbbe4998e90af3fef",
        "time": "20 min"
    },
    {
        "_id": "653169a9f94c6496dc84f3c3",
        "title": "Vegan Salad Bowl",
        "foodTags": [
            "Vegan",
            "Healthy",
            "Salad",
            "Fresh",
            "Organic"
        ],
        "foodType": [
            "Starter",
            "Lunch",
            "Dinner",
            "Health",
            "Vegan"
        ],
        "code": "41007428",
        "isAvailable": true,
        "restaurant": "6530ea6bc9e72013e5b6592d",
        "rating": 4.6,
        "ratingCount": "230",
        "description": "A refreshing mix of organic vegetables, nuts, seeds, and a tangy vinaigrette.",
        "price": 11.99,
        "additives": [
            {
                "id": 1,
                "title": "Mixed Greens",
                "price": "1.50"
            },
            {
                "id": 2,
                "title": "Walnuts",
                "price": "2.00"
            },
            {
                "id": 3,
                "title": "Quinoa",
                "price": "1.50"
            },
            {
                "id": 4,
                "title": "Cherry Tomatoes",
                "price": "1.00"
            },
            {
                "id": 5,
                "title": "Vinaigrette",
                "price": "0.50"
            }
        ],
        "imageUrl": [
            "https://cleanplatemama.com/wp-content/uploads/2021/08/vegan-mediterranean-bowl-with-side-dressing-thumbnail2.jpg"
        ],
        "__v": 0,
        "category": "6531209dbbe4998e90af3fef",
        "time": "55 min"
    },
    {
        "_id": "65316771f94c6496dc84f3bd",
        "title": "Margherita Pizza",
        "foodTags": [
            "Italian",
            "Cheesy",
            "Vegetarian"
        ],
        "foodType": [
            "Main Course"
        ],
        "code": "41007428",
        "isAvailable": true,
        "restaurant": "6530ebbcc9e72013e5b65933",
        "rating": 4.5,
        "ratingCount": "150",
        "description": "A classic Margherita pizza with fresh tomatoes, mozzarella cheese, basil, and olive oil.",
        "price": 12.99,
        "additives": [
            {
                "id": 1,
                "title": "Cheese",
                "price": "2.00"
            },
            {
                "id": 2,
                "title": "Pepperoni",
                "price": "2.50"
            },
            {
                "id": 3,
                "title": "Ketch up",
                "price": "0.50"
            }
        ],
        "imageUrl": [
            "https://cdn.shopify.com/s/files/1/0274/9503/9079/files/20220211142754-margherita-9920_5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg?v=1723650067",
            "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp"
        ],
        "__v": 0,
        "category": "6531209dbbe4998e90af3fef",
        "time": "30 min"
    },
    {
        "_id": "65316a01f94c6496dc84f3c7",
        "title": "Tropical Fruit Smoothie",
        "foodTags": [
            "Fruit",
            "Smoothie",
            "Refreshing",
            "Sweet",
            "Cold"
        ],
        "foodType": [
            "Drink",
            "Breakfast",
            "Snack",
            "Dessert",
            "Vegan"
        ],
        "code": "41007428",
        "isAvailable": true,
        "restaurant": "6530ea6bc9e72013e5b6592d",
        "rating": 4.7,
        "ratingCount": "280",
        "description": "A delightful blend of tropical fruits, creating the perfect sweet and refreshing drink.",
        "price": 6.99,
        "additives": [
            {
                "id": 1,
                "title": "Mango",
                "price": "2.00"
            },
            {
                "id": 2,
                "title": "Pineapple",
                "price": "1.50"
            },
            {
                "id": 3,
                "title": "Banana",
                "price": "1.00"
            },
            {
                "id": 4,
                "title": "Coconut Milk",
                "price": "1.50"
            },
            {
                "id": 5,
                "title": "Ice",
                "price": "0.50"
            }
        ],
        "imageUrl": [
            "https://davinehawaii.com/wp-content/uploads/2021/06/tropical-passion-fruit-smoothie.webp"
        ],
        "__v": 0,
        "category": "6531209dbbe4998e90af3fef",
        "time": "25 min"
    },
    {
        "_id": "653169d8f94c6496dc84f3c5",
        "title": "Mixed Grill Platter",
        "foodTags": [
            "Barbecue",
            "Meat",
            "Grilled",
            "Spicy",
            "Savory"
        ],
        "foodType": [
            "Main Course",
            "Dinner",
            "Grill",
            "Non-Vegetarian",
            "Barbecue"
        ],
        "code": "41007428",
        "isAvailable": true,
        "restaurant": "6530ea6bc9e72013e5b6592d",
        "rating": 4.8,
        "ratingCount": "320",
        "description": "A succulent assortment of grilled meats, served with sides and sauces.",
        "price": 18.99,
        "additives": [
            {
                "id": 1,
                "title": "Chicken",
                "price": "3.00"
            },
            {
                "id": 2,
                "title": "Beef",
                "price": "4.00"
            },
            {
                "id": 3,
                "title": "Lamb",
                "price": "4.00"
            },
            {
                "id": 4,
                "title": "Pork",
                "price": "3.50"
            },
            {
                "id": 5,
                "title": "Barbecue Sauce",
                "price": "1.00"
            }
        ],
        "imageUrl": [
            "https://media-cdn.tripadvisor.com/media/photo-s/11/54/31/c0/mixed-grill-platter-a.jpg"
        ],
        "__v": 0,
        "category": "6531209dbbe4998e90af3fef",
        "time": "45 min"
    }
]

const cart =  [
    {
        "_id": "653b6588541d2aa2c1e89cd1",
        "userId": "6537a4448cd1bd140ebddcee",
        "productId": {
            "_id": "65316771f94c6496dc84f3bd",
            "title": "Margherita Pizza",
            "restaurant": "6530ebbcc9e72013e5b65933",
            "rating": 4.5,
            "ratingCount": "150",
            "imageUrl": [
                "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp",
                "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp"
            ]
        },
        "additives": [
            "Extra Cheese",
            "Mushrooms"
        ],
        "instructions": "",
        "totalPrice": 25.98,
        "quantity": 2,
        "__v": 0
    }
]

const profile = {
    "_id": "6537a4448cd1bd140ebddcee",
    "username": "Dbestech",
    "email": "db@king.com",
    "uid": "4NmOkCbvu7ToaBS9ZR1UVpv0G1g2",
    "address": [],
    "userType": "Vendor",
    "profile": "https://d326fntlu7tb1e.cloudfront.net/uploads/bdec9d7d-0544-4fc4-823d-3b898f6dbbbf-vinci_03.jpeg",
    "updatedAt": "2023-10-24T11:02:28.215Z"
}

const choiceList = [
    {
        id: 1,
        name: 'Pick Up',
        value: "pickuo"
    },
    {
        id: 2,
        name: '4 Star',
        value: "4star"
    },
    {
        id: 3,
        name: '3 Star',
        value: "3star"
    },
    {
        id: 4,
        name: 'Under 30 min',
        value: "under30"
    },
    {
        id: 5,
        name: 'Recommened',
        value: "recommended"
    }
]

export default  { categories, restaurants, foods, cart, profile, choiceList }