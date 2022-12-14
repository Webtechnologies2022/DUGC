var express = require('express');
var router = express.Router();
const jwt =require('jsonwebtoken');
const { token } = require('morgan');
const userModel =require('../models/user');


router.post('/add',function (req,res,next) {

    let userobj2 =new userModel(req.body);

 userobj2.save(function(err,userObj)
 {
    if(err)
    {
        res.send({status:500,message:'unbale to add user',err});
    }
    else
    {
        let payload = {subject:userObj._id}
        let token =jwt.sign(payload,'secrectKey')
        res.send({status:200,message:'user added',user:token})
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


router.post('/admin',function(req,res,next)
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
            res.status(401).send({msg:'invalid user'});
        }
        else
        if(data.role!==userdata.role)
        {
            res.status(401).send({msg:`you are not authorized to login as ${userdata.role}`});
        }
        else 
        if(data.password!==userdata.password)
        {
            res.status(401).send({msg:'invalid password'});
        }
        else
        {
            let userload = {subject:data._id}
            let usertoken = jwt.sign(userload,'secrectKey')
             res.status(200).send({user:usertoken});
        }

    })
})
  

module.exports = router;