import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

const Animateddecay = () => {
  const animation = new Animated.Value(0);
  const {viewStyle} = Styles;
  const AnimationStarted = () => {
    console.log('Animaation Started');
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
    });
  };
  const backroundInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#00bfff', '#228b22'],
  });

  const backroundColors = {
    backgroundColor: backroundInterpolate,
  };

  return (
    <TouchableWithoutFeedback onPress={() => AnimationStarted()}>
      <Animated.View style={[viewStyle, backroundColors]}></Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default Animateddecay;

const Styles = StyleSheet.create({
  viewStyle: {
    height: 100,
    width: 100,
  },
});
