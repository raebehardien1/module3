// Importing from sql functions from model

import { getAllOrderDetails, getSingleOrderDetail,InsertOrderDetail,removeOrderDetail,EditOrderDetail } from "../model/Order_details.js";

// All order Conctroller
export const getAllOrderDetailsCon = async (req,res) => {
    try {
        res.json({OrderDetails: await getAllOrderDetails()})
        
    } catch (error) {
        console.error('error')
        
    }

}
