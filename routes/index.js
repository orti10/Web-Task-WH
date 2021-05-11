var express = require('express');
var router = express.Router();
const {client} = require('../DB/db')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/products/:search',function(req, res, next){
  client.query("SELECT * FROM products WHERE name LIKE $1",["%"+req.params.search+"%"], (err, result) => {
    if (err) {
      console.log(err.stack)
    } else {
        return res.send(result.rows)
    }
  })
})
router.get('/products',function(req, res, next){
  client.query("SELECT * FROM products", (err, result) => {
    if (err) {
      console.log(err.stack)
    } else {
        return res.send(result.rows)
    }
  })
})
router.put('/products', function(req, res, next){
  client.query("INSERT into products (name, price) VALUES ($1, $2)",[req.body.name, req.body.price], (err, result) => {
    if (err) {
      console.log(err.stack)
    } else {
      return res.send(result.rows)
    }
  })
})
module.exports = router;

