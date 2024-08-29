import { useState } from "react"

const ProductForm = () =>{
    const [item, setItem] = useState('')
    const [expiry, setExpiry] = useState('')
    const [remind, setRemind] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const product = {item, expiry, remind}
        const response = await fetch('/api/products', {
            method: 'POST',
            body: JSON.stringify(product),
            headers:{
                'Content-Type': 'application/jason'
            }
        })
        
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok) {
            setItem('')
            setExpiry('')
            setRemind('')
            setError(null)
            console.log("New product added", json)
        }
        console.log(product)
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new Product</h3>

            <label>Product Name</label>
            <input 
            type="text"
            onChange={(e)=> setItem(e.target.value)}
            value={item}
            />

            <label>Expiry</label>
            <input 
            type="date"
            onChange={(e)=> setExpiry(e.target.value)}
            value={expiry}
            />

            <label>Days to Remind</label>
            <input 
            type="number"
            onChange={(e)=> setRemind(e.target.value)}
            value={remind}
            />


            <button>Add Product</button>
            {error && <div className="error">{error}</div>}
        </form> 
    )
}

export default ProductForm;