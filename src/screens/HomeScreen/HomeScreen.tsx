import React, {FC, memo} from 'react';
import {Text, View} from 'react-native';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

import {styles} from './styles';

const HomeScreen: FC = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.header}>Home</Text>
      <LoadingScreen />
    </View>
  );
};

export default memo(HomeScreen);
