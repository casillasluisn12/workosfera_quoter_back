import express from 'express';
// import { authorization } from '../../middleware/auth';

// import AddonTicket from './addonTicket'; //Includes all the addons for ticket
// import Agenda from './agenda';
// import Boss from './boss';
// import Client from './client';
// import Company from './company';
// import Equipment from './equipment'; //Includes Category, typeEquipment & Equipment
import Mail from './mail';
// import Part from './part';
// import Programmer from './programmer';
import Quote from './quote';
// import Request from './request';
// import Statistics from './statistics';
// import Subsidiary from './subsidiary'; //Includes all the addons for ticket
// import Survey from './survey';
// import Technical from './technical';
// import TechnicalRU from './technicalRU';
// import Ticket from './ticket';
// import Upload from './upload';
// import User from './user';
// import Vehicle from './vehicle';
// import UploadImg from './uploadimg';
const API_ADMIN = '/api/v1/private';
// import Trackings from './trackings';
// import Service from './services';

const router = express.Router();

router.get('/api/v1', (req, res) => {
    res.send('API');
});
// router.use(authorization);
// router.use(API_ADMIN, User);
// router.use(API_ADMIN, Technical);
// router.use(API_ADMIN, Boss);
// router.use(API_ADMIN, Client);
// router.use(API_ADMIN, Programmer);
// router.use(API_ADMIN, Company);
// router.use(API_ADMIN, Ticket);
router.use(API_ADMIN, Quote);
// router.use(API_ADMIN, Equipment);
// router.use(API_ADMIN, AddonTicket);
// router.use(API_ADMIN, Vehicle);
// router.use(API_ADMIN, Subsidiary);
// router.use(API_ADMIN, Part);
// router.use(API_ADMIN, Agenda);
// router.use(API_ADMIN, TechnicalRU);
router.use(API_ADMIN, Mail);
// router.use(API_ADMIN, Statistics);
// router.use(API_ADMIN, Survey);
// router.use(API_ADMIN, Upload);
// router.use(API_ADMIN, Request);
// router.use(API_ADMIN, UploadImg);
// router.use(API_ADMIN, Trackings);
// router.use(API_ADMIN, Service);

// router.get(API_ADMIN, (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

export default router;
