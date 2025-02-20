//import  connection
import {pool} from '../config/config.js'


// getting all products
export const getAllProducts = async () => {
    try {
      let [data] = await pool.query(`
        SELECT *
        FROM 
        products
        

        
          
      `); 
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;  
    }
  };

  // 
  export const  getSingleProduct = async (product_id) => {
    try {
        let [data] = await pool.query('SELECT * FROM products WHERE product_id =?', [product_id]);
        return data && console.log("Succesfully");
    } catch (error) {
        console.error('Error fetching One Product', error)
        throw error;
        
    }
    
  }
  
  //Adding product
  export const InsertProduct = async (name,description,catergory_id,price)=>{
    try {
        await pool.query ('INSERT INTO products(name,description,catergory_id,price) VALUES (?,?,?,?)',[name,description,catergory_id,price])
        console.log ('Added Succsesfully')
    } catch (error) {
        console.error('Error adding product', error)
        throw error;


        
    }
  }

  // Removing product
  export const removeProduct = async (product_id) => {
    try{
    const [result]= await pool.query('DELETE FROM product WHERE product_id = ?', [product_id])
    return result &&
    console.log('Deleted Succesfully');
  } catch (error) {
    console.error('Error Removing' )
    throw error;
  }
}

// Editing product
export const EditProduct = async (name,description,catergory_id) =>{
    try {
        const [result] = await pool.query('UPDATE order_details SET name =?, description =?, catergory_id =?, price =? WHERE order_details_id =?', [name,description,catergory_id])
        return result && console.log('Edited Succesfully')
    } catch (error) {
        console.error('Error editing')
        throw error;
        
    }
}