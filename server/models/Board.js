const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boardSchema = new Schema({
    title: String,
    creator: {type: Schema.Types.ObjectId, ref: 'User'}
});

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;