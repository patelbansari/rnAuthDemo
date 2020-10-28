
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SplashStatck, AuthStack, HomeStack } from './app/navigation/Navigation';
import { useSelector, useDispatch } from 'react-redux';
import * as CommonActions from './app/redux/action/CommonAction';
import { getAsyncData } from './app/helper/AsyncStorageUtil';
import Constants from './app/config/Constants';



const App = () => {
  const isSplash = useSelector(state => state.CommonReducers.isSplash)
  let userData;
  const signUpRequest = useSelector(
    (state) => state.CommonReducers.signUpRequest,
  );
  const signUpSucess = useSelector(
    (state) => state.CommonReducers.signUpSucess,
  );
  // const isLogout = useSelector(state => state.CommonReducers.isLogout)
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchToken = async () => {
      try {
        dispatch(CommonActions.getUserDataRequest());
      } catch (e) {
      }
    };

    fetchToken();
  }, []);


  return (
    <NavigationContainer>
      {isSplash ? <SplashStatck /> : signUpSucess? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};



export default App;
