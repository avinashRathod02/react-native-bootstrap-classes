import React from 'react';
import {Namespace, TFuncKey} from 'react-i18next';
import {StyleProp, TextProps, TextStyle} from 'react-native';

export interface IProps extends TextProps {
  /**
   * Text which is looked up via i18n.
   */
  tx?: TFuncKey<Namespace>;

  /**
   * Styling for the text container via class.
   */
  class?: string;

  /**
   * Styling for the view container via class which bind the parent class.
   */
  'bind-class'?: string;

  /**
   * Styling for the text container.
   */
  style?: StyleProp<TextStyle>;

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
   * Handle the text will render or not.
   * @default false
   */
  hide?: boolean;
}
