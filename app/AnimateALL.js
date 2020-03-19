import React, {useEffect} from 'react';
import {
  View,
  Text,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';

const AnimateAll = () => {
  const {viewStyle} = styles;
  const animation = new Animated.Value(0);

  useEffect(() => {
    AnimationStart();
  });

  const AnimationStart = () => {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
      }),
      Animated.timing(animation, {
        toValue: 2,
        duration: 500,
      }),
    ]).start(() => AnimationStart());
  };

  const interpolateValue = animation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, -300, 0],
  });

  const translateObj = {
    transform: [
      {
        translateY: interpolateValue,
      },
    ],
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Animated.View style={[viewStyle, translateObj]}>
        <Text>Transform</Text>
      </Animated.View>
    </View>
  );
};

export default AnimateAll;

const styles = StyleSheet.create({
  viewStyle: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },
});
