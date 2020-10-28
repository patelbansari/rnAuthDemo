import { all, fork} from 'redux-saga/effects';
import { signUpWatcher, getUserDataWatcher } from './AuthSagas';

export function* rootSaga () {
    yield all ([
        signUpWatcher(),
        getUserDataWatcher()
      ])
};