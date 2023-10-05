import "./quantityPicker.css";
import {useState} from "react";

function QuantityPicker(props) {
    //    var           fn
    let [quantity, setQuantity] = useState(1);
    function decrease(){
        if(quantity === 1) return;
        let val = quantity - 1;
        setQuantity(val);
        props.onChange(val);
    }
    function increase(){
        let val = quantity + 1;
        setQuantity(val);
        props.onChange(val);
    }
    
    return (
        <div className="qt-picker">
            {/* 2 buttons and  a label*/}
            <button className="btn btn-sm btn-success" disabled={quantity===1} onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button className="btn btn-sm btn-success" onClick={increase}>+</button>
        </div>
    );
}

export default QuantityPicker;