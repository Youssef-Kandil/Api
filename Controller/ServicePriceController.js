
const  ServicePriceModel = require("../Models/ServicePriceModel")
const ConnectionClass = require('../config/ConnectionClass.js')

class ServicePriceController {
    
    static async getAllServicePrice(req,res)
    {
        try{
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            const result = await ServicePriceModel.getServicePrice();
                console.log("SERV ==>",result);
                if(result){
                    res.send(result)
                }
                // ======= END Connection =====
                ConnectionClass.connection.end()
        }catch(err){
            console.log("ERROR : ",err);
        }
    }



    static async AddNewServicePrice (req,res)
    {  
        try{
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            const name =  req.body.name;
            const price =  req.body.price;
            const offer =  req.body.offer;
            const services_time =  req.body.services_time;
           // From MODEL
           const result = await ServicePriceModel.AddServicePrice(name , price ,offer,services_time);
   
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



    static async DeleteServicePrice (req,res)
    {
        try{
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            const id = req.body.id;
    
            if(id)
            {
                const result = await ServicePriceModel.DeleteServicePrice(id);
    
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




    static async updateServicePrice (req,res)
    {
        try{
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            const id = req.body.id;
            const price = req.body.price;
            const offer = req.body.offer;
      
    
            if(id)
            {
                const result = await ServicePriceModel.updateServicePrice(id,price,offer);
              
    
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


module.exports = ServicePriceController;