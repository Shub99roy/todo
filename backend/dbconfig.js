import {MongoClient} from "mongodb";

const url = "mongodb+srv://hxhshchdhshc_db_user:NQSWNmopRI2GkTYJ@cluster0.ostyxba.mongodb.net/?appName=Cluster0";

const dbName = "node";
export const collectionName="todo";
const client= new MongoClient(url)
export const connection=async ()=>{

    const connect = await client.connect();
    return await connect.db(dbName)
}