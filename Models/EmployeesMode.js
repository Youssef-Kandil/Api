
// const connection = require('../config/Conection.js') === DEAD ===
const ConnectionClass = require('../config/ConnectionClass.js')

class EmployeesModel {
    static async getEmployees()
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query('SELECT * FROM employees ',[],(err,result)=>{
                    if(err) return console.log(err);
                    else return resolve(result);
                    
                });
                
            })
            

        }catch(err){
            console.log("ERROR : ",err);
        }
    }
    static async getEmployeesByID(id)
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query('SELECT * FROM employees WHERE id = ? ',[id],(err,result)=>{
                    if(err) return console.log(err);
                    else return resolve(result);
                    
                });
                
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }

    // static async getEmployees (category_id )
    // {
    //     try{
    //         return  new Promise (resolve =>{
    //             connection.query('SELECT * FROM employees WHERE category_id  = ?',[category_id],(err,result)=>{
    //                 if(err) return console.log(err);
    //                 else return resolve(result);
                    
    //             });
                
    //         })

    //     }catch(err){
    //         console.log("ERROR : ",err);
    //     }
    // }



    static async AddEmployee(id,name,phone,title,salary,save_price,start_shift,end_shift )
    {
        try{
            return  new Promise (resolve =>{
                
                ConnectionClass.connection.query('INSERT INTO  employees (id , name , phone ,title, salary , save_price , start_shift , end_shift) VALUES (?,?,?,?,?,?,?,?)',[id,name,phone,title,salary,save_price,start_shift,end_shift],(err,result)=>{
                    console.log("result : "+ result);
                    console.log("err : "+ err);
                    if(err) return resolve(err);
                    else return resolve(result);
                });
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }



    static async DeleteEmployee(id)
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query('DELETE FROM  employees WHERE id =?',[id],(err,result)=>{
                    if(err) return resolve(false);
                    else return resolve(true);
                });
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }


    static async updateEmployee(id,name,phone,title,salary,save_price,start_shift,end_shift)
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query('UPDATE employees SET name=?, phone=? , title=?, salary=?, save_price=?,start_shift=?, end_shift=?  WHERE id = ?',[name,phone,title,salary,save_price,start_shift,end_shift,id],(err,result)=>{
                    
            console.log("==================FROM MODEL=======================");
            console.log("ERROR: " + err);
            console.log("ERROR: " + result);
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
module.exports = EmployeesModel;