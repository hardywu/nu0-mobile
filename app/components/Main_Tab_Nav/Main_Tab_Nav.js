import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import * as Constant from '../../public/constant'
import Home from '../../pages/Home/Home';
import Quotation from '../../pages/Quotation/Quotation'
import Pricing from '../../pages/Pricing/Pricing'
import French from '../../pages/French/French'
import Contract from '../../pages/Contract/Contract'

export const MainTabNav = createBottomTabNavigator(
    {
        //首页
        Home: {
            screen: Home,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '首页',
                tabBarIcon: ({ focused, tintColor }) => {
                    return (
                        <Image 
                            source={ require('../../static/imgs/home.png') }
                            style={{ width: 22, height: 22, tintColor: tintColor }}
                        />
                    )
                }
            }), 
        },
        //行情页
        Quotation: {
            screen: Quotation,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '行情',
                tabBarIcon: ({ focused, tintColor }) => {
                    return (
                        <Image 
                            source={ require('../../static/imgs/quotation.png') }
                            style={{ width: 22, height: 22, tintColor: tintColor }}
                        />
                    )
                }
            }), 
        },
        //法币
        French: {
            screen: French,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '法币',
                tabBarIcon: ({ focused, tintColor }) => {
                    return (
                        <Image 
                            source={ require('../../static/imgs/pricing.png') }
                            style={{ width: 22, height: 22, tintColor: tintColor }}
                        />
                    )
                }
            }), 
        },
        //币币
        Pricing: {
            screen: Pricing,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '币币',
                tabBarIcon: ({ focused, tintColor }) => {
                    return (
                        <Image 
                            source={ require('../../static/imgs/french.png') }
                            style={{ width: 22, height: 22, tintColor: tintColor }}
                        />
                    )
                }
            }), 
        },
        //合约
        Contract: {
            screen: Contract,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '合约',
                tabBarIcon: ({ focused, tintColor }) => {
                    return (
                        <Image 
                            source={ require('../../static/imgs/contract.png') }
                            style={{ width: 22, height: 22, tintColor: tintColor }}
                        />
                    )
                }
            }), 
        },
    },
    {
        tabBarOptions: {
            //当前选中的tab bar的文本颜色和图标颜色
            activeTintColor: Constant.ACTIVE_COLOR,
            //当前未选中的tab bar的文本颜色和图标颜色
            inactiveTintColor: '#b5b5b7',
            //是否显示tab bar的图标，默认是false
            showIcon: true,
            //showLabel - 是否显示tab bar的文本，默认是true
            showLabel: true,
            //是否将文本转换为大小，默认是true
            upperCaseLabel: false,
            //material design中的波纹颜色(仅支持Android >= 5.0)
            pressColor: '#788493',
            //按下tab bar时的不透明度(仅支持iOS和Android < 5.0).
            pressOpacity: 0.8,
            //tab bar的样式
            style: {
                backgroundColor: '#fff',
                paddingBottom: 1,
                paddingTop: 1,
                borderTopWidth: 0.2,
                borderTopColor: '#ccc',
                elevation: 10
            },
            //tab bar的文本样式
            labelStyle: {
                fontSize: 10,
                margin: 1
            },
            //tab 页指示符的样式 (tab页下面的一条线).
            indicatorStyle: { height: 0 },
        },
        //是否允许滑动切换tab页
        swipeEnabled: true,
        //是否在切换tab页时使用动画
        animationEnabled: true,
        //是否懒加载
        lazy: true,
        //返回按钮是否会导致tab切换到初始tab页？ 如果是，则设置为initialRoute，否则为none。 缺省为initialRoute。
        backBehavior: 'none',
    }
);