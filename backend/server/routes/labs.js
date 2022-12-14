var express = require('express');
var router = express.Router();
var jwt =require('jsonwebtoken');

 const LabModel = require('../models/lab');


 function verifyToken(req,res,next){
  if(!req.headers.authorization)
  {
    return res.status(401).send('unauthorized request')
  }
  let token =req.headers.authorization.split(' ')[1];
  if(token=== 'null')
  {
    return res.status(401).send('unauthorized request')
  }
  let payload1=jwt.verify(token,'secrectKey');
if (!payload1) 
{
  return res.status(401).send('unauthorized request')
}
req.userId =payload1.subject;
next()
}

 router.post('/addmany',verifyToken, function (req,res,next){

    LabModel.insertMany(req.body).then((students)=>
    {
       res.send({status:200,message:'multiple students added',studentdetails:students});
    }).catch((error)=>
    {
       res.send({status:500,message:'unbale to add studnet',error});
    })
});


router.get('/list', function(req, res, next) {

  LabModel.find(function(err,studentListResponse){
     if(err)  
     {
         res.send({status:500,message:'unbale to fetch student list'});
     }
     else
     {
         const recordLength = studentListResponse.length;
         res.send({status:200,results:recordLength,studentListResponse});
     }
  });
 });
router.post('/add',function (req,res,next) {
 
let labobj =new LabModel(req.body);
labobj.save(function(err,labobj)
 {
    if(err)
    {
        res.send({status:500,message:'unbale to add studnet'});
    }
    else
    {
        res.send({status:200,message:'user added',studentdetails:labobj})
    }
 });
});

router.get('/attendance',verifyToken, function(req, res, next) {

   LabModel.aggregate(
    [
      {
          '$group': {
              '_id': {
                  'USN': '$USN', 
                  'Name': '$Name', 
                  'sem': '$Sem', 
                  'Div': '$div'
              }, 
              'items': {
                  '$addToSet': {
                      'CourseId': '$CourseId', 
                      'ATT': '$Attendance'
                  }
              }
          }
      }, {
          '$project': {
              'specifications': {
                  '$arrayToObject': {
                      '$zip': {
                          'inputs': [
                              '$items.CourseId', '$items.ATT'
                          ]
                      }
                  }
              }
          }
      }, {
          '$addFields': {
              'specifications.USN': '$_id.USN', 
              'specifications.Name': '$_id.Name', 
              'specifications.sem': '$_id.sem', 
              'specifications.div': '$_id.Div'
          }
      }, {
          '$replaceRoot': {
              'newRoot': '$specifications'
          }
      },
       {
        '$sort': {
            'specifications': 1
        }
    } 
  ],
      
      function(err,labListResponse){
      if(err)
      {
          res.send({status:500,message:'unbale to find student'});
      }
      else
      {
        // const recordLength = studentListResponse.length;
          res.send({status:200,message:'student data fetched',results:labListResponse});
      }
   });
  });


  router.get('/marks',verifyToken, function(req, res, next) {

LabModel.aggregate(
   [
       {
         '$group': {
           '_id': {
             'USN': '$USN', 
             'Name': '$Name',
             'sem': '$Sem', 
             'Div': '$div'
           }, 
           'items': {
             '$addToSet': {
               'CourseId': '$CourseId', 
               'CIE': '$CIE'
             }
           }
         }
       }, {
         '$project': {
           'specifications': {
             '$arrayToObject': {
               '$zip': {
                 'inputs': [
                   '$items.CourseId', '$items.CIE'
                 ]
               }
             }
           }
         }
       }, {
         '$addFields': {
           'specifications.USN': '$_id.USN', 
           'specifications.Name': '$_id.Name',
           'specifications.sem': '$_id.sem', 
           'specifications.div': '$_id.Div'
         }
       }, {
         '$replaceRoot': {
           'newRoot': '$specifications'
         }
         
       },
       {
        '$sort': {
            'specifications': 1
        }
    }
     ],
   function(err,lablist){
   if(err)
   {
       res.send({status:500,message:'unbale to find student'});
   }
   else
   { 
     // const recordLength = studentListResponse.length;
       res.send({status:200,message:'student data fetched',results:lablist});
   }
});
});

router.get('/view', function(req, res, next) {

  const userid =req.params.USN;
LabModel.findById(userid,function(err,studentListResponse){
  if(err)
  {
      res.send({status:500,message:'unbale to find student'});
  }
  else
  {
    // const recordLength = studentListResponse.length;
      res.send({status:200,message:'student data fetched',results:studentListResponse});
  }
});
});
/*delete student*/
router.delete('/delete', function(req, res, next) {

  const userid =req.query.userid;
LabModel.findByIdAndDelete(userid,function(err,studentListResponse){
  if(err)
  {
      res.send({status:500,message:'unbale to find student'});
  }
  else
  {
    // const recordLength = studentListResponse.length;
      res.send({status:200,message:'student deleted successfully',results:studentListResponse});
  }
});
});


module.exports = router;