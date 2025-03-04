//import  connection
import {pool} from '../config/config.js'


// getting all  payments
export const getAllPayment = async () => {
    try {
      let [data] = await pool.query("SELECT * FROM payment ");
      return data;
    } catch (error) {
      console.error('Error fetching  payments:', error);
      throw error;  
    }
  };

  // 
  export const  getSinglePayment = async (payment_id) => {
    try {
        let [data] = await pool.query('SELECT * FROM payment WHERE payment_id =?', [payment_id]);
        return data && console.log("Succesfully");
    } catch (error) {
        console.error('Error ', error)
        throw error;
        
    }
    
  }
  
  //Adding  payment
  export const InsertPayment = async (payment_method,payment_status,payment_date)=>{
    try {
        await pool.query ('INSERT INTO payment(payment_method,payment_status,payment_date) VALUES (?,?,?,?)',[payment_method,payment_status,payment_date])
        console.log ('Added Succsesfully')
    } catch (error) {
        console.error('Error ', error)
        throw error;


        
    }
  }

  // Removing  payment 
  export const removePayment = async (payment_id) => {
    try{
    const [result]= await pool.query('DELETE FROM payment WHERE payment_id = ?', [payment_id])
    return result &&
    console.log('Deleted Succesfully');
  } catch (error) {
    console.error('Error Removing' )
    throw error;
  }
}

// Editing  payment 
export const EditPayment = async (payment_id,payment_method,payment_status,payment_date) =>{
    try {
        const [result] = await pool.query('UPDATE payment SET payment_method =?, payment_status =?, payment_date = ? WHERE payment_id =?', [payment_id,payment_method,payment_status,payment_date])
        return result && console.log('Edited Succesfully')
    } catch (error) {
        console.error('Error editing')
        throw error;
        
    }
}