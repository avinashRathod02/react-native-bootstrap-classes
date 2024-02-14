import colors from './colors';
import {fontSizes, fonts} from './fonts';

export const textStyles = {
  'font-black': {fontFamily: fonts.black},
  'font-bold': {fontFamily: fonts.bold},
  'font-extra-bold': {fontFamily: fonts.extraBold},
  'font-extra-light': {fontFamily: fonts.extraLight},
  'font-light': {fontFamily: fonts.light},
  'font-medium': {fontFamily: fonts.medium},
  'font-regular': {fontFamily: fonts.regular},
  'font-semi-bold': {fontFamily: fonts.semiBold},
  'font-thin': {fontFamily: fonts.thin},

  size: {fontSize: 0},
  'size-2xl': {fontSize: fontSizes.h1},
  'size-xl': {fontSize: fontSizes.h2},
  'size-lg': {fontSize: fontSizes.h3},
  'size-base': {fontSize: fontSizes.h4},
  'size-sm': {fontSize: fontSizes.h5},
  'size-xs': {fontSize: fontSizes.h6},

  'not-italic': {fontStyle: 'normal'},
  italic: {fontStyle: 'italic'},

  'text-underline': {textDecorationLine: 'underline'},
  'text-line-through': {textDecorationLine: 'line-through'},

  'font-weight-normal': {fontWeight: 'normal'},
  'font-weight-bold': {fontWeight: 'bold'},
  'font-weight': {fontWeight: 0},

  'letter-spacing': {letterSpacing: 0},
  leading: {lineHeight: 0},

  'text-left': {textAlign: 'left'},
  'text-right': {textAlign: 'right'},
  'text-center': {textAlign: 'center'},
  'text-justify': {textAlign: 'justify'},

  'normal-case': {textTransform: 'none'},
  capitalize: {textTransform: 'capitalize'},
  uppercase: {textTransform: 'uppercase'},
  lowercase: {textTransform: 'lowercase'},
};

export const viewStyles = {
  'content-start': {alignContent: 'flex-start'},
  'content-end': {alignContent: 'flex-end'},
  'content-center': {alignContent: 'center'},
  'content-stretch': {alignContent: 'stretch'},
  'content-between': {alignContent: 'space-between'},
  'content-around': {alignContent: 'space-around'},

  'items-start': {alignItems: 'flex-start'},
  'items-end': {alignItems: 'flex-end'},
  'items-center': {alignItems: 'center'},
  'items-stretch': {alignItems: 'stretch'},
  'items-baseline': {alignItems: 'baseline'},

  'self-start': {alignSelf: 'flex-start'},
  'self-end': {alignSelf: 'flex-end'},
  'self-center': {alignSelf: 'center'},
  'self-stretch': {alignSelf: 'stretch'},
  'self-baseline': {alignSelf: 'baseline'},
  'self-auto': {alignSelf: 'auto'},

  'justify-start': {justifyContent: 'flex-start'},
  'justify-end': {justifyContent: 'flex-end'},
  'justify-center': {justifyContent: 'center'},
  'justify-between': {justifyContent: 'space-between'},
  'justify-around': {justifyContent: 'space-around'},
  'justify-evenly': {justifyContent: 'space-evenly'},

  'overflow-visible': {overflow: 'visible'},
  'overflow-hidden': {overflow: 'hidden'},
  'overflow-scroll': {overflow: 'scroll'},

  hidden: {display: 'none'},
  'display-flex': {display: 'flex'},

  absolute: {position: 'absolute'},
  relative: {position: 'relative'},
  top: {top: 0},
  bottom: {bottom: 0},
  left: {left: 0},
  right: {right: 0},

  opacity: {opacity: 0},

  flex: {flex: 0},
  'flex-basis': {flexBasis: 0},
  'flex-row': {flexDirection: 'row'},
  'flex-col': {flexDirection: 'column'},
  'flex-row-reverse': {flexDirection: 'row-reverse'},
  'flex-col-reverse': {flexDirection: 'column-reverse'},
  'flex-grow': {flexGrow: 1},
  'flex-grow-0': {flexGrow: 0},
  'flex-shrink': {flexShrink: 1},
  'flex-shrink-0': {flexShrink: 0},
  'flex-wrap': {flexWrap: 'wrap'},
  'flex-nowrap': {flexWrap: 'nowrap'},
  'flex-wrap-reverse': {flexWrap: 'wrap-reverse'},

  height: {height: 0},
  h: {height: 0},
  width: {width: 0},
  w: {width: 0},
  'max-h': {maxHeight: 0},
  'max-w': {maxWidth: 0},
  'min-h': {minHeight: 0},
  'min-w': {minWidth: 0},

  mt: {marginTop: 0},
  mb: {marginBottom: 0},
  ml: {marginLeft: 0},
  mr: {marginRight: 0},
  mx: {marginHorizontal: 0},
  my: {marginVertical: 0},
  m: {marginVertical: 0, marginVertical: 0},

  pt: {paddingTop: 0},
  pb: {paddingBottom: 0},
  pl: {paddingLeft: 0},
  pr: {paddingRight: 0},
  px: {paddingHorizontal: 0},
  py: {paddingVertical: 0},
  p: {marginVertical: 0, marginVertical: 0},

  z: {zIndex: 0},
};

export const shadowOffset = {height: 0, width: 0};

export const shadowStyles = {
  'shadow-offset-w-': {shadowOffset: {...shadowOffset, width: 0}},
  'shadow-offset-h-': {shadowOffset: {...shadowOffset, height: 0}},
  'shadow-opacity': {shadowOpacity: 0},
  'shadow-radius': {shadowRadius: 0},
  elevation: {elevation: 0},
};

export const imageProperties = {
  'image-cover': {resizeMode: 'cover'},
  'image-contain': {resizeMode: 'contain'},
  'image-stretch': {resizeMode: 'stretch'},
  'image-repeat': {resizeMode: 'repeat'},
  'image-center': {resizeMode: 'center'},
  'aspect-ratio': {aspectRatio: null},
};

export const colorsStyles = {
  'bg-background': {backgroundColor: colors.background},

  'bg-primary': {backgroundColor: colors.primary1},
  'bg-primary-200': {backgroundColor: colors.primary2},
  'bg-primary-300': {backgroundColor: colors.primary3},
  'bg-primary-400': {backgroundColor: colors.primary4},
  'bg-primary-500': {backgroundColor: colors.primary5},
  'bg-primary-600': {backgroundColor: colors.primary6},
  'bg-primary-700': {backgroundColor: colors.primary7},
  'bg-primary-800': {backgroundColor: colors.primary8},
  'bg-primary-900': {backgroundColor: colors.primary9},

  'bg-white': {backgroundColor: colors.white},
  'bg-black': {backgroundColor: colors.black},
  'bg-danger': {backgroundColor: colors.danger},

  'bg-gray-100': {backgroundColor: colors.gray1},
  'bg-gray-200': {backgroundColor: colors.gray2},
  'bg-gray-300': {backgroundColor: colors.gray3},
  'bg-gray-400': {backgroundColor: colors.gray4},
  'bg-gray-500': {backgroundColor: colors.gray5},
  'bg-gray-600': {backgroundColor: colors.gray6},
  'bg-gray-700': {backgroundColor: colors.gray7},
  'bg-gray-800': {backgroundColor: colors.gray8},
  'bg-gray-900': {backgroundColor: colors.gray9},
  'bg-gray-light-100': {backgroundColor: colors.grayA4},
  'bg-gray-light-200': {backgroundColor: colors.grayLight2},
  'bg-gray-light-300': {backgroundColor: colors.grayLight3},
  'bg-gray-light-400': {backgroundColor: colors.grayLight4},
  'bg-gray-light-800': {backgroundColor: colors.grayLight8},
  'bg-green-100': {backgroundColor: colors.green1},
  'bg-green-200': {backgroundColor: colors.green2},
  'bg-green-300': {backgroundColor: colors.green3},
  'bg-green-400': {backgroundColor: colors.green4},
  'bg-green-500': {backgroundColor: colors.green5},
  'bg-green-600': {backgroundColor: colors.green6},
  'bg-green-700': {backgroundColor: colors.green7},
  'bg-green-800': {backgroundColor: colors.green8},
  'bg-green-900': {backgroundColor: colors.green9},
  'bg-warning-light': {backgroundColor: colors.warningLight},
  'bg-danger-light': {backgroundColor: colors.dangerLight},
  'bg-transparent': {backgroundColor: colors.transparent},

  'shadow-background': {shadowColor: colors.background},

  'shadow-primary': {shadowColor: colors.primary1},
  'shadow-primary-200': {shadowColor: colors.primary2},
  'shadow-primary-300': {shadowColor: colors.primary3},
  'shadow-primary-400': {shadowColor: colors.primary4},
  'shadow-primary-500': {shadowColor: colors.primary5},
  'shadow-primary-600': {shadowColor: colors.primary6},
  'shadow-primary-700': {shadowColor: colors.primary7},
  'shadow-primary-800': {shadowColor: colors.primary8},
  'shadow-primary-900': {shadowColor: colors.primary9},

  'shadow-white': {shadowColor: colors.white},
  'shadow-black': {shadowColor: colors.black},
  'shadow-danger': {shadowColor: colors.danger},

  'shadow-gray-100': {shadowColor: colors.gray1},
  'shadow-gray-200': {shadowColor: colors.gray2},
  'shadow-gray-300': {shadowColor: colors.gray3},
  'shadow-gray-400': {shadowColor: colors.gray4},
  'shadow-gray-500': {shadowColor: colors.gray5},
  'shadow-gray-600': {shadowColor: colors.gray6},
  'shadow-gray-700': {shadowColor: colors.gray7},
  'shadow-gray-800': {shadowColor: colors.gray8},
  'shadow-gray-900': {shadowColor: colors.gray9},
  'shadow-gray-light-200': {shadowColor: colors.grayLight2},
  'shadow-gray-light-300': {shadowColor: colors.grayLight3},
  'shadow-gray-light-400': {shadowColor: colors.grayLight4},
  'shadow-gray-light-800': {shadowColor: colors.grayLight8},
  'shadow-warning-light': {shadowColor: colors.warningLight},
  'shadow-danger-light': {shadowColor: colors.dangerLight},
  'shadow-transparent': {shadowColor: colors.transparent},

  'text-primary': {color: colors.primary1},
  'text-primary-200': {color: colors.primary2},
  'text-primary-300': {color: colors.primary3},
  'text-primary-400': {color: colors.primary4},
  'text-primary-500': {color: colors.primary5},
  'text-primary-600': {color: colors.primary6},
  'text-primary-700': {color: colors.primary7},
  'text-primary-800': {color: colors.primary8},
  'text-primary-900': {color: colors.primary9},

  'text-white': {color: colors.white},
  'text-info': {color: colors.info},
  'text-black': {color: colors.black},

  'text-gray-100': {color: colors.gray1},
  'text-gray-200': {color: colors.gray2},
  'text-gray-300': {color: colors.gray3},
  'text-gray-400': {color: colors.gray4},
  'text-gray-500': {color: colors.gray5},
  'text-gray-600': {color: colors.gray6},
  'text-gray-700': {color: colors.gray7},
  'text-gray-800': {color: colors.gray8},
  'text-gray-900': {color: colors.gray9},
  'text-gray-light-900': {color: colors.grayLight9},
  'text-danger': {color: colors.danger},
  'text-danger-dark': {color: colors.dangerDark},
  'text-blue': {color: colors.blue},
  'text-warning': {color: colors.warningDark},
  'text-success': {color: colors.success},
};

export const borderStyles = {
  'border-t-w': {borderTopWidth: 0},
  'border-b-w': {borderBottomWidth: 0},
  'border-l-w': {borderLeftWidth: 0},
  'border-r-w': {borderRightWidth: 0},
  'border-w': {borderWidth: 0},

  rounded: {borderRadius: 0},
  'rounded-b-e': {borderBottomEndRadius: 0},
  'rounded-b-l': {borderBottomLeftRadius: 0},
  'rounded-b-r': {borderBottomRightRadius: 0},
  'rounded-b-s': {borderBottomStartRadius: 0},
  'rounded-t-e': {borderTopEndRadius: 0},
  'rounded-t-l': {borderTopLeftRadius: 0},
  'rounded-t-r': {borderTopRightRadius: 0},
  'rounded-t-s': {borderTopStartRadius: 0},

  'border-solid': {borderStyle: 'solid'},
  'border-dotted': {borderStyle: 'dotted'},
  'border-dashed': {borderStyle: 'dashed'},

  'border-t-primary': {borderTopColor: colors.primary1},
  'border-t-primary-200': {borderTopColor: colors.primary2},
  'border-t-primary-300': {borderTopColor: colors.primary3},
  'border-t-primary-400': {borderTopColor: colors.primary4},
  'border-t-primary-500': {borderTopColor: colors.primary5},
  'border-t-primary-600': {borderTopColor: colors.primary6},
  'border-t-primary-700': {borderTopColor: colors.primary7},
  'border-t-primary-800': {borderTopColor: colors.primary8},
  'border-t-primary-900': {borderTopColor: colors.primary9},

  'border-t-white': {borderTopColor: colors.white},
  'border-t-black': {borderTopColor: colors.black},

  'border-t-gray-200': {borderTopColor: colors.gray2},
  'border-t-gray-400': {borderTopColor: colors.gray4},
  'border-t-gray-500': {borderTopColor: colors.gray5},
  'border-t-gray-600': {borderTopColor: colors.gray6},
  'border-t-gray-700': {borderTopColor: colors.gray7},
  'border-t-gray-800': {borderTopColor: colors.gray8},
  'border-t-gray-900': {borderTopColor: colors.gray9},

  'border-b-primary': {borderTopColor: colors.primary1},
  'border-b-primary-200': {borderTopColor: colors.primary2},
  'border-b-primary-300': {borderTopColor: colors.primary3},
  'border-b-primary-400': {borderTopColor: colors.primary4},
  'border-b-primary-500': {borderTopColor: colors.primary5},
  'border-b-primary-600': {borderTopColor: colors.primary6},
  'border-b-primary-700': {borderTopColor: colors.primary7},
  'border-b-primary-800': {borderTopColor: colors.primary8},
  'border-b-primary-900': {borderTopColor: colors.primary9},

  'border-b-white': {borderBottomColor: colors.white},
  'border-b-black': {borderBottomColor: colors.black},

  'border-b-gray-200': {borderBottomColor: colors.gray2},
  'border-b-gray-400': {borderBottomColor: colors.gray4},
  'border-b-gray-500': {borderBottomColor: colors.gray5},
  'border-b-gray-600': {borderBottomColor: colors.gray6},
  'border-b-gray-700': {borderBottomColor: colors.gray7},
  'border-b-gray-800': {borderBottomColor: colors.gray8},
  'border-b-gray-900': {borderBottomColor: colors.gray9},

  'border-l-primary': {borderTopColor: colors.primary1},
  'border-l-primary-200': {borderTopColor: colors.primary2},
  'border-l-primary-300': {borderTopColor: colors.primary3},
  'border-l-primary-400': {borderTopColor: colors.primary4},
  'border-l-primary-500': {borderTopColor: colors.primary5},
  'border-l-primary-600': {borderTopColor: colors.primary6},
  'border-l-primary-700': {borderTopColor: colors.primary7},
  'border-l-primary-800': {borderTopColor: colors.primary8},
  'border-l-primary-900': {borderTopColor: colors.primary9},

  'border-l-white': {borderLeftColor: colors.white},
  'border-l-black': {borderLeftColor: colors.black},

  'border-l-gray-200': {borderLeftColor: colors.gray2},
  'border-l-gray-400': {borderLeftColor: colors.gray4},
  'border-l-gray-500': {borderLeftColor: colors.gray5},
  'border-l-gray-600': {borderLeftColor: colors.gray6},
  'border-l-gray-700': {borderLeftColor: colors.gray7},
  'border-l-gray-800': {borderLeftColor: colors.gray8},
  'border-l-gray-900': {borderLeftColor: colors.gray9},

  'border-r-primary': {borderTopColor: colors.primary1},
  'border-r-primary-200': {borderTopColor: colors.primary2},
  'border-r-primary-300': {borderTopColor: colors.primary3},
  'border-r-primary-400': {borderTopColor: colors.primary4},
  'border-r-primary-500': {borderTopColor: colors.primary5},
  'border-r-primary-600': {borderTopColor: colors.primary6},
  'border-r-primary-700': {borderTopColor: colors.primary7},
  'border-r-primary-800': {borderTopColor: colors.primary8},
  'border-r-primary-900': {borderTopColor: colors.primary9},

  'border-r-white': {borderRightColor: colors.white},
  'border-r-black': {borderRightColor: colors.black},

  'border-r-gray-200': {borderRightColor: colors.gray2},
  'border-r-gray-400': {borderRightColor: colors.gray4},
  'border-r-gray-500': {borderRightColor: colors.gray5},
  'border-r-gray-600': {borderRightColor: colors.gray6},
  'border-r-gray-700': {borderRightColor: colors.gray7},
  'border-r-gray-800': {borderRightColor: colors.gray8},
  'border-r-gray-900': {borderRightColor: colors.gray9},

  'border-primary': {borderColor: colors.primary1},
  'border-primary-200': {borderColor: colors.primary2},
  'border-primary-300': {borderColor: colors.primary3},
  'border-primary-400': {borderColor: colors.primary4},
  'border-primary-500': {borderColor: colors.primary5},
  'border-primary-600': {borderColor: colors.primary6},
  'border-primary-700': {borderColor: colors.primary7},
  'border-primary-800': {borderColor: colors.primary8},
  'border-primary-900': {borderColor: colors.primary9},

  'border-white': {borderColor: colors.white},
  'border-info': {borderColor: colors.info},
  'border-black': {borderColor: colors.black},
  'border-danger': {borderColor: colors.danger},
  'border-bg': {borderColor: colors.background},
  'border-warning': {borderColor: colors.warning},
  'border-success': {borderColor: colors.success},

  'border-gray-200': {borderColor: colors.gray2},
  'border-gray-300': {borderColor: colors.gray3},
  'border-gray-400': {borderColor: colors.gray4},
  'border-gray-500': {borderColor: colors.gray5},
  'border-gray-600': {borderColor: colors.gray6},
  'border-gray-700': {borderColor: colors.gray7},
  'border-gray-800': {borderColor: colors.gray8},
  'border-gray-900': {borderColor: colors.gray9},
  'border-gray-light-300': {borderColor: colors.grayLight3},
  'border-gray-light-400': {borderColor: colors.grayLight4},
  'border-gray-light-500': {borderColor: colors.grayLight5},
  'border-gray-light-600': {borderColor: colors.grayLight6},
};

export const styles = {
  ...textStyles,
  ...viewStyles,
  ...imageProperties,
  ...shadowStyles,
  ...colorsStyles,
  ...borderStyles,
};
export default styles;