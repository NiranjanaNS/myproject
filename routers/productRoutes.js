import express from "express";
const router = express.Router();

import { addprod } from "../controller/productControl.js";
import { modifyprod } from "../controller/productControl.js";
import { adminAddProd } from "../controller/productControl.js";
import { showProd } from "../controller/productControl.js";
import { delProd } from "../controller/productControl.js";
import { editProd } from "../controller/productControl.js";


router.get('/addprod', addprod)
router.get('/editP/:id', modifyprod)
router.post('/adminaddprod', adminAddProd)
router.get('/show', showProd)
router.get('/delP/:id', delProd)
router.post('/editprod/:id', editProd)


export default router;