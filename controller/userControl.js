import useVar from "../models/users.js";
// import adminUser from '../models/admin.js'
import prodDet from "../models/products.js";
import bcrypt from "bcrypt";
import { deleteModel } from "mongoose";

// render signup.ejs
const sign = async (req, res) => {
  res.render("signup");
};

// render login.ejs
const log = async (req, res) => {
  res.render("login");
};

// render 404.ejs
const error = async (req, res) => {
  res.render("404");
};

// render addUser.ejs
const adduser = async (req, res) => {
  res.render("adduser");
};

// render adminDash.ejs & show the added users & products in the dashboard
const showUser = async (req, res) => {
  const users = await useVar.find(req.body);
  const prods = await prodDet.find(req.body);
  res.render("adminDash", { users, prods });
};

// render modifyUser.ejs & display the existing data
const modify = async (req, res) => {
  const user = await useVar.findById(req.params.id);
  res.render("modifyUser", { user });
};

// signup function
const signUp = async (req, res) => {
  const { name, email, password } = req.body;

  //hash password
  const hashed = await bcrypt.hash(password, 10);

  // hash new users password
  const newUser = new useVar({
    name,
    email,
    password: hashed,
  });
  // await newUser.save()
  await useVar.insertOne(newUser);
  res.redirect("/");
};

// login function
const logIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const checkUser = await useVar.findOne({ email });

    if (!checkUser) {
      res.send("login incorrect");
    }

    if (checkUser.role !== 'enable') {
        return res.send("Entry restricted")
    }

    // compare passwords
    const match = await bcrypt.compare(password, checkUser.password);
    if (!match) {
      res.send("Incorrect password. Please try again.");
    }

    // session
    req.session.user = checkUser;
    console.log(req.session.user);

    return res.redirect("/show");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error.");
  }
};

// add user by admin
const adminAddUser = async (req, res) => {
    const { name, email, password } = req.body;

    //hash password
    const hashed = await bcrypt.hash(password, 10);

    // hash new users password
    const newUser = new useVar({
        name,
        email,
        password: hashed,
    });
    await useVar.insertOne(newUser);
    res.redirect("/show");
    };

// logout from dashboard
const logout = async (req, res) => {
  req.session.destroy(() => {
    console.log("destroy");
    res.redirect("/");
  });
};

// delete user
const delUser = async (req, res) => {
  const userId = req.params.id;
  await useVar.findByIdAndDelete(userId);
  res.status(200).json({message:'successfully deleted', success: true})
};

// update the details & show the edited user in the dashboard
const editUser = async (req, res) => {
  const edit = req.params.id;
  const ed = await useVar.findByIdAndUpdate(edit, req.body);
  res.redirect("/show");
};

const uprole = async (req, res) => {
    const { role } = req.body;
    const userId = req.params.id;
    await useVar.findByIdAndUpdate(userId, { role });
    res.redirect("/show");
};

const upstatus = async (req, res) => {
  const { status } = req.body;
  const up = req.params.id;
  const updated = await useVar.findByIdAndUpdate(
    up,
    { $set: { status } },
    { new: true }
  );
  res.send(updated);
};

export { sign };
export { log };
export { error };
export { adduser };
export { modify };
export { logout };

export { signUp };
export { logIn };
export { adminAddUser };
export { showUser };
export { delUser };
export { editUser };
export { uprole };
export { upstatus };
