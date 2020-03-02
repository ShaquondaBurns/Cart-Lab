const express = require("express");
const cartItems = express.Router();

const carts = [
  { id: 0, product: "Polo Shirt", price: 150, quantity: 25 },
  { id: 1, product: "Polo Shorts", price: 100, quantity: 50 },
  { id: 2, product: "Watch", price: 150, quantity: 10 },
  { id: 3, product: "Jordan Shoes", price: 220, quantity: 45 }
];

let nextId = 4;

cartItems.get("/cart-items", (request, response) => {
  response.json(carts);
});

cartItems.get("/cart-items/:id", (request, response) => {
  let id = parseInt(request.params.id);

  let cartItems2 = carts.find(cart => cart.id === id);
  if (cartItems2) {
    response.json(cartItems2);
  } else {
    response.status(200);
    response.send("OK");
  }
});

cartItems.post("/cart-items", (request, response) => {
  let id = parseInt(request.params.id);
  let updateCart = request.body;
  updateCart.id = id;
  nextId++;

  let index = carts.findIndex(cart => cart.id === id);
  if (index >= 0) {
    carts.splice(index, 1, updateCart);
    response.json(carts);
  } else {
    response.status(201);
    response.send("Created");
  }
});

cartItems.put("/cart-items/:id", (request, response) => {
  let id = parseInt(request.params.id);
  let updateCart = request.body;
  updateCart.id = id;
  nextId++;
  let index = carts.findIndex(cart => cart.id === id);
  if (index >= 0) {
    carts.splice(index, 1, updateCart);
    response.json(carts);
  } else {
    response.status(200);
    response.send("Ok");
  }
});

cartItems.delete("/cart-items/:id", (request, response) => {
  let id = parseInt(request.params.id);
let index = carts.findIndex(cart => car.id === id);
if (index >= 0) {
  carts.splice(index, i);
} else {
  response.send("No Content");
}

module.exports = cartItems;
