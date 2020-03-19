import React, {useEffect} from 'react';
import {Text, View, Animated, TouchableOpacity, StyleSheet} from 'react-native';

const Autoscroling = () => {
  const {viewStyle, AView} = Container;
  const animation = new Animated.Value(0);
  const startAnimaion = () => {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 1,
        duration: 5000,
      }),
      Animated.timing(animation, {
        toValue: 2,
        duration: 5000,
      }),
    ]).start(() => startAnimaion());
  };

  const interPavalue = animation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 200, 0],
  });
  const colorTransparent = interPavalue.interpolate({
    inputRange: [0, 190, 200],
    outputRange: ['#000', '#000', '#fff'],
  });
  const opacity = interPavalue.interpolate({
    inputRange: [0, 0.1, 1, 2],
    outputRange: [0, 0, 0, 1],
  });

  const transforOBj = {
    transform: [
      {
        translateX: interPavalue,
      },
    ],
    backgroundColor: colorTransparent,
    opacity: opacity,
  };
  //____________________||||_____________________________

  return (
    <View style={viewStyle}>
      <TouchableOpacity onPress={() => startAnimaion()}>
        <Animated.Text style={transforOBj}>
          <Text>Welcomes to You</Text>
        </Animated.Text>
      </TouchableOpacity>
    </View>
  );
};
export default Autoscroling;
const Container = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  AView: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
});
