//Add value to animation in react native
import React from 'react';
import {
  View,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  Button,
  Easing,
} from 'react-native';

const AnimationAdd = ({navigation}) => {
  const {viewStyle, animatedView} = Container;
  const animated = new Animated.Value(0);

  const AnimationStart = () => {
    Animated.timing(animated, {
      toValue: 300,
      duration: 1000,
    }).start(() => {
      Animated.timing(animated, {
        toValue: 0,
        duration: 1000,
      }).start();
    });
  };
  //   const randomValue = new Animated.Value(50); for add values
  const randomValue = new Animated.Value(2); //Foe devide goes view y direction half of total animation
  const Animation = Animated.add(animated, randomValue);

  const transformObject = {
    transform: [
      {
        translateY: Animation,
      },
    ],
  };

  return (
    <View style={viewStyle}>
      <TouchableWithoutFeedback onPressOut={() => AnimationStart()}>
        <Animated.View style={[animatedView, transformObject]} />
      </TouchableWithoutFeedback>
      <Button title="Go Next" onPress={() => navigation.navigate('scale')} />
    </View>
  );
};

export default AnimationAdd;

const Container = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  animatedView: {
    backgroundColor: 'black',
    height: 100,
    width: 100,
  },
});
