import express from 'express';
// import { transporter } from '../../config/mail';
// import { fileParser } from '../../utils/upload';
import { quoteCtrl } from '../../controllers';

const app = express.Router();

app.group('/quotes', (router) => {
    router
        .post('/',
        (req, res) => {
          const {body} = req
          quoteCtrl.addOne(req.body)
                .then(quote => {
                    if (quote.hasOwnProperty('error'))
                        res.status(200).json({
                            message: quote.message,
                            error: quote.error
                        });
                    else {
                        res.status(201).json({
                            message: 'Cotizacion agregada satisfactoriamente',
                        });
                    }
                })
                .catch(err => {
                    res.status(200).json({ err: err });
                });

        })
        .get('/',(req,res)=>{

        })


});


export default app;
