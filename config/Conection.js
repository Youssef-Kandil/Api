
const mysql = require('mysql');


try{
    
    const connection = mysql.createConnection({
        host: 'localhost',
        port:3307,
        user:'root',
        database:'logico_sys_gym',
        password: '0000'
    })
    
    const isConnected =  connection.connect(function(err){
        if(err){
            console.log("=====================>>>>>>>>>>>>>>>>",isConnected);
            console.log("=====================>>>>>>>>>>>>>>>>",err);
        }
        console.log("Connected");
        return true
    })

    module.exports = connection;
    
}catch(err){
    console.log("ERROR : ",err);
}
