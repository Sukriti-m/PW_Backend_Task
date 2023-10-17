const jwt=require("jsonwebtoken");
module.exports = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    jwt.verify(token, process.env.SECRET , (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Token not verified' });
      }
        req.user = decoded;
        console.log("User authorized");
        next();
    });
  };

  