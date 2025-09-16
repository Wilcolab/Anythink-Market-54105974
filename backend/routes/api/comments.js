/**
 * @module routes/api/comments
 * @description Express router for handling comment-related endpoints.
 */

 /**
    * GET /
    * @summary Retrieve all comments.
    * @route GET /api/comments
    * @returns {Array<Object>} 200 - An array of comment objects
    * @returns {Object} 500 - Error message if fetching fails
    */

 /**
    * DELETE /:id
    * @summary Delete a comment by its ID.
    * @route DELETE /api/comments/{id}
    * @param {string} id.path.required - The ID of the comment to delete
    * @returns {Object} 200 - Success message
    * @returns {Object} 404 - Error message if comment not found
    * @returns {Object} 500 - Error message if deletion fails
    */

 /**
    * POST /
    * @summary Create a new comment.
    * @route POST /api/comments
    * @param {Object} request.body.required - Comment object to create
    * @returns {Object} 201 - The created comment object
    * @returns {Object} 400 - Error message if creation fails
    */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
//Hey Github Copilot, please help me write the routes for comments

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

//add another endpoint for deleting a comment by id
router.delete("/:id", async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.json({ message: "Comment deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete comment" });
  }
});
// add an endpoint for creating a new comment
router.post("/", async (req, res) => {
    try {
        const comment = new Comment(req.body);
        await comment.save();
        res.status(201).json(comment);
    } catch (err) {
        res.status(400).json({ error: "Failed to create comment" });
    }
});