import db from "../../../utils/mongo";
import { getSession } from 'next-auth/react';
export default async function handler(req, res) {
  const session = await getSession({ req });
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