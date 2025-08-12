const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

/* GET /
This endpoint retrieves all comments from the database.

Request: GET /
Response: On success, it returns a JSON array of all comment objects. In case of a server error, it returns a 500 status code with a JSON error message.

DELETE /:id
This endpoint deletes a specific comment using its unique ID.

Request: DELETE /:id (where :id is the unique identifier of the comment)
Response: On successful deletion, it returns a 204 status code with no body. A 500 status code with a JSON error message is returned if a server error occurs. */

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});
// add another endpoint for deleting a comment
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await Comment.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});