/*
  This file is used to test anything.
*/

import React from 'react';
import {View, Text} from 'react-native';

import CustomPressable from './components/CustomPressable';

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
      <CustomPressableTest />
    </>
  );
}
