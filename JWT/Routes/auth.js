const router=require('express').Router();
const User=require('../model/User');
const {registerValidation ,loginValidation}=require('../validation');
const jwt=require('jsonwebtoken');



router.post('/register', async (req, res)=>{
    console.log(req.body);

//validation
const {error}=registerValidation(req.body)
if(error) return res.status(400).send(error.details[0].message);

const emailExist =await User.findOne({email:req.body.email})
if(emailExist) return res.status(400).send("email already exits")

    const post = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    try {
      const savedpost = await post.save();
      res.json(savedpost);
    } catch (err) {
      res.json({ message: err });
    }
  });


  router.post('/login',  async (req,res)=>{
    const {error}=loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    //step2
        const user =await User.findOne({email:req.body.email}); //finding the email  form database
        if(!user) return res.status(400).send("email or password is wrong");
        if(!user.password===req.body.password)return res.status.send("worng password");


        //jwt 
        const token= jwt.sign({_id:user._id}, 'x3x3x3x3');
        res.header('auth-token', token)
        res.send(token);//

    
  });




module.exports=router;