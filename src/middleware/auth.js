import {USERKEY} from '../constants'

export const authorization =(req,res,next)=>{
  const {headers:{authorization=''}} = req
    if (authorization===USERKEY) {
      next();
    } else {
      res.status(401).json({ message: 'Unauthorized user'});
    }

}
