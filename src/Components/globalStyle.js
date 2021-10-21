import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    .app {
        background: ${({theme}) => theme.card};
    }

    .header {
        color: ${({theme}) => theme.text};
    }

    .pricing {
        background: ${({theme}) => theme.body};
        color: ${({theme}) => theme.cardText}
    }

    .slider__input--cost > span {
        color: ${({theme}) => theme.cardText}
    }

    .pricingBottom__trialBtn > button {
        background-color: ${({theme}) => theme.ctaBackground} !important;
        color: ${({theme}) => theme.ctaColor} !important;
    }
`