import React, { useState } from 'react'
import axios from 'axios';
const ProductForm = (props) => {
    //keep track of what is being typed via useState hook
    const {product, setProduct} = props;
    const [Title, setTitle] = useState(""); 
    const [Price, setPrice] = useState("");
    const [Description, setDescription] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new Product
        axios.post('http://localhost:8000/api/product', {
            Title,    // this is shortcut syntax for Title: Title,
            Price,
            Description      // this is shortcut syntax for Price: Price
        })
            .then(res=>{
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data);
                setProduct([...product, res.data]);

            })
            .catch(err=>console.log(err))
        setTitle("");
        setPrice("");
        setDescription("");
    }
    
    return (
        <div className="maxcontainer">
            <h1 className="header">Product Manager</h1>
        <form onSubmit={onSubmitHandler}>
            <div className='container'>
                <label className ="label">Title:</label>
                <input className ="input" type="text" value={Title} onChange = {(e)=>setTitle(e.target.value)}/>
            </div>
            <div className='container'>
                <label className ="label" >Price:</label>
                <input className ="input" type="number" value = {Price} onChange = {(e)=>{setPrice(e.target.value); console.log(e.target.value)}}/>
            </div>
            <div className='container'>
                <label className ="label">Description:</label>
                <input className ="input" type="text" value = {Description} onChange = {(e)=>setDescription(e.target.value)}/>
            </div>
            <button type="submit">Create</button>
        </form>
        </div>
        
    )
}
export default ProductForm;



