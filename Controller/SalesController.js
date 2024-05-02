
// import PlayersModel from "../Models/PlayersModel.mjs";
const  SalesModel = require("../Models/SalesModel.js")
const ConnectionClass = require('../config/ConnectionClass.js')

class SalesController {
    
    static async getAllSales(req,res)
    {
        try{
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            const result = await SalesModel.getSales();
    
            if(result){
                res.send(result)
            }
            // ======= END Connection =====
            ConnectionClass.connection.end()
        }catch(err){
            console.log("ERROR : ",err);
        }
    }



    static async AddNewSales (req,res)
    {  
        try{
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            const emp_id =  req.body.emp_id;
            const collecting_mony =  req.body.collecting_mony;
            const service_type =  req.body.service_type;
           // From MODEL
           const result = await SalesModel.AddSales(emp_id , service_type ,collecting_mony);
   
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



    static async DeleteSales (req,res)
    {
        try{
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            const id = req.body.id;
    
            if(id)
            {
                const result = await SalesModel.DeleteSales(id);
    
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




    static async updateSales (req,res)
    {
        try{
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            const id = req.body.id;
            const emp_id = req.body.emp_id;
            const service_type = req.body.service_type;
            const collecting_mony = req.body.collecting_mony;
    
            if(id)
            {
                const result = await SalesModel.updatePlayer(id,emp_id,service_type,collecting_mony);
              
    
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

// export default PlayersController
module.exports = SalesController;