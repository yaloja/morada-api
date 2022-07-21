const responseError = require("../utilities/responseError");
const responseOk = require("../utilities/responseOK");
const ZoneModel = require("./../models/zoneModel");

const addZone = async (zoneData) => {
  try {
    const zone = new ZoneModel(zoneData);
    await zone.save();
    return responseOk({ zone });
  } catch (error) {
    return responseError(500, "Server error");
  }
};

const getZones = async (filter) => {
  try {
    const query = buildQueryFilter(filter);
    const zones = await ZoneModel.find(query);
    return responseOk({ zones });
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

const getZone = async (id) => {
  try {
    const zone = await ZoneModel.findById(id).populate("cityId", "name").exec();
    if (zone) {
      return responseOk({ zone });
    }   
    return responseError(404, "Zone not found");
  } catch (error) {
    return responseError(500, "Server error");
  }
};

const getZonesByCity = async (cityId) => {
  try {
    const zones = await ZoneModel.find({cityId : cityId}).populate("cityId", "code name").exec();
    if (zones) {
      return responseOk({ zones });
    }
    return responseError(404, "Zones not found");
  } catch (error) {
    return responseError(500, "Server error");
  }
};

module.exports = {
    addZone,
    getZones,
    getZone,
    getZonesByCity
};