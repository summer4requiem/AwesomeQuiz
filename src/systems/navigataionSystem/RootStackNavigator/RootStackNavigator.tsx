import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from '../BottomTabNavigator/BottomTabNavigator';
import RouteNames from '../constants';
import {LoadingScreen} from '../../../screens';

const {Navigator, Screen} = createNativeStackNavigator();

const RootStackNavigator = () => {
  return (
    <Navigator>
      <Screen
        name={RouteNames.BottomTabNavigator}
        component={BottomTabNavigator}
      />
      <Screen name={RouteNames.LoadingScreen} component={LoadingScreen} />
    </Navigator>
  );
};

export default RootStackNavigator;
