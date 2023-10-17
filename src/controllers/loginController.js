const jwt=require("jsonwebtoken");
const login= (req, res) => {
    const { userID, password } = req.body;

    if (process.env.userID === userID && process.env.PASSWORD === password) {
      const payload = {
        userID
      };
      const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1h' });
  
      res.status(200).json({message:"User logged in successfully", token });
    }
    else if(process.env.PASSWORD != password){
        res.status(401).json({ error: 'Wrong password' });
      } 
    else {
      res.status(401).json({ error: 'Authentication failed' });
    }
  };
  
  module.exports={login};