/**
 *自选列表组件
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    StatusBar,
    ScrollView,
    Image
} from 'react-native';
import mStyles from '../../../../public/common_style';
import styles from './Self_Selection_List_Style';

export default class SelfSelectionList extends Component {
    render() {
        return (
            <ScrollView
                style={styles.mainContainer}
                showsVerticalScrollIndicator={false}
            >
                {/* 循环项目item开始 */}
                <View style={styles.item}>
                    <View style={styles.itemLeft}>
                        <View style={styles.itemName}>
                            <Text style={styles.itemMainName}>BTC</Text>
                            <Text style={styles.itemNameBreak}>/</Text>
                            <Text style={styles.itemSubName}>USDT</Text>
                        </View>
                        <View style={styles.itemDeal}>
                            <Text style={styles.itemDealNum}>成交量 12300</Text>
                        </View>
                    </View>
                    <View style={styles.itemRight}>
                        <View style={styles.itemValue}>
                            <Text style={[styles.itemMainValue, mStyles.mGreenColor]}>$2312123.22</Text>
                            <Text style={styles.itemSubValue}>Y233.22</Text>
                        </View>
                        <View style={styles.itemTrend}>
                            <Text style={[styles.itemTrendNum, mStyles.mRedBg]}>-0.92%</Text>
                        </View>
                    </View>
                </View>
                {/* 循环项目item结束 */}
                <View style={styles.item}>
                    <View style={styles.itemLeft}>
                        <View style={styles.itemName}>
                            <Text style={styles.itemMainName}>BTC次周</Text>
                        </View>
                        <View style={styles.itemDeal}>
                            <Text style={styles.itemDealNum}>成交量 12300</Text>
                        </View>
                    </View>
                    <View style={styles.itemRight}>
                        <View style={styles.itemValue}>
                            <Text style={[styles.itemMainValue, mStyles.mRedColor]}>$2312123.22</Text>
                            <Text style={styles.itemSubValue}>Y233.22</Text>
                        </View>
                        <View style={styles.itemTrend}>
                            <Text style={[styles.itemTrendNum, mStyles.mGreenBg]}>-0.92%</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.item}>
                    <View style={styles.itemLeft}>
                        <View style={styles.itemName}>
                            <Text style={styles.itemMainName}>BTC</Text>
                            <Text style={styles.itemNameBreak}>/</Text>
                            <Text style={styles.itemSubName}>USDT</Text>
                        </View>
                        <View style={styles.itemDeal}>
                            <Text style={styles.itemDealNum}>成交量 12300</Text>
                        </View>
                    </View>
                    <View style={styles.itemRight}>
                        <View style={styles.itemValue}>
                            <Text style={[styles.itemMainValue, mStyles.mGreenColor]}>$2312123.22</Text>
                            <Text style={styles.itemSubValue}>Y233.22</Text>
                        </View>
                        <View style={styles.itemTrend}>
                            <Text style={[styles.itemTrendNum, mStyles.mRedBg]}>-0.92%</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.item}>
                    <View style={styles.itemLeft}>
                        <View style={styles.itemName}>
                            <Text style={styles.itemMainName}>BTC</Text>
                            <Text style={styles.itemNameBreak}>/</Text>
                            <Text style={styles.itemSubName}>USDT</Text>
                        </View>
                        <View style={styles.itemDeal}>
                            <Text style={styles.itemDealNum}>成交量 12300</Text>
                        </View>
                    </View>
                    <View style={styles.itemRight}>
                        <View style={styles.itemValue}>
                            <Text style={[styles.itemMainValue, mStyles.mGreenColor]}>$2312123.22</Text>
                            <Text style={styles.itemSubValue}>Y233.22</Text>
                        </View>
                        <View style={styles.itemTrend}>
                            <Text style={[styles.itemTrendNum, mStyles.mRedBg]}>-0.92%</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.item}>
                    <View style={styles.itemLeft}>
                        <View style={styles.itemName}>
                            <Text style={styles.itemMainName}>BTC</Text>
                            <Text style={styles.itemNameBreak}>/</Text>
                            <Text style={styles.itemSubName}>USDT</Text>
                        </View>
                        <View style={styles.itemDeal}>
                            <Text style={styles.itemDealNum}>成交量 12300</Text>
                        </View>
                    </View>
                    <View style={styles.itemRight}>
                        <View style={styles.itemValue}>
                            <Text style={[styles.itemMainValue, mStyles.mGreenColor]}>$2312123.22</Text>
                            <Text style={styles.itemSubValue}>Y233.22</Text>
                        </View>
                        <View style={styles.itemTrend}>
                            <Text style={[styles.itemTrendNum, mStyles.mRedBg]}>-0.92%</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.item}>
                    <View style={styles.itemLeft}>
                        <View style={styles.itemName}>
                            <Text style={styles.itemMainName}>BTC</Text>
                            <Text style={styles.itemNameBreak}>/</Text>
                            <Text style={styles.itemSubName}>USDT</Text>
                        </View>
                        <View style={styles.itemDeal}>
                            <Text style={styles.itemDealNum}>成交量 12300</Text>
                        </View>
                    </View>
                    <View style={styles.itemRight}>
                        <View style={styles.itemValue}>
                            <Text style={[styles.itemMainValue, mStyles.mGreenColor]}>$2312123.22</Text>
                            <Text style={styles.itemSubValue}>Y233.22</Text>
                        </View>
                        <View style={styles.itemTrend}>
                            <Text style={[styles.itemTrendNum, mStyles.mRedBg]}>-0.92%</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.item}>
                    <View style={styles.itemLeft}>
                        <View style={styles.itemName}>
                            <Text style={styles.itemMainName}>BTC</Text>
                            <Text style={styles.itemNameBreak}>/</Text>
                            <Text style={styles.itemSubName}>USDT</Text>
                        </View>
                        <View style={styles.itemDeal}>
                            <Text style={styles.itemDealNum}>成交量 12300</Text>
                        </View>
                    </View>
                    <View style={styles.itemRight}>
                        <View style={styles.itemValue}>
                            <Text style={[styles.itemMainValue, mStyles.mGreenColor]}>$2312123.22</Text>
                            <Text style={styles.itemSubValue}>Y233.22</Text>
                        </View>
                        <View style={styles.itemTrend}>
                            <Text style={[styles.itemTrendNum, mStyles.mRedBg]}>-0.92%</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.item}>
                    <View style={styles.itemLeft}>
                        <View style={styles.itemName}>
                            <Text style={styles.itemMainName}>BTC</Text>
                            <Text style={styles.itemNameBreak}>/</Text>
                            <Text style={styles.itemSubName}>USDT</Text>
                        </View>
                        <View style={styles.itemDeal}>
                            <Text style={styles.itemDealNum}>成交量 12300</Text>
                        </View>
                    </View>
                    <View style={styles.itemRight}>
                        <View style={styles.itemValue}>
                            <Text style={[styles.itemMainValue, mStyles.mGreenColor]}>$2312123.22</Text>
                            <Text style={styles.itemSubValue}>Y233.22</Text>
                        </View>
                        <View style={styles.itemTrend}>
                            <Text style={[styles.itemTrendNum, mStyles.mRedBg]}>-0.92%</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.item}>
                    <View style={styles.itemLeft}>
                        <View style={styles.itemName}>
                            <Text style={styles.itemMainName}>BTC</Text>
                            <Text style={styles.itemNameBreak}>/</Text>
                            <Text style={styles.itemSubName}>USDT</Text>
                        </View>
                        <View style={styles.itemDeal}>
                            <Text style={styles.itemDealNum}>成交量 12300</Text>
                        </View>
                    </View>
                    <View style={styles.itemRight}>
                        <View style={styles.itemValue}>
                            <Text style={[styles.itemMainValue, mStyles.mGreenColor]}>$2312123.22</Text>
                            <Text style={styles.itemSubValue}>Y233.22</Text>
                        </View>
                        <View style={styles.itemTrend}>
                            <Text style={[styles.itemTrendNum, mStyles.mRedBg]}>-0.92%</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.item}>
                    <View style={styles.itemLeft}>
                        <View style={styles.itemName}>
                            <Text style={styles.itemMainName}>BTC</Text>
                            <Text style={styles.itemNameBreak}>/</Text>
                            <Text style={styles.itemSubName}>USDT</Text>
                        </View>
                        <View style={styles.itemDeal}>
                            <Text style={styles.itemDealNum}>成交量 12300</Text>
                        </View>
                    </View>
                    <View style={styles.itemRight}>
                        <View style={styles.itemValue}>
                            <Text style={[styles.itemMainValue, mStyles.mGreenColor]}>$2312123.22</Text>
                            <Text style={styles.itemSubValue}>Y233.22</Text>
                        </View>
                        <View style={styles.itemTrend}>
                            <Text style={[styles.itemTrendNum, mStyles.mRedBg]}>-0.92%</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.item}>
                    <View style={styles.itemLeft}>
                        <View style={styles.itemName}>
                            <Text style={styles.itemMainName}>BTC</Text>
                            <Text style={styles.itemNameBreak}>/</Text>
                            <Text style={styles.itemSubName}>USDT</Text>
                        </View>
                        <View style={styles.itemDeal}>
                            <Text style={styles.itemDealNum}>成交量 12300</Text>
                        </View>
                    </View>
                    <View style={styles.itemRight}>
                        <View style={styles.itemValue}>
                            <Text style={[styles.itemMainValue, mStyles.mGreenColor]}>$2312123.22</Text>
                            <Text style={styles.itemSubValue}>Y233.22</Text>
                        </View>
                        <View style={styles.itemTrend}>
                            <Text style={[styles.itemTrendNum, mStyles.mRedBg]}>-0.92%</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.item}>
                    <View style={styles.itemLeft}>
                        <View style={styles.itemName}>
                            <Text style={styles.itemMainName}>BTC</Text>
                            <Text style={styles.itemNameBreak}>/</Text>
                            <Text style={styles.itemSubName}>USDT</Text>
                        </View>
                        <View style={styles.itemDeal}>
                            <Text style={styles.itemDealNum}>成交量 12300</Text>
                        </View>
                    </View>
                    <View style={styles.itemRight}>
                        <View style={styles.itemValue}>
                            <Text style={[styles.itemMainValue, mStyles.mGreenColor]}>$2312123.22</Text>
                            <Text style={styles.itemSubValue}>Y233.22</Text>
                        </View>
                        <View style={styles.itemTrend}>
                            <Text style={[styles.itemTrendNum, mStyles.mRedBg]}>-0.92%</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}