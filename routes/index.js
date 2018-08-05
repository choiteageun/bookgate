const express = require('express')
//라우터 리스트
const join = require('./join')
const login = require('./login')

//메인 라우터
const router = express.Router()

router.use('/join', join)
router.use('/login', login)

module.exports = router