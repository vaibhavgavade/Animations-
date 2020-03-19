import React from 'react';
import {View, Text} from 'react-native';
import ProgressBar from './ProgressBar';

const BringProgressBar = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text>V</Text>
      <ProgressBar />
      <Text>G</Text>
    </View>
  );
};
export default BringProgressBar;
