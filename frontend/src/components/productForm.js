import { useState } from "react"

const ProductForm = () =>{
    const [section, setSection] = useState('')
    const [type, setType] = useState('')
    const [brand, setBrand] = useState('')
    const [expiry, setExpiry] = useState('')
    const [remind, setRemind] = useState('')

    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const product = {section, type, brand, expiry, remind}
        const response = await fetch('/api/products', {
            method: 'POST',
            body: JSON.stringify(product),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok) {
            setSection('')
            setType('')
            setBrand('')
            setExpiry('')
            setRemind('')
            setError(null)
            console.log("New product added", json)
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new Product</h3>

            <label>Product Section</label>
            <input 
            type="text"
            onChange={(e)=> setSection(e.target.value)}
            value={section}
            />
            <label>Type</label>
            <input 
            type="text"
            onChange={(e)=> setType(e.target.value)}
            value={type}
            />
            <label>Brand</label>
            <input 
            type="text"
            onChange={(e)=> setBrand(e.target.value)}
            value={brand}
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