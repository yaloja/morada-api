const FavoriteModel = require('./../models/favoriteModel');
const responseError = require("../utilities/responseError");
const responseOk = require("../utilities/responseOK");

const addFavorite = async (favoriteData) => {
    try {
      const favorite = new FavoriteModel(favoriteData);
      await favorite.save();
      return responseOk({ favorite });
    } catch (error) {
      return responseError(500, "Server error");
    }
  };
  
  const getFavorites = async (userId) => {
    try {
      const favorites = await FavoriteModel.find({ userId: userId });
      return responseOk({ favorites });
    } catch (error) {
      return responseError(500, "Server error");
    }
  };


module.exports = {
    getFavorites,
    addFavorite
}