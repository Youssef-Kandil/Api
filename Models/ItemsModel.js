// import connection from "../config/Conection.mjs";
// const connection = require('../config/Conection.js')
const ConnectionClass = require('../config/ConnectionClass.js')

class ItemsModel {
    static async getItems(category_id )
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query('SELECT * FROM items WHERE category_id  = ?',[category_id],(err,result)=>{
                    if(err) return console.log(err);
                    else return resolve(result);
                    
                });
                
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }

    static async getCategoryBYitemBareCode(barecode)
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query('SELECT categories.* FROM categories JOIN items ON categories.id = items.category_id WHERE items.barecode = ?;',[barecode],(err,result)=>{
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


    static async AddItem(category_id , barecode )
    {
        try{
            return  new Promise (resolve =>{
                
                ConnectionClass.connection.query('INSERT INTO  items (category_id , barecode ) VALUES (?,?)',[category_id,barecode],(err,result)=>{
                    if(err) return resolve(err);
                    else return resolve(result);
                });
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }



    static async DeleteItemithBareCode(bareCode)
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query(`DELETE FROM items WHERE barecode IN (${bareCode})`,[],(err,result)=>{
                    console.log(result);
                    if(err) return resolve(false);
                    else return resolve(true);
                });
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }

    static async DeleteItem(id)
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query('DELETE FROM  items WHERE id =?',[id],(err,result)=>{
                    if(err) return resolve(false);
                    else return resolve(true);
                });
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }


    static async updateItem(id,bareCode)
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query('UPDATE items SET barecode=?   WHERE id = ?',[bareCode,id],(err,result)=>{
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
module.exports = ItemsModel;