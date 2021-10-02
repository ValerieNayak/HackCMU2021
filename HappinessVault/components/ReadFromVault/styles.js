import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: '40%',
    margin: 5,
    alignItems: 'center',
    marginTop: 30,
  },

  title: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'KohinoorBangla-Regular',
  },

  button: {
    height: 35,
    width: '55%',
    backgroundColor: Colors.indigo,
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
    fontFamily: 'KohinoorBangla-Regular',
  },

  messageBox: {
    height: '50%',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    opacity: 0.6,
  },

  messageText: {
    fontSize: 18,
    fontFamily: 'KohinoorBangla-Regular',
  },
});

export default styles;
