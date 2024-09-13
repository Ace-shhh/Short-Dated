const ProductDetails = ({product}) =>{
    return(
        <div className="grid-container">
            <div className="product-details">
                <h4>{product.type}</h4>
                <p><strong>SECTION : </strong>{product.section}</p>
                <p><strong>BRAND : </strong>{product.brand}</p>
                <p><strong>EXPIRY : </strong>{product.expiry}</p>
                <p><strong>REMIND : </strong>{product.remind}</p>   
                <button className="edit-button">EDIT</button>
            </div>
        </div>
    )
}

export default ProductDetails;