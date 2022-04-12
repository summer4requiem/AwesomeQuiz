/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import questions from './questions.json';
console.log(questions);

import React from 'react';
import {StyleSheet, SafeAreaView, View, Text, Button} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Hello, Jack</Text>
      </View>
      <View style={styles.quizzSection}>
        <View style={styles.quizzHeader}>
          <Text>Question 3 of 25</Text>
          <Text style={styles.quizzName}>
            Inside which HTML element do we put the JavaScript?
          </Text>
        </View>

        <View style={styles.quizItem}>
          <Text style={styles.quizItemQuestion}>Web dev</Text>
        </View>
        <View style={styles.quizItem}>
          <Text style={styles.quizItemQuestion}>Web dev</Text>
        </View>
        <View style={styles.quizItem}>
          <Text style={styles.quizItemQuestion}>Web dev</Text>
        </View>
        <View style={styles.quizItem}>
          <Text style={styles.quizItemQuestion}>Web dev</Text>
        </View>
        <Button color="#f194ff" title="Next" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  quizzHeader: {
    marginBottom: 15,
  },
  backgroundStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
  quizButtom: {
    backgroundColor: 'white',
  },
  quizItemQuestion: {
    fontSize: 20,
    textAlign: 'center',
  },
  quizItem: {
    backgroundColor: 'white',
    marginBottom: 15,
    height: 40,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 3,
  },
  quizzSection: {
    backgroundColor: '#429ef5',
    padding: 20,
    textAlign: 'center',
    flex: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  quizzName: {
    fontSize: 21,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
