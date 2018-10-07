/**
 * 法币账户页
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
import AccountCard from '../../components/Account_Card/Account_Card';
import List from './Components/List/List';

import mStyles from '../../public/common_style';
import styles from './French_Account_Style';

import fundsTransferIcon from '../../static/imgs/funds_transfer.png'; //资金划转图标
import paymentSettingIcon from '../../static/imgs/payment_setting.png'; //收付款设置图标

export default class FrenchAccount extends Component {
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
                    title='法币账户'
                    onGoBackRelease={evt => this.handleGoBackRelease(evt)}
                />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    {/* 资产开始 */}
                    <View style={styles.assetsWrap}>
                        <View style={mStyles.mCenterContent}>
                            <AccountCard
                                title='法币资产估值'
                                originalVal='0.09992222'
                                exchangeVal='1.22'
                                color='#fff'
                                backgroundColor={Constant.GREEN_COLOR}
                            />
                            <View style={styles.assetsOperation}>
                                <View style={styles.assetsOperationItem}>
                                    <Image style={styles.assetsOperationItemIcon} source={paymentSettingIcon}/>
                                    <Text style={styles.assetsOperationItemText}>收付款设置</Text>
                                </View>
                                <View style={styles.assetsOperationItem}>
                                    <Image style={styles.assetsOperationItemIcon} source={fundsTransferIcon}/>
                                    <Text style={styles.assetsOperationItemText}>资金划转</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* 资产结束 */}
                    {/* 列表开始 */}
                    <View style={styles.listWrap}>
                        <List />
                    </View>
                    {/* 列表结束 */}
                </ScrollView>
            </View>
        );
    }
}