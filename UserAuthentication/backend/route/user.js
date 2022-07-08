const express = require('express');
const route = express.Router();
const user = require('C:/Users/muham/OneDrive/Desktop/lessgomern/UserAuthentication/models/user_model.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const createToken = require('C:/Users/muham/OneDrive/Desktop/lessgomern/UserAuthentication/utils/makeToken.js')

// const user = require('..frontend\\index.js');
const userlist = require('C:/Users/muham/OneDrive/Desktop/lessgomern/UserAuthentication/frontend/index')

route.get('/signup', (req, res) => {
  res.render('index', { firstname: "hello" })
  console.log('sahi ')
});

// route.post('/signup',(req,res) => {
//   const username = JSON.stringify(req.body.Firstname);
//   const email = JSON.stringify(req.body.Email);
//   const password = JSON.stringify(req.body.Password);

//   const data_user = new user({
//     Username : username,
//     Password : password,
//     Email : email
//   });

//   data_user.save().then(() => {
//     console.log("added")
//   });

// });


// Main Code Here //
// Generating JWT
route.post("/signup", async (req, res, next) => {
  let valid = true;
  user.findOne({ Email: req.body.Email }).then(users => {
    if (!users) {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.Password, salt, (err, hash) => {
          const newUser = new user({
            Token: 'none',
            Username: req.body.Firstname,
            Password: hash,
            Email: req.body.Email
          });

          console.log(JSON.stringify(newUser));
          let token;
          try {
            // token = jwt.sign(
            //   { userId: newUser._id, email: newUser.Email,password: newUser.Password },
            //   "alihaider",
            //   { expiresIn: "1h" }
            // );
            // token = createToken(newUser._id,newUser.Email,newUser.Password)
            // newUser.Token = token;
            // console.log(newUser.Token);
            newUser.save();
          } catch (err) {
            const error = new Error("Error! Something went wrong.");
            return next(err);
          }
          res
            .status(201)
            .json({
              success: true,
              data: {
                userId: newUser._id,
                email: newUser.Email, 
                // token: token,
                Password :newUser.Password,
                pass1 : req.body.Password 
              },
            });
        });
      });
    }
    else{
      res.send("email already exist");
    }
    // now we set user password to hashed password
  });

});


// route.post('/signup',(req,res)=>{


// });

route.get('/', (req, res) => {
  res.render("signin")
  console.log('Sign In page')
})

route.post("/", async (req, res, next) => {

  let existingUser;
  user.findOne({Email: req.body.Email}).then((users)=>{
    if(users){
      console.log(users)
      bcrypt.compare(req.body.Password,users.Password).then((matched)=>{
        console.log(matched)
        if(matched){
          token = jwt.sign(
              { userId: users._id, email: users.Email,password: users.Password },
              "alihaider",
              { expiresIn: 5 }
            );
          jwt.verify(token,
            "alihaider",(err,valid)=>{
              if(err){
              res.status(500).json({ errors: err });
            }
            else if(valid){
              return res.status(200).json({
                success: true,
                Token: token,
                message: users
            });
            }
          })
        }
        else{
          res.send('pass doesnt match');
        }
      })
    }
    else{
      res.send("Email doesnt match")
    }
  })



  // try {
  //   user.findOne({ Email: req.body.Email });
  // } catch {
  //   const error = new Error("Error! Something went wrong.");
  //   return next(error);
  // }
  // if (!existingUser || existingUser.Password != req.body.Password) {
  //   const error = Error("Wrong details please check at once");
  //   return next(error);
  // }
  // let token;
  // try {
  //   //Creating jwt token
  //   token = jwt.sign(
  //     { userId: existingUser.id, Email: existingUser.Email },
  //     "alihaider",
  //     { expiresIn: "1h" }
  //   );
  // } catch (err) {
  //   console.log(err);
  //   const error = new Error("Error! Something went wrong.");
  //   return next(error);
  // }

  // res
  //   .status(200)
  //   .json({
  //     success: true,
  //     data: {
  //       userId: users._id,
  //       email: users.Email,
  //       token: users.Token
  //     },
  //   });
});


module.exports = route;
