// Importing from sql functions from model

import {getAllAdresses,getSingleAdress,insertAddress,updateAdress ,deleteAdress } from "../model/address.js"

// All adress Conctroller
export const getAllAdressesCon = async (req,res) => {
    try {
        res.json({Address: await getAllAdresses()})
        
    } catch (error) {
        console.error('error')
        res.json({error :'An error occored while fetching address'})
        
    }
    
}

// Geting single adress  con
export const getSingleAdressCon = async (req,res) => {
    try {
        res.json({oneAdress: await getSingleAdress(req.params.adress_id)})
    } catch (error) {
        console.error({error: 'An Error Occoured'})
        
    }
    
}

// Inserting adress   controller
export const insertAddressCon = async (req,res) => {
    let { adress_id,adress_line1,adress_line2,city,zip_code} =req.body
    res.json({Address : await insertAddress(adress_id,adress_line1,adress_line2,city,zip_code)})
}

// Editing adress  controller
export const updateAdressCon = async (req,res) => {
    let {adress_id,adress_line1,adress_line2,city,zip_code} = req.body
    res.json({Edited_Adress: await updateAdress(adress_id,adress_line1,adress_line2,city,zip_code)})
    
}


//removing adress 
export const deleteAdressCon  = async (req,res) => {
    res.json({DeleteAdress: await deleteAdress(req.params.adress_id)})
    
}

