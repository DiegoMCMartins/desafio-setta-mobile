import React from 'react';
import {View, Text} from 'react-native';

import Playground from './Playground';

const isOnTest = true;

export default function App() {
  if (isOnTest) {
    return <Playground />;
  }

  return (
    <View>
      <Text>Ola</Text>
    </View>
  );
}
