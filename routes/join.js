const express = require('express')
const db = require('../lib/db')
const _ =  require('lodash')
const models = require('../models/index')
const User = require('../models/user')

//라우터 분리
const joinRouter = express.Router()
joinRouter.get('/', (req, res)=>{
    res.render('join',{
        error: req.flash('error')
    });
});
joinRouter.post('/', (req,res)=>{
    
    const joinData = req.body

    //비밀번호 검증
    if(joinData.password != joinData.passConf)
    {
        req.flash('error', '비밀번호 확인이 일치하지 않습니다.')
        res.redirect('/join')
        return;
    }

    //NULL값 검증
    const notNullData = [
        { key: 'email', name:'이메일'},
        { key: 'password', name:'비밀번호'},
        { key: 'passConf', name:'비밀번호 확인'},
        { key: 'name', name:'이름'},
        { key: 'tel1', name:'휴대전화'},
        { key: 'tel2', name:'휴대전화'},
        { key: 'tel3', name:'휴대전화'}
    ]

    const bNotNull = notNullData.every((v) =>{
        if(!joinData[v.key]){
            req.flash('error', v.name+ '값을 입력해주세요')
            res.redirect('/join')
            return false;
        }
        return true;
    })
    if(!bNotNull)
    {
        return;
    }
    
    models.User.findAll({
        where:{
            email:joinData.email
        }
    }).then((users)=>{
        if(users.length > 0){
            req.flash('error', '이메일이 이미 존재합니다')
            res.redirect('/join');
            return;
        }
        else{
        
            models.User.create({
                email: joinData.email,
                password: joinData.password,
                name: joinData.name,
                tel: `${joinData.tel1}${joinData.tel2}${joinData.tel3}`,
                region: `${joinData.region1} ${joinData.region2}`,
                point: 100
            }).then((user)=>{
                res.redirect('/');
            })
        }
    });
    //이메일 유일성 검증
    // db.user.findOne({email: joinData.email.trim()}, (err, doc)=>{
    //     if(!_.isEmpty(doc))
    //     {
    //         //이메일이 유일하지 않음.
    //         req.flash('error', '이메일이 이미 존재합니다.')
    //         res.redirect('/join')
    //         return;
    //     }
    //     else
    //     {
    //         const insertData = {
    //             email: joinData.email,
    //             password: joinData.password,
    //             name: joinData.name,
    //             tel: `${joinData.tel1}-${joinData.tel2}-${joinData.tel3}`,
    //             region: `${joinData.region1}시(군,구) ${joinData.region2}동`
    //         }
    //         models.user
    //         db.user.insert(insertData, (err, newDoc)=>{
    //             res.redirect('/')
    //         });
    //     }
    // });
    


    //플래쉬 메시지 사용
    // req.flash('test', '테스트메시지')

    
    
});
module.exports =  joinRouter
