import {
  IS_SPLASH,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCESS,
  SIGN_UP_FAIL, CLEAR_SUCESS
} from '../action/Action';

const initialState = {
  isSplash: true,
  signUpRequest: false,
  signUpSucess: false,
};
export default CommonReducers = (state = initialState, action) => {
  switch (action.type) {
    case IS_SPLASH:
      return {
        ...state,
        isSplash: action.isSplash,
      };
    case SIGN_UP_REQUEST:
      return {
        ...state,
        signUpRequest: true,
        signUpSucess: false,
      };
    case SIGN_UP_SUCESS:
      return {
        ...state,
        signUpRequest: false,
        signUpSucess: true,
      };
      case SIGN_UP_FAIL:
        return {
          ...state,
          signUpRequest: false,
          signUpSucess: false,
        };
    case CLEAR_SUCESS:
      return {
        ...state,
        signUpRequest: false,
        signUpSucess: false,
      };
    default:
      return state;
  }
};
