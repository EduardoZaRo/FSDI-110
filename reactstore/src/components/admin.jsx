import "./admin.css";
import {useState} from 'react';
function Admin() {
    const [product, setProduct] = useState({});
    const [coupon, setCoupon] = useState({});
    const [allProducts, setAllProducts] = useState([]);
    const [allCoupons, setAllCoupons] = useState([]);
    function handleSaveProduct(){
        let copy = [...allProducts];
        copy.push(product)
        setAllProducts(copy);
    }
    function handleSaveCoupon(){
        let copy = [...allCoupons];
        copy.push(coupon)
        setAllCoupons(copy);
        console.log(copy);
    }
    function productChange(e){
        const value = e.target.value;
        const name = e.target.name;

        let copy = {...product};
        copy[name] = value;
        setProduct(copy);
    }
    function couponChange(e){
        const value = e.target.value;
        const name = e.target.name;

        let copy = {...coupon};
        copy[name] = value;
        setCoupon(copy);
    }
    return (
        <div className="admin page">
            <h1 className="title">Store Administration</h1>
            <div className="forms-container">
                <div className="form">
                    <h1>Product register</h1>
                    <div className="form-group">
                        <label htmlFor="inputTitle">Title</label>
                        <input type="text" onChange={productChange} className="form-control" 
                        name="title" id="inputTitle" aria-describedby="inputTitle" placeholder="Enter product name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputCategory">Category</label>
                        <input type="text" onChange={productChange} className="form-control" name="category" id="inputCategory" placeholder="Category"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputImage">Image</label>
                        <input type="file" onChange={productChange} className="form-control" name="image" id="inputImage" placeholder="Image" accept="image/*"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPrice">Price</label>
                        <input type="number" onChange={productChange} className="form-control" name="price" id="inputPrice" placeholder="Enter price in dollars"/>
                    </div>
                    <button onClick={handleSaveProduct} type="submit" className="btn btn-primary">Save</button>

                    
                    <div className="table-responsive" style={{display:allProducts.length ? "block" : "none"}}>
                        
                        <table className="table table-sm">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allProducts.map((p, index) => 
                                    <tr key={index}>
                                        <td>{p.title}</td>
                                        <td>$ {parseFloat(p.price).toFixed(2)}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                </div>




                <div className="form">
                <h1>Coupons</h1>
                    <div className="form-group">
                        <label htmlFor="inputDiscount">Code</label>
                        <input type="text" onChange={couponChange} className="form-control" name="code" id="inputDiscount" placeholder="Code"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputDiscount">Discount</label>
                        <input type="number" onChange={couponChange} className="form-control" name="discount_percentage" id="inputDiscount" placeholder="Discount %"/>
                    </div>
                    <button type="submit" onClick={handleSaveCoupon}  className="btn btn-primary">Save</button>


                    <div className="table-responsive" style={{display:allCoupons.length ? "block" : "none"}}>
                        
                        <table className="table table-sm">
                            <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Discount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allCoupons.map((c, index) => 
                                    <tr key={index}>
                                        <td>{c.code}</td>
                                        <td>{parseFloat(c.discount_percentage).toFixed(2)}%</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Admin;