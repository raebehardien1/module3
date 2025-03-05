// Importing from sql functions from model

import {getAllProducts,getSingleProduct,removeProduct,InsertProduct,EditProduct,searchProducts } from "../model/product.js";

// All products Conctroller
export const getAllProductsCon = async (req,res) => {
    try {
        res.json({products: await getAllProducts()})
        
    } catch (error) {
        console.error('error')
        res.json({error :'An error occored while fetching products'})
        
    }
    
}

// Geting single products con
export const getSinglProductCon = async (req,res) => {
    try {
        res.json({oneProduct: await getSingleProduct(req.params.product_id)})
    } catch (error) {
        console.error({error: 'An Error Occoured'})
        
    }
    
}

// Inserting Product  controller
export const InsertProductCon = async (req,res) => {
    let { name,description,catergory_id,price} =req.body
    res.json({Product : await InsertProduct(name,description,catergory_id,price)})
}

// Editing Product controller
export const editProductlCon = async (req,res) => {
    let {name,description,catergory_id} = req.body
    res.json({Edited_Product: await EditProduct(name,description,catergory_id)})
}


//removing Product
export const removeProductCon = async (req,res) => {
    res.json({DeleteProduct: await removeProduct(req.params.product_id)})
    
}

// Searching products Controller
export const searchProductsCon = async (req, res) => {
    try {
      const query = req.query.query || '';
      res.json({ products: await searchProducts(query) });
    } catch (error) {
      console.error('error');
      res.json({ error: 'An error occurred while searching for products' });
    }
  };

