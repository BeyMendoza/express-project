require('dotenv').config()

const {
    SERVER_PORT,
    MYSQL_PORT,
    MYSQL_DATABASE,
    MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PASSWORD
} = process.env

module.exports = {
    SERVER_PORT :   SERVER_PORT || 3000,
    database : {
        PORT: MYSQL_PORT || 3306,
        USER: MYSQL_USER || 'root' ,
        HOST: MYSQL_HOST || 'localhost',
        DATABASE : MYSQL_DATABASE || 'test',
        PASSWORD: MYSQL_PASSWORD || 'password'   
    }
}
