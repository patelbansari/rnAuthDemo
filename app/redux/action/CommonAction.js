import { IS_SPLASH, USER_TOKEN, PROGRESS_UPDATE, IS_LOGOUT, IS_BOTTOM_BAR, SAVE_USER_DATA, SIGN_UP_REQUEST, GET_USER_DATA_REQUEST, CLEAR_USER_DATA_REQUEST } from "./Action"

export const updateIsSplashState = (isSplash) => {
    return { type: IS_SPLASH, isSplash }
} 

export const updateRegisterData = (data) => {
    return { type: SAVE_USER_DATA, data }
} 

export const updateLogoutState = (isLogout) => {
    return { type: IS_LOGOUT, isLogout }
}

export const updateBottomBarState = (isShow) => {
    return { type: IS_BOTTOM_BAR, isShow }
}

export const signUpRequest = (data) => {
    return { type: SIGN_UP_REQUEST, data }
}

export const getUserDataRequest = () => {
    return { type: GET_USER_DATA_REQUEST }
}

export const clearUserDataRequest = () => {
    return { type: CLEAR_USER_DATA_REQUEST }
}