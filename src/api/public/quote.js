import express from 'express';
// import { transporter } from '../../config/mail';
// import { fileParser } from '../../utils/upload';
import { quoteCtrl } from '../../controllers';

const app = express.Router();

app.group('/quotes', (router) => {
    router
        .get('/',(req,res)=>{
          quoteCtrl
            .listAll()
            .then(quoteList => {
                res.status(200).json(quoteList);
            })
            .catch(err => {
                res.status(200).json({ error: err });
            });

        })
        .get('/:id',(req,res)=>{
          const {params:{id}}=req
          console.log(id)
          quoteCtrl
            .getOne(id)
            .then(quote => {
                    if (quote == 'Something went wrong' || quote === null)
                        res.status(200).json({ message: 'Cotizacion con id ' + id + ' no existe' });
                    else
                        res.status(200).json(quote);
                })
                .catch(error => {
                    res.status(200).json({ error });
                });
        })
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
                quote
              });
            }
          })
          .catch(err => {
            res.status(200).json({ err: err });
          });

        })
        .put('/:id',(req,res)=>{
            const { id } = req.params
            quoteCtrl
                .updateOne(id, req.body)
                .then(quote => {
                    if (quote.hasOwnProperty('error')) {
                        res.status(200)
                            .json({
                                message: quote.message,
                                error: quote.error
                            });
                    }
                    else {
                        if (quote.nModified == 0)
                            res.status(200).json({ message: 'No se realizó ningún cambio' });
                        else
                            res.status(200)
                                .json({
                                    message: 'Se realizaron cambios correctamente',
                                    cambios: quote.nModified
                                });
                    }
                })
                .catch(err => {
                    res.status(200).json({ err: err });
                });
        })


});


export default app;
