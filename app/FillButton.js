import React, {useState} from 'react';
import {View, Animated, TouchableOpacity, StyleSheet} from 'react-native';

const FillButton = () => {
  const [isFill, changeIsFill] = useState(false);
  const {viewStyle, isFillBgc, isEmpty} = Container;
  const StartAnimation = () => {
    changeIsFill(!isFill);
  };

  const checkisFill = isFill ? isFillBgc : isEmpty;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={() => StartAnimation()}>
        <Animated.View style={[viewStyle, checkisFill]} />
      </TouchableOpacity>
    </View>
  );
};
export default FillButton;

const Container = StyleSheet.create({
  viewStyle: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderWidth: 1,
    borderColor: 'black',
  },
  isFillBgc: {
    backgroundColor: 'black',
  },
  isEmpty: {
    backgroundColor: 'white',
  },
});
