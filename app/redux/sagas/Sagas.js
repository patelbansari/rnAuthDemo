import { all, fork} from 'redux-saga/effects';
import { signUpWatcher, getUserDataWatcher, clearUserDataWatcher } from './AuthSagas';

export function* rootSaga () {
    yield all ([
        signUpWatcher(),
        getUserDataWatcher(),
        clearUserDataWatcher()
      ])
};