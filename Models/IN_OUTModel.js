// import connection from "../config/Conection.mjs";
// const connection = require('../config/Conection.js')
const ConnectionClass = require('../config/ConnectionClass.js')

class IN_OUTModel {

    static async get_IN_Time()
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query(`SELECT *  FROM in_time `,[],(err,result)=>{
                    if(err) return console.log(err);
                    else return resolve(result);
                });
                
            })
        }catch(err){
            console.log("ERROR : ",err);
        }
    }
    
    static async get_OUT_Time()
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query(`SELECT *  FROM out_time `,[],(err,result)=>{
                    if(err) return console.log(err);
                    else return resolve(result);
                });
                
            })
        }catch(err){
            console.log("ERROR : ",err);
        }
    }
    
    static async get_IN_Time_And_Emp_Data_By_EmpID(empID)
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query(`SELECT salary , start_shift , end_shift ,in_time.date  as inTime FROM employees JOIN in_time ON employees.id  = in_time.emp_id  WHERE in_time.emp_id = ${empID} AND DATE_FORMAT(in_time.date, '%Y-%m-%d')  LIKE CURRENT_DATE `,[],(err,result)=>{
                    if(err) return console.log(err);
                    else return resolve(result);
                });
                
            })
        }catch(err){
            console.log("ERROR : ",err);
        }
    }
    
    static async CheckIF_Employee_IN(empID)
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query(`SELECT COUNT(*) as isAlreadyIn FROM in_time WHERE emp_id = ${empID} AND DATE_FORMAT(date, '%Y-%m-%d')  LIKE CURRENT_DATE`,[],(err,result)=>{
                    if(err) return console.log(err);
                    else return resolve(result);
                    
                });
                
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }
    static async CheckIF_Employee_OUT(empID)
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query(`SELECT COUNT(*) as isAlreadyOut FROM out_time WHERE emp_id = ${empID} AND DATE_FORMAT(date, '%Y-%m-%d')  LIKE CURRENT_DATE`,[],(err,result)=>{
                    if(err) return console.log(err);
                    else return resolve(result);
                    
                });
                
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }



    static async INSERT_To_IT_TABLE(empID)
    {
        try{
            return  new Promise (resolve =>{
                
                ConnectionClass.connection.query('INSERT INTO  in_time (emp_id) VALUES (?)',[empID],(err,result)=>{
                    if(err) return resolve(err);
                    else return resolve(result);
                });
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }


    static async INSERT_To_OUT_TABLE(empID)
    {
        try{
            return  new Promise (resolve =>{
                
                ConnectionClass.connection.query('INSERT INTO  out_time (emp_id) VALUES (?)',[empID],(err,result)=>{
                    if(err) return resolve(err);
                    else return resolve(result);
                });
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }



   



}

// export default PlayersModel
module.exports = IN_OUTModel;