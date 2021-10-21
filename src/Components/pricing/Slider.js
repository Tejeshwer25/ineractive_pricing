import React, {useState} from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

import './Slider.css'

const Slider = () => {

    const [subscriptionType, setSubscriptionType] = useState('month');
    const [views, setViews] = useState('1');
    const [cost, setCost] = useState('16');
    const [checked, setChecked] = useState('false');

    const handleViewChange = (e) => {
        let tempViews = e.target.value;
        setViews(tempViews);
        setCost(subscriptionType==='month' ? (tempViews*16) : ((tempViews*16*12)*(75/100)))
    }

    const handleSubscriptionChange = () => {
        setChecked(!checked);
        setSubscriptionType(checked ? 'month' : 'year');

        let tempcost = !checked ? (views*16*12)*(75/100) : (views*16); 
        setCost(tempcost);
    }

    const IOSSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
      ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
          padding: 0,
          margin: 2,
          transitionDuration: '300ms',
          '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              backgroundColor: theme.palette.mode === 'dark' ? '#A5F3EB' : '#10d5c2',
              opacity: 1,
              border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.5,
            },
          },
          '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#A5F3EB',
            border: '6px solid #fff',
          },
          '&.Mui-disabled .MuiSwitch-thumb': {
            color:
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[600],
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
          },
        },
        '& .MuiSwitch-thumb': {
          boxSizing: 'border-box',
          width: 22,
          height: 22,
        },
        '& .MuiSwitch-track': {
          borderRadius: 26 / 2,
          backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#A5F3EB',
          opacity: 1,
          transition: theme.transitions.create(['background-color'], {
            duration: 500,
          }),
        },
      }));

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

                <div className="slider__toggle--switch">
                    <FormControlLabel
                        control={<IOSSwitch sx={{ m: 1 }} checked={checked}  />}
                        label=""
                        onChange={handleSubscriptionChange}
                    />
                </div>

                <p>Yearly Billing <span className="slider__toggle--discountChip">-25% <span>Discount</span></span></p>
            </div>
        </div>
    )
}

export default Slider;