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
import BbAccount from '../pages/Bb_Account/Bb_Account';
import CapitalTransfer from '../pages/Capital_Transfer/Capital_Transfer';
import CurSelection from '../pages/Cur_Selection/Cur_Selection';
import UserCenter from '../pages/User_Center/User_Center';

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
        },
        //币币账户
        BbAccount: {
            screen: BbAccount,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        //资金划转
        CapitalTransfer: {
            screen: CapitalTransfer,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        //币种选择
        CurSelection: {
            screen: CurSelection,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        //个人中心
        UserCenter: {
            screen: UserCenter,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
    },
    {
        initialRouteName: 'Main',
        headerMode: 'screen'
    }
);

export default Router;