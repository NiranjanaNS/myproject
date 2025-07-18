import express from 'express';
const router = express.Router();


// import { admin } from '../controller/userControl.js';
import { sign } from '../controller/userControl.js';
import { log } from '../controller/userControl.js';
import { error } from '../controller/userControl.js';
import { adduser } from '../controller/userControl.js';
import { modify } from '../controller/userControl.js';
import { logout } from '../controller/userControl.js';

import { signUp } from '../controller/userControl.js';
import { logIn } from '../controller/userControl.js';
import { adminAddUser } from '../controller/userControl.js';
import { showUser } from '../controller/userControl.js';
import { delUser } from '../controller/userControl.js';
import { editUser } from '../controller/userControl.js';

// render
// router.get('/dashboard', admin)
router.get('/sign', sign)
router.get('/', log)
router.use('/404', error)
router.post('/signup', signUp)



router.get('/adduser', adduser)
router.get('/edit/:id', modify)
router.get('/logout', logout)

// function
router.post('/adminHome', logIn)
router.post('/adminadd', adminAddUser)
router.get('/show', showUser)
router.get('/del/:id', delUser)
router.post('/edit/:id', editUser)

export default router;