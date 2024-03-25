import db from "../../../utils/mongo";
import { getSession } from 'next-auth/react';
export default async function handler(req, res) {
 const session = await getSession({ req });
 let foundEmail=await db.collection('users').findOne({email:session.user.email})
 console.log(foundEmail);
 res.status(200).json({posts:foundEmail.posts})
  }