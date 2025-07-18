import express from "express";
const router = express.Router();
import { insert } from "../controller/productControl.js";
import { find} from "../controller/productControl.js";
import { update } from "../controller/productControl.js";
import { erase } from "../controller/productControl.js";

router.post('/addProd', insert)
router.get('/findProd', find)
router.put('/upProd/:id', update)
router.delete('/delProd/:prodId', erase)

export default router;