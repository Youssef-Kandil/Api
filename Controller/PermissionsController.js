const  PermissionsModel = require("../Models/PermissionsModel")
const  IN_OUTModel = require("../Models/IN_OUTModel")
const AbsenceModel = require("../Models/AbsenceModel.js")
const ConnectionClass = require('../config/ConnectionClass.js')

class PermissionsController {
    
    static async getPermissionByEmpID(req,res)
    {
        try{
            const empID =  req.body.empID
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            if (empID){
                const result = await PermissionsModel.getPermissionsByEmpID(empID);
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


    static async getAllPermissions(req,res)
    {
      
        try{
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            const result = await AbsenceModel.getAbsence();
            if(result){
                res.send(result)
            }
            // ======= END Connection =====
            ConnectionClass.connection.end()
        }catch(err){
            console.log("ERROR : ",err);
        }
    }



    static async AddNewPermission(req,res)
    {  
        try{
            const empID =  req.body.empID
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            console.log("PP EMOID : ",empID);
            if(empID){
                const Check_If_Employee_IN_result = await IN_OUTModel.CheckIF_Employee_IN(empID);
                const Check_If_Employee_Permission_result = await PermissionsModel.CheckIF_Permission(empID);
                if(Check_If_Employee_IN_result){

                    console.log("PP START : ✅");
                    console.log("PP Check_If_Employee_IN_result : ✅" ,Check_If_Employee_IN_result);
                    console.log("PP Check_If_Employee_Permission_result : ✅" ,Check_If_Employee_Permission_result);
                    console.log(" ");
                    console.log("======================================================");

                     if(Check_If_Employee_IN_result[0].isAlreadyIn == 1  &&  Check_If_Employee_Permission_result[0].isAlreadyPermissions == 0){
                        PermissionsModel.AddPermission(empID)
                         res.send({MSG:'تم تسجيل الإذن',state:true});
                    }
                    else if(Check_If_Employee_IN_result[0].isAlreadyIn == 0){
                         res.send({MSG:'لم يتم تسجيل الحضور ',state:false});
                     }
                    else if(Check_If_Employee_Permission_result[0].isAlreadyPermissions == 1){
                         res.send({MSG:'تم تسجيل الإذن بالفعل',state:false});
                     }
                }
            }else{
                res.send({MSG:'ERR: C',state:false});
            }
            // ======= END Connection =====
            ConnectionClass.connection.end()
        }catch(err){
            console.log("ERROR : ",err);
        }
    }

    static async DeletePermission (req,res)
    {
        try{
            const empID =  req.body.empID
            const date = req.body.date;
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            if(empID,date)
            {
                const result = await PermissionsModel.DeletePermission(empID,date);
    
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


module.exports = PermissionsController