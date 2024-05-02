// import connection from "../config/Conection.mjs";
// const connection = require('../config/Conection.js')
const ConnectionClass = require('../config/ConnectionClass.js')

class LoansModel {
    static async getLoans()
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query('SELECT * FROM loans',[],(err,result)=>{
                    if(err) return console.log(err);
                    else return resolve(result);
                    
                });
                
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }


    static async AddLoans(emp_id,mony , date)
    {
        try{
            return  new Promise (resolve =>{
                
                ConnectionClass.connection.query('INSERT INTO  loans (emp_id , mony , date ) VALUES (?,?,?)',[emp_id,mony,date],(err,result)=>{
                    console.log("MODEL : ",result);
                    console.log("MODEL ERR : ",err);
                    if(err) return resolve(err);
                    else return resolve(result);
                });
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }


    static async DeleteLoans(id)
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query('DELETE FROM  loans WHERE id = ?',[id],(err,result)=>{
                    if(err) return resolve(false);
                    else return resolve(true);
                });
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }


    static async updateLoans(id,emp_id,mony)
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query('UPDATE loans SET emp_id=?, mony=?  WHERE id = ?',[emp_id,mony,id],(err,result)=>{
                    console.log("MODEL : ",result);
                    console.log("MODEL ERR : ",err);
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
module.exports = LoansModel;
