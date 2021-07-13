var configValues = require('./config.json');

module.exports = {
  getDbConnectionString: function () {
    return (
      'mongodb+srv://sweety:' +
      configValues.pwd +
      '@cluster0.gdjuf.mongodb.net/bookList?retryWrites=true&w=majority'
    );
  },
};
