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
  response.status(200);
});

cartItems.get("/cart-items/:id", (request, response) => {
  let id = parseInt(request.params.id);

  let cartItems2 = carts.find(cart => cart.id === id);
  if (cartItems2) {
    response.json(cartItems2);
    response.status(200);
  } else {
    response.status(404);
    response.send(`Id:${id} can not be found`);
  }
});

cartItems.post("/cart-items", (request, response) => {
  let newCart = request.body;
  newCart.id = nextId;
  nextId++;

  carts.push(newCart);
  response.status(200);
  response.json(carts);
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
    response.sendStatus(204);
  } else {
    response.status(204);
    response.send("No Content");
  }
});

module.exports = { cartItems };
