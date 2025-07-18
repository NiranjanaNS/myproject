import express from 'express';
const router = express.Router();


// import { admin } from '../controller/userControl.js';
import { sign } from '../controller/controller.js';
import { log } from '../controller/controller.js';
import { error } from '../controller/controller.js';
import { adduser } from '../controller/controller.js';
import { modify } from '../controller/controller.js';
import { logout } from '../controller/controller.js';


import { signUp } from '../controller/controller.js';
import { logIn } from '../controller/controller.js';
import { adminAddUser } from '../controller/controller.js';
import { showUser } from '../controller/controller.js';
import { delUser } from '../controller/controller.js';
import { editUser } from '../controller/controller.js';


import { addprod } from '../controller/controller.js';

// render
// router.get('/dashboard', admin)
router.get('/sign', sign)
router.get('/', log)
router.use('/404', error)
router.get('/adduser', adduser)
router.get('/edit/:id', modify)
router.get('/logout', logout)

// function
router.post('/signup', signUp)
router.post('/adminHome', logIn)
router.post('/adminadd', adminAddUser)
router.get('/show', showUser)
router.get('/del/:id', delUser)
router.post('/edit/:id', editUser)
router.post('/addprod', addprod)

export default router;