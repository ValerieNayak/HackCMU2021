import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: Colors.lightYellow,
    // width: '100%',
    // height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    // flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },

  greetingText: {
    fontSize: 20,
    // fontFamily: 'serif',
    fontWeight: 'bold',
    color: Colors.loginBlue,
    alignSelf: 'center',
    fontFamily: 'KohinoorBangla-Regular',
  },

  enterButton: {
    backgroundColor: Colors.loginBlue,
    height: 35,
    width: 60,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  enterText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'KohinoorBangla-Regular',
  },

  input: {
    fontSize: 18,
    borderRadius: 0,
    alignSelf: 'center',
    fontFamily: 'KohinoorBangla-Regular',
  },

  inputContainer: {
    height: 50,
    margin: 12,
    padding: 10,
    width: '80%',
    backgroundColor: 'white',
    opacity: 0.6,
    borderRadius: 10,
    alignSelf: 'center',
  },
});

export default styles;
