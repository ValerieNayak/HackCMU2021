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
    color: Colors.darkMagenta,
    fontFamily: 'KohinoorBangla-Regular',
  },

  enterButton: {
    backgroundColor: Colors.darkMagenta,
    height: 35,
    width: 60,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  enterText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.lightYellow,
    fontFamily: 'KohinoorBangla-Regular',
  },

  input: {
    height: 50,
    margin: 12,
    borderWidth: 3,
    padding: 10,
    fontSize: 18,
    width: '80%',
    borderRadius: 10,
    borderColor: Colors.darkMagenta,
  },
});

export default styles;
