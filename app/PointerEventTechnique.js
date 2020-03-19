import React, {useState} from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

const PointerEventTechnique = () => {
  const {viewStyle} = Container;
  const animation = new Animated.Value(0);
  const [toggle, changeToggle] = useState(true);
  const [pressed, changePressed] = useState(false);
  const handleToggle = () => {
    changeToggle(!toggle);
    console.log('toggle value', toggle);
  };

  const handlepress = () => {
    console.log('handle press function called');
    const toValue = pressed ? 0 : 1;
    Animated.timing(animation, {
      toValue,
      duration: 300,
    });
    changePressed(!pressed);
    console.log('change value', pressed);
  };

  const boxStyle = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(220,20,60)', 'rgb(0,128,0)'],
  });

  const nckValue = {
    backgroundColor: boxStyle,
  };

  return (
    <View style={{flex: 1}}>
      <View>
        <TouchableWithoutFeedback onPress={() => handlepress()}>
          <Animated.View style={[viewStyle, nckValue]} />
        </TouchableWithoutFeedback>
        <View pointerEvents={toggle ? 'none' : 'auto'} />
      </View>
      <TouchableOpacity onPress={() => handleToggle()}>
        <View>
          <Text style={{alignSelf: 'center'}}>Press me to stop Animation</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PointerEventTechnique;

const Container = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#ff1493',
    height: 100,
    width: 100,
    alignSelf: 'center',
    
  },
});
