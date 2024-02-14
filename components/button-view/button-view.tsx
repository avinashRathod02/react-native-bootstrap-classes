import React, {useState} from 'react';
import {IProps} from './type.d';
import {getClass, colors, getHitSlop} from '../../scripts';
import {Animated, TouchableHighlight, TouchableOpacity} from 'react-native';

export const ButtonView = (props: IProps) => {
  const {
    show,
    activeOpacity = 0.7,
    disabled,
    applyDisabledStyle = true,
    withHitSlop,
    hitSlop = 20,
    button = 'normal',
    underlayColor = colors.gray1,
  } = props;
  if (!show) {
    return <React.Fragment />;
  }
  const [animatedScale] = useState(new Animated.Value(1));

  const toggleAnimatedScale = (toValue, toColorValue) => {
    Animated.timing(animatedScale, {
      toValue,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const styleClass = getClass(props, props.class);
  const styleBindClass = getClass(props, props['bind-class']);
  const disabledStyle = applyDisabledStyle && disabled && {opacity: 0.6};
  const styles = [styleClass, styleBindClass, disabledStyle, props.style];
  const animatedStyle = {
    transform: [{scale: animatedScale}],
  };
  const onPress = () => !props?.disableAction && props?.onPress?.();

  const buttons = {
    normal: TouchableOpacity,
    highlight: TouchableHighlight,
  };

  let ActionButton = buttons[button];
  return (
    <Animated.View
      style={[getClass(props, props['base-class']), animatedStyle]}>
      <ActionButton
        activeOpacity={activeOpacity}
        onLongPress={() => toggleAnimatedScale(1, 2)}
        onPressIn={() => toggleAnimatedScale(props?.scale ?? 0.98, 0)}
        onPressOut={() => toggleAnimatedScale(1, 2)}
        {...(withHitSlop && {
          hitSlop: hitSlop(hitSlop),
        })}
        {...(button === 'highlight' && {
          underlayColor,
        })}
        {...props}
        onPress={onPress}
        style={styles}>
        {props.children}
      </ActionButton>
    </Animated.View>
  );
};

ButtonView.defaultProps = {
  show: true,
  button: 'normal',
};
