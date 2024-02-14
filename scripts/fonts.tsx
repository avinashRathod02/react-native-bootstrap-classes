import {Dimensions} from 'react-native';
import {css} from 'styled-components/native';

const {width, height} = Dimensions.get('window');
const realWidth = height > width ? width : height;

export const normalize = size => Math.round((size * realWidth) / 375);

export const generateSize = size =>
  css`
    font-size: ${size};
  `;

export const fontSizes = {
  h1: normalize(36),

  h2: normalize(32),

  h3: normalize(22),

  h4: normalize(16),

  h5: normalize(14),

  h6: normalize(12),
};

export const fonts = {
  black: 'Poppins-Black',
  bold: 'Poppins-Bold',
  extraBold: 'Poppins-ExtraBold',
  extraLight: 'Poppins-ExtraLight',
  light: 'Poppins-Light',
  medium: 'Poppins-Medium',
  regular: 'Poppins-Regular',
  semiBold: 'Poppins-SemiBold',
  thin: 'Poppins-Thin',
};
