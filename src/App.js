import React from 'react';
import FinancialProducts from './FinancialProducts';

const App = () => {
    // Static array of financial products
    const products = [
        { name: "Credit Card", interestRate: "15%", fees: "$50 annual fee" },
        { name: "Personal Loan", interestRate: "10%", fees: "$100 processing fee" },
        { name: "Savings Account", interestRate: "2%", fees: "No fees" }
    ];

    return (
        <div className="App">
            <FinancialProducts products={products} />
        </div>
    );
};

export default App;
