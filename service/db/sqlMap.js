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
    }
}

module.exports = sqlMap;