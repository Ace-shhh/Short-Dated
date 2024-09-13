import { useState } from "react";

const EditProduct = ({ product }) => {
    const [date, setDate] = useState('');
    const [id, setId] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Convert the date to ISO 8601 format
        const isoDate = new Date(date).toISOString();

        console.log("Form submitted with ID:", id, "and Expiry Date:", isoDate);

        const updatedProduct = { expiry: isoDate }; // Use 'expiry' key

        try {
            console.log("Sending PATCH request to:", `/api/products/${id}`);

            const response = await fetch(`/api/products/${id}`, {
                method: 'PATCH',
                body: JSON.stringify(updatedProduct),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log("Response received:", response);

            // Check if response is okay
            if (!response.ok) {
                const errorResponse = await response.text(); // Try getting error as text
                console.error("Server response error:", errorResponse);
                setError("Failed to update product. Server responded with: " + errorResponse);
                return;
            }

            // Parse response JSON
            const json = await response.json();
            console.log("Parsed JSON:", json);

            setDate('');
            setId('');
            setError(null);
            console.log('PRODUCT EXPIRY DATE UPDATED:', json);
        } catch (err) {
            console.error("Request failed:", err);
            setError("An error occurred while updating the product.");
        }
    };

    return (
        <form className="update-product-expiry" onSubmit={handleSubmit}>
            <h3>Update Product</h3>

            {/* Product ID input */}
            <label>INPUT PRODUCT ID</label>
            <input
                type="text"
                onChange={(e) => setId(e.target.value)}
                value={id}
            />

            {/* Date input */}
            <label>INPUT NEW DATE</label>
            <input
                type="date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
            />

            {/* Submit button */}
            <button className="update-button" type="submit">
                SAVE
            </button>

            {/* Close button */}
            <button type="button" className="close-button">
                CLOSE
            </button>

            {/* Error message display */}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
};

export default EditProduct;
