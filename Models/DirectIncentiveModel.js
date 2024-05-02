// const connection = require('../config/Conection.js')
const ConnectionClass = require('../config/ConnectionClass.js')

class DirectIncentiveModel {

    static async getDirectIncentiveByEmpID(empID)
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query('SELECT * FROM directincentive WHERE emp_id=?',[empID],(err,result)=>{
                    if(err) return console.log(err);
                    else return resolve(result);
                    
                });
                
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }

    static async getDirectIncentives()
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query('SELECT * FROM directincentive',[],(err,result)=>{
                    if(err) return console.log(err);
                    else return resolve(result);
                    
                });
                
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }


    static async AddDirectIncentive(emp_id,mony)
    {
        try{
            return  new Promise (resolve =>{
                
                ConnectionClass.connection.query('INSERT INTO  directincentive (emp_id,mony) VALUES (?,?)',[emp_id,mony],(err,result)=>{
                    if(err) return resolve(err);
                    else return resolve(result);
                });
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }



    static async DeleteDirectIncentive(emp_id,date)
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query('DELETE FROM  directincentive WHERE emp_id = ? AND date = ?',[emp_id,date],(err,result)=>{
                    if(err) return resolve(false);
                    else return resolve(true);
                });
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }


}

module.exports = DirectIncentiveModel;