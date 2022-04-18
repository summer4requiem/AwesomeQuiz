import React, {FC, memo} from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';

const LoadingScreen: FC = () => {
  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.header}>Loading</Text>
      </View>
      <View style={styles.dotsContainer}>
        <View style={[styles.dot, styles.green]}></View>
        <View style={[styles.dot, styles.blue]}></View>
        <View style={[styles.dot]}></View>
      </View>
    </View>
  );
};

export default memo(LoadingScreen);
