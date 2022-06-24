import { MongoClient } from "mongodb";

const uri = process.env.MONGODB;
const options = {};

let client;
let clientPromise: any;

if (!process.env.MONGODB) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  // @ts-ignore
  if (!global._mongoClientPromise) {
    // @ts-ignore
    client = new MongoClient(uri, options);
    // @ts-ignore
    global._mongoClientPromise = client.connect();
  }
  // @ts-ignore
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  // @ts-ignore
  client = new MongoClient(uri, options);
  try {
    clientPromise = client.connect();
  } catch (error) {
    console.log(error)
  }
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can b    e shared across functions.
export default clientPromise;
