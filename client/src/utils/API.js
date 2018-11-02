import axios from "axios";

export default {
  // Gets all books
  getCards: function() {
    return axios.get("/api/cards");
  },
  // Gets the book with the given id
  getCard: function(id) {
    return axios.get("/api/cards/" + id);
  },
  // Deletes the book with the given id
  deleteCard: function(id) {
    return axios.delete("/api/cards/" + id);
  },
  // Saves a book to the database
  saveCard: function(id, cardData) {
    return axios.post("/api/cards/" + id, cardData);
  },
  addLikes: function(id, cardData){
    return axios.put("/api/cards/" + id, cardData)
  },
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the book with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a book to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  getDecks: function() {
    return axios.get("/api/decks");
  },
  // Gets the book with the given id
  getDeck: function(id) {
    return axios.get("/api/decks/" + id);
  },
  // Deletes the book with the given id
  deleteDeck: function(id) {
    return axios.delete("/api/decks/" + id);
  },
  // Saves a book to the database
  saveDeck: function(deckData) {
    return axios.post("/api/decks", deckData);
  },
  updateDeck: function(id, cardData){
    return axios.put("/api/decks/" + id, cardData);
  }
};
