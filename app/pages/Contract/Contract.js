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
                            name: '0.01'
                        }
                    ]
                } //下拉框
            }, //右侧价格列表栏
        }
    }

     //设置priceList的值
     setPriceList = (priceList, callback) => {
        this.setState({ priceList: priceList }, () => {
            if(callback) {
                callback();
            } else {
                return false;
            }
        });
    }

    render() {
        let {
            priceList
        } = this.state;

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
                    <View style={[styles.navItem, mStyles.mBlueBorderBottom]}>
                        <Text style={[styles.navItemText, mStyles.mBlueColor]}>交易</Text>
                    </View>
                    <View style={styles.navItem}>
                        <Text style={styles.navItemText}>挂单</Text>
                    </View>
                    <View style={styles.navItem}>
                        <Text style={styles.navItemText}>持仓</Text>
                    </View>
                </View>
                {/* 导航结束 */}
                {/* 页面开始 */}
                <View style={styles.body}>
                    {/* 交易开始 */}
                    <View style={styles.row}>
                        <View style={styles.trade}>
                            <View style={styles.tradeHeader}>
                                <View style={[mStyles.mCenterContent, styles.tradeHeaderCenterContent]}>
                                    <View style={styles.tradeHeaderSelect}>
                                        <Text style={styles.tradeHeaderSelectText}>XRP 季度 。 1228</Text>
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
                                            data={priceList}
                                            setData={this.setPriceList}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* 交易结束 */}
                </View>
                {/* 页面结束 */}
            </View>
        );
    }
}