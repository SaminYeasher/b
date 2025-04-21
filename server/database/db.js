import mongoose from "mongoose";

const Connection = async (URL) =>{
     try {
        await mongoose.connect(URL);
        console.log('data base CONNECTED'); 
    } catch (error) {
        console.log('ERROR DO CORRECT IT!!!!!!!!!!!!',error);
    }
} 

export default Connection;