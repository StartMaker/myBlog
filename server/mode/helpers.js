const MYSQL = require('mysql');

//数据库配置
const mysql = MYSQL.createPool({
  host: '127.0.0.1',
  port: 3306,
  user: 'ltp',
  password: '12345678',
  database: 'myblog'
});

function runSql(sql) {
  return new Promise(function (resolve, reject) {
    mysql.getConnection(function (err, connection) {
      if(err){
        reject(err);
      }
      else {
        connection.query(sql, (err, result) => {
          connection.release();
          if(err){
            reject(err);
          }
          else {
            resolve(JSON.parse(JSON.stringify(result)));
          }
        })
      }
    })
  })
}

module.exports = {runSql};
