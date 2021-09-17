import * as express from 'express';
import * as mysql from 'mysql';
import * as dotenv from 'dotenv'
/**Conenct use Json */
// const param ={
//     host: "localhost",
//     database: "demoapi",
//     user: "root",
//     password: "Phuc13031999",
//     port:3306
// }
// const Conect = mysql.createConnection(param) ;
// Conect.connect((err)=>{
//   if(err) throw err;
//   console.log("Conect complete");
  
// })

/**Conenct use Json */
const result = dotenv.config({
  path: __dirname + "/../../.env",
})
console.log(result.parsed);
if (result.error) throw result.error;
const paramenv ={
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port:3306
}

const Conectenv = mysql.createConnection(paramenv) ;
Conectenv.connect((err)=>{
  if(err) throw err;
  console.log("Conect complete use env");
  
})