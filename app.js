const express = require('express');
const path = require('path');
const expressSession = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const moment = require('moment')
const flash = require('connect-flash')
const _ = require('lodash')

const app = express();

const db = require('./lib/db')

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/static', express.static(path.resolve(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

//세션-미들웨어에 적용
app.use(expressSession({
    secret:"chance",
    resave:false,
    saveUninitialized:true
}));

app.use(flash())

const initPassport = require('./lib/passport')
initPassport(passport)

//인증 모듈 설정
app.use(passport.initialize());         //패스포트 초기화
app.use(passport.session());            //패스포트 세션 연결



app.get('/', (req, res)=>{
    var currentTime = moment().format('YYYYMMDD HH:mm:ss')

    res.render('index', {
        user:req.user,
        time:currentTime,
        message:req.flash('test')
    });

    // const arr = [1,2,3,4,5]
    // // 배열.every(함수) : 함수 안에 실행되는 반환값이 모두 참일 경우, 참을 반환. 하나라도 거짓일 경우, 거짓을 반환.
    // const bTrue = arr.every((v) => {
    //     return v < 3
    // });
    // console.log(bTrue)
});

const Router = require('./routes/index')
app.use(Router)

app.get('/list', (req, res)=>{
    res.render('list');
});
app.get('/view', (req, res)=>{
    res.render('sellerView');
});

app.listen(3000, ()=>{
    console.log('서버개설');
});