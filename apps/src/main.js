console.log('Hello World!');
var config = require('./app/config/index');
const app = require('./index');
const mongoose = require('mongoose');
mongoose.connect(config.getDbConnectionString(), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
