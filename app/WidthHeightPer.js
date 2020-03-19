//width and height in percenatage
import React from 'react';
import {
  View,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

const WidthHeightPer = ({navigation}) => {
  const {viewStyle, animatedView} = Container;
  const animation = new Animated.Value(0);

  const widthBox = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['20%', '50%'],
  });

  const heightBox = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['20%', '30%'],
  });

  const animatedFuncValue = {
    width: widthBox,
    height: heightBox,
  };
  const animationFunc = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
    }).start();
  };
  return (
    <View style={viewStyle}>
      <TouchableWithoutFeedback onPress={() => animationFunc()}>
        <Animated.View
          style={[animatedView, animatedFuncValue]}></Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default WidthHeightPer;

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
