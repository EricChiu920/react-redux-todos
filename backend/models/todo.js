const mongoose = require('mongoose');
require('dotenv').config();

const { DB_USER } = process.env;
const { DB_PASS } = process.env;
const mongoDB = `mongodb://${DB_USER}:${DB_PASS}@ds241578.mlab.com:41578/todos_practice`;
mongoose.connect(mongoDB);
mongoose.set('debug', true);
mongoose.Promise = Promise;

const todoSchema = new mongoose.Schema({
  task: String,
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
