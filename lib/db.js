import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: 'localhost',      
  user: 'root',      
  password: '123jehQ*', 
  database: 'prueba_tecnica1' 
});

export default db;
