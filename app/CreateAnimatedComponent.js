//creating animated Component such as Button and text whatever it is

import React from 'react';
import {View, Animated, StyleSheet, Button} from 'react-native';

const CreateAnimatedComponent = ({navigation}) => {
  const {viewStyle, animatedView} = Container;
  const animation = new Animated.Value(0);

  const startAnimation = () => {
    console.log('Animation function called');
    Animated.parallel([
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
      }),
      Animated.timing(animation, {
        toValue: 0,
        duration: 1000,
      }).start(),
    ]);
  };
  const AnimatedButton = Animated.createAnimatedComponent(Button);

  const interPolateValue = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#000000', '#ff69b4'],
  });

  return (
    <View style={viewStyle}>
      <AnimatedButton
        title="Press me"
        onPress={() => startAnimation()}
        color={interPolateValue}
      />
    </View>
  );
};

export default CreateAnimatedComponent;

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
