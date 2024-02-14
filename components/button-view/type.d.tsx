import React from 'react';
import {StyleProp, TouchableOpacityProps, ViewStyle} from 'react-native';

export interface IProps extends TouchableOpacityProps {
  /**
   * Styling for the button container via class.
   */
  class?: string;

  /**
   * Styling for the view container via class which bind the parent class.
   */
  'bind-class'?: string;

  /**
   * Styling for the button container.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Either children or a render prop that receives a boolean reflecting whether
   * the component is currently pressed.
   */
  children?: React.ReactNode | any;

  /**
   * Name of the button property.
   * @default normal
   * ripple -> react-native-material-ripple
   */
  button?: 'normal' | 'ripple' | 'highlight';

  /**
   * Size of the zoom animation view.
   */
  scale?: number;

  /**
   * Click action.
   */
  onPress?: () => void;

  /**
   * Handle additional non-existing type.
   */
  [key: string]: string | number | any;

  /**
   * Styling for the button outer view container via class.
   */
  'base-class'?: string;

  /**
   * Handle the component will render or not.
   * @default true
   */
  show?: boolean;

  /**
   * Handle the hit-slop.
   * @default false
   */
  withHitSlop?: boolean;

  /**
   * The color of the underlay that will show through when the touch is active.
   */
  underlayColor?: string | any;

  /**
   * Specifies what the opacity of the wrapped view should be when touch is active.
   */
  activeOpacity?: number;

  /**
   * hitSlop: Specifies the amount by which the touch area around the button should be made larger. This should typically be set to the largest radius of the button plus some padding.
   * @default 20
   */
  hitSlop?: number;
}
