import React from 'react';
import {Text, View, StyleSheet, Animated} from 'react-native';

const createHeart = () => {
  const {viewStyle, leftHeart, RighttHeart, heart} = Container;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View style={heart}>
        <View style={[viewStyle, leftHeart]} />
        <View style={[viewStyle, RighttHeart]} />
        <Text>createHeart</Text>
      </Animated.View>
    </View>
  );
};
export default createHeart;

const Container = StyleSheet.create({
  heart: {
    width: 50,
    height: 50,
    backgroundColor: 'transparent',
  },
  viewStyle: {
    width: 30,
    height: 45,
    position: 'absolute',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    top: 15,
    backgroundColor: 'black',
  },
  leftHeart: {
    transform: [
      {
        rotate: '-45deg',
      },
    ],
    left: 5,
  },
  RighttHeart: {
    transform: [
      {
        rotate: '45deg',
      },
    ],
    right: 5,
  },
});
