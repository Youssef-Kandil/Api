
// import PlayersModel from "../Models/PlayersModel.mjs";
const  IN_OUTModel = require("../Models/IN_OUTModel")
const  AbsenceModel = require("../Models/AbsenceModel")
const ConnectionClass = require('../config/ConnectionClass.js')

class IN_OUTController {
    
    static async handel_IN_OUT(req,res)
    {
        try{
            const empID =  req.body.empID;
            if(empID){
                const connection =  req.body.connection;
                const connResult = await ConnectionClass.connectionFun(connection)
                const IN_result = await IN_OUTModel.CheckIF_Employee_IN(empID);
                const OUT_result = await IN_OUTModel.CheckIF_Employee_OUT(empID);
                const Absences_result = await AbsenceModel.CheckIF_Absence(empID);


                if(IN_result && OUT_result){

                    if(IN_result[0].isAlreadyIn == 1 && OUT_result[0].isAlreadyOut == 0 ){
                        const INSERT_OUT_result = await IN_OUTModel.INSERT_To_OUT_TABLE(empID)
                        if(INSERT_OUT_result.affectedRows){
                            res.send({MSG:'تم تسجيل الانصراف',state:true ,type:"out"});
                        }else{
                            res.send({MSG:'حدث خطأ لا يمكن تسجيل بيانات هذا ال ID',state:false});
                        }
    
                    }else if(IN_result[0].isAlreadyIn == 0 && OUT_result[0].isAlreadyOut == 0 && Absences_result[0].isAlreadyAbsence == 0){

                        const INSERT_IN_result = await IN_OUTModel.INSERT_To_IT_TABLE(empID)
                        console.log("-------->",INSERT_IN_result,"<----------");
                        if(INSERT_IN_result.affectedRows){
                            res.send({MSG:'تم تسجيل الحضور',state:true,type:"in"});
                        }else{
                            res.send({MSG:'حدث خطأ لا يمكن تسجيل بيانات هذا ال ID',state:false});
                        }
    
                    }else if(IN_result[0].isAlreadyIn == 1 && OUT_result[0].isAlreadyOut == 1){
                        res.send({MSG:'لقد تم تسجيل الانصراف بالفعل',state:false});
                    }else if (Absences_result[0].isAlreadyAbsence == 1){
                        res.send({MSG:'لقد تم تسجيل الغياب بالفعل',state:false});
                    }
                }else{
                    res.send({MSG:`ERR : C111`,state:false});
                }
    
            }else{
                res.send({MSG:`ERR : C`,state:false});
            }
            // ======= END Connection =====
            ConnectionClass.connection.end()
        }catch(err){
            console.log("ERROR :  ",err);
        }
    }


    static async get_IN_OUT(req,res){
        try{
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            const IN_result = await IN_OUTModel.get_IN_Time();
            const OUT_result = await IN_OUTModel.get_OUT_Time();
            if(IN_result && OUT_result){
                res.send({inTime:IN_result,outTime:OUT_result});
            }else{
                res.send({MSG:`ERR : C1212`,state:false});
            }
            // ======= END Connection =====
            ConnectionClass.connection.end()
        }catch(err){
            console.log("ERROR :  ",err);
        }
    }
    static async get_IN_Time_And_Emp_Data(req,res){
        try{
            const empID =  req.body.empID;
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            if(empID){
                const result = await IN_OUTModel.get_IN_Time_And_Emp_Data_By_EmpID(empID)
                if(result) return res.send(result);
            }else{
                res.send({MSG:`ERR : C1212`,state:false});
            }
            // ======= END Connection =====
            ConnectionClass.connection.end()
        }catch(err){
            console.log("ERROR :  ",err);
        }
    }

    static async handel_OUT(req, res){
        try{
            const empID =  req.body.empID;
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            if(empID){
                const IN_result = await IN_OUTModel.CheckIF_Employee_IN(empID);
                const OUT_result = await IN_OUTModel.CheckIF_Employee_OUT(empID);
                const Absences_result = await AbsenceModel.CheckIF_Absence(empID);
                
                if(IN_result && OUT_result){
                    
                    if(IN_result[0].isAlreadyIn == 1 && OUT_result[0].isAlreadyOut == 0 && Absences_result[0].isAlreadyAbsence == 0 ){
                        const INSERT_OUT_result = await IN_OUTModel.INSERT_To_OUT_TABLE(empID)
                        console.log("OUT : ",INSERT_OUT_result );
                        if(INSERT_OUT_result.affectedRows){
                            res.send({MSG:'تم تسجيل الانصراف',state:true,type:"out"});
                        }else{
                            res.send({MSG:'حدث خطأ لا يمكن تسجيل بيانات هذا ال ID',state:false});
                        }
                    }
                    if (Absences_result[0].isAlreadyAbsence == 1){
                        res.send({MSG:' لايمكن تسجيل الانصراف : لقد تم تسجيل الغياب بالفعل',state:false});
                    }
                    if (OUT_result[0].isAlreadyOut == 1){
                        res.send({MSG:'لقت تم تسجيل الانصراف بالفعل',state:false});
                    }
                    if (IN_result[0].isAlreadyIn == 0){
                        res.send({MSG:'لم يتم تسجيل الحضور',state:false});
                    }
                }
                // ======= END Connection =====
                ConnectionClass.connection.end()
            }
        }catch(e){

        }
    }

}
module.exports = IN_OUTController;