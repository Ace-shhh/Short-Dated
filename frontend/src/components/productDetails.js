const ProductDetails = ({product}) =>{
    return(
        <div className="product-details">
            <h4>{product.item}</h4>
            <p><strong>Expiry : </strong>{product.expiry}</p>
            <p><strong>Days to Remind : </strong>{product.remind}</p>
            <p>{product.createdAt}</p>
        </div>
    )
}

export default ProductDetails;