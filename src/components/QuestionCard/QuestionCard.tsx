import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './styles';

const QuestionCard = ({id, question, answers}) => {
  return (
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
  );
};

export default QuestionCard;
