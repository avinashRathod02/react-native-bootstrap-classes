import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text as RNText} from 'react-native';
import {getClass} from '../../scripts';
import {IProps} from './type.d';

export default (props: IProps) => {
  const {show = true, txOptions, tx, style, text, children} = props;
  const {t} = useTranslation();
  if (!show) {
    return <React.Fragment />;
  }
  const styleClass = getClass(
    props,
    `text-left size-base font-regular text-gray-900  ${props.class}`,
  );
  const styleBindClass = getClass(props, props['bind-class']);
  const styles = [
    {includeFontPadding: false},
    styleClass,
    styleBindClass,
    style,
  ];
  const i18nText = tx && t(tx, txOptions);
  const renderText = i18nText || text || children;
  return (
    <RNText allowFontScaling={false} {...props} style={styles}>
      {renderText}
    </RNText>
  );
};
