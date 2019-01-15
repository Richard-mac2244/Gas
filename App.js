import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Button, AsyncStorage, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createSwitchNavigator, createStackNavigator, createAppContainer, createDrawerNavigator, createBottomTabNavigator} from 'react-navigation';


import AuthLoadingScreen from './NewScreens/AuthLoadingScreen';
import HomeScreen from './NewScreens/HomeScreen';
import WelcomeScreen from './NewScreens/WelcomeScreen';
import SignInScreen from './NewScreens/SignInScreen';
import CreateAccountScreen from './NewScreens/CreateAccountScreen';
import CreateCarScreen from './NewScreens/CreateCarScreen';
import AccountScreen from './NewScreens/AccountScreen';
import YourCarScreen from './NewScreens/YourCarScreen';
import MapScreen from './NewScreens/MapboxScreen';

const AppTabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon:({tintColor}) => (
        <Icon name = "ios-home" color = {tintColor} size = {24} />
      )
    }
  },
  Map: {
    screen: MapScreen,
    navigationOptions: {
      tabBarIcon:({tintColor}) => (
        <Icon name = "ios-map" color = {tintColor} size = {24} />
      )
    }
  },

  CarScreen: {
    screen: YourCarScreen,
    navigationOptions: {
      tabBarIcon:({tintColor}) => (
        <Icon name = "ios-car" color = {tintColor} size = {24} />
      )
    }
  },
  AccountScreen: {
    screen: AccountScreen,
    navigationOptions: {
      tabBarIcon:({tintColor}) => (
        <Icon name = "ios-settings" color = {tintColor} size = {24} />
      )
    }
  },


},{
    tabBarOptions: {
      activeTintColor: 'lightsalmon',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: {width:5, height: 3},
        shadowColor: 'black',
        shadowOpacity: 0.5,
      }
    }
  });
//for home have your car details and recently visited gas stations

/*const PreHomeScreen = createStackNavigator({
  AppTabNavigator:{
    screen: AppTabNavigator,
    navigationOptions: ({ navigation}) => ({
      title: "",
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={{paddingHorizontal: 18}}>
            <Icon name = "md-menu" size = {30} />
          </View>
        </TouchableOpacity>
      )
    })

  }
});

const AppDrawerNavigator = createDrawerNavigator({
  Home: PreHomeScreen,
  //Account:AccountScreen,
});
//AppDrawerNavigator points to prehomescreen which will allow both tabs and drawer to appear
//prehomescreen will have two tabs at the bottom
*/

const AuthStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  SignIn: SignInScreen,
  CreateAccount: CreateAccountScreen,
  CreateCar: CreateCarScreen,
})

export default createSwitchNavigator(
  {
  AuthLoading: AuthLoadingScreen,
  App: AppTabNavigator,
  Auth: AuthStackNavigator,
  }
);

/* newer way ^^
export default createAppContainer(createSwitchNavigator(
  {
  AuthLoading: AuthLoadingScreen,
  App: AppDrawerNavigator,
  Auth: AuthStackNavigator,
  }
));
*/

//first variable is the page name and the second is reference to the const to the file name
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
