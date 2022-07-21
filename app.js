const express = require('express');
const app = express();
const cors = require ('cors');
require('./connection/mongoconn');
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use('/static', express.static('public'));
app.use(cors());
const port = 3001;

const usersRoutes = require('./routes/users');
app.use('/users', usersRoutes);

const propertiesRoutes = require('./routes/properties');
app.use('/properties', propertiesRoutes);

const favoritesRoutes = require('./routes/favorites');
app.use('/favorites', favoritesRoutes);

const citiesRoutes = require('./routes/cities');
app.use('/cities', citiesRoutes);

const zonesRoutes = require('./routes/zones');
app.use('/zones', zonesRoutes);

app.listen(port, () => {
  console.log('Server running');
})
