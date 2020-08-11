const sql = require("./db.js");

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// constructor
const User = function(user) {
    this.username = user.username;
    this.password = user.password;
    this.fullName = user.fullName;
};

User.create = (newUser, result) => {
    sql.query("SELECT * FROM User where username = ?", newUser.username, (err, res) => {
        if (res.length > 0) {
            if (err) result(err, null)
            if (res) result('User already in use.')
        } else {
            sql.query('insert into User set ?', newUser, (err, res) => {
                    if (err) {result(err, null)}
                    if (res) {result('User successfully created.')}
                }
            );
        }
    });
};

User.login = (user, result) => {
    sql.query('select * from User where username = ?', user.username, (err, res) => {
        if (res.length <= 0) {
            if (err) result(err, null)
            if (res) result('Username not found.')
        } else {
            if (err) result(err, null)
            if (res) {
                bcrypt.compare(user.password, res[0].password, function(err2, result2) {
                    if (result2) {
                        const token = jwt.sign(
                            { userId: user._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' });
                        result(null, {id: res[0].id, username: res[0].username, token: token});
                    } else {
                        result('Password is incorrect.')
                    }
                });
            }
        }
    });
};


module.exports = User;
