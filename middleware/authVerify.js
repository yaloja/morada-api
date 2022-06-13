const jwt = require("jsonwebtoken");

const authVerify = (req, res, next) => {
    if(req.headers.authorization
        && req.headers.authorization.split(' ')[0] === 'Bearer') {

            const token = req.headers.authorization.split(' ')[1];

            try {
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                req.payload = decoded;
            } catch {
                return res.status(401).send('user unauthorized');
            }
    } else {
        return res.status(400).send('token mandatory');
    }
    next();
}

module.exports = authVerify;