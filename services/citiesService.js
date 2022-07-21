const responseError = require("../utilities/responseError");
const responseOk = require("../utilities/responseOK");
const CityModel = require("./../models/cityModel");

const addCity = async (cityData) => {
  try {
    const city = new CityModel(cityData);
    await city.save();
    return responseOk({ city });
  } catch (error) {
    return responseError(500, "Server error");
  }
};

const getCities = async (filter) => {
  try {
    const query = buildQueryFilter(filter);
    const cities = await CityModel.find(query);
    return responseOk({ cities });
  } catch (error) {
    return responseError(500, "Server error");
  }
};

const buildQueryFilter = (filter) => {
  const query = {};
  if (filter.code) query.code = Number(filter.code);
  if (filter.name) query.name = String(filter.name);
  return query;
};

const getCity = async (id) => {
  try {
    const city = await CityModel.findById(id);
    if (city) {
      return responseOk({ city });
    }
    return responseError(404, "City not found");
  } catch (error) {
    return responseError(500, "Server error");
  }
};

module.exports = {
    addCity,
    getCities,
    getCity,
};