const  AbsenceModel = require("../Models/AbsenceModel")
const  IN_OUTModel = require("../Models/IN_OUTModel")
const ConnectionClass = require('../config/ConnectionClass.js')

class AbsenceController {
    
    static async getAllAbsences(req,res)
    {
        try{
            const connection =  req.body.connection;
            if(connection){
                const connResult = await ConnectionClass.connectionFun(connection)
                console.log('connResult ==> ',connResult);
                const result = await AbsenceModel.getAbsence();
                ConnectionClass.connection.end()
                if(result)
                    res.send(result)
            }

        }catch(err){
            console.log("ERROR : ",err);
        }
    }



    static async AddNewAbsence(req,res)
    {  
        try{
            const empID =  req.body.empID
            console.log("emp => ",empID);
            if(empID){
                const connection =  req.body.connection;
                if(connection){
                    const connResult = await ConnectionClass.connectionFun(connection)
                }
                const Check_If_Employee_IN_result = await IN_OUTModel.CheckIF_Employee_IN(empID);
                const Check_If_Employee_Absence_result = await AbsenceModel.CheckIF_Absence(empID);
                if(Check_If_Employee_IN_result){

                    if(Check_If_Employee_IN_result[0].isAlreadyIn == 1  ){
                        res.send({MSG:'لقد تم تسجيل الحضور بالفعل',state:false});
                    }
                     else if(Check_If_Employee_Absence_result[0].isAlreadyAbsence == 1  ){
                        res.send({MSG:'لقد تم تسجيل الغياب بالفعل',state:false});
                    }
                    else if(Check_If_Employee_IN_result[0].isAlreadyIn == 0 && Check_If_Employee_Absence_result[0].isAlreadyAbsence == 0  ){
                        await AbsenceModel.insertAbsence(empID)
                        console.log("======= ABS DONE =========");
                        res.send({MSG:'تم تسجيل غياب',state:true});
                    }
                }
                // ======= END Connection =====
                ConnectionClass.connection.end()
            }else{
                res.send({MSG:'ERR: C',state:false});
            }
        }catch(err){
            console.log("ERROR : ",err);
        }
    }

    static async DeleteAbsence (req,res)
    {
        try{
            const empID =  req.body.empID
            const date = req.body.date;
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
    
            if(empID,date)
            {
                const result = await AbsenceModel.DeleteAbsence(empID,date);
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


module.exports = AbsenceController