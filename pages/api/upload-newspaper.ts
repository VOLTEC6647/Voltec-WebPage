import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import clientPromise from "../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    res.status(403).send({
      error: "You must be signed in to upload a newspaper. 🖕",
    });
    return;
  }

  const client = await clientPromise;
  const db = client.db("Newspapers");
  const collection = db.collection("issues");
  const newspaper = {
    title: req.body.title,
    description: req.body.description,
    fileUrl: req.body.fileUrl,
    date: new Date(req.body.date),
    visibility: true
  };
  const result = await collection.insertOne(newspaper);
  res.status(200).send(result);
}
