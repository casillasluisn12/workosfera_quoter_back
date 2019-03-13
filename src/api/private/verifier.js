import express from 'express';
import {RECAPTCHA,VERIF_URL} from '../../config/recaptcha';
import {setHJson,fetchStatus} from '../../utils/setHeaders';
import fetch from 'node-fetch'

const app = express.Router();

app.group('/verifier',router=>{
  router
    .post('/',(req,res)=>{
      const {body:{response}} = req
      fetch(`${VERIF_URL}?secret=${RECAPTCHA.secret}&response=${response}`,{
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      })
      .then(fetchStatus)
      .then(r=>{
        console.log(r)
        res.status(200).json(r)
      })
    })
})

export default app;
