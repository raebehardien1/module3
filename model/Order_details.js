//import  connection
import {pool} from '../config/config.js'


// getting all order details
export const getAllOrderDetails = async () => {
    try {
      let [data] = await pool.query(`
        SELECT *
        FROM 
        order_details

        // dont forget to join so they can be able to see the exact thing the ordered
          
      `);
      return data;
    } catch (error) {
      console.error('Error fetching Order Details:', error);
      throw error;  
    }
  };

  // geting 
  export const  getSingleOrderDetail = async (order_details_id) => {
    try {
        let [data] = await pool.query('SELECT * FROM order_details WHERE order_details_id =?', [order_details_id]);
        return data && console.log("Succesfully");
    } catch (error) {
        console.error('Error fetching One order detail', error)
        throw error;
        
    }
    
  }
  
  //Adding order Detail
  export const InsertOrderDetail = async (order_id,product_id,quantity,price)=>{
    try {
        await pool.query ('INSERT INTO order_details(order_id,product_id,quantity,price) VALUES (?,?,?,?)',[order_id,product_id,quantity,price])
        console.log ('Added Succsesfully')
    } catch (error) {
        console.error('Error adding One order detail', error)
        throw error;


        
    }
  }

  // Removing Order Detail 
  export const removeOrderDetail = async (order_details_id) => {
    try{
    const [result]= await pool.query('DELETE FROM order_details WHERE order_details_id = ?', [order_details_id])
    return result &&
    console.log('Deleted Succesfully');
  } catch (error) {
    console.error('Error Removing' )
    throw error;
  }
}

// Editing Order Detail 
export const EditOrderDetail = async (order_details_id,product_id,quantity) =>{
    try {
        const [result] = await pool.query('UPDATE order_details SET product_id =? quantity =? WHERE order_details_id =?', [order_details_id,product_id,quantity])
        return result && console.log('Edited Succesfully')
    } catch (error) {
        console.error('Error editing')
        throw error;
        
    }
}