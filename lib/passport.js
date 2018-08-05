const LocalStrategy = require('passport-local').Strategy
const db = require('./db')
const _ = require('lodash')
const models = require('../models/index')
const User = require('../models/user')

const initPassport = (passport) => {
    //패스포트 로컬 전략 초기화
    passport.use(new LocalStrategy({
        usernameField:'email',
        passwordField:'password'
    },(id, password, done)=>{
        models.User.findOne({
            where:{
                email:id,
                password:password
            }
        }).then((user)=>{
            if(user)
            {
                return done(null, {
                    _id: user.id,
                    email: user.email,
                    name: user.name,
                    point: user.point
                });
            }
        });
    }));
    //패스포트 세션 저장 방법 초기화
    //로그인 시도시 세션을 저장할 때 실행되는 함수
    passport.serializeUser((user, done)=>{
        //세션보따리에 객체를 저장한다.
        console.log(user);
        done(null, user);
    });
    //페이지 로드 시에 저장된 세션을 꺼내오는 함수
    passport.deserializeUser((user, done)=>{
        //세션보따리에서 객체를 가져와서 페이지에 보내준다.
        done(null, user);
    });
}
module.exports = initPassport 