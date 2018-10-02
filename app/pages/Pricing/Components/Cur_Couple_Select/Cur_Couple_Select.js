/**
 * 币币页 交易币对下拉框组件
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
    LayoutAnimation,
    Picker,
    Modal
} from 'react-native';

import mStyles from '../../../../public/common_style';
import styles from './Cur_Couple_Select_Style';

import searchIcon from '../../../../static/imgs/search_2.png'; //搜索按钮

export default class CurCoupleSelect extends Component {
    constructor(props) {
        super(props);
    }

    //处理 搜索按钮 释放事件
    handleSearchRelease = evt => {
        const {
            data,
            navigate,
            setData
        } = this.props;
        data.currencyCoupleSelect.isShow = false;
        setData(data, () => {
            navigate('Search');
        });
    }

    render() {
        const {
            data,
            onWrapRelease
        } = this.props;

        return (
            <Modal
                visible={data.currencyCoupleSelect.isShow}
                transparent={true}
                presentationStyle='overFullScreen'
                animationType='none'
                onRequestClose={() => false}
            >
                <View
                    style={styles.modalWrap}
                    onStartShouldSetResponder={() => true}
                    onResponderRelease={evt => onWrapRelease(evt)}
                >
                    <View style={styles.ccsWrap}>
                        {/* 头部开始 */}
                        <View style={styles.ccsHead}>
                            <View style={[mStyles.mCenterContent, styles.ccsHeadCenter]}>
                                <View style={[styles.ccsHeadItem, styles.ccsHeadCurrency]}>
                                    <Text style={styles.ccsHeadText}>计价币种</Text>
                                </View>
                                <View style={[styles.ccsHeadItem, styles.ccsHeadCouple]}>
                                    <Text style={styles.ccsHeadText}>交易币对</Text>
                                </View>
                                <View style={[styles.ccsHeadItem, styles.ccsHeadPrice]}>
                                    <Text style={styles.ccsHeadText}>最新价</Text>
                                    <View style={styles.ccsHeadSortWrap}>
                                        <Text style={styles.ccsHeadSortText}>▲</Text>
                                        <Text style={styles.ccsHeadSortText}>▼</Text>
                                    </View>
                                </View>
                                <View style={[styles.ccsHeadItem, styles.ccsHeadRange]}>
                                    <Text style={styles.ccsHeadText}>涨跌幅</Text>
                                    <View style={styles.ccsHeadSortWrap}>
                                        <Text style={styles.ccsHeadSortText}>▲</Text>
                                        <Text style={styles.ccsHeadSortText}>▼</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {/* 头部结束 */}
                        {/* 主体内容开始 */}
                        <View style={styles.ccsBody}>
                            <ScrollView
                                style={styles.ccsBodyCurrency}
                                showsVerticalScrollIndicator={false}
                            >
                                <View style={styles.ccsBodyCurrencyItem}>
                                    <Text style={styles.ccsBodyCurrencyItemText}>自选</Text>
                                </View>
                                <View style={[styles.ccsBodyCurrencyItem, styles.ccsBodyCurrencyItemActive]}>
                                    <Text style={[styles.ccsBodyCurrencyItemText, mStyles.mBlueColor]}>USDT</Text>
                                </View>
                                <View style={styles.ccsBodyCurrencyItem}>
                                    <Text style={styles.ccsBodyCurrencyItemText}>OKB</Text>
                                </View>
                                <View
                                    style={styles.ccsBodyCurrencyItem}
                                    onStartShouldSetResponder={() => true}
                                    onResponderRelease={evt => this.handleSearchRelease(evt)}
                                >
                                    <Image style={styles.ccsBodyCurrencyItemIcon} source={searchIcon}/>
                                </View>
                            </ScrollView>
                            <ScrollView
                                style={styles.ccsBodyData}
                                showsVerticalScrollIndicator={false}
                            >
                                <View style={styles.ccsBodyDataItem}>
                                    <Text style={[styles.ccsBodyDataItemText, styles.ccsBodyDataCoupleText, mStyles.mBlueColor]}>BTC/USDT</Text>
                                    <Text style={[styles.ccsBodyDataItemText, styles.ccsBodyDataPriceText]}>66668.3212</Text>
                                    <Text style={[styles.ccsBodyDataItemText, styles.ccsBodyDataRangeText, mStyles.mGreenColor]}>+0.12%</Text>
                                </View>
                                <View style={styles.ccsBodyDataItem}>
                                    <Text style={[styles.ccsBodyDataItemText, styles.ccsBodyDataCoupleText]}>BTC/USDT</Text>
                                    <Text style={[styles.ccsBodyDataItemText, styles.ccsBodyDataPriceText]}>66668.3212</Text>
                                    <Text style={[styles.ccsBodyDataItemText, styles.ccsBodyDataRangeText, mStyles.mRedColor]}>-0.12%</Text>
                                </View>
                                <View style={styles.ccsBodyDataItem}>
                                    <Text style={[styles.ccsBodyDataItemText, styles.ccsBodyDataCoupleText]}>BTC/USDT</Text>
                                    <Text style={[styles.ccsBodyDataItemText, styles.ccsBodyDataPriceText]}>66668.3212</Text>
                                    <Text style={[styles.ccsBodyDataItemText, styles.ccsBodyDataRangeText, mStyles.mGreenColor]}>+0.12%</Text>
                                </View>
                                <View style={styles.ccsBodyDataItem}>
                                    <Text style={[styles.ccsBodyDataItemText, styles.ccsBodyDataCoupleText]}>BTC/USDT</Text>
                                    <Text style={[styles.ccsBodyDataItemText, styles.ccsBodyDataPriceText]}>66668.3212</Text>
                                    <Text style={[styles.ccsBodyDataItemText, styles.ccsBodyDataRangeText, mStyles.mRedColor]}>-0.12%</Text>
                                </View>
                                <View style={styles.ccsBodyDataItem}>
                                    <Text style={[styles.ccsBodyDataItemText, styles.ccsBodyDataCoupleText]}>BTC/USDT</Text>
                                    <Text style={[styles.ccsBodyDataItemText, styles.ccsBodyDataPriceText]}>66668.3212</Text>
                                    <Text style={[styles.ccsBodyDataItemText, styles.ccsBodyDataRangeText, mStyles.mGreenColor]}>+0.12%</Text>
                                </View>
                                <View style={styles.ccsBodyDataItem}>
                                    <Text style={[styles.ccsBodyDataItemText, styles.ccsBodyDataCoupleText]}>BTC/USDT</Text>
                                    <Text style={[styles.ccsBodyDataItemText, styles.ccsBodyDataPriceText]}>66668.3212</Text>
                                    <Text style={[styles.ccsBodyDataItemText, styles.ccsBodyDataRangeText, mStyles.mRedColor]}>-0.12%</Text>
                                </View>
                                <View style={styles.ccsBodyDataItem}>
                                    <Text style={[styles.ccsBodyDataItemText, styles.ccsBodyDataCoupleText]}>BTC/USDT</Text>
                                    <Text style={[styles.ccsBodyDataItemText, styles.ccsBodyDataPriceText]}>66668.3212</Text>
                                    <Text style={[styles.ccsBodyDataItemText, styles.ccsBodyDataRangeText]}>-0.12%</Text>
                                </View>
                                <View style={styles.ccsBodyDataItem}>
                                    <Text style={[styles.ccsBodyDataItemText, styles.ccsBodyDataCoupleText]}>BTC/USDT</Text>
                                    <Text style={[styles.ccsBodyDataItemText, styles.ccsBodyDataPriceText]}>66668.3212</Text>
                                    <Text style={[styles.ccsBodyDataItemText, styles.ccsBodyDataRangeText, mStyles.mRedColor]}>-0.12%</Text>
                                </View>
                                <View style={styles.ccsBodyDataItem}>
                                    <Text style={[styles.ccsBodyDataItemText, styles.ccsBodyDataCoupleText]}>BTC/USDT</Text>
                                    <Text style={[styles.ccsBodyDataItemText, styles.ccsBodyDataPriceText]}>66668.3212</Text>
                                    <Text style={[styles.ccsBodyDataItemText, styles.ccsBodyDataRangeText]}>-0.12%</Text>
                                </View>
                            </ScrollView>
                        </View>
                        {/* 主体内容结束 */}
                    </View>
                </View>
            </Modal>
        );
    }
}