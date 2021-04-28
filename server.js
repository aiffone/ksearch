const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.json({ message: "API is live!" }));
app.get(cors());
// enable CORS without external module
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// API Routes
app.use("/api/users", require("./routes/users"));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
