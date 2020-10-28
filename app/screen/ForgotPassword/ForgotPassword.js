import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../config/Colors';
import Constants from '../../config/Constants';
import Strings from '../../config/Strings';
import {useDispatch} from 'react-redux';
import * as CommonAction from '../../redux/action/CommonAction';
import {saveAsyncData} from '../../helper/AsyncStorageUtil';
import {ScrollView} from 'react-native-gesture-handler';

export default ForgotPassword = () => {
  let scrollview;
  let passwordref;
  let mobileRef;
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  const dispatch = useDispatch();

  const setData = () => {
    Keyboard.dismiss();
    if (email === '') {
      setErrorEmail(Strings.msg.msg_empty_email);
    }
     else {
      const obj = {
        email: 'jm1@example.com',
        password: 'jay@123',
      };
    }
  };

  return (
    <View style={style.lgStyle}>
      <ScrollView
        ref={(ref) => (scrollview = ref)}
        keyboardShouldPersistTaps={'always'}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={style.secondViewStyle}>
          <Text style={style.signInTextStyle}>
            {Strings.title.title_forgot_password}
          </Text>
          <View style={style.inputViewStyle}>
            <TextInput
              value={email}
              onChangeText={(e) => {
                setErrorEmail('');
                setEmail(e);
              }}
              returnKeyType={'next'}
              placeholderTextColor={Colors.colorTextTextInput}
              placeholder={Strings.label.label_email}
              style={style.TextInputStyleClass}
              blurOnSubmit={false}
              onSubmitEditing={() => {
              }}
            />
            {errorEmail.length > 0 ? (
              <Text style={style.errorTextStyle}>{errorEmail}</Text>
            ) : null}

            <TouchableOpacity
              onPress={() => {
                setData();
              }}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={[Colors.gredientButtonLeft, Colors.gredientButtonRight]}
                style={style.loginViewStyle}>
                <Text style={style.signInButtonTextStyle}>
                  {Strings.title.title_submit}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  lgStyle: {
    flex: 1,
    backgroundColor: Colors.colorBlack,
    alignContent: 'center',
  },
  TextInputStyleClass: {
    marginTop: 30,
    width: '100%',
    padding: 16,
    textAlign: 'left',
    height: 50,
    backgroundColor: Colors.colorTextInputBg,
    borderRadius: 20,
    color: Colors.colorTextTextInput,
    fontFamily: Constants.font.notoRegular,
    fontSize: 15,
  },
  secondViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  signInTextStyle: {
    fontFamily: Constants.font.notoBold,
    color: Colors.colorYellow,
    fontSize: 30,
    textAlign: 'center',
  },
  inputViewStyle: {width: '100%'},
  loginViewStyle: {
    height: 45,
    width: '100%',
    borderRadius: 20,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInButtonTextStyle: {
    color: Colors.colorWhite,
    fontFamily: Constants.font.notoBold,
    fontSize: 18,
  },
  imageViewTopStyle: {flex: 0.2, alignItems: 'flex-end'},
  imageViewSeconds: {
    marginTop: -10,
    marginEnd: -100,
    transform: [{rotate: '300deg'}],
  },
  errorTextStyle: {color: Colors.colorWhite, paddingStart: 20, paddingTop: 10},
  iconStyle: {position: 'absolute', right: 25, top: 125},
});
