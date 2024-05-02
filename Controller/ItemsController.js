
// import PlayersModel from "../Models/PlayersModel.mjs";
const  ItemsModel = require("../Models/ItemsModel.js")
const ConnectionClass = require('../config/ConnectionClass.js')

class ItemsController {
    
    static async getItems_With_CATEGORY_ID(req,res)
    {
        try{
            const category_id =  req.body.category_id;
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            const result = await ItemsModel.getItems(category_id);
    
            if(result){
                res.send(result)
            }
            // ======= END Connection =====
            ConnectionClass.connection.end()

        }catch(err){
            console.log("ERROR : ",err);
        }
    }


    
    static async getCategoryBYitemBareCode(req,res)
    {
        try{
            const barecode =  req.body.barecode;
            console.log("FROM CONTROLLER : ", barecode);
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            const result = await ItemsModel.getCategoryBYitemBareCode(barecode);
            console.log("FROM CONTROLLER RESULT : ", result);
            if(result){
                res.send(result)
            }
            // ======= END Connection =====
            ConnectionClass.connection.end()
        }catch(err){
            console.log("ERROR : ",err);
        }
    }



    static async AddNewItem (req,res)
    {  
        try{
            const category_id =  req.body.category_id;
            const barecode =  req.body.barecode;
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
 
           // From MODEL
           const result = await ItemsModel.AddItem(category_id,barecode);
   
           if(result.serverStatus === 2){
                res.send("added successfully")
           }
           else{
            res.send("failed to add : "+ JSON.stringify(result) )    
           }
            // ======= END Connection =====
            ConnectionClass.connection.end()
        }catch(err){
            console.log("ERROR : ",err);
        }
    }



    static async DeleteItem (req,res)
    {
        try{
             const id = req.body.id;
             const connection =  req.body.connection;
             const connResult = await ConnectionClass.connectionFun(connection)
    
            if(id)
            {
                const result = await ItemsModel.DeleteItem(id);
    
                if(result)
                    res.send("Deleted successfully")
                else
                    res.send("failed to delete  ==>") 
            }
            // ======= END Connection =====
            ConnectionClass.connection.end()
        }catch(err){
            console.log("ERROR : ",err);
        }
    }

    static async DeleteItemWithBareCode (req,res)
    {
        try{
             const bareCode = req.body.bareCode;
             console.log("BareCode : ",bareCode);
             const connection =  req.body.connection;
             const connResult = await ConnectionClass.connectionFun(connection)

             if(bareCode)
             {
                const BARCODE_ARRAY =  bareCode.map((barcode) => `'${barcode}'`).join(", ");
                console.log(BARCODE_ARRAY);
                const result = await ItemsModel.DeleteItemithBareCode(BARCODE_ARRAY);
                console.log(result);
                if(result)
                    res.send("Deleted successfully")
                else
                    res.send("failed to delete  ==>") 


            }
            // ======= END Connection =====
            ConnectionClass.connection.end()
        }catch(err){
            console.log("ERROR : ",err);
        }
    }




    static async updateItem (req,res)
    {
        try{
            const id = req.body.id;
            const barecode =  req.body.barecode;
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)

    
            if(id)
            {
                const result = await ItemsModel.updateItem(id,barecode);
              
    
                if(result === true)
                    res.send("upDate successfully")
                else
                    res.send("failed to upDate") 
            }
            // ======= END Connection =====
            ConnectionClass.connection.end()
        }catch(err){
            console.log("ERROR : ",err);
        }
    }
}


module.exports = ItemsController;