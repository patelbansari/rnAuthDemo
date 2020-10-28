import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Colors } from '../../config/Colors';
import * as CommonAction from '../../redux/action/CommonAction';

export default Home = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const callLogOut = () => {
    console.log('performLogout')
    dispatch(CommonAction.clearUserDataRequest());
  }

  useEffect(() => {
    console.log('useEffect')
    navigation.setParams({goToSetting:callLogOut})
  },[])

  return <View style={style.viewStyle}></View>;
};

const style = StyleSheet.create({
  viewStyle:{backgroundColor:Colors.colorBlack,flex:1}
})
