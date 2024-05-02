const  ReportsMangmentModel = require("../Models/ReportsMangmentModel")
const ConnectionClass = require('../config/ConnectionClass.js')

class ReportsMangmentControler {
    
    static async getIN_OUT_Report(req,res)
    {
        try{
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            const result = await ReportsMangmentModel.getIN_OUT_Report();
            console.log(result);
            if(result){
                res.send(result)
            }
            // ======= END Connection =====
            ConnectionClass.connection.end()

        }catch(err){
            console.log("ERROR : ",err);
        }
    }



    static async getSalary_Report(req,res)
    {  
        try{
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            const empID =  req.body.empID;
            const fromDate =  req.body.fromDate;
            const toDate =  req.body.toDate;
           // From MODEL
           if(empID && fromDate && toDate){

               const result = await ReportsMangmentModel.getSalary_Report(empID,fromDate,toDate);
    
               if(result){
                   res.send(result)  
               }
           }
           // ======= END Connection =====
           ConnectionClass.connection.end()
        }catch(err){
            console.log("ERROR : ",err);
        }
    }

    static async getSales_Report(req,res)
    {  
        try{
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            const fromDate =  req.body.fromDate;
            const toDate =  req.body.toDate;
            console.log("fromDate : ",fromDate);
            console.log("toDate : ",toDate);
           // From MODEL
           if(fromDate && toDate){
               const result = await ReportsMangmentModel.getSales_Report(fromDate,toDate);
               console.log(result);
               if(result)
                    res.send(result)  
           }

           // ======= END Connection =====
            ConnectionClass.connection.end()
        }catch(err){
            console.log("ERROR : ",err);
        }
    }


    static async getExpenses_Report(req,res)
    {  
        try{
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            const fromDate =  req.body.fromDate;
            const toDate =  req.body.toDate;
            console.log("fromDate : ",fromDate);
            console.log("toDate : ",toDate);
           // From MODEL
           if(fromDate && toDate){
               const result = await ReportsMangmentModel.getExpenses_Report(fromDate,toDate);
               console.log(result);
               if(result)
                    res.send(result)  
           }

           // ======= END Connection =====
            ConnectionClass.connection.end()
        }catch(err){
            console.log("ERROR : ",err);
        }
    }



}


module.exports = ReportsMangmentControler;