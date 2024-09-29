import mongoose, { connections } from "mongoose";
import { DB_NAME } from "../constant.js";




export const connectDB = async()=>{

  try{
    const conectionIntences = mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    console.log(`connection succussfull!`);

  }
  
  catch(err){
    console.log("database connection failed",err);
    process.exit(1);
  }
}
