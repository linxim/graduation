var models = require('../db/db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../db/sqlMap');
var conn = mysql.createConnection(models.mysql);

conn.connect();

var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.send('err');
    } else {
        console.log(ret);
        res.send(ret);
    }
}
router.post('/addEvaluate', (req, res) => {
    //添加
    var sql = $sql.evaluate.add;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.nowtime,params.u_content], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
//获取评论信息
// router.get('/getEvalute', (req, res) => {
//     var sql_name = $sql.evaluate.select_name;
//     var params = req.body;
//     console.log(params);
//     if (params.name) {
//         sql_name += "where username ='"+ params.name +"'";
//     }
//     conn.query(sql_name, params.name, function(err, result) {
//         if (err) {
//             console.log(err);
//         }
//         // console.log(result);
//         if (result[0] === undefined) {
//             res.send('-1')   //查询不出username，data 返回-1
//         } else {
//             jsonWrite(res, result);
//         }
//     })
// });
module.exports = router;