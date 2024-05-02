
const  ExpensesModel = require("../Models/ExpensesModel")
const ConnectionClass = require('../config/ConnectionClass.js')

class ExpensesController {
    
    static async getAllExpenses(req,res)
    {
        try{
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            const result = await ExpensesModel.getExpenses();
                // ======= END Connection =====
                ConnectionClass.connection.end()
                console.log("SERV ==>",result);
            if(result)
                res.send(result)

        }catch(err){
            console.log("ERROR : ",err);
        }
    }



    static async AddNewExpenses (req,res)
    {  
        try{
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            const emp_id =  req.body.emp_id;
            const expenses_type =  req.body.expenses_type;
            const expenses_value =  req.body.expenses_value;
            const expenses_description =  req.body.expenses_description;
           // From MODEL
           const result = await ExpensesModel.AddExpenses(emp_id , expenses_type , expenses_value , expenses_description)
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



    static async DeleteExpenses (req,res)
    {
        try{
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            const id = req.body.id;
            if(id)
            {
                const result = await ExpensesModel.DeleteExpenses(id);
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




    static async updateExpenses (req,res)
    {
        try{
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            const id = req.body.id;
            const emp_id =  req.body.emp_id;
            const expenses_type =  req.body.expenses_type;
            const expenses_value =  req.body.expenses_value;
            const expenses_description =  req.body.expenses_description;
      
    
            if(id)
            {
                const result = await ExpensesModel.updateExpenses(id,emp_id,expenses_type,expenses_value,expenses_description);
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


module.exports = ExpensesController;