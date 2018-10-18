/**
 * 合约账户页
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
import Header from '../../components/Header/Header';
import AccountCard from '../../components/Account_Card/Account_Card';
import List from './Components/List/List';

import mStyles from '../../public/common_style';
import styles from './Contract_Account_Style';

import deliveryIcon from '../../static/imgs/delivery.png'; //交割记录图标
import withdrawMoneyIcon from '../../static/imgs/withdraw_money.png'; //提现图标
import fundsTransferIcon from '../../static/imgs/funds_transfer.png'; //资金划转图标
import fundsRecordIcon from '../../static/imgs/funds_record.png'; //资金记录图标

export default class ContractAccount extends Component {
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
                    title='合约账户'
                    onGoBackRelease={evt => this.handleGoBackRelease(evt)}
                />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    {/* 资产开始 */}
                    <View style={styles.assetsWrap}>
                        <View style={mStyles.mCenterContent}>
                            <AccountCard
                                title='合约资产估值'
                                originalVal='0.09992222'
                                exchangeVal='1.22'
                                color='#fff'
                                backgroundColor='#7e6fec'
                            />
                            <View style={styles.assetsOperation}>
                                <View style={styles.assetsOperationItem}>
                                    <Image style={styles.assetsOperationItemIcon} source={fundsTransferIcon}/>
                                    <Text style={styles.assetsOperationItemText}>资金划转</Text>
                                </View>
                                <View style={styles.assetsOperationItem}>
                                    <Image style={styles.assetsOperationItemIcon} source={deliveryIcon}/>
                                    <Text style={styles.assetsOperationItemText}>交割记录</Text>
                                </View>
                                <View style={styles.assetsOperationItem}>
                                    <Image style={styles.assetsOperationItemIcon} source={fundsRecordIcon}/>
                                    <Text style={styles.assetsOperationItemText}>合约账单</Text>
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