/**
 * 资金划转页
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
import Header from '../../components/Header/Header';
import ArcBtn from '../../components/Arc_Btn/Arc_Btn';
import ModalSelect from '../../components/Modal_Select/Modal_Select';

import mStyles from '../../public/common_style';
import styles from './Capital_Transfer_Style';

import capitalTransferIcon from '../../static/imgs/capital_transfer.png'; //资金转换图标
import arrowIcon from '../../static/imgs/arrow_gray.png'; //箭头图标

export default class CapitalTransfer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transferType: 0, //转换类型 0:钱包->账户 1:账户->钱包
            accountSelect: {
                isShow: false,
                value: {
                    code: 0,
                    name: '合约账户'
                },
                selectOptions: [
                    {
                        code: 0,
                        name: '合约账户'
                    }, {
                        code: 1,
                        name: '法币账户'
                    }, {
                        code: 2,
                        name: '币币杠杆账户'
                    }, {
                        code: 3,
                        name: '币币账户'
                    }
                ]
            } //账户选择框数据
        }
    }

    //处理 返回按钮 释放事件
    handleGoBackRelease = evt => {
        this.props.navigation.goBack();
    }

    //处理 转换类型按钮 释放事件
    handleTransferRelease = evt => {
        let { transferType } = this.state;
        transferType++;
        if(transferType > 1) {
            transferType = 0;
        }
        this.setState({ transferType: transferType });
    }

    handleNextRelease = evt => {
        alert('确定划转')
    }

    //处理 账户类型下拉框选项栏 释放事件
    handleAccountSelectOptionsRelease = (evt, obj) => {
        let { accountSelect } = this.state;
        accountSelect.isShow = false;
        accountSelect.value = obj;
        this.setState({ accountSelect: accountSelect });
    }

    //处理 账户类型下拉框结果栏 释放事件
    handleAccountSelectValRelease = evt => {
        let { accountSelect } = this.state;
        accountSelect.isShow = true;
        this.setState({ accountSelect: accountSelect });
    }

    //处理 账户类型下拉框modal层 释放事件
    handleAccountSelectModalWrapRelease = evt => {
        let { accountSelect } = this.state;
        accountSelect.isShow = false;
        this.setState({ accountSelect: accountSelect });
    }

    //处理 币种选择 释放事件
    handleCurSelectionRelease = evt => {
        this.props.navigation.navigate('CurSelection')
    }

    render() {
        console.log(this.props.navigation)
        let {
            transferType,
            accountSelect
        } = this.state;
        //我的钱包DOM
        let myWalletDOM = (
            <View style={[mStyles.mFlex1, styles.ctWrapItem]}>
                <Text style={styles.ctWrapItemText}>我的钱包</Text>
            </View>
        );
        //账户DOM
        let accountDOM = (
            <View
                style={[mStyles.mFlex1, styles.ctWrapItem]}
                onStartShouldSetResponder={() => true}
                onResponderRelease={evt => this.handleAccountSelectValRelease(evt)}
            >
                <Text style={styles.ctWrapItemText}>{accountSelect.value.name}</Text>
                <Image style={styles.ctWrapSelectIcon} source={arrowIcon}/>
            </View>
        );
        return (
            <View style={[mStyles.mFlex1, styles.wrap]}>
                <Header
                    title='资金划转'
                    onGoBackRelease={evt => this.handleGoBackRelease(evt)}
                />
                <View style={[mStyles.mt10, styles.ctWrap]}>
                    <View style={[mStyles.mCenterContent, styles.ctWrapCenterContent]}>
                        {transferType === 0 ? myWalletDOM : accountDOM}
                        <View
                            style={styles.ctWrapItem}
                            onStartShouldSetResponder={() => true}
                            onResponderRelease={evt => this.handleTransferRelease(evt)}
                        >
                            <Image  style={styles.ctIcon} source={capitalTransferIcon}/>
                        </View>
                        {transferType === 0 ? accountDOM : myWalletDOM}
                    </View>
                </View>
                <View style={mStyles.mt10}>
                    <View style={mStyles.mForm}>
                        <View style={mStyles.mFormCenterContent}>
                            <View style={[mStyles.mFormItem, accountSelect.value.code === 2 ? mStyles.mFlex : mStyles.mHide]}>
                                <Text style={mStyles.mFormLabel}>币对选择</Text>
                                <View style={mStyles.mFormSelect}>
                                    <Text style={mStyles.mFormSelectText}>BTC/USDT</Text>
                                    <Image style={mStyles.mFormSelectIcon} source={arrowIcon}/>
                                </View>
                            </View>
                            <View style={mStyles.mFormItem}>
                                <Text style={mStyles.mFormLabel}>币种选择</Text>
                                <View
                                    style={mStyles.mFormSelect}
                                    onStartShouldSetResponder={() => true}
                                    onResponderRelease={evt => this.handleCurSelectionRelease(evt)}
                                >
                                    <Text style={mStyles.mFormSelectText}>BTC</Text>
                                    <Image style={mStyles.mFormSelectIcon} source={arrowIcon}/>
                                </View>
                            </View>
                            <View style={mStyles.mFormItem}>
                                <Text style={mStyles.mFormLabel}>转入数量</Text>
                                <TextInput
                                    style={mStyles.mFormInput}
                                    placeholder='转入数量'
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                        </View>
                    </View>
                    <View style={mStyles.mt10}>
                        <View style={mStyles.mCenterContent}>
                            <Text style={styles.formNotice}>最多可转0BTC</Text>
                        </View>
                    </View>
                    <View style={[mStyles.mt10, mStyles.mFormCenterContent]}>
                        <ArcBtn
                            text='确定划转'
                            color='#fff'
                            backgroundColor={Constant.ACTIVE_COLOR}
                            onRelease={evt => this.handleNextRelease(evt)}
                        />
                    </View>
                </View>
                <ModalSelect 
                    options={accountSelect}
                    onOptionsRelease={(evt, obj) => this.handleAccountSelectOptionsRelease(evt, obj)}
                    onModalWrapRelease={evt => this.handleAccountSelectModalWrapRelease(evt)}
                />
            </View>
        );
    }
}