// Importing from sql functions from model

import { getAllPayment,getSinglePayment,InsertPayment,EditPayment,removePayment} from "../model/payment.js";

// All order Conctroller
export const getAllPaymentCon = async (req,res) => {
    try {
        res.json({OrderDetails: await getAllPayment()})
        
    } catch (error) {
        console.error('error')
        res.json({error :'An error occored while fetching payment'})
        
    }
    
}

// Geting single order detail con
export const getSinglePaymentCon = async (req,res) => {
    try {
        res.json({onepayment: await getSinglePayment(req.params.payment_id)})
    } catch (error) {
        console.error({error: 'An Error Occoured'})
        
    }
    
}

// Inserting Order Detail  controller
export const InsertPaymentCon = async (req,res) => {
    let { payment_method,payment_status,payment_date} =req.body
    res.json({OrderDetail : await InsertPayment(payment_method,payment_status,payment_date)})
}

// Editing order detail controller
export const ediPaymentCon = async (req,res) => {
    let {payment_id,payment_method,payment_status,payment_date} = req.bodyres.json({Edited_Payment: await EditPayment(payment_id,payment_method,payment_status,payment_date)})
    
}


//removing order detail
export const removePaymentCon = async (req,res) => {
    res.json({DeletePayment: await removePayment(req.params.payment_id)})
    
}

