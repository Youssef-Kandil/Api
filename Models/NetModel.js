// import connection from "../config/Conection.mjs";
// const connection = require('../config/Conection.js')
const ConnectionClass = require('../config/ConnectionClass.js')

class NetModel {

    static async AddNet(emp_id , mony )
    {
        try{
            return  new Promise (resolve =>{
                
                ConnectionClass.connection.query('INSERT INTO  net (emp_id,mony) VALUES (?,?)',[emp_id,mony],(err,result)=>{
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
module.exports = NetModel;