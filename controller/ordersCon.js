// Importing from sql functions from model

import {getAllOrders,getSingleOrder,InsertOrder,removeOrder,EditOrder  } from "../model/orders.js";

// All order Conctroller
export const getAllOrdersCon = async (req,res) => {
    try {
        res.json({OrderDetails: await getAllOrders()})
        
    } catch (error) {
        console.error('error')
        res.json({error :'An error occored while fetching orders'})
        
    }
    
}

// Geting single order detail con
export const getSingleOrderCon = async (req,res) => {
    try {
        res.json({oneOrder: await getSingleOrder(req.params.order_id)})
    } catch (error) {
        console.error({error: 'An Error Occoured'})
        
    }
    
}

// Inserting Order Detail  controller
export const InsertOrderCon = async (req,res) => {
    let { user_id,total_amount,status} =req.body
    res.json({Order : await InsertOrder(user_id,total_amount,status)})
}

// Editing order detail controller
export const editOrderCon = async (req,res) => {
    let {user_id,total_amount,status} = req.body
    res.json({Edited_Order: await EditOrder(user_id,total_amount,status)})
    
}


//removing order detail
export const removeOrderCon = async (req,res) => {
    res.json({DeleteOrder: await removeOrder(req.params.order_id)})
    
}

