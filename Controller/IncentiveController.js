const  IncentiveModel = require("../Models//IncentiveModel")
const ConnectionClass = require('../config/ConnectionClass.js')

class IncentiveController {
    
    static async getIncentiveByEmpID(req,res)
    {
        try{
            const empID =  req.body.empID
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            if (empID){
                const result = await IncentiveModel.getIncentiveByEmpID(empID);
                    if(result)
                    res.send(result)
                }else{
                    res.send({MSG:'ERR: C',state:false});
                }
            // ======= END Connection =====
            ConnectionClass.connection.end()
            }catch(err){
                console.log("ERROR : ",err);
            }
    }


    static async getAllIncentives(req,res)
    {
      
        try{
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            const result = await IncentiveModel.getIncentives();
            // ======= END Connection =====
            ConnectionClass.connection.end()
            if(result)
                res.send(result)

        }catch(err){
            console.log("ERROR : ",err);
        }
    }



    static async AddNewIncentive(req,res)
    {  
        
        try{
            const empID =  req.body.empID
            const mony =  req.body.	mony
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            if(empID&&mony){

                const result = await IncentiveModel.AddIncentive(empID,mony)
                if(result) return   res.send({MSG:'تم تسجيل الحافز',state:true});
                else return res.send({MSG:'حدث خطئ',state:false});
                
            }else{
                res.send({MSG:'ERR: C',state:false});
            }
            // ======= END Connection =====
            ConnectionClass.connection.end()    
            }catch(err){
                console.log("ERROR : ",err);
            }
    }

    static async DeleteIncentive (req,res)
    {
        try{
            const empID =  req.body.empID
            const date = req.body.date;
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
    
            if(empID && date)
            {
                const result = await IncentiveModel.DeleteIncentive(empID,date);
    
                if(result)
                    res.send("Deleted successfully")
                else
                    res.send("failed to delete  ==>") 
            }
            // ======= END Connection =====
            ConnectionClass.connection.end()
        }catch(err){
            console.log("ERROR : ",err);
        }
    }



}


module.exports = IncentiveController