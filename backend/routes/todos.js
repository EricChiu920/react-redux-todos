const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.dbUser}:${process.env.dbPass}@ds241578.mlab.com:41578/todos_practice`);
mongoose.set('debug', true);
mongoose.Promise = Promise;

const todoSchema = new mongoose.Schema({
  task: String,
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
