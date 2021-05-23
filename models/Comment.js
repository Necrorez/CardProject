var mongoose = require("mongoose");

var commentSchema = mongoose.Schema({
    card: [{ type: mongoose.Schema.Types.ObjectId, ref: "Card" }],
    text: String,
    created_at: Date,
});

module.exports = mongoose.model("Comment", commentSchema);