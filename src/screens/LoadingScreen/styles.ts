import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 40,
  },
  dot: {
    width: 40,
    height: 40,
    backgroundColor: '#cc0000',
    borderRadius: 50,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
  },
  green: {
    backgroundColor: 'green',
  },
  blue: {
    backgroundColor: 'lightblue',
  },
  yellow: {
    backgroundColor: 'yellow',
  },
  red: {
    backgroundColor: 'red',
  },
});
