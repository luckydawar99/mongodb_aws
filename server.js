"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

// Import the modules
const express = require("express");
const mongodb = require("mongodb");

// Create the rest object
const app = express();

// Create the ref variable
const MongoClient = mongodb.MongoClient;

// Define the route to get products by category
app.get("/products/:category", async (req, res) => {
  try {
    const client = await MongoClient.connect(
      "mongodb+srv://lucky:llucky%404269@cluster0.rvkqn7t.mongodb.net/ashokit_nodejs?retryWrites=true&w=majority&appName=Cluster0",
      {}
    );

    const db = client.db("ashokit_nodejs");
    const products = await db
      .collection("prducts")
      .find({ category: req.params.category })
      .toArray();

    res.send(products);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "An error occurred while fetching products." });
  }
});

// Define the port
const port = process.env.PORT || 8080;

// Start the server
app.listen(port, () => {
  console.log("Server started on port", port);
});


// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// // import the module
// var express = require("express");
// var mongodb = require("mongodb");
// //create the rest object
// var app = express();
// //create the ref variable
// var ashokIT = mongodb.MongoClient;
// app.get("/prducts/:category", function (req, res) {
//     ashokIT.connect("mongodb+srv://lucky:llucky%404269@cluster0.rvkqn7t.mongodb.net/ashokit_nodejs?retryWrites=true&w=majority&appName=Cluster0", function (err, connection) {
//         if (err)
//             throw err;
//         else {
//             var db = connection.db("ashokit_nodejs");
//             db.collection("prducts").find({ "category": req.params.
//                     category }).toArray(function (err, array) {
//                 if (err)
//                     throw err;
//                 else {
//                     res.send(array);
//                 }
//             });
//         }
//     });
// });
// var port = process.env.PORT || 8080;
// app.listen(port, function () {
//     console.log("server Started");
// });
