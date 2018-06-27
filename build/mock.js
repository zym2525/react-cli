var express = require('express');
var app = express();
let apiRoutes = express.Router()

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

// 启动mock
Mock(apiRoutes)
app.use('/api', apiRoutes)

app.listen(3000);


function Mock(app){
  app.get('/getSceneInfo',function(req,res){
    res.json({
      status: 0,
      message: '数据请求成功，请查看data字段',
      data: {
        sceneName: '西餐厅偶遇',
        sceneId: 12322
      }
    })
  })
}
