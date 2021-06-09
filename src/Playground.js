/*
  This file is used to test anything.
*/

import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import CustomPressable from './components/CustomPressable';
import CustomButton from './components/CustomButton';
import PressableIcon from './components/PressableIcon';

const PressableIconTest = () => {
  return (
    <>
      <PressableIcon iconName={'play-arrow'} iconSize={24} backgroundColor={'red'} onPress={console.log} />
    </>
  );
};

const IconTest = () => {
  return (
    <>
      <Icon name={'refresh'} size={24} />
      <Icon name={'play-arrow'} size={24} />
    </>
  );
};

const CustomButtonTest = () => {
  return (
    <CustomButton backgroundColor={'red'} iconName={'refresh'} iconSize={18} />
  );
};

const CustomPressableTest = () => {
  return (
    <CustomPressable
      backgroundColor={'red'}
      pressColor={'blue'}
      // disabled={true}
      onPress={console.log}
      style={{borderRadius: 20, padding: 20}}>
      <Text>Hello</Text>
    </CustomPressable>
  );
};

export default function Playground() {
  return (
    <>
      {/* <CustomPressableTest /> */}
      <CustomButtonTest />
      <IconTest />
      <PressableIconTest />
    </>
  );
}
