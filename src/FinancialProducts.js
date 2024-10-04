import React, { useState } from 'react';


const FinancialProducts = ({ products }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    return (
        <div className="container">
            <h1>Financial Products</h1>
            <div className="button-container">
                {products.map((product, index) => (
                    <button key={index} onClick={() => handleProductClick(product)}>
                        {product.name}
                    </button>
                ))}
            </div>
            {selectedProduct && (
                <div className="selected-product">
                    <h2>Selected Product: {selectedProduct.name}</h2>
                    <p>Interest Rate: {selectedProduct.interestRate}</p>
                    <p>Fees: {selectedProduct.fees}</p>
                </div>
            )}
        </div>
    );
};

export default FinancialProducts;
