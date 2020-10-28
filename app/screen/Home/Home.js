import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet, Alert
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Colors } from '../../config/Colors';
import Strings from '../../config/Strings';
import * as CommonAction from '../../redux/action/CommonAction';

export default Home = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [name,setName] = useState('')
  
  const callLogOut = () => {
    Alert.alert(
      Strings.title.title_app,
     Strings.msg.msg_logout,
      [
        { text:Strings.label.label_yes, onPress: () => dispatch(CommonAction.clearUserDataRequest())  },
        {
          text: Strings.label.label_no,
          onPress: () => {},
          style: "cancel"
        },
      ],
      { cancelable: false }
    );
   ;
  }

  useEffect(() => {
    setName('Home')
    navigation.setParams({performLogout:callLogOut})
  },[name])

  return <View style={style.viewStyle}></View>;
};

const style = StyleSheet.create({
  viewStyle:{backgroundColor:Colors.colorBlack,flex:1}
})

