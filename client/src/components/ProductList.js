import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const ProductList = (props) => {
    /* We deconstruct getter and setter which were passed down 
    via props by the parent component (app.js) to our child 
    component (ProductList.js). Now we can easily use the getter 
    and setter without having to write props.getter or props.setter every time: */
    const {removeFromDOM, product, setProduct} = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDOM(productId)
            })
            .catch(err => console.log(err))
    }
    
    useEffect(()=>{
    	axios.get("http://localhost:8000/api/product")
    	.then((res)=>{
	    console.log(res.data);
            setProduct(res.data);
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [])
    
    return (
        <div className = "listContainer">
            <h1>All Products:</h1>
            {
                product.map((product, index)=>{
                return <div key = {index}className='listContainer2'><Link className = "Link" to={`/${product._id}`} key={index}>{product.Title}</Link>
                <Link className = "edit "to={"/edit/" + product._id}>
                    Edit
                </Link><button className='delete' onClick={(e)=>{deleteProduct(product._id)}}>
                            Delete
                        </button></div>
                
                
                })
            }
        </div>
    )
}
export default ProductList;

