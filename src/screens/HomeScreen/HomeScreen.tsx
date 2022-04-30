import {useNavigation} from '@react-navigation/native';
import React, {FC, memo} from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';

const HomeScreen: FC = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.header}>Home</Text>
    </View>
  );
};

export default memo(HomeScreen);
