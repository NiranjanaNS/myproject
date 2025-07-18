import prodDet from "../models/products.js";
import { ObjectId } from "mongodb";

const insert = async (req, res) => {
    const prodInsert = await prodDet.insertMany(req.body);
    res.send(prodInsert)
};

const find = async (req, res) => {
  const prodInsert = await prodDet.find();
  res.send(prodInsert);
};


const update = async (req, res) => {
  const prodId = new ObjectId(req.params.id);
  const data = req.body;
  const prodUp = await prodDet.updateOne(
      { _id: prodId },
      { $set: data }
    );
  res.send(prodUp);
};

const erase = async (req, res) => {
    const prodId = new ObjectId(req.params.prodId);
    const prodDel = await prodDet.deleteOne({_id: prodId});
    res.send(prodDel)
}

export { insert };
export { find };
export { update };
export { erase };
