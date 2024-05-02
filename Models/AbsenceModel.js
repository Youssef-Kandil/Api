// import connection from "../config/Conection.mjs";
// const connection = require('../config/Conection.js')
const ConnectionClass = require('../config/ConnectionClass.js')

class AbsenceModel {
    static async getAbsenceByEmpID(empID)
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query('SELECT * FROM absence WHERE emp_id = ?',[empID],(err,result)=>{
                    if(err) return console.log(err);
                    else return resolve(result);
                    
                });
                
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }

    static async getAbsence()
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query('SELECT * FROM absence',[],(err,result)=>{
                    if(err) return console.log(err);
                    else return resolve(result);
                    
                });
                
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }


    
    static async CheckIF_Absence(empID)
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query(`SELECT COUNT(*) as isAlreadyAbsence FROM absence WHERE emp_id = ${empID} AND DATE_FORMAT(date, '%Y-%m-%d')  LIKE CURRENT_DATE`,[],(err,result)=>{
                    if(err) return console.log(err);
                    else return resolve(result);
                    
                });
                
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }


    static async insertAbsence(emp_id)
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query(`INSERT INTO  absence (emp_id) VALUES (${emp_id})`,[],(err,result)=>{
                    console.log("FROM MODEL ERR : ", err);
                    console.log("FROM MODEL RES : ", result);
                    if(err) return console.log(err);
                    else return resolve(result);
                    
                });
                
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }



    static async DeleteAbsence(emp_id,date)
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query('DELETE FROM  absence WHERE emp_id =? AND date=?',[emp_id,date],(err,result)=>{
                    if(err) return resolve(false);
                    else return resolve(true);
                });
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }

}

// export default PlayersModel
module.exports = AbsenceModel;