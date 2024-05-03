const mysql = require('mysql');

class ConnectionClass {
    static connection;
    static async connectionFun(name){
        try{
          const  con =  ConnectionClass.connection = mysql.createConnection({
                host: 'buylifjc78rygpv8lfhn-mysql.services.clever-cloud.com',
                port:3306,
                user:'ufvzxszrpjnqlp0z',
                database:"buylifjc78rygpv8lfhn",
                password: 'pnJuDwU8bv6TOLLAKGE7',
                
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

