var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



// userRoute.route('/getuser').get((req, res, next)=>{
//   userModel.find((error, data)=>{
//       if(error){
//           return next(error)
//       }else{
//           res.json(data)
//       }
//   })
// })


// userRoute.route('/add-user').post((req, res, next) => {
//   userModel.create(req.body, (error, data) => {
//       if(error){
//           return next(error)
//       }else{
//           res.json(data)
//       }
//   })
// })
// userRoute.route('/user/:id').get((req, res)=>{
//   userModel.findById(req.params.id, (error, data)=>{
//       if(error){
//           return next(error)
//       }else{
//           res.json(data)
//       }
//   })
// })


// userRoute.route('/update-user/:id').put((req, res) => {
//   userModel.findByIdAndUpdate(req.params.id,{
//       $set: req.body
//   } ,(error, data) => {
//       if(error){
//           return next(error)
//       }else{
//           res.json(data)
//       }
//   })
// })


module.exports = router;
