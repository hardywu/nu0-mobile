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
import ASInput from '../../../../components/AS_Input/AS_Input';
import PercentBar from '../../../../components/Percent_Bar/Percent_Bar';
import ArcBtn from '../../../../components/Arc_Btn/Arc_Btn';

import mStyles from '../../../../public/common_style';
import styles from './Form_Style';

import arrowIcon from '../../../../static/imgs/arrow_gray.png'; //菜单按钮

export default class Form extends Component {
    render() {
        return (
            <View style={styles.form}>
                {/* 买入/卖出按钮开始 */}
                <View style={styles.formTypeBtn}>
                    <Text style={[styles.formTypeBtnText, mStyles.mGreenBg]}>买入</Text>
                    <Text style={[styles.formTypeBtnText, mStyles.mRedColor]}>买出</Text>
                </View>
                {/* 买入/卖出按钮结束 */}
                {/* 下拉框开始 */}
                <View style={[styles.formSelect, styles.mt12]}>
                    <View style={styles.formSelectMain}>
                        <Text style={styles.formSelectResult}>限时买入</Text>
                        <Image style={styles.formSelectResultArrow} source={arrowIcon}></Image>
                    </View>
                </View>
                {/* 下拉框结束 */}
                {/* 输入框1开始 */}
                <View style={styles.mt12}>
                    <ASInput />
                </View>
                {/* 输入框1结束 */}
                {/* 估值开始 */}
                <View style={[styles.formValuation, styles.mt12]}>
                    <Text style={styles.formValuationText}>估值 $123123.3232</Text>
                </View>
                {/* 估值结束 */}
                {/* 输入框1开始 */}
                <View style={styles.mt12}>
                    <ASInput />
                </View>
                {/* 输入框1结束 */}
                {/* 百分比bar开始 */}
                <View style={styles.mt12}>
                    <PercentBar />
                </View>
                {/* 百分比bar结束 */}
                {/* 可用开始 */}
                <View style={styles.mt12}>
                    <View style={styles.formAbleWrap}>
                        <Text style={styles.formAbleName}>可用</Text>
                        <Text style={styles.formAbleVal}>123123213</Text>
                    </View>
                </View>
                {/* 可用结束 */}
                {/* 可买/卖开始 */}
                <View style={styles.mt12}>
                    <View style={styles.formAbleWrap}>
                        <Text style={styles.formAbleName}>可买</Text>
                        <Text style={styles.formAbleVal}>123123213</Text>
                    </View>
                </View>
                {/* 可买/卖结束 */}
                {/* 按钮开始 */}
                <View style={styles.mt12}>
                    <ArcBtn />
                </View>
                {/* 百分比bar结束 */}
            </View>
        );
    }
}