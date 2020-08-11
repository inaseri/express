const User = require("../models/user.model.js");

const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.signup = (req, res) => {

    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            const user = ({
                username: req.body.username,
                password: hash,
                fullName: req.body.fullName
            });
            User.create(user, (err, response) => {
                if (err)
                    res.status(500).send({
                        message: err
                    });
                else res.send(response);
            });
        });
    });
};

exports.login = (req, res, next) => {

};
