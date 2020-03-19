//opacity control animation

import React, {useEffect} from 'react';
import {
  View,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  Button,
  Text,
} from 'react-native';

const InterpolateInterpolate = ({navigation}) => {
  const {viewStyle, animatedView} = Container;
  const viewGoXposition = new Animated.Value(0);

  useEffect(() => {
    AnimationStart();
  });
  const AnimationStart = () => {
    Animated.sequence([
      Animated.timing(viewGoXposition, {
        toValue: 1,
        duration: 1000,
      }),
      Animated.timing(viewGoXposition, {
        toValue: 2,
        duration: 2000,
      }),
    ]).start(() => AnimationStart());
  };

  const AllColorAnimation = viewGoXposition.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, -500, 0],
  });

  const colorchanging = AllColorAnimation.interpolate({
    inputRange: [0, 300],
    outputRange: ['rgb(0,0,0)', 'rgb(0,191,255)'],
  });

  const scalingAnimation = {
    transform: [
      {
        translateX: AllColorAnimation,
      },
    ],
    backgroundColor: colorchanging,
  };

  return (
    <View style={viewStyle}>
      <Animated.View style={[animatedView, scalingAnimation]}>
        <Text style={{alignSelf: 'center'}}>vaibhav</Text>
      </Animated.View>
    </View>
  );
};

export default InterpolateInterpolate;

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
