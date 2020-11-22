const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Sevrer Error");
  }
});

router.post("/search", async (req, res) => {
  const [name] = req.body.searchTerm;
  // const query = {
  //   $or: [
  //     { firstName: { $regex: /${req.body.searchTerm}/i } },
  //     { lastName: { $regex: /${req.body.searchTerm}/i } },
  //   ],
  // };
  const query = {
    $or: [
      { firstName: req.body.searchTerm },
      { lastName: req.body.searchTerm },
    ],
  };
  console.log(query)
  try {
    const users = await User.find(query);
    res.json(users);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Sevrer Error");
  }
});

module.exports = router;
