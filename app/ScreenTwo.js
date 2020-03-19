//opacity control animation

import React, {useEffect} from 'react';
import {View, Animated, StyleSheet, Button} from 'react-native';

const ScreenTwo = ({navigation}) => {
  const {viewStyle, animatedView} = Container;
  const animation = new Animated.Value(0);

  useEffect(() => {
    AnimationStart();
  });

  const AnimationStart = () => {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 1,
        duration: 350,
      }),
      Animated.timing(animation, {
        toValue: 0,
        duration: 400,
      }),
    ]).start(() => AnimationStart());
  };

  const animationOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(0,0,255)', 'rgb(0,255,255)'],
  });

  const OPacityNumber = {
    backgroundColor: animationOpacity,
  };

  return (
    <View style={viewStyle}>
      <Animated.View style={[animatedView, OPacityNumber]} />
      <Button title="Go Next" onPress={() => navigation.navigate('Three')} />
    </View>
  );
};

export default ScreenTwo;

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
