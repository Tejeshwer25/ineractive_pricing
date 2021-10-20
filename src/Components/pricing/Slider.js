import React, {useState} from 'react';
import './Slider.css'

const Slider = () => {

    const [subscriptionType, setSubscriptionType] = useState('month');
    const [views, setViews] = useState('1');
    const [cost, setCost] = useState('16');

    const handleViewChange = (e) => {
        let tempViews = e.target.value;
        setViews(tempViews);
        setCost(subscriptionType==='month' ? (tempViews*16) : ((tempViews*16*12)*(75/100)))
    }

    const handleSubscriptionChange = (e) => {
        let checked = e.target.checked;
        setSubscriptionType(!checked ? 'month' : 'year');

        let tempcost = checked ? (views*16*12)*(75/100) : (views*16); 
        setCost(tempcost);
    }

    return (
        <div className="slider">
            <div className="slider__details">
                <p className="slider__quantity">{views*100}k PAGEVIEWS</p>

                <p className="slider__input--cost"><span>${cost}</span>/{subscriptionType}</p>
            </div>

            <div className="slider__input">
                <input type="range" min="1" max="10" step="1" className="slider__input--slider" value={views} onChange={(e) => handleViewChange(e)}/>

                <p className="slider__input--cost"><span>${cost}</span>/{subscriptionType}</p>
            </div>

            <div className="slider__toggle">
                <p>Monthly Billing</p>
                <input type="checkbox" className="slider__toggle--input" onChange={(e) => handleSubscriptionChange(e)}/>
                <p>Yearly Billing <span className="slider__toggle--discountChip">-25% <span>Discount</span></span></p>
            </div>
        </div>
    )
}

export default Slider;