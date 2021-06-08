import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import CustomPressable from './CustomPressable';

const styles = StyleSheet.create({
  container: {
    height: 36,
    minWidth: 64,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  iconContainer: {
    marginRight: 8,
  },
  text: {
    fontSize: 14,
  },
});

const DEFAULT_PROPS = {
  text: 'Button',
  iconName: '',
  iconSize: 18,
  iconColor: '#000',
};

export default function CustomButton({
  containerStyle,
  text = DEFAULT_PROPS.text,
  textStyle,
  iconName = DEFAULT_PROPS.iconName,
  iconSize = DEFAULT_PROPS.iconSize,
  iconColor = DEFAULT_PROPS.iconColor,
  iconContainerStyle,
  ...pressableProps
}) {
  const renderIcon = () => {
    if (iconName?.length > 0) {
      return (
        <View style={[styles.iconContainer, iconContainerStyle]}>
          <Icon name={iconName} size={iconSize} color={iconColor} />
        </View>
      );
    }

    return null;
  };

  return (
    <CustomPressable
      style={[styles.container, containerStyle]}
      {...pressableProps}>
      {renderIcon()}
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </CustomPressable>
  );
}
