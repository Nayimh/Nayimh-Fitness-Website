import React, { useEffect, useState } from 'react';
import Price from '../Price/Price';

const Prices = () => {
    const [prices, setPrices] = useState([])
    
    useEffect(() => {
        fetch('plan.json')
            .then(res => res.json())
            .then(data => setPrices(data))
    },[])

    return (
        <div className="mb-5 mt-5 " id="services">
           
            <h1>Our Packages</h1>
            <h4 className="text-black">TAKE YOUR TRAINING TO THE NEXT LEVEL</h4>
            
            <div className="container">

                {
                    prices.map(price => <Price
                        key={price.id}
                        price={price}
                        
                    >

                    </Price>)
            }    
            
           </div>
        </div>
    );
};

export default Prices;