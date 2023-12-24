//Collection productdata in Products database

db.products.insertMany([
    {
        "id": "1",
        "product_name": "Intelligent Fresh Chips",
        "product_price": 655.00,
        "product_material": "Concrete",
        "product_color": "mint green"
    },
    {
        "id": "2",
        "product_name": "Practical Fresh Sausages",
        "product_price": 911.0,
        "product_material": "Cotton",
        "product_color": "indigo"
    },
    {
        "id": "3",
        "product_name": "Refined Steel Car",
        "product_price": 690.00,
        "product_material": "Rubber",
        "product_color": "gold"
    },
    {
        "id": "4",
        "product_name": "Gorgeous Plastic Pants",
        "product_price": 492.00,
        "product_material": "Soft",
        "product_color": "plum"
    },
    {
        "id": "5",
        "product_name": "Sleek Cotton Chair",
        "product_price": 33.00,
        "product_material": "Fresh",
        "product_color": "black"
    },
    {
        "id": "6",
        "product_name": "Awesome Wooden Towels",
        "product_price": 474.00,
        "product_material": "Plastic",
        "product_color": "orange"
    },
    {
        "id": "7",
        "product_name": "Practical Soft Shoes",
        "product_price": 500.00,
        "product_material": "Rubber",
        "product_color": "pink"
    },
    {
        "id": "8",
        "product_name": "Incredible Steel Hat",
        "product_price": 78.00,
        "product_material": "Rubber",
        "product_color": "violet"
    },
    {
        "id": "9",
        "product_name": "Awesome Wooden Ball",
        "product_price": 28.00,
        "product_material": "Soft",
        "product_color": "azure"
    },
    {
        "id": "10",
        "product_name": "Generic Wooden Pizza",
        "product_price": 84.00,
        "product_material": "Frozen",
        "product_color": "indigo"
    },
    {
        "id": "11",
        "product_name": "Unbranded Wooden Cheese",
        "product_price":26.00,
        "product_material": "Soft",
        "product_color": "black"
    },
    {
        "id": "12",
        "product_name": "Unbranded Plastic Salad",
        "product_price": 89.00,
        "product_material": "Wooden",
        "product_color": "pink"
    },
    {
        "id": "13",
        "product_name": "Gorgeous Cotton Keyboard",
        "product_price": 37.00,
        "product_material": "Concrete",
        "product_color": "sky blue"
    },
    {
        "id": "14",
        "product_name": "Incredible Steel Shirt",
        "product_price": 54.00,
        "product_material": "Metal",
        "product_color": "white"
    },
    {
        "id": "15",
        "product_name": "Ergonomic Cotton Hat",
        "product_price": 43.00,
        "product_material": "Rubber",
        "product_color": "mint green"
    },
    {
        "id": "16",
        "product_name": "Small Soft Chair",
        "product_price": 47.00,
        "product_material": "Cotton",
        "product_color": "teal"
    },
    {
        "id": "17",
        "product_name": "Incredible Metal Car",
        "product_price":36.00,
        "product_material": "Fresh",
        "product_color": "indigo"
    },
    {
        "id": "18",
        "product_name": "Licensed Plastic Bacon",
        "product_price":88.00,
        "product_material": "Steel",
        "product_color": "yellow"
    },
    {
        "id": "19",
        "product_name": "Intelligent Cotton Chips",
        "product_price": 46.00,
        "product_material": "Soft",
        "product_color": "azure"
    },
    {
        "id": "20",
        "product_name": "Handcrafted Wooden Bacon",
        "product_price": 36.00,
        "product_material": "Concrete",
        "product_color": "lime"
    },
    {
        "id": "21",
        "product_name": "Unbranded Granite Chicken",
        "product_price": 90.00,
        "product_material": "Metal",
        "product_color": "gold"
    },
    {
        "id": "22",
        "product_name": "Ergonomic Soft Hat",
        "product_price": 99.00,
        "product_material": "Rubber",
        "product_color": "black"
    },
    {
        "id": "23",
        "product_name": "Intelligent Steel Pizza",
        "product_price": 95.00,
        "product_material": "Cotton",
        "product_color": "azure"
    },
    {
        "id": "24",
        "product_name": "Tasty Rubber Cheese",
        "product_price":47.00,
        "product_material": "Frozen",
        "product_color": "orchid"
    },
    {
        "id": "25",
        "product_name": "Licensed Steel Car",
        "product_price":20.00,
        "product_material": "Cotton",
        "product_color": "indigo"
    }
]);

//1.Find all the information about each products

//Query
db.products.find({}).pretty();

//Output
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7ba"),
//     "id" : "1",
//     "product_name" : "Intelligent Fresh Chips",
//     "product_price" : 655,
//     "product_material" : "Concrete",
//     "product_color" : "mint green"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7bb"),
//     "id" : "2",
//     "product_name" : "Practical Fresh Sausages",
//     "product_price" : 911,
//     "product_material" : "Cotton",
//     "product_color" : "indigo"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7bc"),
//     "id" : "3",
//     "product_name" : "Refined Steel Car",
//     "product_price" : 690,
//     "product_material" : "Rubber",
//     "product_color" : "gold"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7bd"),
//     "id" : "4",
//     "product_name" : "Gorgeous Plastic Pants",
//     "product_price" : 492,
//     "product_material" : "Soft",
//     "product_color" : "plum"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7be"),
//     "id" : "5",
//     "product_name" : "Sleek Cotton Chair",
//     "product_price" : 33,
//     "product_material" : "Fresh",
//     "product_color" : "black"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7bf"),
//     "id" : "6",
//     "product_name" : "Awesome Wooden Towels",
//     "product_price" : 474,
//     "product_material" : "Plastic",
//     "product_color" : "orange"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7c0"),
//     "id" : "7",
//     "product_name" : "Practical Soft Shoes",
//     "product_price" : 500,
//     "product_material" : "Rubber",
//     "product_color" : "pink"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7c1"),
//     "id" : "8",
//     "product_name" : "Incredible Steel Hat",
//     "product_price" : 78,
//     "product_material" : "Rubber",
//     "product_color" : "violet"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7c2"),
//     "id" : "9",
//     "product_name" : "Awesome Wooden Ball",
//     "product_price" : 28,
//     "product_material" : "Soft",
//     "product_color" : "azure"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7c3"),
//     "id" : "10",
//     "product_name" : "Generic Wooden Pizza",
//     "product_price" : 84,
//     "product_material" : "Frozen",
//     "product_color" : "indigo"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7c4"),
//     "id" : "11",
//     "product_name" : "Unbranded Wooden Cheese",
//     "product_price" : 26,
//     "product_material" : "Soft",
//     "product_color" : "black"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7c5"),
//     "id" : "12",
//     "product_name" : "Unbranded Plastic Salad",
//     "product_price" : 89,
//     "product_material" : "Wooden",
//     "product_color" : "pink"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7c6"),
//     "id" : "13",
//     "product_name" : "Gorgeous Cotton Keyboard",
//     "product_price" : 37,
//     "product_material" : "Concrete",
//     "product_color" : "sky blue"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7c7"),
//     "id" : "14",
//     "product_name" : "Incredible Steel Shirt",
//     "product_price" : 54,
//     "product_material" : "Metal",
//     "product_color" : "white"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7c8"),
//     "id" : "15",
//     "product_name" : "Ergonomic Cotton Hat",
//     "product_price" : 43,
//     "product_material" : "Rubber",
//     "product_color" : "mint green"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7c9"),
//     "id" : "16",
//     "product_name" : "Small Soft Chair",
//     "product_price" : 47,
//     "product_material" : "Cotton",
//     "product_color" : "teal"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7ca"),
//     "id" : "17",
//     "product_name" : "Incredible Metal Car",
//     "product_price" : 36,
//     "product_material" : "Fresh",
//     "product_color" : "indigo"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7cb"),
//     "id" : "18",
//     "product_name" : "Licensed Plastic Bacon",
//     "product_price" : 88,
//     "product_material" : "Steel",
//     "product_color" : "yellow"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7cc"),
//     "id" : "19",
//     "product_name" : "Intelligent Cotton Chips",
//     "product_price" : 46,
//     "product_material" : "Soft",
//     "product_color" : "azure"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7cd"),
//     "id" : "20",
//     "product_name" : "Handcrafted Wooden Bacon",
//     "product_price" : 36,
//     "product_material" : "Concrete",
//     "product_color" : "lime"
// }

// 2. Find the product price which are between 400 to 800

//Query
db.products.find({ product_price: { $gte: 400, $lt:800, } }).pretty();

//Output

// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7ba"),
//     "id" : "1",
//     "product_name" : "Intelligent Fresh Chips",
//     "product_price" : 655,
//     "product_material" : "Concrete",
//     "product_color" : "mint green"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7bc"),
//     "id" : "3",
//     "product_name" : "Refined Steel Car",
//     "product_price" : 690,
//     "product_material" : "Rubber",
//     "product_color" : "gold"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7bd"),
//     "id" : "4",
//     "product_name" : "Gorgeous Plastic Pants",
//     "product_price" : 492,
//     "product_material" : "Soft",
//     "product_color" : "plum"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7bf"),
//     "id" : "6",
//     "product_name" : "Awesome Wooden Towels",
//     "product_price" : 474,
//     "product_material" : "Plastic",
//     "product_color" : "orange"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7c0"),
//     "id" : "7",
//     "product_name" : "Practical Soft Shoes",
//     "product_price" : 500,
//     "product_material" : "Rubber",
//     "product_color" : "pink"
// }


//3.Find the product price which are not between 400 to 600

//Query
db.products.find({ product_price:{  $not:{ $gte: 400, $lte:600, }} }).pretty();

//Output

// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7ba"),
//     "id" : "1",
//     "product_name" : "Intelligent Fresh Chips",
//     "product_price" : 655,
//     "product_material" : "Concrete",
//     "product_color" : "mint green"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7bb"),
//     "id" : "2",
//     "product_name" : "Practical Fresh Sausages",
//     "product_price" : 911,
//     "product_material" : "Cotton",
//     "product_color" : "indigo"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7bc"),
//     "id" : "3",
//     "product_name" : "Refined Steel Car",
//     "product_price" : 690,
//     "product_material" : "Rubber",
//     "product_color" : "gold"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7be"),
//     "id" : "5",
//     "product_name" : "Sleek Cotton Chair",
//     "product_price" : 33,
//     "product_material" : "Fresh",
//     "product_color" : "black"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7c1"),
//     "id" : "8",
//     "product_name" : "Incredible Steel Hat",
//     "product_price" : 78,
//     "product_material" : "Rubber",
//     "product_color" : "violet"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7c2"),
//     "id" : "9",
//     "product_name" : "Awesome Wooden Ball",
//     "product_price" : 28,
//     "product_material" : "Soft",
//     "product_color" : "azure"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7c3"),
//     "id" : "10",
//     "product_name" : "Generic Wooden Pizza",
//     "product_price" : 84,
//     "product_material" : "Frozen",
//     "product_color" : "indigo"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7c4"),
//     "id" : "11",
//     "product_name" : "Unbranded Wooden Cheese",
//     "product_price" : 26,
//     "product_material" : "Soft",
//     "product_color" : "black"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7c5"),
//     "id" : "12",
//     "product_name" : "Unbranded Plastic Salad",
//     "product_price" : 89,
//     "product_material" : "Wooden",
//     "product_color" : "pink"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7c6"),
//     "id" : "13",
//     "product_name" : "Gorgeous Cotton Keyboard",
//     "product_price" : 37,
//     "product_material" : "Concrete",
//     "product_color" : "sky blue"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7c7"),
//     "id" : "14",
//     "product_name" : "Incredible Steel Shirt",
//     "product_price" : 54,
//     "product_material" : "Metal",
//     "product_color" : "white"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7c8"),
//     "id" : "15",
//     "product_name" : "Ergonomic Cotton Hat",
//     "product_price" : 43,
//     "product_material" : "Rubber",
//     "product_color" : "mint green"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7c9"),
//     "id" : "16",
//     "product_name" : "Small Soft Chair",
//     "product_price" : 47,
//     "product_material" : "Cotton",
//     "product_color" : "teal"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7ca"),
//     "id" : "17",
//     "product_name" : "Incredible Metal Car",
//     "product_price" : 36,
//     "product_material" : "Fresh",
//     "product_color" : "indigo"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7cb"),
//     "id" : "18",
//     "product_name" : "Licensed Plastic Bacon",
//     "product_price" : 88,
//     "product_material" : "Steel",
//     "product_color" : "yellow"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7cc"),
//     "id" : "19",
//     "product_name" : "Intelligent Cotton Chips",
//     "product_price" : 46,
//     "product_material" : "Soft",
//     "product_color" : "azure"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7cd"),
//     "id" : "20",
//     "product_name" : "Handcrafted Wooden Bacon",
//     "product_price" : 36,
//     "product_material" : "Concrete",
//     "product_color" : "lime"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7ce"),
//     "id" : "21",
//     "product_name" : "Unbranded Granite Chicken",
//     "product_price" : 90,
//     "product_material" : "Metal",
//     "product_color" : "gold"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7cf"),
//     "id" : "22",
//     "product_name" : "Ergonomic Soft Hat",
//     "product_price" : 99,
//     "product_material" : "Rubber",
//     "product_color" : "black"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7d0"),
//     "id" : "23",
//     "product_name" : "Intelligent Steel Pizza",
//     "product_price" : 95,
//     "product_material" : "Cotton",
//     "product_color" : "azure"
// }

//4. List the four product which are grater than 500 in price 

//Query
db.products.find({ product_price:{  $gte: 500 }}).limit(4).pretty();

//Output
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7ba"),
//     "id" : "1",
//     "product_name" : "Intelligent Fresh Chips",
//     "product_price" : 655,
//     "product_material" : "Concrete",
//     "product_color" : "mint green"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7bb"),
//     "id" : "2",
//     "product_name" : "Practical Fresh Sausages",
//     "product_price" : 911,
//     "product_material" : "Cotton",
//     "product_color" : "indigo"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7bc"),
//     "id" : "3",
//     "product_name" : "Refined Steel Car",
//     "product_price" : 690,
//     "product_material" : "Rubber",
//     "product_color" : "gold"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7c0"),
//     "id" : "7",
//     "product_name" : "Practical Soft Shoes",
//     "product_price" : 500,
//     "product_material" : "Rubber",
//     "product_color" : "pink"
// }

//5. Find the product name and product material of each products

//Query
db.products.find({},{product_name:1,product_material:1}).pretty();

//Output
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7ba"),
//     "product_name" : "Intelligent Fresh Chips",
//     "product_material" : "Concrete"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7bb"),
//     "product_name" : "Practical Fresh Sausages",
//     "product_material" : "Cotton"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7bc"),
//     "product_name" : "Refined Steel Car",
//     "product_material" : "Rubber"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7bd"),
//     "product_name" : "Gorgeous Plastic Pants",
//     "product_material" : "Soft"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7be"),
//     "product_name" : "Sleek Cotton Chair",
//     "product_material" : "Fresh"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7bf"),
//     "product_name" : "Awesome Wooden Towels",
//     "product_material" : "Plastic"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7c0"),
//     "product_name" : "Practical Soft Shoes",
//     "product_material" : "Rubber"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7c1"),
//     "product_name" : "Incredible Steel Hat",
//     "product_material" : "Rubber"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7c2"),
//     "product_name" : "Awesome Wooden Ball",
//     "product_material" : "Soft"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7c3"),
//     "product_name" : "Generic Wooden Pizza",
//     "product_material" : "Frozen"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7c4"),
//     "product_name" : "Unbranded Wooden Cheese",
//     "product_material" : "Soft"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7c5"),
//     "product_name" : "Unbranded Plastic Salad",
//     "product_material" : "Wooden"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7c6"),
//     "product_name" : "Gorgeous Cotton Keyboard",
//     "product_material" : "Concrete"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7c7"),
//     "product_name" : "Incredible Steel Shirt",
//     "product_material" : "Metal"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7c8"),
//     "product_name" : "Ergonomic Cotton Hat",
//     "product_material" : "Rubber"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7c9"),
//     "product_name" : "Small Soft Chair",
//     "product_material" : "Cotton"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7ca"),
//     "product_name" : "Incredible Metal Car",
//     "product_material" : "Fresh"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7cb"),
//     "product_name" : "Licensed Plastic Bacon",
//     "product_material" : "Steel"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7cc"),
//     "product_name" : "Intelligent Cotton Chips",
//     "product_material" : "Soft"
// }
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7cd"),
//     "product_name" : "Handcrafted Wooden Bacon",
//     "product_material" : "Concrete"
// }

//6.Find the product with a row id of 10

//Query
db.products.find({id :{$eq:"10"}}).pretty();

//Output
// {
//     "_id" : ObjectId("6448f3046dd34a5573a1c7c3"),
//     "id" : "10",
//     "product_name" : "Generic Wooden Pizza",
//     "product_price" : 84,
//     "product_material" : "Frozen",
//     "product_color" : "indigo"
// }

//7.Find only the product name and product material

//Query
db.products.find({},{_id:0,product_name:1,product_material:1}).pretty();

//Output
// {
//     "product_name" : "Intelligent Fresh Chips",
//     "product_material" : "Concrete"
// }
// {
//     "product_name" : "Practical Fresh Sausages",
//     "product_material" : "Cotton"
// }
// {
//     "product_name" : "Refined Steel Car",
//     "product_material" : "Rubber" 
// }
// {
//     "product_name" : "Gorgeous Plastic Pants",
//     "product_material" : "Soft" 
// }
// {
//     "product_name" : "Sleek Cotton Chair",
//     "product_material" : "Fresh" 
// }
// {
//     "product_name" : "Awesome Wooden Towels",
//     "product_material" : "Plastic" 
// }
// {
//     "product_name" : "Practical Soft Shoes",
//     "product_material" : "Rubber" 
// }
// {
//     "product_name" : "Incredible Steel Hat",
//     "product_material" : "Rubber" 
// }
// {
//     "product_name" : "Awesome Wooden Ball",
//     "product_material" : "Soft" 
// }
// {
//     "product_name" : "Generic Wooden Pizza",
//     "product_material" : "Frozen" 
// }
// {
//     "product_name" : "Unbranded Wooden Cheese",
//     "product_material" : "Soft" 
// }
// {
//     "product_name" : "Unbranded Plastic Salad",
//     "product_material" : "Wooden" 
// }
// {
//     "product_name" : "Gorgeous Cotton Keyboard",
//     "product_material" : "Concrete"
// }
// {
//     "product_name" : "Incredible Steel Shirt",
//     "product_material" : "Metal" 
// }
// {
//     "product_name" : "Ergonomic Cotton Hat",
//     "product_material" : "Rubber" 
// }
// {
//     "product_name" : "Small Soft Chair",
//     "product_material" : "Cotton" 
// }
// {
//     "product_name" : "Incredible Metal Car"
//     "product_material" : "Fresh" 
// }
// {
//     "product_name" : "Licensed Plastic Bacon",
//     "product_material" : "Steel" 
// }
// {
//     "product_name" : "Intelligent Cotton Chips",
//     "product_material" : "Soft" 
// }
// {
//     "product_name" : "Handcrafted Wooden Bacon",
//     "product_material" : "Concrete"
// }

//8.Find all products which contain the value of soft in product material 

//Query
db.products.find({product_material: {$eq: "Soft"}});

//Output
// { "_id" : ObjectId("6448f3046dd34a5573a1c7bd"), "id" : "4", "product_name" : "Gorgeous Plastic Pants", "product_price" : 492, "product_material" : "Soft", "product_color" : "plum" }
// { "_id" : ObjectId("6448f3046dd34a5573a1c7c2"), "id" : "9", "product_name" : "Awesome Wooden Ball", "product_price" : 28, "product_material" : "Soft", "product_color" : "azure" }
// { "_id" : ObjectId("6448f3046dd34a5573a1c7c4"), "id" : "11", "product_name" : "Unbranded Wooden Cheese", "product_price" : 26, "product_material" : "Soft", "product_color" : "black" }
// { "_id" : ObjectId("6448f3046dd34a5573a1c7cc"), "id" : "19", "product_name" : "Intelligent Cotton Chips", "product_price" : 46, "product_material" : "Soft", "product_color" : "azure" }

//9. Find products which contain product color indigo  and product price 492.00

db.products.find({product_color: {$eq: "indigo",},product_price:{ $eq: 492.0}});

//Output
//Data Not Found

//10.Delete the products which product price value are same

db.product.aggregate([
    { $group: { _id: "$product_price", count: { $sum: 1 } } },
    { $match: { count: { $gt: 1 } } },
  ]);
  db.product.remove({ product_price: 36 });
  db.product.remove({ product_price: 47 });

  //Output
 // Products deleted from the data