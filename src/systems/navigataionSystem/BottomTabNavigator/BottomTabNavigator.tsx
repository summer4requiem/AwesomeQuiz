import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {bottomTabs} from '../BottomTabs';
import {BottomTabItem} from '../types';
import {TabBarIcon} from './TabBarIcon';

const {Navigator, Screen} = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: '#30D5C8',
        tabBarInactiveTintColor: 'black',
        headerShown: false,
      }}>
      {bottomTabs.map((tab: BottomTabItem) => {
        const {name, component, icon, label} = tab;
        return (
          <Screen
            key={name}
            name={name}
            component={component}
            options={{
              tabBarIcon: props => <TabBarIcon icon={icon} {...props} />,
            }}
          />
        );
      })}
    </Navigator>
  );
};

export default BottomTabNavigator;
