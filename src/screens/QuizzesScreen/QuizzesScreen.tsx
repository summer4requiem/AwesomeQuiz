import React, {FC, memo} from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';

const QuizzesScreen: FC = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.header}>QuizzesScreen</Text>
    </View>
  );
};

export default memo(QuizzesScreen);
