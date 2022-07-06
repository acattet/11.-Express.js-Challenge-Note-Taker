const router = require("express").Router();
const { createNewNote, validateNote } = require("../../lib/notes.js");
const { notes } = require("../../db/db.json");

router.get("/notes", (req, res) => {
    res.json(notes);
});

router.post("/notes", (req, res) => {
    req.body.id = notes.length.toString();
  
});

module.exports = router;