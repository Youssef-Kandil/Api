// const connection = require('../config/Conection.js')
const ConnectionClass = require('../config/ConnectionClass.js')

class DirectDeductionModel {

    static async getDirectDeductionByEmpID(empID)
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query('SELECT * FROM directdeduction WHERE emp_id=?',[empID],(err,result)=>{
                    if(err) return console.log(err);
                    else return resolve(result);
                    
                });
                
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }

    static async getDirectDeductions()
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query('SELECT * FROM directdeduction',[],(err,result)=>{
                    if(err) return console.log(err);
                    else return resolve(result);
                    
                });
                
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }


    static async AddDirectDeduction(emp_id,mony)
    {
        try{
            return  new Promise (resolve =>{
                
                ConnectionClass.connection.query('INSERT INTO  directdeduction (emp_id,mony) VALUES (?,?)',[emp_id,mony],(err,result)=>{
                    if(err) return resolve(err);
                    else return resolve(result);
                });
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }



    static async DeleteDirectDeduction(emp_id,date)
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query('DELETE FROM  directdeduction WHERE emp_id = ? AND date = ?',[emp_id,date],(err,result)=>{
                    if(err) return resolve(false);
                    else return resolve(true);
                });
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }


}

module.exports = DirectDeductionModel;