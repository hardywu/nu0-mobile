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
import Form from './Components/Form/Form';
import List from './Components/List/List';

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

            }, //币币的数据
            lever: {

            } //杠杆的数据
        }
    }

    //一级导航press事件
    mainNavItemPress = (event, index) => {
        this.setState({ activeMainNavIndex: index });
    }

    render() {
        let {
            activeMainNavIndex
        } = this.state;

        return (
            <View style={mStyles.mFlex1}>
                <StatusBar
                    backgroundColor='#fff'
                    hidden={true}
                    animated={true}
                    barStyle='dark-content'
                />
                {/* 头部开始 */}
                <View style={styles.header}>
                    <View style={[mStyles.mCenterContent, styles.headerCenterContent]}>
                        {/* 菜单按钮开始 */}
                        <View style={styles.headerMenu}>
                            <Image style={styles.headerMenuIcon} source={menuIcon}></Image>
                        </View>
                        {/* 菜单按钮结束 */}
                        {/* 一级导航开始 */}
                        <View style={styles.headerMainNav}>
                            <View style={styles.headerMainNavWrap}>
                                <View style={[
                                        styles.headerMainNavItem,
                                        activeMainNavIndex === 0 ? styles.headerMainNavItemActive : ''
                                    ]}
                                >
                                    <Text 
                                        style={[
                                            styles.headerMainNavItemName,
                                            activeMainNavIndex === 0 ? styles.headerMainNavItemNameActive : ''
                                        ]}
                                        onPress={
                                            event => {
                                                this.mainNavItemPress(event, 0);
                                            }
                                        }
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
                                        onPress={
                                            event => {
                                                this.mainNavItemPress(event, 1);
                                            }
                                        }
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
                                        <Form />
                                    </View>
                                    <View style={styles.tradeBodyQuo}>
                                        <List />
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
                                        <Form />
                                    </View>
                                    <View style={styles.tradeBodyQuo}>
                                        <List />
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
            </View>
        );
    }
}