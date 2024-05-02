const  DirectIncentiveModel = require("../Models/DirectIncentiveModel")
const ConnectionClass = require('../config/ConnectionClass.js')

class DirectIncentiveController {
    
    static async getDirectIncentiveByEmpID(req,res)
    {
        try{
            const empID =  req.body.empID
            if (empID){
                    const connection =  req.body.connection;
                    const connResult = await ConnectionClass.connectionFun(connection)
                    const result = await DirectIncentiveModel.getDirectIncentiveByEmpID(empID);
                // ======= END Connection =====
                ConnectionClass.connection.end()
                    if(result)
                        res.send(result)
                
            }else{
                res.send({MSG:'ERR: C',state:false});
            }
        }catch(err){
            console.log("ERROR : ",err);
        }
    }


    static async getAllDirectIncentives(req,res)
    {
      
        try{
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            const result = await DirectIncentiveModel.getDirectIncentives();
                // ======= END Connection =====
                ConnectionClass.connection.end()
            if(result)
                res.send(result)

        }catch(err){
            console.log("ERROR : ",err);
        }
    }



    static async AddNewDirectIncentive(req,res)
    {  

        try{
            const empID =  req.body.empID
            const mony =  req.body.mony
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            if(empID && mony){
                const result = await DirectIncentiveModel.AddDirectIncentive(empID,mony)
                // ======= END Connection =====
                ConnectionClass.connection.end()
                if(result) {
                    res.send({MSG:'تم تسجيل الحافز',state:true});
                }
                else {
                    res.send({MSG:'حدث خطئ',state:false});
                } 
            }else{
                res.send({MSG:'ERR: C',state:false});
            }
                
        }catch(err){
            console.log("ERROR : ",err);
        }
    }

    static async DeleteDirectIncentive (req,res)
    {
        try{
            const empID =  req.body.empID
            const date = req.body.date;
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            if(empID&&date)
            {
                const result = await DirectIncentiveModel.DeleteDirectIncentive(empID,date);
                // ======= END Connection =====
                ConnectionClass.connection.end()
                if(result)
                    res.send("Deleted successfully")
                else
                    res.send("failed to delete  ==>") 
            }

        }catch(err){
            console.log("ERROR : ",err);
        }
    }



}


module.exports = DirectIncentiveController