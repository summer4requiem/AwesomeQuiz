import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  quizzHeader: {
    marginBottom: 15,
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
    // backgroundColor: 'red',
    padding: 20,
    textAlign: 'center',
    // flex: 1,
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
});
