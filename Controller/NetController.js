const  NetModel = require("../Models/NetModel")
const ConnectionClass = require('../config/ConnectionClass.js')

class NetController {
    



    static async AddNet(req,res)
    {  
        try{
        const empID =  req.body.empID
        const mony =  req.body.	mony
        const connection =  req.body.connection;
        const connResult = await ConnectionClass.connectionFun(connection)
            if(empID&&mony){
                const result = await NetModel.AddNet(empID,mony)
                if(result) return   res.send({MSG:'تم تسجيل إجمالي الراتب',state:true});
                else return res.send({MSG:'حدث خطئ',state:false});
                

                
            }else{
                res.send({MSG:'ERR: C',state:false});
            }
            // ======= END Connection =====
            ConnectionClass.connection.end()
            }catch(err){
                console.log("ERROR : ",err);
            }
    }

}


module.exports = NetController