const {
    addFavorite,
    getFavorites
  } = require("./../services/favoritesService");
  
  const attach = async (req, res) => {
    try {
        const favorite = req.body;
        const { statusHttp, response } = await addFavorite(favorite);
        res.status(statusHttp).json(response);
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  const getAll = async (req, res) => {
    try {
        const {id} = req.payload;
        const { statusHttp, response } = await getFavorites(id);
        res.status(statusHttp).json(response);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  module.exports = {
    attach,
    getAll
  };