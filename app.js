const express = require('express');
const app = express();
require('./connection/mongoconn');
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
const port = 3001;

const usersRoutes = require('./routes/users');
app.use('/users', usersRoutes);

const propertiesRoutes = require('./routes/properties');
app.use('/properties', propertiesRoutes);

const favoritesRoutes = require('./routes/favorites');
app.use('/favorites', favoritesRoutes);

app.listen(port, () => {
  console.log('Server running');
})
