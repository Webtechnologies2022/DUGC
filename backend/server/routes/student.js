var express = require('express');
var router = express.Router();
var jwt =require('jsonwebtoken');

 const studentModel = require('../models/students');

 /*CREATE STUDENT*/
 router.post('/addmany',verifyToken, function (req,res,next){

     studentModel.insertMany(req.body).then((students)=>
     {
        res.send({status:200,message:'multiple students added',studentdetails:students});
     }).catch((error)=>
     {
        res.send({status:500,message:'unbale to add studnet',error});
     })
 });
 
 

 router.post('/add',function (req,res,next) {

    let studentObj =new studentModel(req.body);

 studentObj.save(function(err,studentObj)
 {
    if(err)
    {
        res.send({status:500,message:'unbale to add studnet'});
    }
    else
    {
        res.send({status:200,message:'user added',studentdetails:studentObj})
    }
 });
});

/* GET all student data. */
router.get('/list', function(req, res, next) {

 studentModel.find(function(err,studentListResponse){
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
/*get specific student data*/
router.get('/view', function(req, res, next) {

    const userid =req.query.userid;
 studentModel.findById(userid,function(err,studentListResponse){
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

router.get('/marks',verifyToken, function(req, res,next) {

 studentModel.aggregate(
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
    
    function(err,studentListResponse){
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

//get students by query
router.get('/attendance',verifyToken, function(req, res,next) {

 studentModel.aggregate(
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
    function(err,studentListResponse){
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
/*CREATE STUDENT*/

router.put('/update', function(req, res, next) {

    const userid = req.body.userid;
    let  Sl_no = req.body.Sl_no;
    let  USN = req.body.USN;
    let  Name = req.body.Name;
    let  CourseId = req.body.CourseId;
    let  CourseName = req.body.CourseName;
    let  CIE = req.body.CIE;
    let  Attendance = req.body.Attendance;
 
     let studentObj =({
         Sl_no:Sl_no,
         USN:USN,
         Name:Name,
         CourseId:CourseId,
         CourseName:CourseName,
         CIE:CIE,
         Attendance:Attendance
     });
    
 studentModel.findByIdAndUpdate(userid,studentObj, function(err,studentListResponse){
    if(err)
    {
        res.send({status:500,message:'unbale to find studnet'});
    }
    else
    {
      // const recordLength = studentListResponse.length;
        res.send({status:200,message:'student updated successfully',results:studentObj});
    }
 });
});

/*delete student*/
router.delete('/delete', function(req, res, next) {

    const userid =req.query.userid;
 studentModel.findByIdAndDelete(userid,function(err,studentListResponse){
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
/*CREATE STUDENT*/









module.exports = router;