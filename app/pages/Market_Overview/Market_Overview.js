/**
 * 市场总览页
 */
import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    StatusBar,
    ScrollView,
    Image,
    FlatList
} from 'react-native';
import Constant from '../../public/constant'
import Header from '../../components/Header/Header';

import mStyles from '../../public/common_style';
import styles from './Market_Overview_Style';

export default class Recharge extends Component {
    constructor(props) {
        super(props);
    }

    //处理 返回按钮 释放事件
    handleGoBackRelease = evt => {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={[mStyles.mFlex1, styles.wrap]}>
                <Header
                    title='市场总览'
                    onGoBackRelease={evt => this.handleGoBackRelease(evt)}
                />
                {/* 主体内容开始 */}
                <ScrollView
                    style={styles.mainContainer}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={[mStyles.mt10, styles.itemWrap]}>
                        <View style={[mStyles.mCenterContent, styles.itemCenterContent]}>
                            <View style={styles.itemTitle}>
                                <Text style={styles.itemTitleText}>总览</Text>
                            </View>
                            <View style={styles.itemTable}>
                                <View style={styles.itemTableRow}>
                                    <View style={styles.itemTableRowKey}>
                                        <Text style={styles.itemTableText}>总持仓量</Text>
                                    </View>
                                    <View style={styles.itemTableRowVal}>
                                        <Text style={styles.itemTableText}>99999张</Text>
                                    </View>
                                </View>
                                <View style={styles.itemTableRow}>
                                    <View style={styles.itemTableRowKey}>
                                        <Text style={styles.itemTableText}>24小时总成交量</Text>
                                    </View>
                                    <View style={styles.itemTableRowVal}>
                                        <Text style={styles.itemTableText}>5423张</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[mStyles.mt10, styles.itemWrap]}>
                        <View style={[mStyles.mCenterContent, styles.itemCenterContent]}>
                            <View style={styles.itemTitle}>
                                <Text style={styles.itemTitleText}>当周合约</Text>
                            </View>
                            <View style={styles.itemTable}>
                                <View style={styles.itemTableRow}>
                                    <View style={styles.itemTableRowKey}>
                                        <Text style={styles.itemTableText}>最新成交价</Text>
                                    </View>
                                    <View style={styles.itemTableRowVal}>
                                        <Text style={styles.itemTableText}>¥178.6</Text>
                                    </View>
                                </View>
                                <View style={styles.itemTableRow}>
                                    <View style={styles.itemTableRowKey}>
                                        <Text style={styles.itemTableText}>持仓量</Text>
                                    </View>
                                    <View style={styles.itemTableRowVal}>
                                        <Text style={styles.itemTableText}>2383张</Text>
                                    </View>
                                </View>
                                <View style={styles.itemTableRow}>
                                    <View style={styles.itemTableRowKey}>
                                        <Text style={styles.itemTableText}>24小时成交量</Text>
                                    </View>
                                    <View style={styles.itemTableRowVal}>
                                        <Text style={styles.itemTableText}>345张</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[mStyles.mt10, styles.itemWrap]}>
                        <View style={[mStyles.mCenterContent, styles.itemCenterContent]}>
                            <View style={styles.itemTitle}>
                                <Text style={styles.itemTitleText}>次周合约</Text>
                            </View>
                            <View style={styles.itemTable}>
                                <View style={styles.itemTableRow}>
                                    <View style={styles.itemTableRowKey}>
                                        <Text style={styles.itemTableText}>最新成交价</Text>
                                    </View>
                                    <View style={styles.itemTableRowVal}>
                                        <Text style={styles.itemTableText}>¥178.6</Text>
                                    </View>
                                </View>
                                <View style={styles.itemTableRow}>
                                    <View style={styles.itemTableRowKey}>
                                        <Text style={styles.itemTableText}>持仓量</Text>
                                    </View>
                                    <View style={styles.itemTableRowVal}>
                                        <Text style={styles.itemTableText}>2383张</Text>
                                    </View>
                                </View>
                                <View style={styles.itemTableRow}>
                                    <View style={styles.itemTableRowKey}>
                                        <Text style={styles.itemTableText}>24小时成交量</Text>
                                    </View>
                                    <View style={styles.itemTableRowVal}>
                                        <Text style={styles.itemTableText}>345张</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[mStyles.mt10, styles.itemWrap]}>
                        <View style={[mStyles.mCenterContent, styles.itemCenterContent]}>
                            <View style={styles.itemTitle}>
                                <Text style={styles.itemTitleText}>季合约</Text>
                            </View>
                            <View style={styles.itemTable}>
                                <View style={styles.itemTableRow}>
                                    <View style={styles.itemTableRowKey}>
                                        <Text style={styles.itemTableText}>最新成交价</Text>
                                    </View>
                                    <View style={styles.itemTableRowVal}>
                                        <Text style={styles.itemTableText}>¥178.6</Text>
                                    </View>
                                </View>
                                <View style={styles.itemTableRow}>
                                    <View style={styles.itemTableRowKey}>
                                        <Text style={styles.itemTableText}>持仓量</Text>
                                    </View>
                                    <View style={styles.itemTableRowVal}>
                                        <Text style={styles.itemTableText}>2383张</Text>
                                    </View>
                                </View>
                                <View style={styles.itemTableRow}>
                                    <View style={styles.itemTableRowKey}>
                                        <Text style={styles.itemTableText}>24小时成交量</Text>
                                    </View>
                                    <View style={styles.itemTableRowVal}>
                                        <Text style={styles.itemTableText}>345张</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                {/* 主体内容结束 */}
            </View>
        );
    }
}