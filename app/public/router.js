import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from '../pages/Login/Login'
import { MainTabNav } from '../components/Main_Tab_Nav/Main_Tab_Nav'

const Router = createStackNavigator(
    {
        Login: { screen: Login }, // 登录页
        Main: {
            screen: MainTabNav,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        }
    },
    {
        initialRouteName: 'Main',
        headerMode: 'screen'
    }
);

export default Router;