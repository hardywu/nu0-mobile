/**
 * 法币订单页
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
import Anim from '../../public/animation';
import Header from '../../components/Header/Header';
import UndoneList from './Components/Undone_List/Undone_List';
import DoneList from './Components/Done_List/Done_List';
import CancelledList from './Components/Cancelled_List/Cancelled_List';

import mStyles from '../../public/common_style';
import styles from './French_Order_Style';

import grayArrowIcon from '../../static/imgs/arrow_gray.png'; //灰色箭头icon
import unselectedIcon from '../../static/imgs/unselected.png'; //位选中icon
import selectedIcon from '../../static/imgs/selected.png'; //选中icon
import releaseIcon from '../../static/imgs/release.png'; //发布按钮icon

export default class FrenchOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //一级级导航
            mainNav: [
                {
                    type: 0,
                    name: '未完成',
                    isActive: true,
                }, {
                    type: 1,
                    name: '已完成',
                    isActive: false,
                }, {
                    type: 2,
                    name: '已取消',
                    isActive: false,
                }
            ],
            //用户是否已经认证
            isCertification: true,
            //未完成列表
            undoneList: {
                //未完成列表数据
                data: [
                    {}, {}
                ]
            },
            //已完成列表
            doneList: {
                //出售列表数据
                data: [
                    {}, {}, {}, {}, {}, {}, {}
                ]
            },
            //已取消列表
            cancelledList: {
                //委托单列表数据
                data: [
                    {}, {}, {}, {}, {}, {}, {}
                ]
            }
        }
    }

    //处理 返回按钮 释放事件
    handleGoBackRelease = evt => {
        this.props.navigation.goBack();
    }

    //处理一级导航释放事件
    handleMainNavRelease = (evt, index) => {
        let { mainNav } = this.state;
        mainNav.forEach((item, _index) => {
            if(index === _index) {
                item.isActive = true;
            } else {
                item.isActive = false;
            }
        });
        this.setState({ mainNav: mainNav });
    }

    _setState = (obj) => {
        this.setState(obj);
    }

    render() {
        let {
            mainNav
        } = this.state;
        //一级导航DOM
        let mainNavActiveIndex = null;
        let mainNavDOM = mainNav.map((item, index) => {
            if(item.isActive === true) {
                mainNavActiveIndex = index;
            }
            return (
                <View
                    style={[styles.navItem, item.isActive ? mStyles.mBlueBorderBottom : '']}
                    key={index}
                    onStartShouldSetResponder={() => true}
                    onResponderRelease={evt => this.handleMainNavRelease(evt, index)}
                >
                    <Text style={[styles.navItemText, item.isActive ? mStyles.mBlueColor : '']}>{item.name}</Text>
                </View>
            )
        });

        return (
            <View style={[mStyles.mFlex1, mStyles.mbackgroundColor]}>
                <Header
                    title='法币订单'
                    onGoBackRelease={evt => this.handleGoBackRelease(evt)}
                />
                {/* 导航开始 */}
                <View style={styles.nav}>
                    {mainNavDOM}
                </View>
                {/* 导航结束 */}
                {/* 列表开始 */}
                <View style={styles.list}>
                    <View style={[mStyles.mFlex1, mainNavActiveIndex === 0 ?  mStyles.mFlex : mStyles.mHide]}>
                        <UndoneList
                            data={this.state}
                            setData={this._setState}
                        />
                    </View>
                    <View style={[mStyles.mFlex1, mainNavActiveIndex === 1 ?  mStyles.mFlex : mStyles.mHide]}>
                        <DoneList
                            data={this.state}
                            setData={this._setState}
                        />
                    </View>
                    <View style={[mStyles.mFlex1, mainNavActiveIndex === 2 ?  mStyles.mFlex : mStyles.mHide]}>
                        <CancelledList
                            data={this.state}
                            setData={this._setState}
                        />
                    </View>
                </View>
                {/* 列表结束 */}
            </View>
        )
    }
}