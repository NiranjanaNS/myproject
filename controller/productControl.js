import prodDet from "../models/products.js";




// render addProd.ejs
const addprod = async (req, res) => {
        res.render('addProd')
}


// render adminDash.ejs & show the added prod in the dashboard
const showProd = async (req, res) => {
    const prods = await prodDet.find(req.body)        
    res.render('adminDash', { prods })
}

// render modifyUser.ejs & display the existing data
const modifyprod = async (req, res) => {
    const prod = await prodDet.findById(req.params.id)
    res.render('modifyProd', { prod })
}



// add product by admin
const adminAddProd = async (req, res) => {
    const prod = await prodDet.insertOne(req.body)
    res.redirect('/show');
}; 

// delete product
const delProd = async (req, res) => {
    const prodId = req.params.id
    const prodDel = await prodDet.findByIdAndDelete( prodId );
    res.redirect('/show')
}

// add the details & update the edited product in the dashboard
const editProd = async (req, res) => {
    const edit = req.params.id;
    const ed = await prodDet.findByIdAndUpdate( edit, req.body );
    res.redirect('/show');
};


export { addprod }
export { modifyprod }

export { adminAddProd };
export { showProd };
export { delProd };
export { editProd };

