//opacity control animation

import React from 'react';
import {
  View,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  Button,
  Text,
} from 'react-native';

const ParallelAnimation = ({navigation}) => {
  const {viewStyle, animatedView} = Container;
  const ColorAnimation = new Animated.Value(0);
  const Scaleanimation = new Animated.Value(1);

  const AnimationStart = () => {
    Animated.parallel([
      Animated.timing(ColorAnimation, {
        toValue: 1,
        duration: 500,
      }),
      Animated.timing(Scaleanimation, {
        toValue: 2,
        duration: 300,
      }),
    ]).start(() => {
      alert('anination');
    });
  };

  const AllColorAnimation = ColorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(255,20,147)', 'rgb(0,255,255)'],
  });

  const scalingAnimation = {
    backgroundColor: AllColorAnimation,
    transform: [
      {
        scale: Scaleanimation,
      },
    ],
  };

  return (
    <View style={viewStyle}>
      <TouchableWithoutFeedback onPress={() => AnimationStart()}>
        <Animated.View style={[animatedView, scalingAnimation]}>
          <Text style={{alignSelf: 'center'}}>vaibhav</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ParallelAnimation;

const Container = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  animatedView: {
    backgroundColor: '#FF1744',
    height: 100,
    width: 100,
  },
});
