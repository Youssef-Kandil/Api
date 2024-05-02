const  EmployeesModel = require("../Models/EmployeesMode.js")
const ConnectionClass = require('../config/ConnectionClass.js')

class EmployeesController {
    
    static async getAllEmployees(req,res)
    {
        try{
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            const result = await EmployeesModel.getEmployees();
            // ======= END Connection =====
            if(result){
                res.send(result)
            }
            
            // ConnectionClass.connection.end()
        }catch(err){
            console.log("ERROR-- : ",err);
        }
    }

    static async getEmployeesByID(req,res)
    {
        const connection =  req.body.connection;
        const connResult = await ConnectionClass.connectionFun(connection)
        const id = req.body.id
        try{
            const result = await EmployeesModel.getEmployeesByID(id);
            // ======= END Connection =====
            ConnectionClass.connection.end()
            if(result)
                res.send(result)

        }catch(err){
            console.log("ERROR : ",err);
        }
    }



    static async AddNewEmployee (req,res)
    { 
        try{
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            const id =  req.body.id;
            const name =  req.body.name;
            const phone =  req.body.phone;
            const title =  req.body.title;
            const salary =  req.body.salary;
            const save_price =  req.body.save_price;
            const start_shift =  req.body.start_shift;
            const end_shift =  req.body.end_shift;
            console.log("===========================================");
            console.log("id :" , id);
            console.log("name :" , name);
            console.log("title :" , title);
            console.log("salary :" , salary);
            console.log("save_price :" , save_price);
            console.log("start_shift :" , start_shift);
            console.log("end_shift :" , end_shift);
            console.log("===========================================");
           // From MODEL
           const result = await EmployeesModel.AddEmployee(id,name , phone ,title,salary,save_price,start_shift,end_shift);
           console.log("CL RES => ",result);
           console.log("===========================================");
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



    static async DeleteEmployee (req,res)
    {
        try{
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            const id = req.body.id;
            if(id)
            {
                const result = await EmployeesModel.DeleteEmployee(id);
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




    static async updateEmployee(req,res)
    {
        try{
            const id =  req.body.id;
            const name =  req.body.name;
            const phone =  req.body.phone;
            const title =  req.body.title;
            const salary =  req.body.salary;
            const save_price =  req.body.save_price;
            const start_shift =  req.body.start_shift;
            const end_shift =  req.body.end_shift;
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            console.log("===========================================");
            console.log("id :" , id);
            console.log("name :" , name);
            console.log("title :" , title);
            console.log("salary :" , salary);
            console.log("save_price :" , save_price);
            console.log("start_shift :" , start_shift);
            console.log("end_shift :" , end_shift);
    
            console.log("===========================================");
            if(id)
            {
                const result = await EmployeesModel.updateEmployee(id,name , phone ,title,salary,save_price,start_shift,end_shift);
                console.log(result);
                console.log("===========================================");
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

// export default PlayersController
module.exports = EmployeesController;