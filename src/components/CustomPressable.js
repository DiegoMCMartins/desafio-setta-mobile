import React from 'react';
import {Pressable} from 'react-native';

export default function CustomPressable({
  children,
  backgroundColor,
  pressColor,
  style,
  ...pressableProps
}) {
  const customPressableStyle = ({pressed}) => {
    return [
      style,
      {
        backgroundColor: pressed ? pressColor : backgroundColor,
      },
    ];
  };

  return (
    <Pressable {...pressableProps} style={customPressableStyle}>
      {children}
    </Pressable>
  );
}
