import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import path from 'path';
// import sgMail from '@sendgrid/mail';
// import {SENDGRID_CREDENTIALS} from './sendgrid';

// const transporter = nodemailer.createTransport(
//     {
//         host:'smtp.1and1.mx',
//         port:465,
//         secure:true,
//         debug:true,
//         auth: {
//             user: 'estudiocreativo@n12.mx',
//             pass: 'Boriciento10'
//         },
//         tls: {
//         // do not fail on invalid certs
//             // rejectUnauthorized: false
//         }
//     }
// );
const transporter = nodemailer.createTransport(
    {
        host:'smtp.ionos.mx',
        // pool:true,
        port:465,
        secure:true,
        debug:true,
        auth: {
            user: 'alo@workosfera.com',
            pass: '@Procrastinando19'
        },
        tls: {
        // do not fail on invalid certs
           // rejectUnauthorized: false
        }
    }
);

// sgMail.setApiKey(SENDGRID_CREDENTIALS.api_key);
// const msg = {
//   to: 'luiscasillas@n12.mx',
//   from: 'test@example.com',
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// sgMail.send(msg);

transporter.verify(function(error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take our messages');
    }
});


transporter.use('compile', hbs({
   viewEngine: {},
   extName:'.html', /* or '.handlebars' */
   viewPath:path.resolve(__dirname, '../template'),
   layoutsDir:path.resolve(__dirname, '../template'),
   partialsDir:path.resolve(__dirname, '../template')
}));




module.exports = { transporter };
