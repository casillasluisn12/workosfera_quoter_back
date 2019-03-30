import express from 'express';

import Mail from './mail';
import Login from './login';
import Quote from './quote';
// import UploadImg from './uploadimg';
const API_PUBLIC = '/api/v1/public';

const router = express.Router();

router.get('/api/v1', (req, res) => {
    res.send('API');
});

router.use(API_PUBLIC, Quote);
router.use(API_PUBLIC, Mail);
router.use(API_PUBLIC, Login);

// router.get(API_ADMIN, (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

export default router;
