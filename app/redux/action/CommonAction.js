import { IS_SPLASH, SIGN_UP_REQUEST, GET_USER_DATA_REQUEST, CLEAR_USER_DATA_REQUEST } from "./Action"

export const updateIsSplashState = (isSplash) => {
    return { type: IS_SPLASH, isSplash }
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