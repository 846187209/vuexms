var express = require('express');
var router = express.Router();

//引入连接数据库模块
const connection = require('./conn');

//连接数据库
connection.connect(() => {
    console.log("数据连接成功！");
})

//接收请求
router.post('/checklogin',(req,res) => {
   let {username,password} = req.body;
    //去数据库查询是否存在这个账号和密码的用户
    //执行sql查询
    const sqlStr = `select * from users where username='${username}' and password='${password}'`
    connection.query(sqlStr,(err,data) => {
        if(err){
            throw err;
        }else{
            res.send(data);
        }
    })
})

module.exports = router;
