import db from "../../../utils/mongo";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";
export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if(session){
    let {email}=session.user;
    console.log(session.user.email)
    let loggedUser=await db.collection("users").findOne({email});
    console.log(loggedUser)
      res.status(200).json(loggedUser)
  }
  else{
    res.status(404).json({msg:'User not logged in'})
  }
  }