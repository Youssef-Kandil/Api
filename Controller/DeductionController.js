const  DeductionModel = require("../Models/DeductionModel")
const ConnectionClass = require('../config/ConnectionClass.js')

class DeductionController {
    
    static async getDeductionByEmpID(req,res)
    {
        try{
            const empID =  req.body.empID
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            if (empID){
                const result = await DeductionModel.getDeductionByEmpID(empID);
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


    static async getAllDeductions(req,res)
    {
      
        try{

            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            const result = await DeductionModel.getDeductions();
                // ======= END Connection =====
                ConnectionClass.connection.end()
            if(result)
                res.send(result)

        }catch(err){
            console.log("ERROR : ",err);
        }
    }



    static async AddNewDeduction(req,res)
    {  
        try{
            const empID =  req.body.empID
            const mony =  req.body.mony

            if(empID&&mony){
            
                const connection =  req.body.connection;
                const connResult = await ConnectionClass.connectionFun(connection)
                const result = await DeductionModel.AddDeduction(empID,mony)
                // ======= END Connection =====
                ConnectionClass.connection.end()
                if(result) return   res.send({MSG:'تم تسجيل الخصم',state:true});
                else return res.send({MSG:'حدث خطئ',state:false});
                

                
            }else{
                res.send({MSG:'ERR: C',state:false});
            }
        }catch(err){
            console.log("ERROR : ",err);
        }
    }

    static async DeleteDeduction (req,res)
    {
        try{
            const empID =  req.body.empID
            const date = req.body.date;
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            if(empID && date)
            {
                const result = await DeductionModel.DeleteDeduction(empID,date);
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


module.exports = DeductionController