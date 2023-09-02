import mysql from 'mysql';

export const con = mysql.createConnection({
    database: "egproject",
    host: "localhost",
    user: "root",
    password: "1234"
});

const connect = () => con.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

export default connect;