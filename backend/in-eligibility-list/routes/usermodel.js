var express = require('express');
var router = express.Router();
const userModel =require('../models/user');


router.post('/add',function (req,res,next) {

    let userobj2 =new userModel(req.body);

 userobj2.save(function(err,studentObj)
 {
    if(err)
    {
        res.send({status:500,message:'unbale to add user'});
    }
    else
    {
        res.send({status:200,message:'user added',studentdetails:studentObj})
    }
 });
});



router.get('/allusers',function(req,res,next)
{
   userModel.find(function(error,userdetails)
   {
 if(error)
 {
  res.send({status:500,message:'unbale add user'});
 }else
 {
  const recordLength = userdetails.length;
  res.send({status:200,message:'user added',userscount:recordLength,users:userdetails})
 }
   });
});

router.post('/finduser',function(req,res,next)
{
    let userdata =req.body;
    userModel.findOne({email:userdata.email},function(err,data)
    {
        if(err)
        {
           console.log(err);
        }else
        if(!data)
        {
            res.send({status:401,message:'invalid user'});
        }else 
        if(data.password!==userdata.password)
        {
            res.send({status:401,message:'invalid password'});
        }
        else
        {
            res.send({status:200,message:'found user',user:data})
        }

    })
})

module.exports = router;