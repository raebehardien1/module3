// Importing from sql functions from model

import { getAllOrderDetails, getSingleOrderDetail,InsertOrderDetail,removeOrderDetail,EditOrderDetail } from "../model/Order_details.js";

// All order Conctroller
export const getAllOrderDetailsCon = async (req,res) => {
    try {
        res.json({OrderDetails: await getAllOrderDetails()})
        
    } catch (error) {
        console.error('error')
        res.json({error :'An error occored while fetching order details'})
        
    }
    
}

// Geting single order detail con
export const getSingleOrderDetailCon = async (req,res) => {
    try {
        res.json({oneOrderDetail: await getSingleOrderDetail(req.params.order_dteails_id)})
    } catch (error) {
        console.error({error: 'An Error Occoured'})
        
    }
    
}

// Inserting Order Detail  controller
export const InsertOrderDetailCon = async (req,res) => {
    let { order_id,product_id,quantity ,price} =req.body
    res.json({OrderDetail : await InsertOrderDetail(order_id,product_id,quantity,price)})
}

// Editing order detail controller
export const editOrderDetailCon = async (req,res) => {
    let {order_details_id,product_id,quantity} = req.bodyres.json({Edited_OrderDetail: await EditOrderDetail(order_details_id,product_id,quantity)})
    
}


//removing order detail
export const removeOrderDetailCon = async (req,res) => {
    res.json({DeleteOrder: await removeOrderDetail(req.params.order_details_id)})
    
}

