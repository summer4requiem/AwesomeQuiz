import React, {FC, memo} from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';

const SettingsScreen: FC = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.header}>Settings</Text>
    </View>
  );
};

export default memo(SettingsScreen);
