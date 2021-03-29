var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 新增组件
var mongoose = require('mongoose');

// 连接数据库
mongoose.connect('mongodb://localhost/lifeTest')
// 连接状态
var db = mongoose.connection;
// 连接失败抛出错误
db.on('error',(err)=>{
	throw err
});
// 连接成功回调函数
db.once('open',()=>{
	console.log('server lifeTest DB connected....');
});


var app = express();

// 输出格式化日志
app.use(logger('dev'));

// 代替了以前的body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 使用cookie中间件
app.use(cookieParser());

// 请求静态资源
app.use(express.static(path.join(__dirname, 'public')));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
