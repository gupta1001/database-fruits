//jshint esversion:6 

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const mango = new Fruit({
    name: "Mango",
    rating: 9,
    review: "Truly is the king of the fruits"
});

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 8,
    review: "Highest in vitamin C"
});

const guava = new Fruit({
    name: "Guava",
    rating: 7,
    review: "Great snack"
});

Fruit.insertMany([mango, kiwi, guava], function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Succfully inseted all the fruits to fuits DB");
    }
});













// Connection URI
// const uri = "mongodb://localhost:27017/?maxPoolSize=20&w=majority";

// // Create a new MongoClient
// const client = new MongoClient(uri);

// async function run() {
//   try {
//     // Connect the client to the server
//     await client.connect();

//     // Establish and verify connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Connected successfully to server");

//     const dbName = "fruitsDB"
//     const database = client.db(dbName);
//     const collection = database.collection("fruits");
//     const docs = createDoc();
//     const options = { ordered: true };

//     const result = await collection.insertMany(docs, options);
//     console.log(`${result.insertedCount} documents were inserted`);

//     const cursor = collection.find(); // reads all data

//     // print a message if no documents were found
//     if (collection.countDocuments({}) === 0) {
//       console.log("No documents found!");
//     }
//     // replace console.dir with your callback to access individual elements
//     await cursor.forEach(console.dir);

//   } finally {
//     await client.close();
//   }
// }

// let createDoc =  function() {
//     const myObj = [
//         {
//             "_id": 1,
//             name: 'Apple', 
//             score: 8,
//             review: "Great fruit"
//         },
//         { 
//             "_id": 2,
//             name: 'Orange', 
//             score: 8,
//             review: "Yummy fruit"
//         },
//         { 
//             "_id": 3,
//             name: 'Banana', 
//             score: 8,
//             review: "Okayish"
//         }
//     ];
//     return myObj
// };

// run().catch(console.dir);
