/**
 * 合约账户页 列表组件
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
    Picker
} from 'react-native';

import mStyles from '../../../../public/common_style';
import styles from './List_Style';

export default class List extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <View style={styles.listWrap}>
                <View style={styles.listItem}>
                    <View style={[mStyles.mCenterContent, styles.listItemCenterContent]}>
                        <View style={styles.listItemHead}>
                            <Text style={styles.listItemHeadText}>BTC账户权益</Text>
                            <Text style={styles.listItemHeadText}>0.0000BTC</Text>
                        </View>
                        <View style={styles.listItemBody}>
                            <View style={styles.listItemBodyEle}>
                                <Text style={styles.listItemBodyEleTitle}>已实现盈亏</Text>
                                <Text style={styles.listItemBodyEleVal}>0.0000</Text>
                            </View>
                            <View style={styles.listItemBodyEle}>
                                <Text style={styles.listItemBodyEleTitle}>未实现盈亏</Text>
                                <Text style={styles.listItemBodyEleVal}>0.0000</Text>
                            </View>
                            <View style={styles.listItemBodyEle}>
                                <Text style={styles.listItemBodyEleTitle}>可用保证金</Text>
                                <Text style={styles.listItemBodyEleVal}>0.0000</Text>
                            </View>
                            <View style={styles.listItemBodyEle}>
                                <Text style={styles.listItemBodyEleTitle}>冻结保证金</Text>
                                <Text style={styles.listItemBodyEleVal}>0.0000</Text>
                            </View>
                            <View style={styles.listItemBodyEle}>
                                <Text style={styles.listItemBodyEleTitle}>已用保证金</Text>
                                <Text style={styles.listItemBodyEleVal}>0</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.listItem}>
                    <View style={[mStyles.mCenterContent, styles.listItemCenterContent]}>
                        <View style={styles.listItemHead}>
                            <Text style={styles.listItemHeadText}>BTC账户权益</Text>
                            <Text style={styles.listItemHeadText}>0.0000BTC</Text>
                        </View>
                        <View style={styles.listItemBody}>
                            <View style={styles.listItemBodyEle}>
                                <Text style={styles.listItemBodyEleTitle}>已实现盈亏</Text>
                                <Text style={styles.listItemBodyEleVal}>0.0000</Text>
                            </View>
                            <View style={styles.listItemBodyEle}>
                                <Text style={styles.listItemBodyEleTitle}>未实现盈亏</Text>
                                <Text style={styles.listItemBodyEleVal}>0.0000</Text>
                            </View>
                            <View style={styles.listItemBodyEle}>
                                <Text style={styles.listItemBodyEleTitle}>可用保证金</Text>
                                <Text style={styles.listItemBodyEleVal}>0.0000</Text>
                            </View>
                            <View style={styles.listItemBodyEle}>
                                <Text style={styles.listItemBodyEleTitle}>冻结保证金</Text>
                                <Text style={styles.listItemBodyEleVal}>0.0000</Text>
                            </View>
                            <View style={styles.listItemBodyEle}>
                                <Text style={styles.listItemBodyEleTitle}>已用保证金</Text>
                                <Text style={styles.listItemBodyEleVal}>0</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.listItem}>
                    <View style={[mStyles.mCenterContent, styles.listItemCenterContent]}>
                        <View style={styles.listItemHead}>
                            <Text style={styles.listItemHeadText}>BTC账户权益</Text>
                            <Text style={styles.listItemHeadText}>0.0000BTC</Text>
                        </View>
                        <View style={styles.listItemBody}>
                            <View style={styles.listItemBodyEle}>
                                <Text style={styles.listItemBodyEleTitle}>已实现盈亏</Text>
                                <Text style={styles.listItemBodyEleVal}>0.0000</Text>
                            </View>
                            <View style={styles.listItemBodyEle}>
                                <Text style={styles.listItemBodyEleTitle}>未实现盈亏</Text>
                                <Text style={styles.listItemBodyEleVal}>0.0000</Text>
                            </View>
                            <View style={styles.listItemBodyEle}>
                                <Text style={styles.listItemBodyEleTitle}>可用保证金</Text>
                                <Text style={styles.listItemBodyEleVal}>0.0000</Text>
                            </View>
                            <View style={styles.listItemBodyEle}>
                                <Text style={styles.listItemBodyEleTitle}>冻结保证金</Text>
                                <Text style={styles.listItemBodyEleVal}>0.0000</Text>
                            </View>
                            <View style={styles.listItemBodyEle}>
                                <Text style={styles.listItemBodyEleTitle}>已用保证金</Text>
                                <Text style={styles.listItemBodyEleVal}>0</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.listItem}>
                    <View style={[mStyles.mCenterContent, styles.listItemCenterContent]}>
                        <View style={styles.listItemHead}>
                            <Text style={styles.listItemHeadText}>BTC账户权益</Text>
                            <Text style={styles.listItemHeadText}>0.0000BTC</Text>
                        </View>
                        <View style={styles.listItemBody}>
                            <View style={styles.listItemBodyEle}>
                                <Text style={styles.listItemBodyEleTitle}>已实现盈亏</Text>
                                <Text style={styles.listItemBodyEleVal}>0.0000</Text>
                            </View>
                            <View style={styles.listItemBodyEle}>
                                <Text style={styles.listItemBodyEleTitle}>未实现盈亏</Text>
                                <Text style={styles.listItemBodyEleVal}>0.0000</Text>
                            </View>
                            <View style={styles.listItemBodyEle}>
                                <Text style={styles.listItemBodyEleTitle}>可用保证金</Text>
                                <Text style={styles.listItemBodyEleVal}>0.0000</Text>
                            </View>
                            <View style={styles.listItemBodyEle}>
                                <Text style={styles.listItemBodyEleTitle}>冻结保证金</Text>
                                <Text style={styles.listItemBodyEleVal}>0.0000</Text>
                            </View>
                            <View style={styles.listItemBodyEle}>
                                <Text style={styles.listItemBodyEleTitle}>已用保证金</Text>
                                <Text style={styles.listItemBodyEleVal}>0</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}