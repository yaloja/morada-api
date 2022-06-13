const { auth, register, info } = require('../services/usersService');

const login = async (req, res) => {
  try {
    const user = req.body;
    const { statusHttp, response } = await auth(user.email, user.password);
    res.status(statusHttp).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const getUser = async (req, res) => {
  try {
    //const {id} = req.query; // const id = req.query.id
    const {id} = req.payload;
    const { statusHttp, response } = await info(id);
    res.status(statusHttp).json(response);
  } catch (error) {
    res.status(500).send(error);
  }
}

const signup = async (req, res) => {
  try {
    const user = req.body;
    const { statusHttp, response } = await register(user);
    res.status(statusHttp).json(response);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
    login,
    signup,
    getUser
}