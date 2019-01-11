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
//组件
import SideMenu from './Components/Side_Menu/Side_Menu'; //侧边菜单栏组件
import Form from './Components/Form/Form'; //左边表单组件
import List from './Components/List/List'; //右边列表组件
import CurCoupleSelect from './Components/Cur_Couple_Select/Cur_Couple_Select'; //交易币对下拉框组件
import EmptyTopBar from '../../components/Empty_Top_Bar/Empty_Top_Bar';
import EmptyBottomBar from '../../components/Empty_Bottom_Bar/Empty_Bottom_Bar';
//样式
import mStyles from '../../public/common_style';
import styles from './Pricing_Style';
//图标
import menuIcon from '../../static/imgs/menu.png'; //菜单按钮
import searchIcon from '../../static/imgs/search.png'; //搜索按钮
import arrowIcon from '../../static/imgs/arrow_gray.png'; //灰色箭头按钮
//其他
import utils from '../../public/utils';
import api from '../../public/api';

export default class Pricing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //被激活的一级nav的索引 0:币币; 1:杠杆
            activeMainNavIndex: 0,
            //币币的数据
            bb: {
                //交易类型 0:买入; 1:卖出
                tradeType: 0,
                topPrice: '-',
                topChange: '-',
                //
                currencyCoupleDisplay: {
                    name: '-',
                    price: '-',
                    change: '-'
                },
                //交易币对下拉框数据
                currencyCoupleSelect: {
                    isShow: false,
                    value: {
                        pricingCurId: '-',
                        couplesId: '-'
                    },
                    data: [
                        // {
                        //     pricingCurId: 'eth',
                        //     pricingCurName: 'dsa',
                        //     couples: [
                        //         {
                        //             id: '',
                        //             name: '',
                        //             price: '',
                        //             change: ''
                        //         }
                        //     ]
                        // }
                    ],
                    //market tikers列表
                    marketsTickers: {},
                },
                //买入
                buy: {
                    //
                    name: 'BTC',
                    //估值
                    valuation: '',
                    //下拉框
                    select: {
                        isShow: false,
                        value: {
                            code: 0,
                            name: '限价单'
                        },
                        options: [
                            {
                                code: 0,
                                name: '限价单'
                            }, {
                                code: 1,
                                name: '市价单'
                            }
                        ]
                    },
                    //价格输入框数据
                    priceInput: {
                        placeholder: '价格',
                        value: 0
                    },
                    //数量输入框数据
                    numberInput: {
                        placeholder: '数量',
                        value: 0
                    },
                    //可用
                    couldUsable: {
                        value: '-'
                    },
                    //可买
                    couldBuy: {
                        value: '-'
                    }
                },
                //卖出
                sell: {
                    name: 'USDT',
                    //估值
                    valuation: '',
                    select: {
                        isShow: false,
                        value: {
                            code: 0,
                            name: '限价单'
                        },
                        options: [
                            {
                                code: 0,
                                name: '限价单'
                            }, {
                                code: 1,
                                name: '市价单'
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
                    //可用
                    couldUsable: {
                        value: '-'
                    },
                    //可卖
                    couldSell: {
                        value: '-'
                    }
                }
            },
            //杠杆的数据
            lever: {
                tradeType: 0, //交易类型 0:买入; 1:卖出
                topPrice: '-',
                topChange: '-',
                currencyCoupleDisplay: {
                    name: '-'
                },
                //交易币对下拉框数据
                currencyCoupleSelect: {
                    isShow: false,
                    value: {
                        pricingCurId: '',
                        couplesId: ''
                    },
                    data: [
                        // {
                        //     pricingCurId: 'eth',
                        //     pricingCurName: 'dsa',
                        //     couples: [
                        //         {
                        //             id: '',
                        //             name: '',
                        //             price: '',
                        //             change: ''
                        //         }
                        //     ]
                        // }
                    ]
                },
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
                    //可用
                    couldUsable: {
                        value: '-'
                    },
                    //可买
                    couldBuy: {
                        value: '-'
                    }
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
                    //可用
                    couldUsable: {
                        value: '-'
                    },
                    //可卖
                    couldSell: {
                        value: '-'
                    }
                } //卖出
            },
            //右侧列表栏
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
            },
            //侧边菜单栏
            sideMenu: {
                isShow: false
            }
        }
    }

    componentDidMount() {
        let { bb } = this.state;
        let {
            currencyCoupleSelect,
            currencyCoupleDisplay
        } = this.state.bb;
        //发起币种请求
        api.getPublicCurrencies().then(res => {
            res.forEach((item, index) => {
                currencyCoupleSelect.data.push({
                    pricingCurId: item.id,
                    pricingCurName: item.id.toUpperCase(),
                    couples: []
                });
            });
            currencyCoupleSelect.isShow = true;
            //设置bb currencyCoupleSelect左侧高亮的默认值
            currencyCoupleSelect.value.pricingCurId = currencyCoupleSelect.data[0].pricingCurId;
            this.setState({ bb: bb });
        }).catch(err => {
            utils.toast.show(err.msg);
            console.log(`err: ${err.msg}`);
        });
        //发起market tikers列表请求
        api.getPublicMarketsTickers().then(res => {
            currencyCoupleSelect.marketsTickers = res;
            //匹配list中对应的ticker
            let reg = new RegExp(`${currencyCoupleSelect.value.pricingCurId}$`, 'i');
            for(let key in currencyCoupleSelect.marketsTickers) {
                if(reg.test(key)) {
                    let list = currencyCoupleSelect.marketsTickers;
                    let tmpData = list[key];
                    currencyCoupleSelect.value.couplesId = key;
                    currencyCoupleDisplay.name = `${key.split(currencyCoupleSelect.value.pricingCurId)[0].toUpperCase()}/${currencyCoupleSelect.value.pricingCurId.toUpperCase()}`
                    break;
                }
            }
            this.setState({ bb: bb });
        }).catch(err => {
            utils.toast.show(err.msg);
            console.log(`err: ${err.msg}`);
        });
    }

    //一级导航press事件
    mainNavItemPress = (event, index) => {
        this.setState({ activeMainNavIndex: index });
    }

    //菜单按钮释放事件
    handleSideMenuRelease = evt => {
        let { sideMenu } = this.state;
        sideMenu.isShow = true;
        this.setState({ sideMenu: sideMenu });
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

    //处理菜单modal层释放事件
    handleMenuSideModalWrapRelease = evt => {
        let { sideMenu } = this.state;
        sideMenu.isShow = false;
        this.setState({ sideMenu: sideMenu });
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

    //处理搜索按钮释放事件
    handleGoSearchRelease = evt => {
        const { navigate } = this.props.navigation;
        navigate('Search');
    }

    //处理 bb交易币对结果栏 释放事件
    handleBbCoupleValRelease = evt => {
        let { bb } = this.state;
        bb.currencyCoupleSelect.isShow = true;
        this.setState({ bb: bb });
    }

    //处理 bb交易币对modal层 释放事件
    handleBbCoupleSelectWrapRelease = evt => {
        let { bb } = this.state;
        bb.currencyCoupleSelect.isShow = false;
        this.setState({ bb: bb });
    }

    //处理 bb交易币对计价币种 释放事件
    handleBbCoupleSelectPricingCurRelease = (evt, pricingCur) => {
        let { bb } = this.state;
        let { currencyCoupleSelect } = this.state.bb;
        //高亮对应选项
        currencyCoupleSelect.value.pricingCurId = pricingCur.pricingCurId;
        this.setState({ bb: bb });
    }

    //处理 bb交易币对交易币对 释放事件
    handleBbCoupleSelectTradeCoupleRelease = (evt, tradeCouple) => {
        let { bb } = this.state;
        let {
            currencyCoupleDisplay,
            currencyCoupleSelect
        } = this.state.bb;
        //高亮对应选项
        currencyCoupleSelect.value.couplesId = tradeCouple.id;
        currencyCoupleSelect.isShow = false;
        currencyCoupleDisplay.name = tradeCouple.name;
        this.setState({ bb: bb });
    }

    //处理 杠杆交易币对结果栏 释放事件
    handleLeverCoupleValRelease = evt => {
        let { lever } = this.state;
        lever.currencyCoupleSelect.isShow = true;
        this.setState({ lever: lever });
    }

    //处理 杠杆交易币对modal层 释放事件
    handleLeverCoupleSelectWrapRelease = evt => {
        let { lever } = this.state;
        lever.currencyCoupleSelect.isShow = false;
        this.setState({ lever: lever });
    }

    render() {
        const { navigate } = this.props.navigation;
        const { navigation } = this.props;
        let {
            activeMainNavIndex,
            bb,
            lever,
            list,
            sideMenu
        } = this.state;
        return (
            <View style={[mStyles.mFlex1]}>
                <EmptyTopBar backgroundColor='#fff'/>
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
                            <Image
                                style={styles.headerSearchIcon}
                                source={searchIcon}
                                onStartShouldSetResponder={() => true}
                                onResponderRelease={evt => this.handleGoSearchRelease(evt)}
                            />
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
                                    <View
                                        style={styles.tradeHeadItem}
                                        ref='bbCoupleSelect'
                                        onStartShouldSetResponder={() => true}
                                        onResponderRelease={evt => this.handleBbCoupleValRelease(evt)}
                                    >
                                        <Text style={styles.tradeHeadTitle}>{bb.currencyCoupleDisplay.name}</Text>
                                        <Image style={styles.tradeHeadTitleArrow} source={arrowIcon}></Image>
                                    </View>
                                    <View style={[styles.tradeHeadItem, {justifyContent: 'flex-end'}]}>
                                        <View style={styles.tradeHeadNumWrap}>
                                            <Text style={[styles.tradeHeadNumBig, mStyles.mGreenColor]}>{bb.topPrice}</Text>
                                            {/* <Text style={styles.tradeHeadNumSmall}>$7385.234</Text> */}
                                        </View>
                                        <View style={[styles.tradeHeadQuoWrap,, mStyles.mGreenBg]}>
                                            <Text style={styles.tradeHeadQuoText}>{bb.topChange}</Text>
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
                        {/* 交易币对下拉框开始 */}
                        <CurCoupleSelect
                            data={bb}
                            selectHeaderRef={this.refs.bbCoupleSelect}
                            navigate={navigate}
                            setData={this.setBb}
                            onWrapRelease={this.handleBbCoupleSelectWrapRelease}
                            onPricingCurRelease={this.handleBbCoupleSelectPricingCurRelease}
                            onTradeCoupleRelease={this.handleBbCoupleSelectTradeCoupleRelease}
                        />
                        {/* 交易币对下拉框结束 */}
                    </View>
                    {/* 币币内容结束 */}
                    {/* 杠杆内容开始 */}
                    <View style={activeMainNavIndex === 1 ? mStyles.mFlex : mStyles.mHide}>
                        {/* 交易开始 */}
                        <View style={styles.trade}>
                            <View style={mStyles.mCenterContent}>
                                <View style={styles.tradeHead}>
                                    <View
                                        style={styles.tradeHeadItem}
                                        onStartShouldSetResponder={() => true}
                                        onResponderRelease={evt => this.handleLeverCoupleValRelease(evt)}
                                    >
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
                        {/* 交易币对下拉框开始 */}
                        {/* <CurCoupleSelect
                            data={lever}
                            selectHeaderRef={this.refs.bbCoupleSelect}
                            navigate={navigate}
                            setData={this.setLever}
                            onWrapRelease={evt => {this.handleLeverCoupleSelectWrapRelease(evt)}}
                        /> */}
                        {/* 交易币对下拉框结束 */}
                    </View>
                    {/* 杠杆内容结束 */}
                </View>
                {/* 主体内容结束 */}
                <SideMenu
                    data={sideMenu}
                    navigation={navigation}
                    setData={this.setMenu}
                    onModalWrapRelease={evt => this.handleMenuSideModalWrapRelease(evt)}
                />
            </View>
        );
    }
}