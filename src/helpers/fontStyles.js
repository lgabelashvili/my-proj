import { createGlobalStyle } from 'styled-components';
import SofiaBlack from '../assets/fonts/Sofia Pro Black Az.otf';
import SofiaBlackItalic from '../assets/fonts/Sofia Pro Black Italic Az.otf';
import SofiaBold from '../assets/fonts/Sofia Pro Bold Az.otf';
import SofiaBoldItalic from '../assets/fonts/Sofia Pro Bold Italic Az.otf';
import SofiaExtraLight from '../assets/fonts/Sofia Pro ExtraLight Az.otf';
import SofiaExtraLightItalic from '../assets/fonts/Sofia Pro ExtraLight Italic Az.otf';
import SofiaLight from '../assets/fonts/Sofia Pro Light Az.otf';
import SofiaLightItalic from '../assets/fonts/Sofia Pro Light Italic Az.otf';
import SofiaMedium from '../assets/fonts/Sofia Pro Medium Az.otf';
import SofiaMediumItalic from '../assets/fonts/Sofia Pro Medium Italic Az.otf';
import SofiaRegular from '../assets/fonts/Sofia Pro Regular Az.otf';
import SofiaRegularItalic from '../assets/fonts/Sofia Pro Regular Italic Az.otf';
import SofiaSemiBold from '../assets/fonts/Sofia Pro Semi Bold Az.otf';
import SofiaSemiBoldItalic from '../assets/fonts/Sofia Pro Semi Bold Italic Az.otf';
import SofiaUltraLight from '../assets/fonts/Sofia Pro UltraLight Az.otf';
import SofiaUltraLightItalic from '../assets/fonts/Sofia Pro UltraLight Italic Az.otf';

const FontStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

@font-face {
    font-family: Sofia-Black;
    src: url('${SofiaBlack}') format("opentype");
}

@font-face {
    font-family: Sofia-Black-Italic;
    src: url('${SofiaBlackItalic}') format("opentype");
}

@font-face {
    font-family: Sofia-Bold;
    src: url('${SofiaBold}') format("opentype");
}

@font-face {
    font-family: Sofia-Bold-Italic;
    src: url('${SofiaBoldItalic}') format("opentype");
}

@font-face {
    font-family: Sofia-Extra-Light;
    src: url('${SofiaExtraLight}') format("opentype");
}

@font-face {
    font-family: Sofia-Extra-Light-Italic;
    src: url('${SofiaExtraLightItalic}') format("opentype");
}

@font-face {
    font-family: Sofia-Light;
    src: url('${SofiaLight}') format("opentype");
}

@font-face {
    font-family: Sofia-Light-Italic;
    src: url('${SofiaLightItalic}') format("opentype");
}

@font-face {
    font-family: Sofia-Medium;
    src: url('${SofiaMedium}') format("opentype");
}

@font-face {
    font-family: Sofia-Medium-Italic;
    src: url('${SofiaMediumItalic}') format("opentype");
}

@font-face {
    font-family: Sofia-Medium-Regular;
    src: url('${SofiaRegular}') format("opentype");
}

@font-face {
    font-family: Sofia-Medium-Regular-Italic;
    src: url('${SofiaRegularItalic}') format("opentype");
}

@font-face {
    font-family: Sofia-Semi-Bold;
    src: url('${SofiaSemiBold}') format("opentype");
}

@font-face {
    font-family: Sofia-Semi-Bold-Italic;
    src: url('${SofiaSemiBoldItalic}') format("opentype");
}

@font-face {
    font-family: Sofia-Ultra-Light;
    src: url('${SofiaUltraLight}') format("opentype");
}

@font-face {
    font-family: Sofia-Ultra-Light-Italic;
    src: url('${SofiaUltraLightItalic}') format("opentype");
}


`;

export default FontStyles;
