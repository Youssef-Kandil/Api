
// import PlayersModel from "../Models/PlayersModel.mjs";
const  LoansModel = require("../Models/LoansModel.js")
const ConnectionClass = require('../config/ConnectionClass.js')

class LoansController {
    
    static async getAllLoans(req,res)
    {
        try{
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            const result = await LoansModel.getLoans();
    
            if(result){
                res.send(result)
            }
            // ======= END Connection =====
            ConnectionClass.connection.end()
        }catch(err){
            console.log("ERROR : ",err);
        }
    }



    static async AddNewLoans (req,res)
    {  
        try{
            const id =  req.body.id;
            const emp_id =  req.body.emp_id;
            const mony =  req.body.mony;
            const date =  req.body.date;
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            console.log("id : ",id);
            console.log("emp_id : ",emp_id);
            console.log("mony : ",mony);
            console.log("date : ",date);

           // From MODEL
           const result = await LoansModel.AddLoans(id,emp_id , mony ,date);
           console.log("CON : ",result);
           if(result.serverStatus === 2)
           {
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



    static async DeleteLoans (req,res)
    {
        try{
            const id = req.body.id;
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
    
            if(id)
            {
                const result = await LoansModel.DeleteLoans(id);
    
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




    static async updateLoans (req,res)
    {
        try{
            const id = req.body.id;
            const emp_id = req.body.emp_id;
            const mony = req.body.mony;
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            console.log("id : ",id);
            console.log("emp_id : ",emp_id);
            console.log("mony : ",mony);

    
            if(id)
            {
                const result = await LoansModel.updateLoans(id,emp_id,mony);
                console.log("CON : ",result);
    
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
module.exports = LoansController;