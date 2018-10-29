/**
 * 法币页
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
import BuyList from './Components/Buy_List/Buy_List';
import SellList from './Components/Sell_List/Sell_List';
import EntrustmentList from './Components/Entrustment_List/Entrustment_List';

import mStyles from '../../public/common_style';
import styles from './French_Style';

import grayArrowIcon from '../../static/imgs/arrow_gray.png'; //灰色箭头icon
import unselectedIcon from '../../static/imgs/unselected.png'; //位选中icon
import selectedIcon from '../../static/imgs/selected.png'; //选中icon
import releaseIcon from '../../static/imgs/release.png'; //发布按钮icon

//一级导航显示和隐藏的动画
const mainNavAnim = {
    style: {
        opacity: new Animated.Value(0.6),
        scale: new Animated.Value(0.92)
    },

    //显示
    scaleFadeIn: function() {
        return (
            Anim.parallel([
                Anim.timing(this.style.opacity, 1, 100, Easing.ease),
                Anim.timing(this.style.scale, 1, 100, Easing.ease),
            ])
        )
    },

    //隐藏
    scaleFadeOut: function() {
        return (
            Anim.parallel([
                Anim.timing(this.style.opacity, 0, 100, Easing.ease),
                Anim.timing(this.style.scale, .92, 100, Easing.ease),
            ])
        );
    }
}

export default class French extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //一级导航
            mainNav: {
                isShow: false,
                data: [
                    {
                        isActive: true,
                        icon: require('../../static/imgs/dc/USDT.png'),
                        name: 'USDT'
                    }, {
                        isActive: false,
                        icon: require('../../static/imgs/dc/BTC.png'),
                        name: 'BTC'
                    }, {
                        isActive: false,
                        icon: require('../../static/imgs/dc/ETH.png'),
                        name: 'ETH'
                    }, {
                        isActive: false,
                        icon: require('../../static/imgs/dc/ETC.png'),
                        name: 'ETC'
                    }, {
                        isActive: false,
                        icon: require('../../static/imgs/dc/LTC.png'),
                        name: 'LTC'
                    }, {
                        isActive: false,
                        icon: require('../../static/imgs/dc/EOS.png'),
                        name: 'EOS'
                    }, {
                        isActive: false,
                        icon: require('../../static/imgs/dc/BCH.png'),
                        name: 'BCH'
                    }, {
                        isActive: false,
                        icon: require('../../static/imgs/dc/QTUM.png'),
                        name: 'QTUM'
                    }, {
                        isActive: false,
                        icon: require('../../static/imgs/dc/NEO.png'),
                        name: 'NEO'
                    }, {
                        isActive: false,
                        icon: require('../../static/imgs/dc/XUC.png'),
                        name: 'XUC'
                    }
                ]
            },
            //二级导航
            subNav: {
                data: [
                    {
                        type: 0,
                        name: '购买',
                        isActive: true,
                    }, {
                        type: 1,
                        name: '出售',
                        isActive: false,
                    }, {
                        type: 2,
                        name: '委托单',
                        isActive: false,
                    }, {
                        type: 3,
                        name: '订单',
                        isActive: false,
                    }
                ]
            },
            //用户是否已经认证
            isCertification: true,
            //购买列表
            buyList: {
                //购买列表数据
                data: [
                    {}, {}
                ]
            },
            //出售列表
            sellList: {
                //出售列表数据
                data: [
                    {}, {}, {}, {}, {}, {}, {}
                ]
            },
            //委托单列表
            sellList: {
                //委托单列表数据
                data: [
                    {}, {}, {}, {}, {}, {}, {}
                ]
            }
        }
    }

    _setState = (obj) => {
        this.setState(obj);
    }

    //处理一级导航按钮点击事件
    handleMainNavRelease = (evt) => {
        const _this = this;
        let { mainNav } = this.state;

        if(mainNav.isShow) {
            mainNavAnim.scaleFadeOut().start(() => {
                mainNav.isShow = false;
                _this.setState({ mainNav: mainNav });
            });
        } else {
            mainNav.isShow = true;
            _this.setState({ mainNav: mainNav }, () => {
                mainNavAnim.scaleFadeIn().start();
            });
        }
    }

    //处理 一级导航选项 释放事件
    handleMainNavItemRelease = (evt, index) => {
        let { mainNav } = this.state;
        mainNavAnim.scaleFadeOut().start(() => {
            mainNav.isShow = false;
            this.setState({ mainNav: mainNav });
        });
        let data = mainNav.data;
        for(let i = 0; i < data.length; i++) {
            if(i === index) {
                data[i].isActive = true;
            } else {
                data[i].isActive = false;
            }
        }
        this.setState({ mainNav: mainNav });
    }

    //处理 二级导航选项 释放事件
    handleSubNavItemRelease = (evt, index) => {
        let { subNav } = this.state;
        let data = subNav.data;
        for(let i = 0; i < data.length; i++) {
            if(i === index) {
                data[i].isActive = true;
            } else {
                data[i].isActive = false;
            }
        }
        //如果订单选项被点中，则跳转到法币订单页
        if(subNav.data[3].isActive) {
            //订单选项设为未激活状态，购买选项设为激活状态
            subNav.data[3].isActive = false;
            subNav.data[0].isActive = true;
            //跳转到法币订单页
            this.props.navigation.navigate('FrenchOrder');
        }
        this.setState({ subNav: subNav });
    }

    //处理发布委托单按钮释放事件
    handleReleaseBtnRelease = evt => {
        const { navigate } = this.props.navigation;
        navigate('ReleaseEnt'); //跳转到发布委托单页
    }

    render() {
        const _this = this;
        let {
            mainNav,
            subNav
        } = this.state;
        let subNavActiveIndex = 0; //当前次导航active的索引
        //遍历一级导航的选项
        let mainNavItemsDOM = mainNav.data.map((items, index) => {
            if(mainNav.data[index].isActive === true) {
                mainNav.title = mainNav.data[index].name; //如果一级导航选项中isActive为true，那么导航title就为这个选项的name
            }
            return (
                <View 
                    style={styles.mainNavCurItem} 
                    onStartShouldSetResponder={() => true}
                    onResponderRelease={evt => this.handleMainNavItemRelease(evt, index)}
                    key={index}
                >
                    <Image 
                        style={styles.mainNavCurItemIcon}
                        source={items.icon}
                    />
                    <Text style={styles.mainNavCurItemName}>{items.name}</Text>
                </View>
            );
        });

        //遍历二级导航的选项
        let subNavItemsDOM = subNav.data.map((item, index) => {
            let brderBottomColor = null;
            let color = null;
            if(item.isActive) {
                subNavActiveIndex = index; //找到当前list应该显示的索引
            }
            if(item.type === 0) {
                if(item.isActive) {
                    brderBottomColor = mStyles.mGreenBorderBottom;
                    color = mStyles.mGreenColor;
                }
            } else if(item.type === 1) {
                if(item.isActive) {
                    brderBottomColor = mStyles.mRedBorderBottom;
                    color = mStyles.mRedColor;
                }
            } else if(item.type === 2) {
                if(item.isActive) {
                    brderBottomColor = mStyles.mBlueBorderBottom;
                    color = mStyles.mBlueColor;
                }
            } else if(item.type === 3) {
                if(item.isActive) {
                    brderBottomColor = mStyles.mGreenBorderBottom;
                    color = mStyles.mGreenColor;
                }
            }
            return(
                <View
                    style={styles.subNavItemWrap}
                    onStartShouldSetResponder={() => true}
                    onResponderRelease={evt => this.handleSubNavItemRelease(evt, index)}
                    key={index}
                >
                    <View style={[styles.subNavItem, brderBottomColor]}>
                        <Text style={[styles.subNavItemText, color]}>{item.name}</Text>
                    </View>
                </View>
            );
        });

        return (
            <View style={mStyles.mFlex1}>
                <View style={styles.header}>
                    <View style={[mStyles.mCenterContent, styles.headerCenter]}>
                        <View style={styles.mainNavLeft}>
                            <Text style={styles.mainNavLeftText}>CNY</Text>
                        </View>
                        <View 
                            style={styles.mainNavCenter}
                            onStartShouldSetResponder={() => true}
                            onResponderRelease={this.handleMainNavRelease}
                        >
                            <Text style={styles.mainNavCenterText}>{mainNav.title}/CNY</Text>
                            <Image                             
                                style={{
                                    width: 14,
                                    height: 14,
                                    marginLeft: 8
                                }}
                                source={require('../../static/imgs/arrow_black.png')}
                            />
                        </View>
                        <View style={styles.mainNavRight}>
                            <Text style={[styles.mainNavRightText, mStyles.mRedColor]}>¥7823.21</Text>
                        </View>
                    </View>
                </View>
                {/* 购买，出售，委托，订单 选择开始 */}
                <View style={styles.subNav}>
                    {/* <View style={styles.subNavItemWrap}>
                        <View style={[styles.subNavItem, mStyles.mGreenBorderBottom]}>
                            <Text style={[styles.subNavItemText, mStyles.mGreenColor]}>购买</Text>
                        </View>
                    </View>
                    <View style={styles.subNavItemWrap}>
                        <View style={[styles.subNavItem, mStyles.mRedBorderBottom]}>
                            <Text style={[styles.subNavItemText, mStyles.mRedColor]}>出售</Text>
                        </View>
                    </View>
                    <View style={styles.subNavItemWrap}>
                        <View style={[styles.subNavItem, mStyles.mBlueBorderBottom]}>
                            <Text style={[styles.subNavItemText, mStyles.mBlueColor]}>委托单</Text>
                        </View>
                    </View>
                    <View style={styles.subNavItemWrap}>
                        <View style={styles.subNavItem}>
                            <Text style={styles.subNavItemText}>订单</Text>
                        </View>
                    </View> */}
                    {subNavItemsDOM}
                </View>
                {/* 购买，出售，委托，订单 选择结束 */}
                {/* 资产开始 */}
                <View style={[styles.assets, subNav.data[1].isActive ? mStyles.mFlex : mStyles.mHide]}>
                    <View style={[mStyles.mCenterContent, mStyles.mFlex1]}>
                        <View style={styles.assetsCenterContent}>
                            <Text style={styles.assetsText}>可用: 0.0000{mainNav.title}</Text>
                            <Text style={styles.assetsText}>冻结: 0.0000{mainNav.title}</Text>
                            <Image style={styles.assetsArrow} source={grayArrowIcon}/>
                        </View>
                    </View>
                </View>
                {/* 资产结束 */}
                {/* 条件筛选开始 */}
                <View style={[styles.searchBar, (subNavActiveIndex===0 || subNavActiveIndex===1) ? mStyles.mFlex : mStyles.mHide]}>
                    <View style={[mStyles.mCenterContent, mStyles.mFlex1, styles.searchBarCenterContent]}>
                        <View style={styles.searchBarItem}>
                            <Image
                                style={styles.searchBarItemSelectIcon}
                                source={unselectedIcon}
                            />
                            <Text style={styles.searchBarItemText}>认证商家</Text>
                        </View>
                        <View style={styles.searchBarItem}>
                            <Text style={styles.searchBarItemText}>所有金额</Text>
                            <Image
                                style={styles.searchBarItemArrowIcon}
                                source={grayArrowIcon}
                            />
                        </View>
                        <View style={styles.searchBarItem}>
                            <Text style={styles.searchBarItemText}>所有方式</Text>
                            <Image
                                style={styles.searchBarItemArrowIcon}
                                source={grayArrowIcon}
                            />
                        </View>
                    </View>
                </View>
                {/* 条件筛选结束 */}
                {/* 列表开始 */}
                <View style={styles.list}>
                    <View style={[mStyles.mFlex1, subNavActiveIndex === 0 ?  mStyles.mFlex : mStyles.mHide]}>
                        <BuyList
                            data={this.state}
                            setData={this._setState}
                        />
                    </View>
                    <View style={[mStyles.mFlex1, subNavActiveIndex === 1 ?  mStyles.mFlex : mStyles.mHide]}>
                        <SellList
                            data={this.state}
                            setData={this._setState}
                        />
                    </View>
                    <View style={[mStyles.mFlex1, subNavActiveIndex === 2 ?  mStyles.mFlex : mStyles.mHide]}>
                        <EntrustmentList
                            data={this.state}
                            setData={this._setState}
                        />
                    </View>
                </View>
                {/* 列表结束 */}
                {/* 货币选择开始 */}
                <Animated.View style={[
                    styles.mainNavCur,
                    {
                        height: mainNav.isShow ? 'auto' : 0,
                        opacity: mainNavAnim.style.opacity, 
                        transform: [
                            {scale: mainNavAnim.style.scale}
                        ]
                    }
                ]}>
                    {/* <View style={styles.mainNavCurItem}>
                        <Image 
                            style={styles.mainNavCurItemIcon}
                            source={require('../../static/imgs/BCN.png')}
                        />
                        <Text style={styles.mainNavCurItemName}>BCN</Text>
                    </View> */}
                    {mainNavItemsDOM}
                </Animated.View>
                {/* 货币选择结束 */}
                {/* 发布按钮开始 */}
                <View
                    style={styles.releaseBtn}
                    onStartShouldSetResponder={() => true}
                    onResponderRelease={evt => this.handleReleaseBtnRelease(evt)}
                >
                    <Image style={styles.releaseBtnIcon} source={releaseIcon}/>
                </View>
                {/* 发布按钮结束 */}
            </View>
        );
    }
}