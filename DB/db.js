const { Client } = require('pg')
const client = new Client({
    connectionString:'postgres://swglbnxm:ao9cMpqEmBZVXk3tuouIcS9MXk2J8QFp@queenie.db.elephantsql.com:5432/swglbnxm',
    
  })
async function connectDB(){
    
    await client.connect()
}
// function query (text, values){
//     console.log(values)
    
// }
module.exports = {connectDB, client} 

