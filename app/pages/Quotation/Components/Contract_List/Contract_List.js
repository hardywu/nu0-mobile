/**
 *合约列表组件
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
import styles from './Contract_List_Style';

export default class ContractList extends Component {
    render() {
        return (
            <ScrollView
                style={styles.mainContainer}
                showsVerticalScrollIndicator={false}
            >
                {/* 主循环项目mainItem开始 */}
                <View style={styles.mainItem}>
                    <View style={styles.mainItemNameWrap}>
                        <Text style={styles.mainItemName}>BTC</Text>
                    </View>
                    {/* 子循环项目subItem开始 */}
                    <View style={styles.subItem}>
                        <View style={styles.subItemLeft}>
                            <View style={styles.subItemName}>
                                <Text style={styles.subItemMainName}>BTC</Text>
                                <Text style={styles.subItemNameBreak}>/</Text>
                                <Text style={styles.subItemSubName}>USDT</Text>
                            </View>
                            <View style={styles.subItemDeal}>
                                <Text style={styles.subItemDealNum}>成交量 12300</Text>
                            </View>
                        </View>
                        <View style={styles.subItemRight}>
                            <View style={styles.subItemValue}>
                                <Text style={[styles.subItemMainValue, mStyles.mGreenColor]}>$2312123.22</Text>
                                <Text style={styles.subItemSubValue}>Y233.22</Text>
                            </View>
                            <View style={styles.subItemTrend}>
                                <Text style={[styles.subItemTrendNum, mStyles.mRedBg]}>-0.92%</Text>
                            </View>
                        </View>
                    </View>
                    {/* 子循环项目subItem结束 */}
                    <View style={styles.subItem}>
                        <View style={styles.subItemLeft}>
                            <View style={styles.subItemName}>
                                <Text style={styles.subItemMainName}>BTC</Text>
                                <Text style={styles.subItemNameBreak}>/</Text>
                                <Text style={styles.subItemSubName}>USDT</Text>
                            </View>
                            <View style={styles.subItemDeal}>
                                <Text style={styles.subItemDealNum}>成交量 12300</Text>
                            </View>
                        </View>
                        <View style={styles.subItemRight}>
                            <View style={styles.subItemValue}>
                                <Text style={[styles.subItemMainValue, mStyles.mGreenColor]}>$2312123.22</Text>
                                <Text style={styles.subItemSubValue}>Y233.22</Text>
                            </View>
                            <View style={styles.subItemTrend}>
                                <Text style={[styles.subItemTrendNum, mStyles.mRedBg]}>-0.92%</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.subItem}>
                        <View style={styles.subItemLeft}>
                            <View style={styles.subItemName}>
                                <Text style={styles.subItemMainName}>BTC</Text>
                                <Text style={styles.subItemNameBreak}>/</Text>
                                <Text style={styles.subItemSubName}>USDT</Text>
                            </View>
                            <View style={styles.subItemDeal}>
                                <Text style={styles.subItemDealNum}>成交量 12300</Text>
                            </View>
                        </View>
                        <View style={styles.subItemRight}>
                            <View style={styles.subItemValue}>
                                <Text style={[styles.subItemMainValue, mStyles.mGreenColor]}>$2312123.22</Text>
                                <Text style={styles.subItemSubValue}>Y233.22</Text>
                            </View>
                            <View style={styles.subItemTrend}>
                                <Text style={[styles.subItemTrendNum, mStyles.mRedBg]}>-0.92%</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.subItem}>
                        <View style={styles.subItemLeft}>
                            <View style={styles.subItemName}>
                                <Text style={styles.subItemMainName}>BTC</Text>
                                <Text style={styles.subItemNameBreak}>/</Text>
                                <Text style={styles.subItemSubName}>USDT</Text>
                            </View>
                            <View style={styles.subItemDeal}>
                                <Text style={styles.subItemDealNum}>成交量 12300</Text>
                            </View>
                        </View>
                        <View style={styles.subItemRight}>
                            <View style={styles.subItemValue}>
                                <Text style={[styles.subItemMainValue, mStyles.mGreenColor]}>$2312123.22</Text>
                                <Text style={styles.subItemSubValue}>Y233.22</Text>
                            </View>
                            <View style={styles.subItemTrend}>
                                <Text style={[styles.subItemTrendNum, mStyles.mRedBg]}>-0.92%</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* 主循环项目mainItem结束 */}
                <View style={styles.mainItem}>
                    <View style={styles.mainItemNameWrap}>
                        <Text style={styles.mainItemName}>BTC</Text>
                    </View>
                    <View style={styles.subItem}>
                        <View style={styles.subItemLeft}>
                            <View style={styles.subItemName}>
                                <Text style={styles.subItemMainName}>BTC</Text>
                                <Text style={styles.subItemNameBreak}>/</Text>
                                <Text style={styles.subItemSubName}>USDT</Text>
                            </View>
                            <View style={styles.subItemDeal}>
                                <Text style={styles.subItemDealNum}>成交量 12300</Text>
                            </View>
                        </View>
                        <View style={styles.subItemRight}>
                            <View style={styles.subItemValue}>
                                <Text style={[styles.subItemMainValue, mStyles.mGreenColor]}>$2312123.22</Text>
                                <Text style={styles.subItemSubValue}>Y233.22</Text>
                            </View>
                            <View style={styles.subItemTrend}>
                                <Text style={[styles.subItemTrendNum, mStyles.mRedBg]}>-0.92%</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.subItem}>
                        <View style={styles.subItemLeft}>
                            <View style={styles.subItemName}>
                                <Text style={styles.subItemMainName}>BTC</Text>
                                <Text style={styles.subItemNameBreak}>/</Text>
                                <Text style={styles.subItemSubName}>USDT</Text>
                            </View>
                            <View style={styles.subItemDeal}>
                                <Text style={styles.subItemDealNum}>成交量 12300</Text>
                            </View>
                        </View>
                        <View style={styles.subItemRight}>
                            <View style={styles.subItemValue}>
                                <Text style={[styles.subItemMainValue, mStyles.mGreenColor]}>$2312123.22</Text>
                                <Text style={styles.subItemSubValue}>Y233.22</Text>
                            </View>
                            <View style={styles.subItemTrend}>
                                <Text style={[styles.subItemTrendNum, mStyles.mRedBg]}>-0.92%</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.subItem}>
                        <View style={styles.subItemLeft}>
                            <View style={styles.subItemName}>
                                <Text style={styles.subItemMainName}>BTC</Text>
                                <Text style={styles.subItemNameBreak}>/</Text>
                                <Text style={styles.subItemSubName}>USDT</Text>
                            </View>
                            <View style={styles.subItemDeal}>
                                <Text style={styles.subItemDealNum}>成交量 12300</Text>
                            </View>
                        </View>
                        <View style={styles.subItemRight}>
                            <View style={styles.subItemValue}>
                                <Text style={[styles.subItemMainValue, mStyles.mGreenColor]}>$2312123.22</Text>
                                <Text style={styles.subItemSubValue}>Y233.22</Text>
                            </View>
                            <View style={styles.subItemTrend}>
                                <Text style={[styles.subItemTrendNum, mStyles.mRedBg]}>-0.92%</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}