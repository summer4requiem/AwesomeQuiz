/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import questions from './questions.json';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from './src/systems/navigataionSystem/RootStackNavigator/RootStackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default App;
