import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { MainTabNav } from '../components/Main_Tab_Nav/Main_Tab_Nav';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import ForgetPassword from '../pages/Forget_Password/Forget_Password';
import Search from '../pages/Search/Search';
import ReleaseEnt from '../pages/Release_Ent/Release_Ent';
import MyWallet from '../pages/My_Wallet/My_Wallet';
import ContractAccount from '../pages/Contract_Account/Contract_Account';
import FrenchAccount from '../pages/French_Account/French_Account';

const Router = createStackNavigator(
    {
        Main: {
            screen: MainTabNav,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        //注册页
        Register: {
            screen: Register,
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
        //忘记密码页
        ForgetPassword: {
            screen: ForgetPassword,
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
        },
        //合约账户
        ContractAccount: {
            screen: ContractAccount,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        //法币账户
        FrenchAccount: {
            screen: FrenchAccount,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        }
    },
    {
        initialRouteName: 'ForgetPassword',
        headerMode: 'screen'
    }
);

export default Router;