const { Router } = require("express");

const router = Router();

// GET /
router.get("/", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

// GET /about
router.get("/about", (req, res) => {
  res.json({ message: "This is the about page." });
});

module.exports = router;
