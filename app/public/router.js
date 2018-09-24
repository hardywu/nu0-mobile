import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { MainTabNav } from '../components/Main_Tab_Nav/Main_Tab_Nav'
import Login from '../pages/Login/Login'
import Search from '../pages/Search/Search'

const Router = createStackNavigator(
    {
        Main: {
            screen: MainTabNav,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        Login: {
            screen: Login,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        }, // 登录页
        Search: {
            screen: Search,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        }, // 登录页
    },
    {
        initialRouteName: 'Main',
        headerMode: 'screen'
    }
);

export default Router;