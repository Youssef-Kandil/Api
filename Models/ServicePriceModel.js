// const connection = require('../config/Conection.js')
const ConnectionClass = require('../config/ConnectionClass.js')

class ServicePriceModel {
    static async getServicePrice()
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query('SELECT * FROM services_price',[],(err,result)=>{
                    console.log("MODEL : ",result);
                    console.log("MODEL ERR : ",err);
                    if(err) return console.log(err);
                    else return resolve(result);
                });
                
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }


    static async AddServicePrice(name , price , offer, services_time)
    {
        try{
            return  new Promise (resolve =>{
                
                ConnectionClass.connection.query('INSERT INTO  services_price (name , price , offer , services_time) VALUES (?,?,?,?)',[name,price,offer,services_time],(err,result)=>{
                    if(err) return resolve(err);
                    else return resolve(result);
                });
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }



    static async DeleteServicePrice(id)
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query('DELETE FROM  services_price WHERE id = ?',[id],(err,result)=>{
                    if(err) return resolve(false);
                    else return resolve(true);
                });
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }


    static async updateServicePrice(id,price,offer)
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query('UPDATE services_price SET price=?, offer=?,   WHERE id = ?',[price,offer,id],(err,result)=>{
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
module.exports = ServicePriceModel;