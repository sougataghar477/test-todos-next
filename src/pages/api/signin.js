import db from '../../../utils/mongo';
import { getSession } from 'next-auth/react';
export default async function handler(req, res) {
  const session = await getSession({ req });
  console.log(session)
let foundEmail=await db.collection("users").findOne({email:session?.user?.email});
if(foundEmail){
  res.json({msg:'email already exists'})
}
    else{
      await db.collection("users").insertOne({email:session.user.email,posts:[]});
      res.json({msg:'Email added'})
    }
      
    }