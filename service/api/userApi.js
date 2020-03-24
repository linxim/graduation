var models = require('../db/db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../db/sqlMap');


var conn = mysql.createConnection(models.mysql);

conn.connect();

var jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.send('err');
  } else {
    console.log(ret);
    res.send(ret);
  }
}

// var dateStr = function (str) {
//     return new Date(str.slice(0, 7));
// }

// // 增加用户接口
// router.post('/addUser', (req, res) => {
//     //添加
//     var sql = $sql.user.add;
//     var params = req.body;
//     console.log(params);
//     console.log(params.birth);
//     conn.query(sql, [params.name, params.account, params.pass, params.checkPass,
//         params.email, params.phone, params.card, dateStr(params.birth), params.sex
//     ], function (err, result) {
//         if (err) {
//             console.log(err);
//         }
//         if (result) {
//             jsonWrite(res, result);
//         }
//     })
// });

// //查找用户接口
// router.post('/login', (req, res) => {
//     //查找
//     var sql_name = $sql.user.select_name;
//     // var sql_password = $sql.user.select_password;
//     var params = req.body;
//     if (params.name) {
//         sql_name += " where username ='" + params.name + "'";
//     }
//     var keywords = JSON.parse(Object.keys(params)[0]);
//     conn.query(sql_name, params.name, function (err, result) {
//         if (err) {
//             console.log(err);
//         }
//         // console.log(result);
//         if (result[0] === undefined) {
//             res.send('-1') //查询不出username，data 返回-1
//         } else {
//             var resultArray = result[0];
//             console.log(resultArray);
//             console.log(params);
//             if (resultArray.password === keywords.password) {
//                 jsonWrite(res, result);
//             } else {
//                 res.send('0') //username
//             }
//         }
//     })
// });

// //获取用户信息
// router.get('/getUser', (req, res) => {
//     var sql_name = $sql.user.select_name;
//     // var sql_password = $sql.user.select_password;
//     var params = req.body;
//     console.log(params);
//     if (params.name) {
//         sql_name += "where username ='" + params.name + "'";
//     }
//     conn.query(sql_name, params.name, function (err, result) {
//         if (err) {
//             console.log(err);
//         }
//         // console.log(result);
//         if (result[0] === undefined) {
//             res.send('-1') //查询不出username，data 返回-1
//         } else {
//             jsonWrite(res, result);
//         }
//     })
// });

// //更新用户信息
// router.post('/updateUser', (req, res) => {
//     var sql_update = $sql.user.update_user;
//     var params = req.body;
//     console.log(params);
//     if (params.id) {
//         sql_update += " email = '" + params.email +
//             "',phone = '" + params.phone +
//             "',card = '" + params.card +
//             "',birth = '" + params.birth +
//             "',sex = '" + params.sex +
//             "' where id ='" + params.id + "'";
//     }
//     conn.query(sql_update, params.id, function (err, result) {
//         if (err) {
//             console.log(err);
//         }
//         console.log(result);
//         if (result.affectedRows === undefined) {
//             res.send('更新失败，请联系管理员') //查询不出username，data 返回-1
//         } else {
//             res.send('ok');
//         }
//     })
// });

// //更改密码
// router.post('/modifyPassword', (req, res) => {
//     var sql_modify = $sql.user.update_user;
//     var params = req.body;
//     console.log(params);
//     if (params.id) {
//         sql_modify += " password = '" + params.pass +
//             "',repeatPass = '" + params.checkPass +
//             "' where id ='" + params.id + "'";
//     }
//     conn.query(sql_modify, params.id, function (err, result) {
//         if (err) {
//             console.log(err);
//         }
//         // console.log(result);
//         if (result.affectedRows === undefined) {
//             res.send('修改密码失败，请联系管理员') //查询不出username，data 返回-1
//         } else {
//             res.send('ok');
//         }
//     })
// });


router.get('/getMeat', (req, res) => {
  var sql_name = $sql.meat.select_name;
  var params = req.body;
  console.log(params);
  if (params.name) {
    sql_name += "where username ='" + params.name + "'";
  }
  conn.query(sql_name, params.name, function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result[0] == undefined) {
      res.send('-1')
    } else {
      jsonWrite(res, result);
    }
  })
})
router.get('/getFruit', (req, res) => {
  var sql_name = $sql.fruit.select_name;
  var params = req.body;
  console.log(params);
  if (params.name) {
    sql_name += "where username ='" + params.name + "'";
  }
  conn.query(sql_name, params.name, function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result[0] == undefined) {
      res.send('-1')
    } else {
      jsonWrite(res, result);
    }
  })
})
router.get('/getVegetables', (req, res) => {
  var sql_name = $sql.fruit.select_name;
  var params = req.body;
  console.log(params);
  if (params.name) {
    sql_name += "where username ='" + params.name + "'";
  }
  conn.query(sql_name, params.name, function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result[0] == undefined) {
      res.send('-1')
    } else {
      jsonWrite(res, result);
    }
  })
})
router.get('/getCart', (req, res) => {
  var sql_name = $sql.cart.select_name;
  var params = req.body;
  if (params.name) {
    sql_name += "where username ='" + params.name + "'";
  }
  conn.query(sql_name, params.name, function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result[0] == undefined) {
      res.send('-1')
    } else {
      jsonWrite(res, result);
    }
  })
})
router.get('/conBuy', (req, res) => {
  var sql_name = $sql.conbuy.select_name;
  var params = req.body;
  if (params.name) {
    sql_name += "where username ='" + params.name + "'";
  }
  conn.query(sql_name, params.name, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result[0] == undefined) {
      res.send('-1')
    } else {
      jsonWrite(res, result);
    }
  })
})
router.get('/getFresh', (req, res) => {
  var sql_name = $sql.fresh.select_name;
  var params = req.body;
  if (params.name) {
    sql_name += "where username ='" + params.name + "'";
  }
  conn.query(sql_name, params.name, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result[0] == undefined) {
      res.send('-1')
    } else {
      jsonWrite(res, result);
    }
  })
})
// 购物车接口
router.get('/getNav_cart', (req, res) => {
  var sql_name = $sql.nav_cart.select_name;
  var params = req.body;
  if (params.name) {
    sql_name += "where username ='" + params.name + "'";
  }
  conn.query(sql_name, params.name, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result[0] == undefined) {
      res.send('-1')
    } else {
      jsonWrite(res, result);
    }
  })
})
//添加购物车接口
router.post('/addNav_cart', (req, res) => {
  //添加
  var sql = $sql.nav_cart.add;
  var params = req.body;

  conn.query(sql, [params.img, params.message, params.univalence, params.num], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});
// 删除购物车接口
router.post('/delNav_cart', function (req, res) {
  //删除
  var sql_del = $sql.nav_cart.del_data;

  var params = req.body;
  // params接收请求内容
  sql_del += "where id =" + params.id;
  conn.query(sql_del, null, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result[0] == undefined) {
      res.send('-1')
    } else {
      jsonWrite(res, result);
    }


  })
});
//支付成功(更新)
router.post('/editNav_cart', function (req, res) {
  var sql = $sql.nav_cart.update_user;
  var params = req.body;
  console.log(params.ischecked);
  // params接收请求内容

    sql_del += "ischecked =" + params.ischecked;
  
  conn.query(sql_del, null, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result[0] == undefined) {
      res.send('-1')
    } else {
      jsonWrite(res, result);
    }
  })
});
module.exports = router;
