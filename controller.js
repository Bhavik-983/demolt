import  {UserModel}  from "./model.js";

export const Signup = async(req,res) => {
 try{
      const data = req.body
      const userData = new UserModel({
        username:data.username,
        email:data.email
      })
      userData.save()
      return res.status(200).json({
        message:"user crated successfully!"
      })
 }catch(e){
    console.log(e);
 }
}

export const getUser = async(req,res) => {
    try{
         const userData = await UserModel.find({})
         return res.status(200).json(userData,{
           message:"user get successfully!"
         })
    }catch(e){
       console.log(e);
    }
   }