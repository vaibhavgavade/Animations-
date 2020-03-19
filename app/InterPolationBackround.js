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
    inputRange: [0, 1],
    outputRange: ['rgb(255,20,147)', 'rgb(0,255,255)'],
  });
  const interpolationText = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(0,255,255)', 'rgb(255,20,147)'],
  });

  const transformobj1 = {
    backgroundColor: interpolationBox,
  };
  const transformText = {
    color: interpolationText,
  };

  const animationFunc = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 1000,
      }).start();
    });
  };

  return (
    <View style={viewStyle}>
      <TouchableWithoutFeedback onPress={() => animationFunc()}>
        <Animated.View style={[animatedView, transformobj1]}>
          <Animated.Text style={transformText}>vaibahv</Animated.Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      <Button title="Go Next" onPress={() => navigation.navigate('width')} />
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
