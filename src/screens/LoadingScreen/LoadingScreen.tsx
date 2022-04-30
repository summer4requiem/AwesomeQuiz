import React, {FC, memo, useEffect} from 'react';
import {View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import {styles} from './styles';

const LoadingScreen: FC = () => {
  const offset = useSharedValue(0);
  const scale = useSharedValue(1);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: offset.value,
      transform: [{scale: scale.value}, {translateY: scale.value}],
    };
  });

  useEffect(() => {
    offset.value = withRepeat(withTiming(10, {duration: 900}), 4);
    scale.value = withRepeat(withTiming(2, {duration: 900}), 4);
  });

  return (
    <View style={styles.root}>
      <View style={styles.dotsContainer}>
        <Animated.View style={[styles.dot, styles.green, animatedStyles]} />
        <Animated.View style={[styles.dot, styles.blue, animatedStyles]} />
        <Animated.View style={[styles.dot, styles.red, animatedStyles]} />
        <Animated.View style={[styles.dot, styles.yellow, animatedStyles]} />
      </View>
    </View>
  );
};

export default memo(LoadingScreen);
