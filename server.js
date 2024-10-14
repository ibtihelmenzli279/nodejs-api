// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch((err) => {
    console.log('Could not connect to the database. Error...', err);
    process.exit();
  });

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: 'Server is running :D' });
});

const PORT = process.env.PORT || 8081; // Use a default port if not specified

// Import and use your app routes
require('./app/routes/app.routes.js')(app);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});