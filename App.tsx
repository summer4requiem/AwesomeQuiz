/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import questions from './questions.json';

import React from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import {QuestionCard} from './src/components';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.greeting}>Hello, Jack</Text>
      <View>
        <QuestionCard {...questions[0]} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  quizzHeader: {
    marginBottom: 15,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  greeting: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
