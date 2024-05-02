// ========= DEPRECATED ===========


const mysql = require('mysql');
try{
    
    const connection = mysql.createConnection({
        host: 'localhost',
        user:'root',
        database:'logico_sys_gym',
        password:''
    })
    
    const isConnected =  connection.connect(function(err){
        if(err){
            throw err
        }
        console.log("Connected");
        return true
    })

    module.exports = connection;
    
}catch(err){
    console.log("ERROR : ",err);
}

