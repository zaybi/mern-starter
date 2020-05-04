const express = require('express');
const mongoose = require('mongoose');
const  User    = require('./Models/User');
const auth = require('./verifytoken');

const jwt = require('jsonwebtoken');

// requiring the keys of db
const config = require('./config/key');





const app = express();
app.use(express.json());


// connecting to db
mongoose.connect( config.mongoURI , { useNewUrlParser: true ,useUnifiedTopology: true } ).then( ()=> console.log('db connected')).catch(err => console.log(err));
//



// @POST Registring user
app.post('/api/user/register' , (req ,res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        lastname: req.body.lastname,
       
    });

    user.save().then((data) => {
        res.json(data);
        console.log("response has been given");
    }).catch(err => {
        res.json({message : err})
    })
  
});


//  @POST login
app.post('/api/user/login' , (req , res) => {
    //find email
  User.findOne({email : req.body.email}).then(user => {

    // for wrong password
      if(user.password !== req.body.password) {
          res.json({
              loginSucess: false,
              message: "Wrong password"
          })
      }
      //__ wrong pas ended


      
     
    // token generating starts
      const token =  jwt.sign({ID : user._id} , "secretchabi");

    User.updateOne({_id : user._id} ,
                {$set: { token : token}}
    ).then(data => console.log(data));

         res.header("zack-auth" , token).status(200).json({
        loginSucess: true,
        message: "You have been logged in with the token"
    });

    //token generating ends

  }).catch(err => res.json(err))


});


//@get LOGOUT 
app.get('/api/user/logout' , auth, (req , res ) => {
 
  User.updateOne({_id : res.locals.user._id} ,
    {$set: { token : null}}
)
.then(response => res.json({
  isAuth : false,
  message: "user has been logged out successfully",
  response: response

}))
.catch(err => res.send(err));

    

})




     

app.get('/' , auth , (req , res) => {
   res.json({id: res.locals.user});
})




app.listen(4320 , () => console.log("server is running"));