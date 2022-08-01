const FavoriteModel = require('./../models/favoriteModel');
const responseError = require("../utilities/responseError");
const responseOk = require("../utilities/responseOK");
require('../connection/mongoconn');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

const addFavorite = async (favoriteData) => {
  try {
    const favorite = new FavoriteModel(favoriteData);
    await favorite.save();
    return responseOk({ favorite });
  } catch (error) {
    return responseError(500, "Server error");
  }
};

const getFavorite = async (userId, propertyId) => {
  try {
    console.log('consulta user', userId);
    console.log('consulta property', propertyId);
    const favorite = await FavoriteModel.find({ userId: ObjectId(userId), propertyId: ObjectId(propertyId) })
    console.log('favorite', favorite);
    return responseOk({ favorite });
  } catch (error) {
    return responseError(500, "Server error");
  }
};

const getFavorites = async (userId) => {
  try {
    const favoritesByUser = await FavoriteModel.aggregate(
      [
        {
          $match: {
            userId: ObjectId(userId)
          }
        },
        {
          $lookup: {
            from: 'properties',
            localField: 'propertyId',
            foreignField: '_id',
            as: 'property'
          }
        },
        {
          $unwind: '$property'
        },
        {
          $project: {
            property: '$property',
          }
        }
      ]);
    if (favoritesByUser.length > 0) {
      return responseOk({ favoritesByUser });
    }
    return responseError(404, 'There are no favorite properties for user:  ' + id);

  } catch (error) {
    console.log(error);
    return responseError(500, 'Server error');
  }
};


module.exports = {
  getFavorites,
  addFavorite,
  getFavorite
}