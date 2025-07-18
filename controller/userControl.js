import useVar from '../models/users.js'
import adminUser from '../models/admin.js'


// const security = (req, res, next) => {
//     if(req.session.security){
//         next()
//     }
//     else{
//         res.redirect('/')
//     }
// }

// const users = [];
// const admin = async (req, res) => {
//     res.render('adminDash', { users })
// }

const sign = async (req, res) => {
    res.render('signup')
}

const log = async (req, res) => {
    res.render('login')
}

const error = async (req, res) => {
    res.render('404')
}

const adduser = async (req, res) => {
    if(req.session.admin) {
        res.render('adduser')
    } else {
        res.redirect('/')
    }
    
}

const modify = async (req, res) => {
    const user = await adminUser.findById(req.params.id)
    res.render('modifyUser', { user })
}

const logout = async (req, res) => {
    req.session.destroy(() => {
        console.log("destroy")
        res.redirect('/')
    })
}

const signUp = async (req, res) => {
  const user = await useVar.insertOne(req.body)
    res.redirect('/')
}

const logIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const checkUser = await useVar.findOne({ email });

        if (!checkUser) {
            res.send("login incorrect")
        }

        if (checkUser.password !== password) {
            res.send("Incorrect password. Please try again.");
        }
        const check = {
            email:checkUser.email,
            password: checkUser.password
        }
        req.session.admin = check
        res.redirect('/show');
        
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal server error.");
    }
};

const adminAddUser = async (req, res) => {
    const user = await adminUser.insertOne(req.body)
    res.redirect('/show');
}; 

const showUser = async (req, res) => {
    const users = await adminUser.find(req.body)
    if(req.session.admin){
        res.render('adminDash', { users })
    } else {
        res.redirect('/')
    }
    
}

const delUser = async (req, res) => {
    const userId = req.params.id
    const userDel = await adminUser.findByIdAndDelete( userId );
    res.redirect('/show')
}

const editUser = async (req, res) => {
    const edit = req.params.id;
    const ed = await adminUser.findByIdAndUpdate( edit, req.body );
    res.redirect('/show');
};


// export { admin };
export { sign };
export { log };
export { error };
export { adduser }
export { modify }
export { logout }

export { signUp };
export { logIn };
export { adminAddUser };
export { showUser };
export { delUser };
export { editUser };
