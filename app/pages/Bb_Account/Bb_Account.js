/**
 * 币币账户页
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
import Constant from '../../public/constant';
import AccountCard from '../../components/Account_Card/Account_Card';
import BbList from './Components/Bb_List/Bb_List';
import LeverList from './Components/Lever_List/Lever_List';
import EmptyTopBar from '../../components/Empty_Top_Bar/Empty_Top_Bar';
import EmptyBottomBar from '../../components/Empty_Bottom_Bar/Empty_Bottom_Bar';

import mStyles from '../../public/common_style';
import styles from './Bb_Account_Style';

import goBackIcon from '../../static/imgs/go_back.png'; //后退按钮
import rechargeIcon from '../../static/imgs/recharge.png'; //充值图标
import withdrawMoneyIcon from '../../static/imgs/withdraw_money.png'; //提现图标
import fundsTransferIcon from '../../static/imgs/funds_transfer.png'; //资金划转图标
import fundsRecordIcon from '../../static/imgs/funds_record.png'; //资金记录图标
import borrowIcon from '../../static/imgs/borrow.png'; //借币图标

export default class BbAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //头部tab
            headerTab: [
                {
                    code: 0,
                    name: '币币账户',
                    isActive: true
                }, {
                    code: 1,
                    name: '杠杆账户',
                    isActive: false
                }
            ]
        }
    }

    //处理 返回按钮 释放事件
    handleGoBackRelease = evt => {
        this.props.navigation.goBack();
    }

    //处理 头部tab选项 释放事件
    handleHeaderTabRelease = (evt, index) => {
        let { headerTab } = this.state;
        for(let i = 0; i < headerTab.length; i++) {
            if(index === i) {
                headerTab[i].isActive = true;
            } else {
                headerTab[i].isActive = false;
            }
        }
        this.setState({ headerTab: headerTab });
    }

    //处理 币币-资金划转按钮 释放事件
    handleBbCapitalTransferRelease = evt => {
        this.props.navigation.navigate('CapitalTransfer');
    }

    //处理 币币-币币账单按钮 释放事件
    handleBbBillRelease = evt => {
        this.props.navigation.navigate('BbBillSelection');
    }

    //处理 杠杆-资金划转 释放事件
    handleLeverCapitalTransferRelease = evt => {
        this.props.navigation.navigate('CapitalTransfer');
    }

    //处理 杠杆-杠杠账单按钮 释放事件
    handleLeverBillRelease = evt => {
        this.props.navigation.navigate('LeverBill');
    }
    
    render() {
        let { headerTab } = this.state;
        let headerTabActiveIndex = null;
        let headerTabDOM = headerTab.map((item, index) => {
            if(item.isActive) {
                headerTabActiveIndex = index;
            }
            return (
                <View 
                    style={[
                        styles.headTabItem,
                        item.isActive ? mStyles.mBlueBorderBottom : ''
                    ]}
                    key={index}
                    onStartShouldSetResponder={() => true}
                    onResponderRelease={evt => this.handleHeaderTabRelease(evt, index)}
                >
                    <Text style={[
                        styles.headTabItemName,
                        item.isActive ? mStyles.mBlueColor : ''
                    ]}>
                        {item.name}
                    </Text>
                </View>
            )
        });
        return (
            <View style={[mStyles.mFlex1, mStyles.mBackgroundColor]}>
                <EmptyTopBar backgroundColor='#fff'/>
                {/* 头部开始 */}
                <View style={styles.header}>
                    <View style={[styles.headerCenterContent, mStyles.mCenterContent]}>
                        <Image
                            style={styles.goBackIcon}
                            source={goBackIcon}
                            onStartShouldSetResponder={() => true}
                            onResponderRelease={evt => this.handleGoBackRelease(evt)}
                        />
                        <View style={styles.headTabWrap}>
                            {headerTabDOM}
                            {/* <View style={styles.headTabItem}>
                                <Text style={styles.headTabItemName}>颠三倒四</Text>
                            </View> */}
                        </View>
                    </View>
                </View>
                {/* 头部结束 */}
                {/* 主体内容开始 */}
                <View style={mStyles.mFlex1}>
                    <ScrollView
                        style={headerTabActiveIndex === 0 ? mStyles.mFlex : mStyles.mHide}
                        showsVerticalScrollIndicator={false}
                    >
                        {/* 资产开始 */}
                        <View style={styles.assetsWrap}>
                            <View style={mStyles.mCenterContent}>
                                <AccountCard
                                    title='钱包资产估值'
                                    originalVal='0.09992222'
                                    exchangeVal='1.22'
                                    color='#fff'
                                    backgroundColor={Constant.BLUE_COLOR}
                                />
                                <View style={styles.assetsOperation}>
                                    <View
                                        style={styles.assetsOperationItem}
                                        onStartShouldSetResponder={() => true}
                                        onResponderRelease={evt => this.handleBbCapitalTransferRelease(evt)}
                                    >
                                        <Image style={styles.assetsOperationItemIcon} source={fundsTransferIcon}/>
                                        <Text style={styles.assetsOperationItemText}>资金划转</Text>
                                    </View>
                                    <View
                                        style={styles.assetsOperationItem}
                                        onStartShouldSetResponder={() => true}
                                        onResponderRelease={evt => this.handleBbBillRelease(evt)}
                                    >
                                        <Image style={styles.assetsOperationItemIcon} source={fundsRecordIcon}/>
                                        <Text style={styles.assetsOperationItemText}>币币账单</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {/* 资产结束 */}
                        {/* 列表开始 */}
                        <View style={styles.listWrap}>
                            <BbList />
                        </View>
                        {/* 列表结束 */}
                    </ScrollView>
                    <ScrollView
                        style={headerTabActiveIndex === 1 ? mStyles.mFlex : mStyles.mHide}
                        showsVerticalScrollIndicator={false}
                    >
                        {/* 资产开始 */}
                        <View style={styles.assetsWrap}>
                            <View style={mStyles.mCenterContent}>
                                <AccountCard
                                    title='钱包资产估值'
                                    originalVal='0.09992222'
                                    exchangeVal='1.22'
                                    color='#fff'
                                    backgroundColor={Constant.BLUE_COLOR}
                                />
                                <View style={styles.assetsOperation}>
                                    <View style={styles.assetsOperationItem}>
                                        <Image style={styles.assetsOperationItemIcon} source={borrowIcon}/>
                                        <Text style={styles.assetsOperationItemText}>借币</Text>
                                    </View>
                                    <View
                                        style={styles.assetsOperationItem}
                                        onStartShouldSetResponder={() => true}
                                        onResponderRelease={evt => this.handleLeverCapitalTransferRelease(evt)}
                                    >
                                        <Image style={styles.assetsOperationItemIcon} source={fundsTransferIcon}/>
                                        <Text style={styles.assetsOperationItemText}>资金划转</Text>
                                    </View>
                                    <View
                                        style={styles.assetsOperationItem}
                                        onStartShouldSetResponder={() => true}
                                        onResponderRelease={evt => this.handleLeverBillRelease(evt)}
                                    >
                                        <Image style={styles.assetsOperationItemIcon} source={fundsRecordIcon}/>
                                        <Text style={styles.assetsOperationItemText}>杠杆账单</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {/* 资产结束 */}
                        {/* 列表开始 */}
                        <View style={styles.listWrap}>
                            <LeverList />
                        </View>
                        {/* 列表结束 */}
                    </ScrollView>
                </View>
                {/* 主体内容结束 */}
                <EmptyBottomBar backgroundColor={Constant.M_BACKGROUND_COLOR}/>
            </View>
        );
    }
}