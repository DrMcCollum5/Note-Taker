//  Dependency
const path = require("path");
const router = require("express").Router();

// Send notes to the notes.html file

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
})

// If no matching route is found default to home
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;