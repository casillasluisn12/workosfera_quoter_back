import {USERKEY} from '../constants'
import jwt from 'jsonwebtoken';

export const publicAuth =(req,res,next)=>{
  const {headers:{authorization=''}} = req
    if (authorization===USERKEY) {
      next();
    } else {
      res.status(401).json({ message: 'Unauthorized user'});
    }

}

export const authorization = (req, res, next) => {
  const {headers:{authorization=''}} = req,
        [first,second] = authorization.split(' ')
  if (first === 'JWT') {
    jwt.verify(second, process.env.SECRET_KEY, (err, decode) => {
      if (err) {
        req.role = undefined;
      } else {
        req.role = decode.role;
      }
      next();
    })
  }
  else {
    req.role = undefined
    next();
  }
}

export const admin_credentials = (req,res,next) => {
    console.log('rol',req.role)
    const { role } = req;
      if (role) {
        next();
      } else {
        res.status(400).json({ message: 'Invalid credentials' })
      }

}
