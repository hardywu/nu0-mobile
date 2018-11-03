/**
 * 汇率概览页
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
import EmptyTopBar from '../../components/Empty_Top_Bar/Empty_Top_Bar';
import EmptyBottomBar from '../../components/Empty_Bottom_Bar/Empty_Bottom_Bar';

import mStyles from '../../public/common_style';
import styles from './Exchange_Rate_Survey_Style';

import americaIcon from '../../static/imgs/country/america.png'; //美国图标
import chinaIcon from '../../static/imgs/country/china.png'; //中国图标

export default class ExchangeRateSurvey extends Component {
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
                <EmptyTopBar backgroundColor='#fff'/>
                <Header
                    title='汇率概览'
                    onGoBackRelease={evt => this.handleGoBackRelease(evt)}
                />
                {/* 主体内容开始 */}
                <View style={styles.mainContainer}>
                    <View style={mStyles.mCenterContent}>
                        <View style={styles.exchangeRateWrap}>
                            <Image style={styles.countryIcon} source={americaIcon}/>
                            <Text style={styles.exchangeRateText}> $1 ≈ ¥6.8840 </Text>
                            <Image style={styles.countryIcon} source={chinaIcon}/>
                        </View>
                    </View>
                </View>
                {/* 主体内容结束 */}
                <EmptyBottomBar backgroundColor={Constant.M_BACKGROUND_COLOR}/>
            </View>
        );
    }
}