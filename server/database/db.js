import mongoose from "mongoose";

const Connection = async (username,password) =>{
    const URL = `mongodb://${username}:${password}@blog-app-shard-00-00.srugn.mongodb.net:27017,blog-app-shard-00-01.srugn.mongodb.net:27017,blog-app-shard-00-02.srugn.mongodb.net:27017/?replicaSet=atlas-8unvhg-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=blog-app`;
    try {
        await mongoose.connect(URL);
        console.log('data base CONNECTED'); 
    } catch (error) {
        console.log('ERROR DO CORRECT IT!!!!!!!!!!!!',error);
    }
} 

export default Connection;