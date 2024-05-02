// import connection from "../config/Conection.mjs";
// const connection = require('../config/Conection.js')
const ConnectionClass = require('../config/ConnectionClass.js')

class PlayersModel {
    static async getPlayers()
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query('SELECT * FROM players',[],(err,result)=>{
                    if(err) return console.log(err);
                    else return resolve(result);
                    
                });
                
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }


    static async AddPlayer(id,name , phone , startDate, endDate,sub_type,player_type)
    {
        try{
            return  new Promise (resolve =>{
                
                ConnectionClass.connection.query('INSERT INTO  players (id , name , phone , startDate , endDate ,sub_type, player_type) VALUES (?,?,?,?,?,?,?)',[id,name,phone,startDate,endDate,sub_type,player_type],(err,result)=>{
                    console.log("MODEL : ",result);
                    console.log("MODEL ERR : ",err);
                    if(err) return resolve(err);
                    else return resolve(result);
                });
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }



    static async DeletePlayer(id)
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query('DELETE FROM  players WHERE id = ?',[id],(err,result)=>{
                    if(err) return resolve(false);
                    else return resolve(true);
                });
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }


    static async updatePlayer(id,newStartDate,newEndDate,isSub,sub_type)
    {
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query('UPDATE players SET startDate=?, endDate=? , isSub=? , sub_type=?   WHERE id = ?',[newStartDate,newEndDate,isSub,sub_type,id],(err,result)=>{
                    console.log("MODEL : ",result);
                    console.log("MODEL ERR : ",err);
                    if(err) return resolve(false);
                    else return resolve(true);
                });
            })

        }catch(err){
            console.log("ERROR : ",err);
        }
    }

    static async updatePlayerState(ID_ARRAY)
    {
        console.log("FROM players MODEL " + ID_ARRAY);
        try{
            return  new Promise (resolve =>{
                ConnectionClass.connection.query(`UPDATE players SET isSub = 0  WHERE id IN (${ID_ARRAY})`,[],(err,result)=>{
                    console.log("From Model: ",result);
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
module.exports = PlayersModel;