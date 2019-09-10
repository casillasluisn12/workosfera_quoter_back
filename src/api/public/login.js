import express from 'express';
import {loginCtrl} from '../../controllers';

const app = express.Router();

app.group('/login',router=>{
  router
    .post('/sign_in', (req, res) => {
            loginCtrl
                .startSession(req.body.email, req.body.password)
                .then(response => {
                    console.log(response)
                    if (!response.hasOwnProperty('token')) {
                        res.status(201).json(response)
                    }
                    else {
                        res.status(201).json(response)
                    }
                })
                .catch(err => {
                    console.log('error',err)
                    res.status(200).send(err)
                })
        })
        .post('/sign_up', (req, res) => {
            loginCtrl
                .register(req.body)
                .then(user => {
                    if (user.hasOwnProperty('error'))
                        res.status(201).json({
                            message: user.message,
                            error: user.error
                        })
                    else {
                        res.status(201).json({
                            message: 'Usuario agregado satisfactoriamente',
                        })
                    }
                })
                .catch(err => {
                    res.status(200).json({ error: err })
                })
        })
})

export default app;
