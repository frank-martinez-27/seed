if (process.env.NODE_ENV === 'development') {
  module.exports = require('./configureApp.dev');
}
