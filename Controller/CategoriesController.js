
const  CategoriesModel = require("../Models/CategoriesModel")
const ConnectionClass = require('../config/ConnectionClass.js')

class CategoriesController {
    
    static async getAllCategories_AND_Items(req,res)
    {
        try{
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            const result = await CategoriesModel.getCategories_AND_Items();
            console.log(result);
            // ======= END Connection =====
            ConnectionClass.connection.end()
            if(result)
                res.send(result)

        }catch(err){
            console.log("ERROR : ",err);
        }
    }



    static async AddNewCategory (req,res)
    {  
        try{
            const name =  req.body.name;
            const price =  req.body.price;
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
           // From MODEL
           const result = await CategoriesModel.AddCategory(name , price );
            // ======= END Connection =====
            ConnectionClass.connection.end()
           if(result.serverStatus === 2)
               res.send("added successfully")
           else
               res.send("failed to add : "+ JSON.stringify(result) )    

        }catch(err){
            console.log("ERROR : ",err);
        }
    }



    static async DeleteCategory (req,res)
    {
        try{
            const id = req.body.id;
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
    
            if(id)
            {
                const result = await CategoriesModel.DeleteCategory(id);
            // ======= END Connection =====
            ConnectionClass.connection.end()
                if(result)
                    res.send("Deleted successfully")
                else
                    res.send("failed to delete  ==>") 
            }

        }catch(err){
            console.log("ERROR : ",err);
        }
    }




    static async updateCategory (req,res)
    {
        try{
            const id = req.body.id;
            const name = req.body.name;
            const price = req.body.price;
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
    
            if(id)
            {
                const result = await CategoriesModel.updateCategory(id,name,price);
                // ======= END Connection =====
                ConnectionClass.connection.end()
    
                if(result === true)
                    res.send("upDate successfully")
                else
                    res.send("failed to upDate") 
            }

        }catch(err){
            console.log("ERROR : ",err);
        }
    }
}


module.exports = CategoriesController;