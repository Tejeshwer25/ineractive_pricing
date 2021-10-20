import React from 'react';
import './PricingBottom.css';

const PricingBottom = () => {
    return (
        <div className="pricingBottom">
            <div className="pricingBottom__featureList">
                <ul>
                    <li>Unlimited websites</li>
                    <li>100% data ownership</li>
                    <li>Email reports</li>
                </ul>
            </div>

            <div className="pricingBottom__trialBtn">
                <button>Start my trial</button>
            </div>
        </div>
    )
}

export default PricingBottom;