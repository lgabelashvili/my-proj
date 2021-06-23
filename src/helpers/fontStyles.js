import { createGlobalStyle } from 'styled-components';
import SofiaBlack from '../assets/fonts/Sofia Pro Black Az.woff';
import SofiaBlackItalic from '../assets/fonts/Sofia Pro Black Italic Az.woff';
import SofiaBold from '../assets/fonts/Sofia Pro Bold Az.woff';
import SofiaBoldItalic from '../assets/fonts/Sofia Pro Bold Italic Az.woff';
import SofiaExtraLight from '../assets/fonts/Sofia Pro ExtraLight Az.woff';
import SofiaExtraLightItalic from '../assets/fonts/Sofia Pro ExtraLight Italic Az.woff';
import SofiaLight from '../assets/fonts/Sofia Pro Light Az.woff';
import SofiaLightItalic from '../assets/fonts/Sofia Pro Light Italic Az.woff';
import SofiaMedium from '../assets/fonts/Sofia Pro Medium Az.woff';
import SofiaRegular from '../assets/fonts/Sofia Pro Regular Az.woff';
import SofiaRegularItalic from '../assets/fonts/Sofia Pro Regular Italic Az.woff';
import SofiaSemiBold from '../assets/fonts/Sofia Pro Semi Bold Az.woff';
import SofiaSemiBoldItalic from '../assets/fonts/Sofia Pro Semi Bold Italic Az.woff';
import SofiaUltraLight from '../assets/fonts/Sofia Pro UltraLight Az.woff';
import SofiaUltraLightItalic from '../assets/fonts/Sofia Pro UltraLight Italic Az.woff';
import SofiaBlackWoff2 from '../assets/fonts/Sofia Pro Black Az.woff2';
import SofiaBlackItalicWoff2 from '../assets/fonts/Sofia Pro Black Italic Az.woff2';
import SofiaBoldWoff2 from '../assets/fonts/Sofia Pro Bold Az.woff2';
import SofiaBoldItalicWoff2 from '../assets/fonts/Sofia Pro Bold Italic Az.woff2';
import SofiaExtraLightWoff2 from '../assets/fonts/Sofia Pro ExtraLight Az.woff2';
import SofiaExtraLightItalicWoff2 from '../assets/fonts/Sofia Pro ExtraLight Italic Az.woff2';
import SofiaLightWoff2 from '../assets/fonts/Sofia Pro Light Az.woff2';
import SofiaLightItalicWoff2 from '../assets/fonts/Sofia Pro Light Italic Az.woff2';
import SofiaMediumWoff2 from '../assets/fonts/Sofia Pro Medium Az.woff2';
import SofiaRegularWoff2 from '../assets/fonts/Sofia Pro Regular Az.woff2';
import SofiaRegularItalicWoff2 from '../assets/fonts/Sofia Pro Regular Italic Az.woff2';
import SofiaSemiBoldWoff2 from '../assets/fonts/Sofia Pro Semi Bold Az.woff2';
import SofiaSemiBoldItalicWoff2 from '../assets/fonts/Sofia Pro Semi Bold Italic Az.woff2';
import SofiaUltraLightWoff2 from '../assets/fonts/Sofia Pro UltraLight Az.woff2';
import SofiaUltraLightItalicWoff2 from '../assets/fonts/Sofia Pro UltraLight Italic Az.woff2';

const FontStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

@font-face {  
    font-family: 'Custom Font'; 
    font-display: swap; /* Read next point */
    src: local('Custom Font'),     
    url('/fonts/custom-font.woff2') format('woff2'),    
    url('/fonts/custom-font.woff') format('woff')
}

@font-face {
    font-family: Sofia-Black;
    font-display: swap; /* Read next point */
    src: local('Sofia-Black'),     
    url('${SofiaBlackWoff2}') format('woff2'),    
    url('${SofiaBlack}') format('woff')
}

@font-face {
    font-family: Sofia-Black-Italic;
    font-display: swap; /* Read next point */
    src: local('Sofia-Black-Italic'),     
    url('${SofiaBlackItalicWoff2}') format('woff2'),    
    url('${SofiaBlackItalic}') format('woff')
}

@font-face {
    font-family: Sofia-Bold;
    font-display: swap; /* Read next point */
    src: local('Sofia-Bold'),     
    url('${SofiaBoldWoff2}') format('woff2'),    
    url('${SofiaBold}') format('woff')
}

@font-face {
    font-family: Sofia-Bold-Italic;
    font-display: swap; /* Read next point */
    src: local('Sofia-Bold-Italic'),     
    url('${SofiaBoldItalicWoff2}') format('woff2'),    
    url('${SofiaBoldItalic}') format('woff')
}

@font-face {
    font-family: Sofia-Extra-Light;
    font-display: swap; /* Read next point */
    src: local('Sofia-Extra-Light'),     
    url('${SofiaExtraLightWoff2}') format('woff2'),    
    url('${SofiaExtraLight}') format('woff')
}

@font-face {
    font-family: Sofia-Extra-Light-Italic;
    font-display: swap; /* Read next point */
    src: local('Sofia-Extra-Light-Italic'),     
    url('${SofiaExtraLightItalicWoff2}') format('woff2'),    
    url('${SofiaExtraLightItalic}') format('woff')
}

@font-face {
    font-family: Sofia-Light;
    font-display: swap; /* Read next point */
    src: local('Sofia-Light'),     
    url('${SofiaLightWoff2}') format('woff2'),    
    url('${SofiaLight}') format('woff')
}

@font-face {
    font-family: Sofia-Light-Italic;
    font-display: swap; /* Read next point */
    src: local('Sofia-Light-Italic'),     
    url('${SofiaLightItalicWoff2}') format('woff2'),    
    url('${SofiaLightItalic}') format('woff')
}

@font-face {
    font-family: Sofia-Medium;
    font-display: swap; /* Read next point */
    src: local('Sofia-Medium'),     
    url('${SofiaMediumWoff2}') format('woff2'),    
    url('${SofiaMedium}') format('woff')
}

@font-face {
    font-family: Sofia-Medium-Italic;
    font-display: swap; /* Read next point */
    src: local('Sofia-Medium'),     
    url('${SofiaMediumWoff2}') format('woff2'),    
    url('${SofiaMedium}') format('woff')
}

@font-face {
    font-family: Sofia-Medium-Regular;
    font-display: swap; /* Read next point */
    src: local('Sofia-Medium-Regular'),     
    url('${SofiaRegularWoff2}') format('woff2'),    
    url('${SofiaRegular}') format('woff')
}

@font-face {
    font-family: Sofia-Medium-Regular-Italic;
    font-display: swap; /* Read next point */
    src: local('Sofia-Medium-Regular-Italic'),     
    url('${SofiaRegularItalicWoff2}') format('woff2'),    
    url('${SofiaRegularItalic}') format('woff')
}

@font-face {
    font-family: Sofia-Semi-Bold;
    font-display: swap; /* Read next point */
    src: local('Sofia-Semi-Bold;'),     
    url('${SofiaSemiBoldWoff2}') format('woff2'),    
    url('${SofiaSemiBold}') format('woff')
}

@font-face {
    font-family: Sofia-Semi-Bold-Italic;
    font-display: swap; /* Read next point */
    src: local('Sofia-Semi-Bold-Italic'),     
    url('${SofiaSemiBoldItalicWoff2}') format('woff2'),    
    url('${SofiaSemiBoldItalic}') format('woff')
}

@font-face {
    font-family: Sofia-Ultra-Light;
    font-display: swap; /* Read next point */
    src: local('Sofia-Ultra-Light;'),     
    url('${SofiaUltraLightWoff2}') format('woff2'),    
    url('${SofiaUltraLight}') format('woff')
}

@font-face {
    font-family: Sofia-Ultra-Light-Italic;
    font-display: swap; /* Read next point */
    src: local('Sofia-Ultra-Light-Italic'),     
    url('${SofiaUltraLightItalicWoff2}') format('woff2'),    
    url('${SofiaUltraLightItalic}') format('woff')
}

`;

export default FontStyles;
