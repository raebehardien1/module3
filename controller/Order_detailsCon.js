// Importing from sql functions from model

import { getAllOrderDetails, getSingleOrderDetail,InsertOrderDetail,removeOrderDetail,EditOrderDetail } from "../model/Order_details.js";

// All order Conctroller
export const getAllOrderDetailsCon = async (req,res) => {
    try {
        res.json({OrderDetails: await getAllOrderDetails()})
        
    } catch (error) {
        console.error('error')
        res.json({error :'An error occured while fetching order details'})
        
    }

}

//get single order controller
export const getSingleOrderDetailCon = async (req,res) => {
    try{
        res.json({OrderDetails: await getSingleOrderDetail(req.params.order_details_id)})
    } catch (error) {
        console.error('error')
        res.json({error: 'An error occured' })
    }
    
}


