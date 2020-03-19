import React, {useEffect} from 'react';
import {View, Animated, StyleSheet} from 'react-native';

const ProgressBar = () => {
  const animation = new Animated.Value(0);
  const {viewStyle, progressbar} = Container;
  useEffect(() => {
    animationStart();
  });

  const animationStart = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
      extrapolate: 'clamp',
    }).start();
  };

  const IntProgress = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['100%', '0%'],
  });

  const ProgressBarStyle = {
    width: IntProgress,
    bottom: 0,
    backgroundColor: '#dc143c',
  };

  return (
    <View style={viewStyle}>
      <Animated.View style={[progressbar, ProgressBarStyle]} />
    </View>
  );
};
export default ProgressBar;

const Container = StyleSheet.create({
  viewStyle: {
    width: 50,
    height: 3,
  },
  progressbar: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
