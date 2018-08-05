const dbStore = require('nedb');

//데이터 베이스 가져오기
const db = {};
db.user = new dbStore({
    filename: 'data/user.db',
    autoload: true
});

module.exports = db