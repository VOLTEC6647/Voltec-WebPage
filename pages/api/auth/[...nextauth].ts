import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

const getAdmins = async () => {
  const client = await clientPromise;
  const db = client.db("Users");
  const collection = db.collection("Admins");
  const adminsArray = await collection
    .find({})
    .project({ email: 1, _id: 0 })
    .toArray();
  const admins = adminsArray.map((admin) => admin.email);

  console.log(admins);
  return admins;
};

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    signIn: async ({ user, account, profile }) => {
      const admins = await getAdmins();
      if (
        admins.indexOf(profile.email) > -1 ||
        profile.email?.endsWith("@tec.mx")
      ) {
        return Promise.resolve(true);
      } else {
        return Promise.resolve(false);
      }
    },
  },
  secret: process.env.SECRET,
  adapter: MongoDBAdapter(clientPromise),
};

export default NextAuth(authOptions);
