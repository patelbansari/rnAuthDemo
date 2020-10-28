import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Splash from '../screen/splash/Splash';
import Login from '../screen/Login/Login';
import Home from '../screen/Home/Home';
import { Colors } from '../config/Colors';
import Constants from '../config/Constants';
import Register from '../screen/Register/Register';
import ForgotPassword from '../screen/ForgotPassword/ForgotPassword';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';


const Stack = createStackNavigator();
const StackHome = createStackNavigator();



export function SplashStatck() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Splash" component={Splash} />
        </Stack.Navigator>
    );
}


export function AuthStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animationEnabled:false
            }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
        </Stack.Navigator>
    );
}

export function HomeStack() {
    return (
        <StackHome.Navigator initialRouteName={'Home'} >
            <StackHome.Screen
                options={({navigation, route }) => ({
                    headerTitle: 'Home',
                    headerTitleStyle: hTitleStyle,
                    headerRight: () => (
                        <TouchableOpacity onPress={() => {
                            console.log('route',route)
                          route?.params?.performLogout()}}>
                          <Image
                            source={require('../assets/image/logout.png')}
                            style={{width:25,height:25,marginEnd:15}}
                          />
                        </TouchableOpacity>
                      ),
                    headerStyle:{
                        backgroundColor:Colors.colorBlack,
                        borderRadius:3,
                        borderColor:Colors.colorWhite,borderWidth:2
                    }
                })}
                name="Home" component={Home} />
        </StackHome.Navigator>
    );
}

const hTitleStyle = {
    fontSize: 20,
    fontFamily: Constants.font.notoBold,
    color: Colors.colorWhite,
    textTransform:'capitalize',
}



