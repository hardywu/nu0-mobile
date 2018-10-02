import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { MainTabNav } from '../components/Main_Tab_Nav/Main_Tab_Nav'
import Login from '../pages/Login/Login'
import Search from '../pages/Search/Search'
import ReleaseEnt from '../pages/Release_Ent/Release_Ent'
import MyWallet from '../pages/My_Wallet/My_Wallet'

const Router = createStackNavigator(
    {
        Main: {
            screen: MainTabNav,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        //登录页
        Login: {
            screen: Login,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        //搜索页
        Search: {
            screen: Search,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        //发布委托单页
        ReleaseEnt: {
            screen: ReleaseEnt,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        //我的钱包页
        MyWallet: {
            screen: MyWallet,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        }
    },
    {
        initialRouteName: 'MyWallet',
        headerMode: 'screen'
    }
);

export default Router;