import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import clientPromise from "../../lib/mongodb";
import S3 from "aws-sdk/clients/s3";

const s3 = new S3({
  region: "us-east-1",
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  signatureVersion: "v4",
});

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

  try {
    let { name, type } = req.body;
    const fileParams = {
      Bucket: "voltec",
      Key: `${name}`,
      Expires: 600,
      ContentType: type,
      ACL: "public-read",
    };

    const url = await s3.getSignedUrlPromise("putObject", fileParams);
    res.status(200).json({ url });
  } catch (e) {
    res.status(500).json({ message: e });
  }
}
