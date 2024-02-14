import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export interface IProps {
  /**
   * Styling for the view container via class.
   */
  class?: string;

  /**
   * Styling for the view container via class which bind the parent class.
   */
  'bind-class'?: string;

  /**
   * Styling for the view container.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Either children or a render prop that receives a boolean reflecting whether
   * the component is currently pressed.
   */
  children?: React.ReactNode | any;

  /**
   * Handle additional non-existing type.
   */
  [key: string]: string | number | any;

  /**
   * Handle the component will render or not.
   * @default false
   */
  hide?: boolean;

  /**
   * Handle the view is row or not.
   * @default false
   */
  flexRow?: boolean;
}
