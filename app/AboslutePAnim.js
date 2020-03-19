//scaleObject
import React from 'react';
import {
  View,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  Button,
} from 'react-native';

const AboslutePAnim = ({navigation}) => {
  const {viewStyle, animatedView} = Container;
  const animation = new Animated.Value(0);

  const AnimationStart = () => {
    console.log('onpress called');
    Animated.timing(animation, {
      toValue: 40, //scale object -3 means it alter position of view -3 values
      duration: 1000,
    }).start();
  };
  const transformobj = {
    marginTop: animation,
    marginBottom: animation,
  };

  return (
    <View style={viewStyle}>
      <TouchableWithoutFeedback onPressOut={() => AnimationStart()}>
        <Animated.View style={[animatedView, transformobj]}>
          <Text>vaibahv</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      <Button title="Go Next" onPress={() => navigation.navigate('width')} />
    </View>
  );
};

export default AboslutePAnim;

const Container = StyleSheet.create({
  viewStyle: {
    flex: 1,
  },
  animatedView: {
    backgroundColor: 'tomato',
    left: 0,
    top: 0,
    right: 0,
    height: 100,
  },
});
