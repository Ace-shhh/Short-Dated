import {useEffect, useState} from 'react'

//components import
import ProductDetails from "../components/productDetails"
import ProductForm from "../components/productForm"
import EditProduct from '../components/editProduct'

const Home = () =>{
    
    const [products, setProducts] = useState(null)

    useEffect(()=>{
        const fetchProducts = async () => {
            const response = await fetch('/api/products')
            const json = await response.json()

            if (response.ok){
                const uniqueValues = Object.values(json.reduce((acc, product)=>{
                    const productKey = product.type;

                    if(!acc[productKey]){
                        acc[productKey] = product;
                    } else{
                        const existingExpiry = new Date(acc[productKey].expiry)
                        const newExpiry = new Date(product.expiry);
                        if(newExpiry < existingExpiry){
                            acc[productKey] = product;
                        }
                    }
                    return acc
                }, {}))
                setProducts(uniqueValues)
            }
        }
        fetchProducts();
    }, [])

    return (
    <div className="home">
        <div className="products">
            {products && products
                .sort((a, b)=> a.section.localeCompare(b.section))
                .map((product) => (
                    <>
            <button>
            <ProductDetails key={product._id} product={product} />
            </button>
        </>
                ))}
        </div>
        <ProductForm />
        <EditProduct/>
    </div>
);
}

export default Home;