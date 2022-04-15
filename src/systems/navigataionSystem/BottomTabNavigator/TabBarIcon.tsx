import React from 'react';
import {View} from 'react-native';
import {TabBarIconProps} from '../types';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

export const TabBarIcon = ({icon, focused}: TabBarIconProps) => {
  const iconColor = focused ? '#30D5C8' : 'black';
  return (
    <View>
      <IconAntDesign color={iconColor} name={icon} size={29} />
    </View>
  );
};
