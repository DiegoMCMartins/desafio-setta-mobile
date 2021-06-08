import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 36,
    minWidth: 64,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

import CustomPressable from '../CustomPressable';

export default function CustomButton({
  containerStyle,
  text,
  ...pressableProps
}) {
  return (
    <CustomPressable
      style={[styles.container, containerStyle]}
      {...pressableProps}>
      <Text>{text}</Text>
    </CustomPressable>
  );
}
