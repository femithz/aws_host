const express = require('express');

const router = express.Router();

router.get('/', function( req, res)  {
    res.send({message: 'Auth Section is Here.'});
})

router.get('/login', function( req, res)  {
    res.send({message: 'Auth Section but login route is Here.'});
})





module.exports = router;
