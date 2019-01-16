/**
 * 币币页 表单组件
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
import Anim from '../../../../public/animation'
import ASInput from '../../../../components/AS_Input/AS_Input';
import PercentBar from '../../../../components/Percent_Bar/Percent_Bar';
import ArcBtn from '../../../../components/Arc_Btn/Arc_Btn';

import mStyles from '../../../../public/common_style';
import styles from './List_Style';

import arrowIcon from '../../../../static/imgs/arrow_gray.png'; //箭头图标

export default class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            data,
            setData
        } = this.props;
        let asksDOM = [];
        let bidsDOM = [];
        if(data.asks.length !== 0) {
            for(let i = 0; i < data.asks.length; i++) {
                if(i > 3) {
                    break;
                } else {
                    asksDOM.push(
                        <View style={[styles.listBodyItem, styles.separate]} key={i}>
                            <Text style={[styles.listBodyItemVal, styles.listBodyItemValLeft, mStyles.mRedColor]}>{data.asks[i][0]}</Text>
                            <Text style={[styles.listBodyItemVal, styles.listBodyItemValRight]}>{data.asks[i][1]}</Text>
                        </View>
                    );
                }
            }
        }
        if(data.bids.length !== 0) {
            for(let i = 0; i < data.bids.length; i++) {
                if(i > 3) {
                    break;
                } else {
                    bidsDOM.push(
                        <View style={[styles.listBodyItem, styles.separate]} key={i}>
                            <Text style={[styles.listBodyItemVal, styles.listBodyItemValLeft, mStyles.mGreenColor]}>{data.bids[i][0]}</Text>
                            <Text style={[styles.listBodyItemVal, styles.listBodyItemValRight]}>{data.bids[i][1]}</Text>
                        </View>
                    );
                }
            }
        }

        return (
            <View style={styles.listWrap}>
                {/* 列表开始 */}
                <View style={styles.list}>
                    <View style={[styles.listHead, styles.separate, styles.mt8, styles.mb8]}>
                        <Text style={styles.listHeadItem}>价格(USTD)</Text>
                        <Text style={styles.listHeadItem}>数量(BTC)</Text>
                    </View>
                    <View style={styles.listBody}>
                        {/* 列表循环体开始 */}
                        {/* <View style={[styles.listBodyItem, styles.separate]}>
                            <Text style={[styles.listBodyItemVal, styles.listBodyItemValLeft, mStyles.mRedColor]}>21332</Text>
                            <Text style={[styles.listBodyItemVal, styles.listBodyItemValRight]}>0.231</Text>
                        </View> */}
                        {asksDOM}
                        {/* 列表循环体结束 */}
                        {/* 分割线开始 */}
                        <View style={[styles.listBodyLine, styles.mb8]}></View>
                        {/* 分割线结束 */}
                        {/* 列表循环体开始 */}
                        {/* <View style={[styles.listBodyItem, styles.separate]}>
                            <Text style={[styles.listBodyItemVal, styles.listBodyItemValLeft, mStyles.mGreenColor]}>21332.341</Text>
                            <Text style={[styles.listBodyItemVal, styles.listBodyItemValRight]}>0.231</Text>
                        </View> */}
                        {bidsDOM}
                        {/* 列表循环体结束 */}
                    </View>
                </View>
                {/* 列表结束 */}
            </View>
        );
    }
}