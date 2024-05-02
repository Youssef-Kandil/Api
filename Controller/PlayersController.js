
// import PlayersModel from "../Models/PlayersModel.mjs";
const  PlayersModel = require("../Models/PlayersModel.js")
const ConnectionClass = require('../config/ConnectionClass.js')

class PlayersController {
    
    static async getAllPlayers(req,res)
    {
        try{
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            console.log('connResult ==> ',connResult);
            const result = await PlayersModel.getPlayers();
            console.log('result ==> ',result);
            if(result){
                res.send(result)
            }
            // ======= END Connection =====
            ConnectionClass.connection.end()

        }catch(err){
            console.log("ERROR : ",err);
        }
    }


    static async AddNewPlayer (req,res)
    {  
        try{
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            const id =  req.body.id;
            const name =  req.body.name;
            const phone =  req.body.phone;
            const startDate =  req.body.startDate;
            const endDate =  req.body.endDate;
            const sub_type =  req.body.sub_type;
            const player_type =  req.body.player_type;
            console.log("id : ",id);
            console.log("name : ",name);
            console.log("phone : ",phone);
            console.log("startDate : ",startDate);
            console.log("endDate : ",endDate);
            console.log("sub_type : ",sub_type);
            console.log("player_type : ",player_type);
           // From MODEL
           const result = await PlayersModel.AddPlayer(id,name , phone ,startDate,endDate,sub_type,player_type);
           console.log("CON : ",result);
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


    static async DeletePlayer (req,res)
    {
        try{
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            const id = req.body.id;
    
            if(id)
            {
                const result = await PlayersModel.DeletePlayer(id);
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


    static async updatePlayer (req,res)
    {
        try{
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            const id = req.body.id;
            const startDate = req.body.startDate;
            const endDate = req.body.endDate;
            const isSub = req.body.isSub;
            const sub_type = req.body.sub_type;
            console.log("id : ",id);
            console.log("startDate : ",startDate);
            console.log("endDate : ",endDate);
            console.log("isSub : ",isSub);
            console.log("sub_type : ",sub_type);
    
            if(id)
            {
                const result = await PlayersModel.updatePlayer(id,startDate,endDate,isSub,sub_type);
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


    static async updatePlayerState (req,res)
    {
        try{
            const connection =  req.body.connection;
            const connResult = await ConnectionClass.connectionFun(connection)
            const Array = req.body.id;
            // const isSub = req.body.isSub;
            console.log("ID ===> ",Array);
    
            if(Array)
            {
                const ID_ARRAY =  Array.map((id) => `'${id}'`).join(", ");
                const result = await PlayersModel.updatePlayerState(ID_ARRAY);
                console.log("From Controller : ",result);
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
module.exports = PlayersController;