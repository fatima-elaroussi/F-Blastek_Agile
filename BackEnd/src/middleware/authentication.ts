import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const secret_key: String | any = process.env.SECRET_KEY;

const verifyToken = (req: Request, res: Response, next: NextFunction): void  => {
  // Get the token from cookies or headers
  const token: any = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
   res.status(401).json({ message: "Unauthorized: No token provided" });
   return ;
  }
  // console.log(token);

  // Verify the token
  jwt.verify(token, secret_key, (err: any, decoded: any) => {
    if (err) {
      res.status(401).json({ message: "Unauthorized: Invalid token" });
      return; 
    }
    req.body.user = decoded;
    // If the token is valid, allow access to the next middleware/route handler
    next();
  });
};

export default verifyToken;
