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
import utils from '../../../../public/utils'

import mStyles from '../../../../public/common_style';
import styles from './Cur_Couple_Select_Style';

import searchIcon from '../../../../static/imgs/search_2.png'; //搜索按钮

export default class CurCoupleSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: {
                top: null
            }
        }
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

    componentWillReceiveProps(nextProps) {
        const { selectHeaderRef } = nextProps;
        let { position } = this.state;
        // 根据下拉框结果栏元素的位置和宽高，计算下拉框选项的位置
        utils.layout(selectHeaderRef).then((data) => {
            position.top = data.pageY + data.height + 10;
            this.setState({ position: position });
        });
    }

    render() {
        const {
            data,
            onWrapRelease,
            onPricingCurRelease
        } = this.props;
        let { position } = this.state;
        //计价币种列DOM
        let pricingCurDOM = [];
        data.currencyCoupleSelect.data.forEach((item, index) => {
            pricingCurDOM.push(
                <View
                    style={item.pricingCurId === data.currencyCoupleSelect.value.pricingCurId ? [styles.ccsBodyCurrencyItem, styles.ccsBodyCurrencyItemActive] : styles.ccsBodyCurrencyItem}
                    key={index}
                    onStartShouldSetResponder={() => true}
                    onResponderRelease={evt => onPricingCurRelease(evt)}
                >
                    <Text style={item.pricingCurId === data.currencyCoupleSelect.value.pricingCurId ? [styles.ccsBodyCurrencyItemText, mStyles.mBlueColor] : styles.ccsBodyCurrencyItemText}>{item.pricingCurName}</Text>
                </View>
            )
        });
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
                </View>
                <View
                    style={[styles.ccsWrap, {
                        top: position.top
                    }]}
                >
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
                            {pricingCurDOM}
                            {/* <View style={[styles.ccsBodyCurrencyItem, styles.ccsBodyCurrencyItemActive]}>
                                <Text style={[styles.ccsBodyCurrencyItemText, mStyles.mBlueColor]}>USDT</Text>
                            </View> */}
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
                                <Text style={[styles.ccsBodyDataItemText, styles.ccsBodyDataCoupleText]}>BTC/USDT</Text>
                                <Text style={[styles.ccsBodyDataItemText, styles.ccsBodyDataPriceText]}>66668.3212</Text>
                                <Text style={[styles.ccsBodyDataItemText, styles.ccsBodyDataRangeText]}>-0.12%</Text>
                            </View>
                        </ScrollView>
                    </View>
                    {/* 主体内容结束 */}
                </View>
            </Modal>
        );
    }
}