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
import SecurityCenter from '../pages/Security_Center/Security_Center';
import BindEmail from '../pages/Bind_Email/Bind_Email';
import CapitalPwd from '../pages/Capital_Pwd/Capital_Pwd';
import SysSetting from '../pages/Sys_Setting/Sys_Setting';
import ExchangeRateSurvey from '../pages/Exchange_Rate_Survey/Exchange_Rate_Survey';
import MarketOverview from '../pages/Market_Overview/Market_Overview';
import Recharge from '../pages/Recharge/Recharge';
import RechargeCurSelection from '../pages/Recharge_Cur_Selection/Recharge_Cur_Selection';

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
        //安全中心
        SecurityCenter: {
            screen: SecurityCenter,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        //绑定邮箱
        BindEmail: {
            screen: BindEmail,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        //设置资金密码
        CapitalPwd: {
            screen: CapitalPwd,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        //系统设置
        SysSetting: {
            screen: SysSetting,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        //汇率概览
        ExchangeRateSurvey: {
            screen: ExchangeRateSurvey,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        //市场总览
        MarketOverview: {
            screen: MarketOverview,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        //充值
        Recharge: {
            screen: Recharge,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        //充值币种选择
        RechargeCurSelection: {
            screen: RechargeCurSelection,
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