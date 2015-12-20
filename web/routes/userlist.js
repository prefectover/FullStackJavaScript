var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/mydb';  
var insertData = function(db, callback) {  
  //连接到表  
  var collection = db.collection('');
  //插入数据
  collection.insert(data, function(err, result) { 
    if(err)
    {
      console.log('Error:'+ err);
      return;
    }  
    callback(result);
  });
}
var selectData = function(db,data, callback) {  
  //连接到表  
  var collection = db.collection('zhanghu');
  //查询数据
  collection.find(data).toArray(function(err, result) {
    if(err)
    {
      console.log('Error:'+ err);
      return;
    }     
    callback(result);
  });
}
var updateData = function(db, callback) {  
  //连接到表  
  var collection = db.collection('tb2');
  //更新数据
  var whereStr = {"name":'wilson001'};
  var updateStr = {$set: { "age" : 100 }};
  collection.update(whereStr,updateStr, function(err, result) {
    if(err)
    {
      console.log('Error:'+ err);
      return;
    }  
    callback(result);
  });
}
/* GET home page. */
router.post('/', function(req, res, next) {
   console.log(req.body);
  MongoClient.connect(DB_CONN_STR, function(err, db) {
  console.log("ok");
  selectData(db,req.body, function(result) {
    if(result.length!=0){
      console.log(result);
       res.send('ok');
    }else{
      console.log(result);
      res.send('失败');
    }
    
    db.close();
  });
});
  
});
module.exports = router;
