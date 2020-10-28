import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Colors} from '../../config/Colors';
import Strings from '../../config/Strings';
import {useDispatch} from 'react-redux';
import * as CommonActions from '../../redux/action/CommonAction';
import Constants from '../../config/Constants';
const Splash = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(CommonActions.updateIsSplashState(false));
    }, 2000);
  }, []);

  return (
    <View style={style.lgStyle}>
      <Text style={style.labelStyle}>{Strings.title.title_splash}</Text>
    </View>
  );
};

export const style = StyleSheet.create({
  lgStyle: {
    flex: 1,
    backgroundColor: Colors.colorBlack,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelStyle: {
    flex: 0.2,
    fontFamily: Constants.font.notoBold,
    color: Colors.colorYellow,
    fontSize: 40,
  },
});
export default Splash;
