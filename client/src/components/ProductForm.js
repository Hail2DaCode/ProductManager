import React, { useState } from 'react'
import axios from 'axios';
const ProductForm = () => {
    //keep track of what is being typed via useState hook
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
            })
            .catch(err=>console.log(err))
        setTitle("");
        setPrice("");
        setDescription("");
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <p className='container'>
                <label>Title:</label>
                <input type="text" value={Title} onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p className='container'>
                <label>Price:</label>
                <input type="number" value = {Price} onChange = {(e)=>{setPrice(e.target.value); console.log(e.target.value)}}/>
            </p>
            <p className='container'>
                <label>Description:</label>
                <input type="text" value = {Description} onChange = {(e)=>setDescription(e.target.value)}/>
            </p>
            <button type="submit">Create</button>
        </form>
    )
}
export default ProductForm;



