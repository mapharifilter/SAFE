
  const Pool = require('pg').Pool
  const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'safety',
    password: 'Letsdoit!',
    port: 5432,
  })
  
  
  const register = (request, response) => {
    const { fullname, email,username,password } = request.body
  
    pool.query('INSERT INTO cleaner (fullname, username,email,password) VALUES ($1, $2,$3, $4)', [fullname, username,email,password], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`success`)
    })
}
  
  module.exports = {
   register
  }