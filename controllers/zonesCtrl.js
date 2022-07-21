const {
    addZone,
    getZones,
    getZone,
    getZonesByCity
  } = require("./../services/zonesService");
  
  const create = async (req, res) => {
    try {
        const zone = req.body;
        const { statusHttp, response } = await addZone(zone);
        res.status(statusHttp).json(response);
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  const getAll = async (req, res) => {
    try {
        const filter = req.query;
        const { statusHttp, response } = await getZones(filter);
        res.status(statusHttp).json(response);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  const getDetail = async (req, res) => {
    try {
        const id = req.params.id;
        const { statusHttp, response } = await getZone(id);
        res.status(statusHttp).json(response);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  const getCityZones = async (req, res) => {
    try {
        const id = req.params.id;
        const { statusHttp, response } = await getZonesByCity(id);
        res.status(statusHttp).json(response);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  module.exports = {
    create,
    getAll,
    getDetail,
    getCityZones
  };