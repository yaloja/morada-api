const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require('./../models/userModel');
const responseError = require("../utilities/responseError");
const responseOk = require("../utilities/responseOK");


const auth = async (email, password) => {
  try {
    const user = await UserModel.findOne({ email: email });
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const payload = {
          id: user._id,
          role: user.role
        }
        const token = jwt.sign(payload, process.env.JWT_SECRET);
        return responseOk({ token: token, role: user.role });
      } 
    }
    return responseError(401, "user unauthorized");
  } catch (error) {
    console.log(error);
    return responseError(500, 'Server error');
  }
};

const info = async (id) => {
  try {
    const user = await UserModel.findById(id);
    return responseOk({ user });
  } catch (error) {
    return responseError(500, 'Server error');
  }
}

const register = async (userData) => {
  try {
    if (await validateEmail(userData.email)) {
      return responseError(400, 'Email is alredy used');
    }
    //Encriptar la contrasena
    const passwordEncrypted = await bcrypt.hash(userData.password, 19);
    userData.password = passwordEncrypted;

    const user = new UserModel(userData);
    await user.save();
    return responseOk({ user });
  } catch (error) {
    console.log('error', error);
    return responseError(500, 'Server error');
  }
};

const validateEmail = async (email) => {
  try {
    const checkEmail = await UserModel.findOne({ email: email });
    return checkEmail ? true : false;
  } catch (error) {
    return responseError(500, 'Server error');
  }
}

module.exports = {
    auth,
    register,
    info
}