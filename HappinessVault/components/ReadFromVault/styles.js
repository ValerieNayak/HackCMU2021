import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: '40%',
    margin: 5,
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
  },

  button: {
    height: 35,
    width: '55%',
    backgroundColor: '#BBADF5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  input: {
    height: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
  },

  messageBox: {
    height: '50%',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  messageText: {
    fontSize: 18,
  },
});

export default styles;
