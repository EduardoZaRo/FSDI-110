import {useEffect,useState} from "react";
import './product.css';
import QuantityPicker from './quantityPicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import {useContext} from 'react';
import StoreContext from '../state/storeContext';

import ImageZoom from 'react-image-zooom';

function Product(props){
    const [quantity, setQuantity] = useState(1);
    const [inCart, setInCart] = useState(false);
    const addProductToCart = useContext(StoreContext).addProductToCart;
    let cart = useContext(StoreContext).cart;

    useEffect(function(){
        console.log("component loaded");
        cart.forEach((p)=>{
            if(props.data.title === p.title){
                setInCart(true);
            }
        })
        
    },[]);

    function onQuantityChange(value){
        setQuantity(value);
    }

    function getTotal(){
        const total = quantity * props.data.price;
        return total.toFixed(2);
    }

    function handleAdd(){
        // JS spread  operator
        let prodForCart = {...props.data};
        prodForCart.quantity = quantity;
        addProductToCart(prodForCart);
        setInCart(true);
    }

    return(
        <div className="product">
            <p style={{
                display: inCart === true ? "block" : "none", 
                background:"orange",
                position:"absolute",
                width:"238px",
                zIndex:998
                }}>This product is in your cart</p>
            <div className="product-img-container">
                <ImageZoom src={"/images/"+props.data.image} alt="product" className="gallery-img" zoom="300"/>
            </div>

            <div className="labels-container">
                <label>Price</label>
                <label><strong>Total</strong> </label>
            </div>
            <div className="prices-container">
                <label className="price">{parseFloat(props.data.price).toFixed(2)}$</label>
                <label className="total"><strong></strong> {getTotal()}$</label>
            </div>

            <h5>{props.data.title}</h5>
            <QuantityPicker onChange={onQuantityChange}/>

            <button onClick={handleAdd} className="add-btn">Add to <FontAwesomeIcon icon={faCartShopping}/></button>
        </div>
    );
}

export default Product;

/**
 * Create CarProduct component
 * 
 * cart should render to cartProduct instead of li
 *  -should pass data
 * 
 * Cart product should receive props and render information
 * 
 * 
 */
