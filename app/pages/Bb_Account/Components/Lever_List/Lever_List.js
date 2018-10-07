/**
 * 币币账户页 杠杆列表组件
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
import styles from './Lever_List_Style';

export default class BbList extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <View style={styles.listWrap}>
                <View style={[mStyles.mCenterContent, styles.listCenterContent]}>
                    <View style={styles.listHead}>
                        <Text style={styles.listHeadText}>资产明细21</Text>
                    </View>
                    <View style={styles.listBody}>
                        {/* 循环开始 */}
                        <View style={styles.listBodyItem}>
                            <View style={styles.listBodyItemHead}>
                                <View style={styles.listBodyItemHeadCur}>
                                    <Text style={styles.listBodyItemHeadCurText}>BTC/USDT</Text>
                                </View>
                                <View style={styles.listBodyItemHeadExtra}>
                                    <View style={styles.listBodyItemHeadExtraItem}>
                                        <Text style={styles.listBodyItemHeadExtraKey}>爆仓价</Text>
                                        <Text style={styles.listBodyItemHeadExtraVal}>0.0000</Text>
                                    </View>
                                    <View style={styles.listBodyItemHeadExtraItem}>
                                        <Text style={styles.listBodyItemHeadExtraKey}>风险率</Text>
                                        <Text style={styles.listBodyItemHeadExtraVal}>21%</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.listBodyItemBody}>
                                <View style={styles.curTableHead}>
                                    <Text style={styles.curTableHeadText}>币种</Text>
                                    <Text style={[styles.curTableHeadText, mStyles.mTARight]}>可用</Text>
                                    <Text style={[styles.curTableHeadText, mStyles.mTARight]}>冻结</Text>
                                </View>
                                <View style={styles.curTableBody}>
                                    <View style={styles.curTableBodyItem}>
                                        <Text style={styles.curTableBodyItemText}>BTC</Text>
                                        <Text style={[styles.curTableBodyItemText, mStyles.mTARight]}>0.00000000</Text>
                                        <Text style={[styles.curTableBodyItemText, mStyles.mTARight]}>0.00000000</Text>
                                    </View>
                                    <View style={styles.curTableBodyItem}>
                                        <Text style={styles.curTableBodyItemText}>USDT</Text>
                                        <Text style={[styles.curTableBodyItemText, mStyles.mTARight]}>0.00000000</Text>
                                        <Text style={[styles.curTableBodyItemText, mStyles.mTARight]}>0.00000000</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {/* 循环结束 */}                    
                        <View style={styles.listBodyItem}>
                            <View style={styles.listBodyItemHead}>
                                <View style={styles.listBodyItemHeadCur}>
                                    <Text style={styles.listBodyItemHeadCurText}>BTC/USDT</Text>
                                </View>
                                <View style={styles.listBodyItemHeadExtra}>
                                    <View style={styles.listBodyItemHeadExtraItem}>
                                        <Text style={styles.listBodyItemHeadExtraKey}>爆仓价</Text>
                                        <Text style={styles.listBodyItemHeadExtraVal}>0.0000</Text>
                                    </View>
                                    <View style={styles.listBodyItemHeadExtraItem}>
                                        <Text style={styles.listBodyItemHeadExtraKey}>风险率</Text>
                                        <Text style={styles.listBodyItemHeadExtraVal}>21%</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.listBodyItemBody}>
                                <View style={styles.curTableHead}>
                                    <Text style={styles.curTableHeadText}>币种</Text>
                                    <Text style={[styles.curTableHeadText, mStyles.mTARight]}>可用</Text>
                                    <Text style={[styles.curTableHeadText, mStyles.mTARight]}>冻结</Text>
                                </View>
                                <View style={styles.curTableBody}>
                                    <View style={styles.curTableBodyItem}>
                                        <Text style={styles.curTableBodyItemText}>BTC</Text>
                                        <Text style={[styles.curTableBodyItemText, mStyles.mTARight]}>0.00000000</Text>
                                        <Text style={[styles.curTableBodyItemText, mStyles.mTARight]}>0.00000000</Text>
                                    </View>
                                    <View style={styles.curTableBodyItem}>
                                        <Text style={styles.curTableBodyItemText}>USDT</Text>
                                        <Text style={[styles.curTableBodyItemText, mStyles.mTARight]}>0.00000000</Text>
                                        <Text style={[styles.curTableBodyItemText, mStyles.mTARight]}>0.00000000</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.listBodyItem}>
                            <View style={styles.listBodyItemHead}>
                                <View style={styles.listBodyItemHeadCur}>
                                    <Text style={styles.listBodyItemHeadCurText}>BTC/USDT</Text>
                                </View>
                                <View style={styles.listBodyItemHeadExtra}>
                                    <View style={styles.listBodyItemHeadExtraItem}>
                                        <Text style={styles.listBodyItemHeadExtraKey}>爆仓价</Text>
                                        <Text style={styles.listBodyItemHeadExtraVal}>0.0000</Text>
                                    </View>
                                    <View style={styles.listBodyItemHeadExtraItem}>
                                        <Text style={styles.listBodyItemHeadExtraKey}>风险率</Text>
                                        <Text style={styles.listBodyItemHeadExtraVal}>21%</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.listBodyItemBody}>
                                <View style={styles.curTableHead}>
                                    <Text style={styles.curTableHeadText}>币种</Text>
                                    <Text style={[styles.curTableHeadText, mStyles.mTARight]}>可用</Text>
                                    <Text style={[styles.curTableHeadText, mStyles.mTARight]}>冻结</Text>
                                </View>
                                <View style={styles.curTableBody}>
                                    <View style={styles.curTableBodyItem}>
                                        <Text style={styles.curTableBodyItemText}>BTC</Text>
                                        <Text style={[styles.curTableBodyItemText, mStyles.mTARight]}>0.00000000</Text>
                                        <Text style={[styles.curTableBodyItemText, mStyles.mTARight]}>0.00000000</Text>
                                    </View>
                                    <View style={styles.curTableBodyItem}>
                                        <Text style={styles.curTableBodyItemText}>USDT</Text>
                                        <Text style={[styles.curTableBodyItemText, mStyles.mTARight]}>0.00000000</Text>
                                        <Text style={[styles.curTableBodyItemText, mStyles.mTARight]}>0.00000000</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.listBodyItem}>
                            <View style={styles.listBodyItemHead}>
                                <View style={styles.listBodyItemHeadCur}>
                                    <Text style={styles.listBodyItemHeadCurText}>BTC/USDT</Text>
                                </View>
                                <View style={styles.listBodyItemHeadExtra}>
                                    <View style={styles.listBodyItemHeadExtraItem}>
                                        <Text style={styles.listBodyItemHeadExtraKey}>爆仓价</Text>
                                        <Text style={styles.listBodyItemHeadExtraVal}>0.0000</Text>
                                    </View>
                                    <View style={styles.listBodyItemHeadExtraItem}>
                                        <Text style={styles.listBodyItemHeadExtraKey}>风险率</Text>
                                        <Text style={styles.listBodyItemHeadExtraVal}>21%</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.listBodyItemBody}>
                                <View style={styles.curTableHead}>
                                    <Text style={styles.curTableHeadText}>币种</Text>
                                    <Text style={[styles.curTableHeadText, mStyles.mTARight]}>可用</Text>
                                    <Text style={[styles.curTableHeadText, mStyles.mTARight]}>冻结</Text>
                                </View>
                                <View style={styles.curTableBody}>
                                    <View style={styles.curTableBodyItem}>
                                        <Text style={styles.curTableBodyItemText}>BTC</Text>
                                        <Text style={[styles.curTableBodyItemText, mStyles.mTARight]}>0.00000000</Text>
                                        <Text style={[styles.curTableBodyItemText, mStyles.mTARight]}>0.00000000</Text>
                                    </View>
                                    <View style={styles.curTableBodyItem}>
                                        <Text style={styles.curTableBodyItemText}>USDT</Text>
                                        <Text style={[styles.curTableBodyItemText, mStyles.mTARight]}>0.00000000</Text>
                                        <Text style={[styles.curTableBodyItemText, mStyles.mTARight]}>0.00000000</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}