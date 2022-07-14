import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    res.status(403).send({
      error: "You must be signed in.",
    });
  }

  const { id } = req.body;
  if (!id) {
    res.status(400).json({ error: "Missing id" });
    return;
  }

  const client = await clientPromise;
  const db = client.db("Newspapers");
  const collection = db.collection("issues");
  collection.deleteOne({ _id: new ObjectId(id) });
  res.status(200).json({ success: true, id });
}
