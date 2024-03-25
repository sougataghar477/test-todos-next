import db from "../../../utils/mongo";
 
export default async function handler(req, res) {

 let foundEmail=await db.collection('users').findOne({email:req.body.email})
  let updatedArray = [...foundEmail.posts,req.body.text]
  try {
    // Update a document that matches the filter
    const result = await db.collection('users').updateOne(
      { email: req.body.email }, // Filter
      { $set: { posts: updatedArray } } // Update
    );
    res.status(200).json({msg:'Data Sent'})
   console.log(`${result.modifiedCount} document(s) updated`);
  } 
  catch (error) {
    console.error('Error occurred while updating document', error);
  }
  
  }