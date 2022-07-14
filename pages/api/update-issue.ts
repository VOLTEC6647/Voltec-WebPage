import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = unstable_getServerSession(req, res, authOptions);

  const client = await clientPromise;
  const db = client.db("Newspapers");
  const collection = db.collection("issues");

  if (!session) {
    res.status(403).send({
      error: "You must be signed in.",
    });
    return
  }

  const { id, visibility } = req.body;
  console.log(id, visibility);
  if (!id) {
    res.status(400).json({ error: "Missing id" });
    return;
  }

  const update = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: { visibility: !visibility } }
  );

  res.status(200).json({ success: true, message: update });
}
