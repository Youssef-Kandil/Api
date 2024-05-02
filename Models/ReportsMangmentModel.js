// const connection = require('../config/Conection.js')
const ConnectionClass = require('../config/ConnectionClass.js')

class ReportsMangmentModel{

    static async getIN_OUT_Report(){
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query(`  
                        SELECT 
                            employees.name AS name,
                            employees.id AS id,
                            in_time.id AS IDinTime,
                            in_time.date AS inTime,
                            out_Time.id AS IDoutTime,
                            out_time.date AS outTime
                        FROM
                            employees
                                JOIN
                            in_time ON employees.id  = in_time.emp_id 
                                JOIN
                            out_time ON  employees.id= out_time.emp_id   
                        where 
                            DATE_FORMAT(in_time.date, '%Y-%m-%d') = DATE_FORMAT(out_time.date, '%Y-%m-%d') ;`
                ,[],(err,result)=>{
                    if(err) return console.log(err);
                    else return resolve(result);
                    
                });
            })
        }catch(e){
                console.log(e);
        }
    }
    
    static async getSalary_Report(empID,fromDate,toDate){
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query(`SELECT employees.*,
                (SELECT SUM(deduction.mony) FROM deduction
                WHERE deduction.emp_id = employees.id AND deduction.date BETWEEN '${fromDate} 00:00:00' AND '${toDate} 23:59:59') AS deduction_mony,
                (SELECT SUM(directdeduction.mony) FROM directdeduction 
                WHERE directdeduction.emp_id = employees.id AND directdeduction.date BETWEEN '${fromDate} 00:00:00' AND '${toDate} 23:59:59') AS directdeduction_mony,
                (SELECT SUM(incentive.mony) FROM incentive 
                WHERE incentive.emp_id = employees.id AND incentive.date BETWEEN '${fromDate} 00:00:00' AND '${toDate} 23:59:59') AS incentive_mony, 
                (SELECT SUM(directincentive.mony) FROM directincentive 
                WHERE directincentive.emp_id = employees.id AND directincentive.date BETWEEN '${fromDate} 00:00:00' AND '${toDate} 23:59:59') AS directincentive_mony,
                (SELECT SUM(net.mony) FROM net 
                WHERE net.emp_id = employees.id AND net.date BETWEEN '${fromDate} 00:00:00' AND '${toDate} 23:59:59') AS net,
                (SELECT COUNT(DISTINCT permissions.date) FROM permissions 
                WHERE permissions.emp_id = employees.id AND permissions.date BETWEEN '${fromDate} 00:00:00' AND '${toDate} 23:59:59') AS permissions_count,
                (SELECT COUNT(DISTINCT absence.date) FROM absence 
                WHERE absence.emp_id = employees.id AND absence.date BETWEEN '${fromDate} 00:00:00' AND '${toDate} 23:59:59') AS absence_count FROM employees 
                WHERE employees.id = ${empID};`,[],(err,result)=>{
                    if(err) return console.log(err);
                    else return resolve(result);
                    
                });
            })
        }catch(e){
            console.log(e);
        }
    }

    static async getSales_Report(fromDate,toDate){
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query(` SELECT * FROM sales WHERE date BETWEEN '${fromDate} 00:00:00' AND '${toDate} 23:59:59';`,[],(err,result)=>{
                    console.log("HIII ==> ",result);
                    console.log("HIII Err ==> ",err);
                    if(err) return console.log(err);
                    else return resolve(result);
                    
                });
            })
        }catch(e){
                console.log(e);
        }
    }

    static async getExpenses_Report(fromDate,toDate){
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query(` SELECT * FROM expenses WHERE date BETWEEN '${fromDate} 00:00:00' AND '${toDate} 23:59:59';`,[],(err,result)=>{
                    console.log("HIII ==> ",result);
                    console.log("HIII Err ==> ",err);
                    if(err) return console.log(err);
                    else return resolve(result);
                    
                });
            })
        }catch(e){
                console.log(e);
        }
    }
}
module.exports = ReportsMangmentModel