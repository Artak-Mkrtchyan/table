import mysql from 'mysql';

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database: "node",
  port: 3306,
  insecureAuth : true
});

db.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }

  console.log(`connected as id ${db.threadId}`);
});

export default db;

