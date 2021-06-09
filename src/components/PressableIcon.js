import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import CustomPressable from './CustomPressable';

const styles = StyleSheet.create({
  container: {
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 48,
    overflow: 'hidden',
  },
});

export default function PressableIcon({
  iconName,
  iconSize,
  iconColor,
  containerStyle,
  iconContainerStyle,
  ...pressableProps
}) {
  return (
    <CustomPressable
      style={[styles.container, containerStyle]}
      {...pressableProps}>
      <View style={iconContainerStyle}>
        <Icon name={iconName} size={iconSize} color={iconColor} />
      </View>
    </CustomPressable>
  );
}
