import express from 'express';
import { transporter } from '../../config/mail';
import { fileParser } from '../../utils/upload';

const app = express.Router();

app.group('/mails', (router) => {
    router
        .post('/',
        fileParser,
        (req, res) => {
            const {body} = req
            const {to,bcc,subject,template,html,context,replyTo,text} = body
            let mailOptions = {
                from: '"Workósfera" alo@workosfera.com', // sender address
                replyTo,
                to,
                bcc,
                subject,
                template,
                html,
                context:body,
                text
            }

            if(req.files&&req.files.adjuntos!=undefined){
                if(req.files.adjuntos.length>1){
                    let attachments=[];
                    let archivos = req.files.adjuntos;

                    archivos.map(archivo=>{
                        attachments.push({path: archivo.path});
                    });
                    mailOptions.attachments = attachments

                    transporter.sendMail(mailOptions, (err) => {
                        if (err)
                            return err;

                        return res.json({
                            message: 'success',
                            email: 'mensaje enviado correctamente',
                            enviado:new Date().toLocaleString(),
                            receptor:to
                        });
                    });
                }else{
                    let attachments={path: req.files.adjuntos.path};
                    mailOptions.attachments = attachments
                    transporter.sendMail(mailOptions, (err) => {
                        if (err)
                            return err;

                        return res.json({
                            message: 'mensaje enviado correctamente',
                            email: 'mensaje enviado correctamente',
                            enviado:new Date().toLocaleString(),
                            receptor:to
                        });
                    });
                }
            }else{
                transporter.sendMail(mailOptions, (err) => {
                    if (err)
                        return res.json({error:err}) ;

                    return res.json({
                        message: 'mensaje enviado correctamente',
                        email: 'mensaje enviado correctamente',
                        enviado:new Date().toLocaleString(),
                        receptor:to
                    });
                });
            }
            /*
            let attachments=[];
            let archivos = req.files.adjuntos;

            archivos.map(archivo=>{
                attachments.push({path: archivo.path});
                console.log('archivo solo',archivo.path);
            });

           let attachments={path: req.files.userPhoto.path};
            console.log('path ', req.files.userPhoto.path);
            console.log(req.files.userPhoto.path.split('/',3)[2]);
            const mailOptions = {
                from: '"Tennantco ServiceTracking" no.reply.tennantco@gmail.com', // sender address
                to: req.body.to, // list of receivers
                subject: req.body.subject, // Subject line
                template: req.body.template, //nombre del template
                attachments: attachments,
                context: req.body
            };
            console.log('mailoptions',mailOptions);
            transporter.sendMail(mailOptions, (err, info) => {
                if (err)
                    return err;

                return res.json({
                    message: 'success',
                    email: 'mensaje enviado correctamente'
                });
            });*/
        });


});


export default app;
