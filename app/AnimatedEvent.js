//Spring in react native
import React from 'react';
import {
  View,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  ScrollView,
} from 'react-native';

const AnimatedEvent = () => {
  const {animatedView} = Container;
  const animation = new Animated.Value(0);

  const backgroundInterpolate = animation.interpolate({
    inputRange: [0, 2000],
    outputRange: ['rgb(255,20,147)', 'rgb(0,255,255)'],
  });

  const animatetedValue = {
    backgroundColor: backgroundInterpolate,
  };
  return (
    <ScrollView
      scrollEventThrottle={16}
      onScroll={Animated.event([
        {
          nativeEvent: {
            contentOffset: {
              y: animation,
            },
          },
        },
      ])}>
      <Animated.View style={[animatedView, animatetedValue]} />
    </ScrollView>
  );
};

export default AnimatedEvent;

const Container = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  animatedView: {
    height: 2000,
  },
});
