const express = require('express')
const passport = require('passport')

const router = express.Router()

router.post('/', passport.authenticate('local', {failureRedirect: '/'}), (req,res)=>{
    res.redirect('/');
});

router.get('/', (req, res)=>{
    res.render('login');
});

module.exports = router