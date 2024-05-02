const ConnectionClass = require('../config/ConnectionClass')
const  EmployeesModel = require("../Models/EmployeesMode.js")

class ConectionController {
  static dbNameProp ="";
  static dbPasswordProp ="";

  static async AddNewConnection (req,res)
{ 
  
     
    try{
        const dbName =  req.body.dbName;
        const pass =  req.body.pass;
        if(dbName && pass){
            ConectionController.dbNameProp = dbName;
            ConectionController.dbPasswordProp = pass;
            const con = await ConnectionClass.connectionFun(dbName)
            console.log("==con=====>",    con);
            console.log("=======>",    ConnectionClass.connection);
            // ==== Test if There is a connection or DB with This name ===
            const result = await EmployeesModel.getEmployees();
            ConnectionClass.connection.end()
            return  res.send({MSG:'Mission is Done !',state:true});
        } else{
            return res.send({MSG:'this is problem in connection !',state:false});
        } 

    }catch(err){
        console.log("ERRORCONN : ",err);
    }
}


}



module.exports = ConectionController;