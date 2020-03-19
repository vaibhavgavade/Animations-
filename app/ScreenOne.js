import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  PanResponder,
  Button,
} from 'react-native';

const ScreenOne = ({navigation}) => {
  const {viewStyle, anotherViewStyle} = container;

  const myPosition = new Animated.ValueXY();
  const responder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      myPosition.setValue({x: gesture.dx, y: gesture.dy});
      // hence dx and dy is distance to move the Object
    },
  });

  const position = new Animated.ValueXY();
  const onSubmit = () => {
    Animated.spring(position, {
      toValue: {x: 100, y: 600},
    }).start();
  };

  return (
    <View>
      <Animated.View
        style={{
          left: position.x,
          top: position.y,
        }}>
        {/* same as postition.gelayout() */}
        <TouchableOpacity onPress={() => onSubmit()}>
          <View style={viewStyle} />
          <Text>Go</Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={myPosition.getLayout()} {...responder.panHandlers}>
        <View style={anotherViewStyle} />
      </Animated.View>
      <Button title="Go Next" onPress={() => navigation.navigate('Two')} />
    </View>
  );
};

export default ScreenOne;
const container = StyleSheet.create({
  viewStyle: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00bfff',
    borderRadius: 45,
  },
  anotherViewStyle: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 45,
    marginTop: 100,
  },
});
