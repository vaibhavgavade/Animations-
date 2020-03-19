//Spring in react native
import React from 'react';
import {
  View,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';

const Eeasing = () => {
  const {viewStyle, animatedView} = Container;
  const animation = new Animated.Value(1);

  const AnimationStart = () => {
    console.log('onpress called');
    Animated.spring(animation, {
      toValue: 2,
      friction: 2,
      tension: 150,
    }).start(() => {
      Animated.spring(animation, {
        toValue: 1,
        duration: 1000,
      }).start();
    });
  };

  const animateValue = {
    transform: [
      {
        scale: animation,
      },
    ],
  };

  return (
    <View style={viewStyle}>
      <TouchableWithoutFeedback onPress={() => AnimationStart()}>
        <Animated.View style={[animatedView, animateValue]}>
          <Text>vaibhav</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Eeasing;

const Container = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  animatedView: {
    backgroundColor: 'tomato',
    height: 100,
    width: 100,
  },
});
