import React, {useState} from 'react';
import {View, Text, Animated, StyleSheet, Dimensions} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
var widthA;
var heightB;
//Animation using corners breakdowns

const CornersBreakDown = () => {
  const {viewStyle} = Container;

  const animation = new Animated.ValueXY();
  const onPressValueChange = () => {
    const {width, height} = Dimensions.get('window');
    Animated.sequence([
      Animated.spring(animation.y, {
        toValue: height - height,
      }).start(),
    ]);
  };

  const widthAndHeight = e => {
    console.log('Onpress function called');
    widthA = e.nativeEvent.layout.width;
    heightB = e.nativeEvent.layout.width;
  };

  const animatedStyles = {
    transform: animation.getTranslateTransform(),
  };
  return (
    <View style={viewStyle}>
      <TouchableWithoutFeedback
        onPress={() => onPressValueChange()}
        onLayout={widthAndHeight}>
        <Animated.View style={[viewStyle, animatedStyles]}>
          <Text>vaibhav</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};
export default CornersBreakDown;
const Container = StyleSheet.create({
  viewStyle: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});
