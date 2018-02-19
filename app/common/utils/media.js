import { css } from 'styled-components';
import { rem } from 'polished';
import { mediaBreakpoints } from 'app-common/constrants';

const media = Object.keys(mediaBreakpoints).reduce((acc, label) => {
  const remSize = rem(mediaBreakpoints[label]);
  acc[label] = (...args) => css`
    @media (max-width: ${remSize}) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export default media;
