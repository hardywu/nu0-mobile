/**
 *行情页
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    StatusBar,
    ScrollView,
    Image
} from 'react-native';
import Form from './Components/Form/Form'; //交易左边表单组件
import PriceList from './Components/Price_List/Price_List'; //交易右边价格表格组件
import Constant from '../../public/constant';

import mStyles from '../../public/common_style';
import styles from './Contract_Style';

import searchIcon from '../../static/imgs/search.png' //搜索图标
import menuIcon2 from '../../static/imgs/menu_2.png' //菜单图标
import arrowIcon from '../../static/imgs/arrow_gray.png' //箭头图标
import trendActiveIcon from '../../static/imgs/trend_active.png' //箭头图标

export default class Contract extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainNav: [
                {
                    type: 0,
                    name: '交易',
                    isActive: true,
                }, {
                    type: 1,
                    name: '挂单',
                    isActive: false,
                }, {
                    type: 2,
                    name: '持仓',
                    isActive: false,
                }
            ], // 一级导航
            trade: {
                contractType: {
                    isShow: false,
                    value: {
                        type: 0,
                        code: 0
                    },
                    options: [
                        {
                            type: 0,
                            name: 'BTC',
                            data: [
                                {
                                    code: 0,
                                    name: '当周·0928'
                                }, {
                                    code: 1,
                                    name: '次周·1005'
                                }, {
                                    code: 2,
                                    name: '季度·1228'
                                }
                            ]
                        }, {
                            type: 1,
                            name: 'LTC1',
                            data: [
                                {
                                    code: 0,
                                    name: '当周·0929'
                                }, {
                                    code: 1,
                                    name: '次周·1005'
                                }, {
                                    code: 2,
                                    name: '季度·1228'
                                }
                            ]
                        }, {
                            type: 2,
                            name: 'LTC2',
                            data: [
                                {
                                    code: 0,
                                    name: '当周·0930'
                                }, {
                                    code: 1,
                                    name: '次周·1005'
                                }, {
                                    code: 2,
                                    name: '季度·1228'
                                }
                            ]
                        }, {
                            type: 3,
                            name: 'LTC3',
                            data: [
                                {
                                    code: 0,
                                    name: '当周·0931'
                                }, {
                                    code: 1,
                                    name: '次周·1005'
                                }, {
                                    code: 2,
                                    name: '季度·1228'
                                }
                            ]
                        }
                    ]
                }, //合约类型下拉框
                priceList: {
                    select: {
                        isShow: false,
                        value: {
                            code: 0,
                            name: '0.001'
                        },
                        options: [
                            {
                                code: 0,
                                name: '0.001'
                            }, {
                                code: 1,
                                name: '0.02'
                            }
                        ]
                    } //下拉框
                }, //右侧价格列表栏
            }, //交易页的数据

        }
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

    //交易页-处理合约类型下拉框释放事件
    handleTradeContractOptionsRelease = evt => {
        let { trade } = this.state;

        trade.contractType.isShow = !trade.contractType.isShow;
        this.setState({ trade: trade });
    }

    //交易页-处理合约类型下拉框选项释放事件
    handleTradeContractOptionsItemRelease = (evt, parentIndex, childIndex) => {
        let { trade } = this.state;

        trade.contractType.isShow = !trade.contractType.isShow;
        trade.contractType.value.type = parentIndex;
        trade.contractType.value.code = childIndex;
        this.setState({ trade: trade });
    }

    //设置priceList的值
    setPriceList = (priceList, callback) => {
        let { trade } = this.state;
        trade.priceList = priceList;
        this.setState({ trade: trade }, () => {
            if(callback) {
                callback();
            } else {
                return false;
            }
        });
    }

    render() {
        let {
            mainNav,
            trade
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

        //交易页-合约类型下拉框选项DOM
        let tradeContractOptionsDOM = [];
        for(let i = 0; i < trade.contractType.options.length; i++) {
            let arr = [];
            for(let j = 0; j < trade.contractType.options[i].data.length; j++) {
                arr.push(
                    <View
                        style={[
                            styles.tradeContractTypeChildItem,
                            (trade.contractType.value.type === i) && (trade.contractType.value.code === j) ? mStyles.mBlueBorder : ''
                        ]}
                        key={j}
                        onStartShouldSetResponder={() => true}
                        onResponderRelease={evt => this.handleTradeContractOptionsItemRelease(evt, i, j)}
                    >
                        <Text
                            style={[
                                styles.tradeContractTypeChildItemText,
                                (trade.contractType.value.type === i) && (trade.contractType.value.code === j) ? mStyles.mBlueBg : '',
                                {color: (trade.contractType.value.type === i) && (trade.contractType.value.code === j) ? '#fff' : Constant.DEFAULT_FONT_COLOR}
                            ]}
                            numberOfLines={1}
                        >
                            {trade.contractType.options[i].data[j].name}
                        </Text>
                    </View>
                )
            }
            tradeContractOptionsDOM.push(
                <View style={styles.tradeContractOptionsItem} key={i}>
                    <Text style={styles.tradeContractTypeText}>{trade.contractType.options[i].name}</Text>
                    <View style={styles.tradeContractTypeChild}>
                        {arr}
                    </View>
                </View>
            )
        }

        return (
            <View style={mStyles.mFlex1}>
                {/* 头部开始 */}
                <View style={styles.header}>
                    <View style={[mStyles.mCenterContent, styles.headerCenterContent]}>
                        <View style={styles.headerMain}>
                            <Text style={styles.headerTitle}>合约</Text>
                            <Image style={styles.headerSearch} source={searchIcon} />
                            <Image style={styles.headerMenu} source={menuIcon2} />
                        </View>
                    </View>
                </View>
                {/* 头部结束 */}
                {/* 导航开始 */}
                <View style={styles.nav}>
                    {mainNavDOM}
                </View>
                {/* 导航结束 */}
                {/* 页面开始 */}
                <View style={styles.body}>
                    {/* 交易页面开始 */}
                    <ScrollView
                        style={[
                            {display: mainNavActiveIndex === 0 ? 'flex' : 'none'},
                            styles.row
                        ]}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.trade}>
                            <View style={[styles.tradeHeader]}>
                                <View style={[mStyles.mCenterContent, styles.tradeHeaderCenterContent]}>
                                    <View
                                        style={styles.tradeHeaderSelect}
                                        onStartShouldSetResponder={() => true}
                                        onResponderRelease={evt => this.handleTradeContractOptionsRelease(evt)}
                                    >
                                        <Text style={styles.tradeHeaderSelectText}>
                                            {trade.contractType.options[trade.contractType.value.type].name + '  '}
                                            {trade.contractType.options[trade.contractType.value.type].data[trade.contractType.value.code].name}
                                        </Text>
                                        <Image style={styles.tradeHeaderSelectArrow} source={arrowIcon} />
                                    </View>
                                    <View style={styles.tradeHeaderQuo}>
                                        <Text style={[styles.tradeHeaderQuoText, mStyles.mGreenColor]}>$1.1228</Text>
                                        <Image style={styles.tradeHeaderQuoIcon} source={trendActiveIcon} />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.tradeBody}>
                                <View style={[mStyles.mCenterContent, styles.tradeCenterContent]}>
                                    <View style={styles.tradeForm}>
                                        <Form />
                                    </View>
                                    <View style={styles.tradeList}>
                                        <PriceList 
                                            data={trade.priceList}
                                            setData={this.setPriceList}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View
                                style={[
                                    styles.tradeContractOptionsWrap,
                                    {height: trade.contractType.isShow ? 240 : 0}
                                ]}
                            >
                                <ScrollView style={[mStyles.mCenterContent, styles.tradeContractOptionsCenterContent]}>
                                    {/* <View style={styles.tradeContractOptionsItem}>
                                        <Text style={styles.tradeContractTypeText}>BTC合约</Text>
                                        <View style={styles.tradeContractTypeChild}>
                                            <View
                                                style={styles.tradeContractTypeChildItem}
                                                onStartShouldSetResponder={() => true}
                                                onResponderRelease={evt => this.handleTradeContractOptionsItemRelease(evt, 0, 0)}
                                            >
                                                <Text style={styles.tradeContractTypeChildItemText} numberOfLines={1}>当周·0928</Text>
                                            </View>
                                        </View>
                                    </View> */}
                                    {tradeContractOptionsDOM}
                                </ScrollView>
                            </View>
                        </View>
                    </ScrollView>
                    {/* 交易页面结束 */}
                    {/* 挂单页面开始 */}
                    <ScrollView
                        style={[
                            {display: mainNavActiveIndex === 1 ? 'flex' : 'none'},
                            styles.row
                        ]}
                        showsVerticalScrollIndicator={false}
                    >
                        <Text>挂单页面</Text>
                    </ScrollView>
                    {/* 挂单页面结束 */}
                    {/* 持仓页面开始 */}
                    <ScrollView
                        style={[
                            {display: mainNavActiveIndex === 2 ? 'flex' : 'none'},
                            styles.row
                        ]}
                        showsVerticalScrollIndicator={false}
                    >
                        <Text>持仓页面</Text>
                    </ScrollView>
                    {/* 持仓页面结束 */}
                </View>
                {/* 页面结束 */}
            </View>
        );
    }
}