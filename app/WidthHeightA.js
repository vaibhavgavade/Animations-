//scaleObject
import React from 'react';
import {
  View,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';

const WidthHeightA = () => {
  const {viewStyle, animatedView} = Container;
  const animation = new Animated.Value(50);

  const AnimationStart = () => {
    console.log('onpress called');
    Animated.timing(animation, {
      toValue: 300,
      duration: 1000,
    }).start();
  };
  const transformobj = {
    width: animation,
    height: animation,
  };

  return (
    <View style={viewStyle}>
      <TouchableWithoutFeedback onPressOut={() => AnimationStart()}>
        <Animated.View style={[animatedView, transformobj]}>
          <Text>vaibahv</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default WidthHeightA;

const Container = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  animatedView: {
    backgroundColor: 'tomato',
  },
});
