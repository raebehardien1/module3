//import  connection
import {pool} from '../config/config.js'


// getting all order details
export const getAllOrders = async () => {
    try {
      let [data] = await pool.query(`
        SELECT *
        FROM 
        orders

        // dont forget to join so they can be able to see the exact thing the ordered
          
      `);
      return data;
    } catch (error) {
      console.error('Error fetching Orders:', error);
      throw error;  
    }
  };

  // 
  export const  getSingleOrder = async (order_id) => {
    try {
        let [data] = await pool.query('SELECT * FROM orders WHERE order_id =?', [order_id]);
        return data && console.log("Succesfully");
    } catch (error) {
        console.error('Error fetching One order ', error)
        throw error;
        
    }
    
  }
  
  //Adding order
  export const InsertOrder = async (user_id,total_amount,status)=>{
    try {
        await pool.query ('INSERT INTO orders(user_id,total_amount,status) VALUES (?,?,?)',[user_id,total_amount,status])
        console.log ('Added Succsesfully')
    } catch (error) {
        console.error('Error adding One order ', error)
        throw error;


        
    }
  }

  // Removing Order  
  export const removeOrder = async (order_id) => {
    try{
    const [result]= await pool.query('DELETE FROM orders WHERE order_id = ?', [order_id])
    return result &&
    console.log('Deleted Succesfully');
  } catch (error) {
    console.error('Error Removing' )
    throw error;
  }
}

// Editing Order  
export const EditOrder = async (user_id,total_amount,status) =>{
    try {
        const [result] = await pool.query('UPDATE orders SET user_id =?, amount =?, status=? WHERE order_id =?', [user_id,total_amount,status])
        return result && console.log('Edited Succesfully')
    } catch (error) {
        console.error('Error editing')
        throw error;
        
    }
}