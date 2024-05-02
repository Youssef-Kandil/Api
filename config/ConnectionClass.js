const mysql = require('mysql');

class ConnectionClass {
    static connection;
    static async connectionFun(name){
        try{
          const  con =  ConnectionClass.connection = mysql.createConnection({
                host: '192.168.1.15',
                port:3307,
                user:'root',
                database:name,
                password: '0000',
                
            })
            
            const isConnected =  con.connect(function(err){
                if(err){
                 console.log("=====================>>>>>>>>>>>>>>>>",isConnected);
                    //  throw err
                }
                console.log("Connecteddddd",name);
                return true
            })
        
            
            
        }catch(err){
             console.log("ERRORConon : ",err);
        }
        
    }

}

module.exports = ConnectionClass;

