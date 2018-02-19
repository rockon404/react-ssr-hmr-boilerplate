import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

const applyGlobalStyles = () => injectGlobal`
  ${normalize()}
`;

export default applyGlobalStyles;
