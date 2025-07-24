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
import { uprole } from '../controller/userControl.js';
import { upstatus } from '../controller/userControl.js';


// render
// router.get('/dashboard', admin)
router.get('/sign', sign)
router.get('/', log)
router.use('/404', error)
router.post('/register', signUp)
router.post('/adminHome', logIn)


router.use("/",(req,res,next)=>{
    if(req.session.user)
    {
        next()
    }
    else
    {
        res.send("Entry restricted")
    }
})
// function
router.get('/adduser', adduser)
router.get('/edit/:id', modify)
router.get('/logout', logout)
router.post('/adminadd', adminAddUser)
router.get('/show', showUser)
router.delete('/del/:id', delUser)
router.post('/edituser/:id', editUser)
router.get('/uprole/:id', uprole)
router.put('/upstatus/:id', upstatus)

export default router;