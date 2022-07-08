const jwt = require("jsonwebtoken");
exports.createJWT = (userId,Email,Password) => {
   const payload = {
      userId,
      Email,
      Password
   };
   // "secret" is private key. can be anything
   // 3600 is time in seconds. token will expire after one hour
   return jwt.sign(payload, "alihaider", {
     expiresIn: '1h',
   });
};