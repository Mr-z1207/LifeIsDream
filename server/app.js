// 引入插件
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

// ========================== 连接数据库 ==========================
// 通过将useNewUrlParser设置为true来避免“不建议使用当前URL字符串解析器”警告
mongoose.connect('mongodb://localhost/lifeTest', { useNewUrlParser: true })
// 连接状态
var db = mongoose.connection;
// 连接失败抛出错误
db.on('error',(err)=>{
	throw err
});
// 连接成功回调函数
db.once('open',()=>{
	console.log('lifeTest DB server connected....');
});


var app = express();

// =========================== 解决跨域 ===========================
//跨域设置
app.use((req,res,next)=>{
	res.append("Access-Control-Allow-Origin","http://localhost:8080");
	res.append("Access-Control-Allow-Credentials",true);
	res.append("Access-Control-Allow-Methods","GET, POST, PUT,DELETE");
	res.append("Access-Control-Allow-Headers", "Content-Type, X-Requested-With,X-File-Name"); 
	next();
})
//OPTIONS请求处理
app.use((req,res,next)=>{
    if(req.method == 'OPTIONS'){
        res.send('OPTIONS OK');
    }else{
        next();
    }
})

// ========================== 使用中间件 ==========================
// 输出格式化日志
app.use(logger('dev'));

// 代替了以前的body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 使用cookie中间件
app.use(cookieParser());

// 请求静态资源
app.use(express.static(path.join(__dirname, 'public')));

// =========================== 处理路由 ===========================
app.use('/users', require('./routes/users.js'));
app.use('/lifes', require('./routes/lifes.js'));


module.exports = app;
