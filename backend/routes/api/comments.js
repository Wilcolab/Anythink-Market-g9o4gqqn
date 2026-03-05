/**
 * Express router for handling API comments endpoints.
 * @type {import('express').Router}
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

// Hey GitHub Copilot
router.get("/", (req, res) => {
  Comment.find()
    .then((comments) => res.json(comments))
    .catch((err) => res.status(400).json("Error: " + err));
})

// add another endpoint for deleting a comment by id
router.delete("/:id", (req, res) => {
    Comment.findByIdAndDelete(req.params.id)
        .then(() => res.json({ message: "Comment deleted." }))
        .catch((err) => res.status(400).json({ error: err.message }));
});