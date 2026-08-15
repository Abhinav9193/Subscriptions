import mongoose from "mongoose";
import { DB_URL } from "../config/env.js";
import dns from "dns";
if(!DB_URL)
{
    throw new Error("DB_URL is not defined in the environment variables");
}
dns.setServers(["1.1.1.1"]);

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URL);

        console.log("Connected to database successfully");

    } 
    
    catch (error) {
        console.error("Error connecting to the database:", error);
     
        process.exit(1);
    }
}
export default connectToDatabase;
