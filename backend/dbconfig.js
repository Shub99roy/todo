import {MongoClient} from "mongodb";

const url = "";

const dbName = "node";
export const collectionName="todo";
const client= new MongoClient(url)
export const connection=async ()=>{

    const connect = await client.connect();
    return await connect.db(dbName)
}
