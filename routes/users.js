const express = require("express");
const router = express.Router();
const userData = require("../config/localData");

const User = require("../models/User");

router.get("/local", async (req, res) => {
  try {
    res.json(userData);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/local/search", async (req, res) => {
  const value = req.body.searchTerm;
  let newList = [];
  try {
    if (value.length > 0) {
      userData.forEach((item) => {
        if (
          item.firstName.toLocaleLowerCase().includes(value) ||
          item.lastName.toLocaleLowerCase().includes(value) ||
          item.email.toLocaleLowerCase().includes(value) ||
          item.gender.toLocaleLowerCase().includes(value) ||
          item.address.toLocaleLowerCase().includes(value) ||
          item.buzzWord.toLocaleLowerCase().includes(value) ||
          item.age === value
        ) {
          newList.push(item);
        }
      });
    }
    res.json(newList);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
