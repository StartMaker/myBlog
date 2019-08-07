const {runSql} = require('./helpers');

module.export = {
  login: function (username, password) {
    return runSql(`select exists(select * from blog.members where username=\'${username}\' and password=${password}) as result`);
  }
};