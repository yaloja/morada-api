const {
    addCity,
    getCities,
    getCity,
  } = require("./../services/citiesService");
  
  const create = async (req, res) => {
    try {
        const city = req.body;
        const { statusHttp, response } = await addCity(city);
        res.status(statusHttp).json(response);
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  const getAll = async (req, res) => {
    try {
        const filter = req.query;
        const { statusHttp, response } = await getCities(filter);
        res.status(statusHttp).json(response);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  const getDetail = async (req, res) => {
    try {
        const id = req.params.id;
        const { statusHttp, response } = await getCity(id);
        res.status(statusHttp).json(response);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  module.exports = {
    create,
    getAll,
    getDetail,
  };