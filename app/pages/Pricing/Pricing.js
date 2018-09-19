/**
 *币币页
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    StatusBar,
    ScrollView,
    Image,
    Animated,
    Easing,
    FlatList,
    LayoutAnimation
} from 'react-native';
import SideMenu from './Components/Side_Menu/Side_Menu'; //侧边菜单栏组件
import Form from './Components/Form/Form'; //左边表单组件
import List from './Components/List/List'; //右边列表组件

import mStyles from '../../public/common_style';
import styles from './Pricing_Style';

import menuIcon from '../../static/imgs/menu.png'; //菜单按钮
import searchIcon from '../../static/imgs/search.png'; //搜索按钮
import arrowIcon from '../../static/imgs/arrow_gray.png'; //灰色箭头按钮

export default class Pricing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMainNavIndex: 0, //被激活的一级nav的索引 0:币币; 1:杠杆
            bb: {
                tradeType: 0, //交易类型 0:买入; 1:卖出
                buy: {
                    name: 'BTC', //买入的对象
                    select: {
                        isShow: false,
                        value: {
                            code: 0,
                            name: 'bb买入选项1'
                        },
                        options: [
                            {
                                code: 0,
                                name: 'bb买入选项1'
                            }, {
                                code: 1,
                                name: 'bb买入选项2'
                            }, {
                                code: 2,
                                name: 'bb买入选项3'
                            }
                        ]
                    }, //下拉框
                    priceInput: {
                        placeholder: '价格',
                        value: 0
                    },
                    numberInput: {
                        placeholder: '数量',
                        value: 0
                    },
                }, //买入
                sell: {
                    name: 'USDT', //卖出的对象
                    select: {
                        isShow: false,
                        value: {
                            code: 0,
                            name: 'bb卖出选项1'
                        },
                        options: [
                            {
                                code: 0,
                                name: 'bb卖出选项1'
                            }, {
                                code: 1,
                                name: 'bb卖出选项2'
                            }, {
                                code: 2,
                                name: 'bb卖出选项3'
                            }
                        ]
                    }, //下拉框
                    priceInput: {
                        placeholder: '价格',
                        value: 0
                    },
                    numberInput: {
                        placeholder: '数量',
                        value: 0
                    },
                } //卖出
            }, //币币的数据
            lever: {
                tradeType: 0, //交易类型 0:买入; 1:卖出
                buy: {
                    name: '杠杆BTC', //买入的对象
                    select: {
                        isShow: false,
                        value: {
                            code: 0,
                            name: 'gg买入选项1'
                        },
                        options: [
                            {
                                code: 0,
                                name: 'gg买入选项1'
                            }, {
                                code: 1,
                                name: 'gg买入选项2'
                            }, {
                                code: 2,
                                name: 'gg买入选项3'
                            }
                        ]
                    }, //下拉框
                    priceInput: {
                        placeholder: '价格',
                        value: 0
                    },
                    numberInput: {
                        placeholder: '数量',
                        value: 0
                    },
                }, //买入
                sell: {
                    name: '杠杆USDT', //卖出的对象
                    select: {
                        isShow: false,
                        value: {
                            code: 0,
                            name: 'gg卖出选项1'
                        },
                        options: [
                            {
                                code: 0,
                                name: 'gg卖出选项1'
                            }, {
                                code: 1,
                                name: 'gg卖出选项2'
                            }, {
                                code: 2,
                                name: 'gg卖出选项3'
                            }
                        ]
                    }, //下拉框
                    priceInput: {
                        placeholder: '价格',
                        value: 0
                    },
                    numberInput: {
                        placeholder: '数量',
                        value: 0
                    },
                } //卖出
            }, //杠杆的数据
            list: {
                select: {
                    isShow: false,
                    value: {
                        code: 0,
                        name: '4位小数'
                    },
                    options: [
                        {
                            code: 0,
                            name: '4位小数'
                        }, {
                            code: 1,
                            name: '1位小数'
                        }, {
                            code: 2,
                            name: '百位小数'
                        }
                    ]
                } //下拉框
            }, //右侧列表栏
            sideMenu: {
                isShow: false
            }, //侧边菜单栏
        }
    }

    //一级导航press事件
    mainNavItemPress = (event, index) => {
        this.setState({ activeMainNavIndex: index });
    }

    //设置bb的值
    setBb = (bb, callback) => {
        this.setState({ bb: bb }, () => {
            if(callback) {
                callback();
            } else {
                return false;
            }
        });
    }

    //设置杠杆的值
    setLever = (lever, callback) => {
        this.setState({ lever: lever }, () => {
            if(callback) {
                callback();
            } else {
                return false;
            }
        });
    }

    //设置list的值
    setList = (list, callback) => {
        this.setState({ list: list }, () => {
            if(callback) {
                callback();
            } else {
                return false;
            }
        });
    }

    //设置菜单的值
    setMenu = (menu, callback) => {
        this.setState({ menu: menu }, () => {
            if(callback) {
                callback();
            } else {
                return false;
            }
        });
    }

    //处理菜单图标点击事件
    handleMenuPress = evt => {
        let { sideMenu } = this.state;
        sideMenu.isShow = true;
        this.setState({ sideMenu: sideMenu });
    }

    render() {
        let {
            activeMainNavIndex,
            bb,
            lever,
            list,
            sideMenu
        } = this.state;

        return (
            <View style={mStyles.mFlex1}>
                {/* 头部开始 */}
                <View style={styles.header}>
                    <View style={[mStyles.mCenterContent, styles.headerCenterContent]}>
                        {/* 菜单按钮开始 */}
                        <View style={styles.headerMenu}>
                            <Image
                                style={styles.headerMenuIcon}
                                source={menuIcon}
                                onStartShouldSetResponder={() => true}
                                onResponderRelease={evt => this.handleMenuPress(evt)}
                            />
                        </View>
                        {/* 菜单按钮结束 */}
                        {/* 一级导航开始 */}
                        <View style={styles.headerMainNav}>
                            <View style={styles.headerMainNavWrap}>
                                <View style={[
                                        styles.headerMainNavItem,
                                        activeMainNavIndex === 0 ? styles.headerMainNavItemActive : ''
                                ]}>
                                    <Text 
                                        style={[
                                            styles.headerMainNavItemName,
                                            activeMainNavIndex === 0 ? styles.headerMainNavItemNameActive : ''
                                        ]}
                                        onPress={event => this.mainNavItemPress(event, 0)}
                                    >
                                        币币
                                    </Text>
                                </View>
                                <View style={[
                                        styles.headerMainNavItem,
                                        activeMainNavIndex === 1 ? styles.headerMainNavItemActive : ''
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.headerMainNavItemName,
                                            activeMainNavIndex === 1 ? styles.headerMainNavItemNameActive : ''
                                        ]}
                                        onPress={event => this.mainNavItemPress(event, 1)}
                                    >
                                        杠杆
                                    </Text>
                                </View>
                            </View>
                        </View>
                        {/* 一级导航结束 */}
                        {/* 搜索按钮开始 */}
                        <View style={styles.headerSearch}>
                            <Image style={styles.headerSearchIcon} source={searchIcon}></Image>
                        </View>
                        {/* 搜索按钮结束 */}
                    </View>
                </View>
                {/* 头部结束 */}
                {/* 主体内容开始 */}
                <View style={styles.mainContainer}>
                    {/* 币币内容开始 */}
                    <View style={activeMainNavIndex === 0 ? mStyles.mFlex : mStyles.mHide}>
                        {/* 交易开始 */}
                        <View style={styles.trade}>
                            <View style={mStyles.mCenterContent}>
                                <View style={styles.tradeHead}>
                                    <View style={styles.tradeHeadItem}>
                                        <Text style={styles.tradeHeadTitle}>BTC/USDT</Text>
                                        <Image style={styles.tradeHeadTitleArrow} source={arrowIcon}></Image>
                                    </View>
                                    <View style={[styles.tradeHeadItem, {justifyContent: 'flex-end'}]}>
                                        <View style={styles.tradeHeadNumWrap}>
                                            <Text style={[styles.tradeHeadNumBig, mStyles.mGreenColor]}>54357385.234</Text>
                                            <Text style={styles.tradeHeadNumSmall}>$7385.234</Text>
                                        </View>
                                        <View style={[styles.tradeHeadQuoWrap,, mStyles.mGreenBg]}>
                                            <Text style={styles.tradeHeadQuoText}>+0.53%</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.tradeBody}>
                                    <View style={styles.tradeBodyForm}>
                                        <Form
                                            data={bb}
                                            setData={this.setBb}
                                        />
                                    </View>
                                    <View style={styles.tradeBodyQuo}>
                                        <List
                                            data={list}
                                            setData={this.setList}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                        {/* 交易结束 */}
                        {/* 限价单开始 */}
                        <View style={styles.limited}>
                            <View style={mStyles.mCenterContent}>
                                <View style={styles.limitedTitle}>
                                    <Text style={styles.limitedTitleText}>限价单</Text>
                                </View>
                            </View>
                        </View>
                        {/* 限价单结束 */}
                    </View>
                    {/* 币币内容结束 */}
                    {/* 杠杆内容开始 */}
                    <View style={activeMainNavIndex === 1 ? mStyles.mFlex : mStyles.mHide}>
                        {/* 交易开始 */}
                        <View style={styles.trade}>
                            <View style={mStyles.mCenterContent}>
                                <View style={styles.tradeHead}>
                                    <View style={styles.tradeHeadItem}>
                                        <Text style={styles.tradeHeadTitle}>21321/USDT</Text>
                                        <Image style={styles.tradeHeadTitleArrow} source={arrowIcon}></Image>
                                    </View>
                                    <View style={[styles.tradeHeadItem, {justifyContent: 'flex-end'}]}>
                                        <View style={styles.tradeHeadNumWrap}>
                                            <Text style={[styles.tradeHeadNumBig, mStyles.mGreenColor]}>54357385.234</Text>
                                            <Text style={styles.tradeHeadNumSmall}>$7385.234</Text>
                                        </View>
                                        <View style={[styles.tradeHeadQuoWrap,, mStyles.mGreenBg]}>
                                            <Text style={styles.tradeHeadQuoText}>+0.53%</Text>
                                        </View>
                                    </View>
                                </View>
                                {/* TODO: 这里写杠杆中多出来的一行 */}
                                <View style={styles.tradeBody}>
                                    <View style={styles.tradeBodyForm}>
                                        <Form
                                            data={lever}
                                            setData={this.setLever}
                                        />
                                    </View>
                                    <View style={styles.tradeBodyQuo}>
                                        <List
                                            data={list}
                                            setData={this.setList}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                        {/* 交易结束 */}
                        {/* 限价单开始 */}
                        <View style={styles.limited}>
                            <View style={mStyles.mCenterContent}>
                                <View style={styles.limitedTitle}>
                                    <Text style={styles.limitedTitleText}>限价单</Text>
                                </View>
                            </View>
                        </View>
                        {/* 限价单结束 */}
                    </View>
                    {/* 杠杆内容结束 */}
                </View>
                {/* 主体内容结束 */}
                <SideMenu data={sideMenu} setData={this.setMenu}/>
            </View>
        );
    }
}