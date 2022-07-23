const responseError = require("../utilities/responseError");
const responseOk = require("../utilities/responseOK");
const PropertyModel = require("./../models/propertyModel");

const addProperty = async (propertyData) => {
  try {
    const property = new PropertyModel(propertyData);
    await property.save();
    return responseOk({ property });
  } catch (error) {
    return responseError(500, "Server error");
  }
};

const getProperties = async (filter) => {
  try {
    const query = buildQueryFilter(filter);
    const properties = await PropertyModel.find(query)
    .populate("city", "name")
    .populate("zone", "name");
    return responseOk({ properties });
  } catch (error) {
    return responseError(500, "Server error");
  }
};

const buildQueryFilter = (filter) => {
  const query = {};
  if (filter.city) query.city = Number(filter.city);
  if (filter.zone) query.zone = Number(filter.zone);
  if (filter.propertyType) query.propertyType = Number(filter.propertyType);
  if (filter.businessType) query.businessType = Number(filter.businessType);
  if (filter.status) query.status = Number(filter.status);
  if (filter.minPrice && filter.maxPrice) {
    query.value = {
      $gte: Number(filter.minPrice),
      $lte: Number(filter.maxPrice),
    };
  }
  return query;
};

const getProperty = async (id) => {
  try {
    const property = await PropertyModel.findById(id)
    .populate("city", "name")
    .populate("zone", "name")
    .populate("ownerId", "name email phone")
    .exec();
    if (property) {
      return responseOk({ property });
    }
    return responseError(404, "Property not found");
  } catch (error) {
    return responseError(500, "Server error");
  }
};

module.exports = {
  addProperty,
  getProperties,
  getProperty,
};