const sql = require("./db.js");

// constructor
const User = function(user) {
    this.username = user.username;
    this.password = user.password;
    this.fullName = user.fullName;
};

User.create = (newUser, result) => {
    sql.query("SELECT * FROM User where username = ?", newUser.username, (err, res) => {
        if (res.length > 0) {
            if (err) {result(err, null)}
            if (res) {result('User already in use.')}
        } else {
            sql.query('insert into User set ?', newUser, (err, res) => {
                    if (err) {result(err, null)}
                    if (res) {result('User successfully created.')}
                }
            );
        }
    });
};


module.exports = User;
