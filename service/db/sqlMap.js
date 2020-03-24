var sqlMap = {
    user: {
        add: 'insert into user (username, account, password, repeatPass, email, phone, card, birth, sex) values (?,?,?,?,?,?,?,?,?)',
        select_name: 'select * from user', 
        update_user: 'update user set'
    },
    meat:{
        select_name:'select * from meat'
    },
    fruit:{
        select_name:'select * from fruit'
    },
    vegetables:{
        select_name:'select * from vegetables'
    },
    cart:{
        select_name:'select * from cart'
    },
    conbuy:{
        select_name:'select * from con_buy'
    },
    fresh:{
        select_name:'select * from fresh'
    },
    nav_cart:{
        add:'insert into nav_cart (img,message,unit_price,num) values (?,?,?,?)',
        select_name:'select * from nav_cart',
        update_user:'update nav_cart set',
        del_data:'delete from nav_cart ',
    }
}

module.exports = sqlMap;