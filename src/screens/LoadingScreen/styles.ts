import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    // backgroundColor: 'white',
    width: 300,
    padding: 30,
    alignContent: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 40,
  },
  dot: {
    width: 30,
    height: 30,
    backgroundColor: '#cc0000',
    borderRadius: 50,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  green: {
    backgroundColor: 'green',
  },
  blue: {
    backgroundColor: 'lightblue',
  },
});
