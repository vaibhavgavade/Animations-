//Interpolation backround color
import React from 'react';
import {
  View,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  Button,
} from 'react-native';

const InterPolationBackround = ({navigation}) => {
  const {viewStyle, animatedView} = Container;
  const animation = new Animated.Value(0);

  const interpolationBox = animation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '1080deg'],
  });

  const transformObj = {
    transform: [
      {
        rotate: interpolationBox,
      },
    ],
  };
  const animationFunc = () => {
    Animated.timing(animation, {
      toValue: 360,
      duration: 1000,
    }).start();
  };
  return (
    <View style={viewStyle}>
      <TouchableWithoutFeedback onPress={() => animationFunc()}>
        <Animated.View style={[animatedView, transformObj]}></Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default InterPolationBackround;

const Container = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedView: {
    backgroundColor: 'tomato',
    width: 100,
    height: 100,
  },
});
