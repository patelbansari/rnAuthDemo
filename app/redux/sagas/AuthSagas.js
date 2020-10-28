import {delay, takeEvery, takeLatest, put, call} from 'redux-saga/effects';
import Constants from '../../config/Constants';
import {getAsyncData, saveAsyncData,clearAsyncData} from '../../helper/AsyncStorageUtil';
import {
  CLEAR_USER_DATA_REQUEST,
  GET_USER_DATA_REQUEST,
  SAVE_USER_DATA,
  SIGN_UP_FAIL,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCESS,
} from '../action/Action';

function* increaseCounterAsync() {
  try {
    yield delay(4000);
    yield put({
      type: 'INCREASE_COUNTER_ASYNC',
      value: 1,
    });
  } catch (error) {
    console.log(error);
  }
}
export function* watchIncreaseCounter() {
  yield takeLatest('INCREASE_COUNTER', increaseCounterAsync);
}

function* saveUserData(action) {
  try {
    saveAsyncData(Constants.asyncData.userData, JSON.stringify(action.data));
    yield put({
      type: SIGN_UP_SUCESS,
      value: action.data,
    });
  } catch (error) {
    console.log(error);
  }
}

async function getFromStorage() {
  return await getAsyncData(Constants.asyncData.userData);
}

function* getUserData() {
  const userData = yield call(getFromStorage);
  if(userData != null){
    yield put({
      type: SIGN_UP_SUCESS,
      value: userData,
    });
  }else{
    yield put({
      type: SIGN_UP_FAIL,
    });
  }
  
}

function* clearUserData() {
  clearAsyncData()
  yield put({
    type: CLEAR_USER_DATA_REQUEST,
    value: userData,
  });
}

export function* signUpWatcher() {
  yield takeLatest(SIGN_UP_REQUEST, saveUserData);
}

export function* getUserDataWatcher() {
  yield takeLatest(GET_USER_DATA_REQUEST, getUserData);
}

export function* clearUserDataWatcher(){
  yield takeLatest(CLEAR_USER_DATA_REQUEST, clearUserData);
}