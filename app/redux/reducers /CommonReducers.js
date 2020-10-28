import {
  IS_SPLASH,
  PROGRESS_UPDATE,
  IS_LOGOUT,
  IS_BOTTOM_BAR,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCESS,
  SIGN_UP_FAIL, CLEAR_SUCESS
} from '../action/Action';

const initialState = {
  isSplash: true,
  userData: {},
  isShowProgress: false,
  isLogout: false,
  isShow: true,
  signUpRequest: false,
  signUpSucess: false,
};
export default CommonReducers = (state = initialState, action) => {
  console.log('data', action);
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
    case PROGRESS_UPDATE:
      return {
        ...state,
        isShowProgress: action.value,
      };
    case IS_LOGOUT:
      return {
        ...state,
        isLogout: action.isLogout,
      };
    case IS_BOTTOM_BAR:
      return {
        ...state,
        isShow: action.isShow,
      };
    default:
      return state;
  }
};
