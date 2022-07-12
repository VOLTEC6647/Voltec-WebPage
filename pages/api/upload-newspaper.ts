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

  // const client = await clientPromise;
  // const db = await client.db("Newspapers");

  // const newspapers = await db.collection("issues").find({}).toArray();

  // res.status(200).json(newspapers)
  // return

  const { body } = req;
  const { file } = body;

  if (!file) {
    res.status(400).send({
      error: "No file provided",
    });
    return;
  }

  res.status(200).send({
    message: "File uploaded successfully",
  });
}
