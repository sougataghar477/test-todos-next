import db from "../../../utils/mongo";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";
export default async function handler(req, res) {
 const session = await getServerSession(req, res, authOptions);
 let foundEmail=await db.collection('users').findOne({email:session.user.email})
 console.log(foundEmail);
 res.status(200).json({posts:foundEmail.posts})
  }