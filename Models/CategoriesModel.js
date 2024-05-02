// const connection = require('../config/Conection.js')
const ConnectionClass = require('../config/ConnectionClass.js')

class CategoriesModel {
    static async getCategories_AND_Items()
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query(`SELECT
                categories.id AS categoryId,
                categories.name AS categoryName,
                categories.price AS categoryPrice,
                CONCAT('[', GROUP_CONCAT(JSON_OBJECT(
                  'itemId', items.id,
                  'itemBareCode', items.barecode,
                  'itemDate', items.date
                )), ']') AS items
              FROM categories
              LEFT JOIN items ON items.category_id = categories.id
              GROUP BY categories.id`,[],(err,result)=>{
                            if(err){
                                return console.log(err);
                            } 
                            else{                             
                                return resolve(result);
                            } 
                            
                        });
                
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }




    static async AddCategory(name , price )
    {
        try{
            return  new Promise (resolve =>{
                
                ConnectionClass.connection.query('INSERT INTO  categories (name , price ) VALUES (?,?)',[name,price],(err,result)=>{
                    if(err) return resolve(err);
                    else return resolve(result);
                });
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }



    static async DeleteCategory(id)
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query('DELETE FROM  categories WHERE id = ?',[id],(err,result)=>{
                    if(err) return resolve(false);
                    else return resolve(true);
                });
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }


    static async updateCategory(id,name,price)
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query('UPDATE categories SET name=?, price=?   WHERE id = ?',[name,price,id],(err,result)=>{
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
module.exports = CategoriesModel;