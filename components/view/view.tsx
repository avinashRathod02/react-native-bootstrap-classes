import React from 'react';
import {View as RNView, StyleSheet} from 'react-native';
import {getClass, colors} from '../../scripts';
import {IProps} from './type.d';

export default (props: IProps) => {
  const {
    show = true,
    isCard = false,
    isContainer = false,
    flexRow = false,
  } = props;
  if (!show) {
    return <React.Fragment />;
  }
  const containerClass =
    isContainer && getClass(props, 'width-90% self-center');
  const rowClass = flexRow && getClass(props, 'flex-row items-center');
  const styleClass = getClass(props, props.class);
  const styleBindClass = getClass(props, props['bind-class']);
  const styles = [
    isCard && style.card,
    containerClass,
    rowClass,
    styleClass,
    styleBindClass,
    props.style,
  ];

  return (
    <RNView {...props} style={styles}>
      {props.children}
    </RNView>
  );
};

const style = StyleSheet.create({
  card: {
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.15,
    shadowColor: colors.gray8,
    borderRadius: 16,
    backgroundColor: 'white',
    shadowRadius: 6,
    elevation: 3,
    width: '90%',
    marginVertical: 10,
    alignSelf: 'center',
  },
});
