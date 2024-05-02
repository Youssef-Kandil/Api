const  DirectDeductionModel = require("../Models/DirectDeductionModel")
const ConnectionClass = require('../config/ConnectionClass.js')

class DirectDeductionController {
    
    static async getDirectDeductionByEmpID(req,res)
    {
        const empID =  req.body.empID
        if (empID){
                try{
                    const connection =  req.body.connection;
                    const connResult = await ConnectionClass.connectionFun(connection)
                    const result = await DirectDeductionModel.getDirectDeductionByEmpID(empID);
                // ======= END Connection =====
                ConnectionClass.connection.end()
                    if(result)
                        res.send(result)
            
                }catch(err){
                    console.log("ERROR : ",err);
                }
        }else{
            res.send({MSG:'ERR: C',state:false});
        }
    }


    static async getAllDirectDeductions(req,res)
    {
      
        try{
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            const result = await DirectDeductionModel.getDirectDeductions();
                // ======= END Connection =====
                ConnectionClass.connection.end()
            if(result)
                res.send(result)

        }catch(err){
            console.log("ERROR : ",err);
        }
    }



    static async AddNewDirectDeduction(req,res)
    {  
        
        try{
            const empID =  req.body.empID
            const mony =  req.body.mony
            if(empID && mony){
                const connection =  req.body.connection;
                const connResult = await ConnectionClass.connectionFun(connection)
                const result = await DirectDeductionModel.AddDirectDeduction(empID,mony)
                // ======= END Connection =====
                ConnectionClass.connection.end()
                if(result) return   res.send({MSG:'تم تسجيل الجزاء',state:true});
                else return res.send({MSG:'حدث خطئ',state:false});
                

                
            }else{
                res.send({MSG:'ERR: C',state:false});
            }
        }catch(err){
            console.log("ERROR : ",err);
        }
    }

    static async DeleteDirectDeduction (req,res)
    {
        try{
            const empID =  req.body.empID
            const date = req.body.date;
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            if(empID&&date)
            {
                const result = await DirectDeductionModel.DeleteDirectDeduction(empID,date);
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


module.exports = DirectDeductionController