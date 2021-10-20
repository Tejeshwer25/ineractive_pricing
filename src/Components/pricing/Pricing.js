import React from 'react';
import './Pricing.css';
import PricingBottom from './PricingBottom';
import Slider from './Slider';

const Pricing = () => {
    return (
        <div className="pricing">
            <Slider />

            <hr />

            <PricingBottom />
        </div>
    )
}

export default Pricing
