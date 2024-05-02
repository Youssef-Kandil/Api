// import connection from "../config/Conection.mjs";
// const connection = require('../config/Conection.js')
const ConnectionClass = require('../config/ConnectionClass.js')

class ExpensesModel {
    static async getExpenses()
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query('SELECT * FROM expenses',[],(err,result)=>{
                    if(err) return console.log(err);
                    else return resolve(result);
                    
                });
                
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }


    static async AddExpenses(	emp_id , expenses_type , expenses_value , expenses_description)
    {
        try{
            return  new Promise (resolve =>{
                
                ConnectionClass.connection.query('INSERT INTO  expenses (emp_id , type , value ,description ) VALUES (?,?,?,?)',[emp_id,expenses_type,expenses_value,expenses_description],(err,result)=>{
                    if(err) return resolve(err);
                    else return resolve(result);
                });
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }



    static async DeleteExpenses(id)
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query('DELETE FROM  expenses WHERE id = ?',[id],(err,result)=>{
                    if(err) return resolve(false);
                    else return resolve(true);
                });
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }


    static async updateExpenses(id,emp_id,expenses_type,expenses_value,expenses_description)
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query('UPDATE expenses SET emp_id=?, type=? , value=?  , description=?  WHERE id = ?',[emp_id,expenses_type,expenses_value,expenses_description,id],(err,result)=>{
                    if(err) return resolve(false);
                    else return resolve(true);
                });
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }
}


module.exports = ExpensesModel;