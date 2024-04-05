import mysql from'mysql2/promise'

const dbconnection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'shopeasy',
    password: '1234',
  });

  export default dbconnection;