/**
 * 个人中心页
 */
import React, { Component } from 'react';
import {
    Button,
    Text,
    TextInput,
    View,
    StatusBar,
    ScrollView,
    Image,
    FlatList,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';
import Constant from '../../public/constant'
import Header from '../../components/Header/Header';

import mStyles from '../../public/common_style';
import styles from './User_Center_Style';

import userDefaultIcon from '../../static/imgs/user_default.png'; //用户默认头像
import arrowIcon from '../../static/imgs/arrow_gray.png'; //箭头图标

export default class FrenchAccount extends Component {
    constructor(props) {
        super(props);
    }

    //处理 返回按钮 释放事件
    handleGoBackRelease = evt => {
        this.props.navigation.goBack();
    }

    //处理 退出当前账户按钮 按压事件
    handleLogoutRelease = evt => {

    }

    handleCurSelectionRelease = evt => {

    }

    handleSecurityPress = evt => {
        
    }

    render() {
        return (
            <View style={[mStyles.mFlex1, styles.wrap]}>
                <Header
                    title='个人中心'
                    onGoBackRelease={evt => this.handleGoBackRelease(evt)}
                />
                <View>
                    {/* 用户信息开始 */}
                    <View style={[mStyles.mt10, styles.userWrap]}>
                        <View style={[mStyles.mCenterContent, styles.userCenterContent]}>
                            <Image
                                style={styles.userImg}
                                source={userDefaultIcon}
                            />
                            <Text style={styles.userName}>17922764886</Text>
                        </View>
                    </View>
                    {/* 用户信息结束 */}
                    {/* 点卡余额开始 */}
                    <View style={[mStyles.mt10, mStyles.mForm]}>
                        <View style={mStyles.mFormCenterContent}>
                            <View style={mStyles.mFormItem}>
                                <Text style={mStyles.mFormLabel}>点卡余额</Text>
                                <Text style={mStyles.mFormValueText}>0.0000 点</Text>
                            </View>
                        </View>
                    </View>
                    {/* 点卡余额结束 */}
                    {/* 安全中心、身份验证开始 */}
                    <View style={[mStyles.mt10, mStyles.mForm]}>
                        <View style={mStyles.mFormCenterContent}>
                            <TouchableHighlight
                                underlayColor={'#e8e8e8'}
                                onPress={evt => this.handleSecurityPress(evt)}
                            >
                                <View style={mStyles.mFormItem}>
                                    <Text style={mStyles.mFormLabel}>安全中心</Text>
                                    <View style={mStyles.mFormSelect}>
                                        <Text style={mStyles.mFormSelectText}></Text>
                                        <Image style={mStyles.mFormSelectIcon} source={arrowIcon}/>
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor={'#e8e8e8'}
                                onPress={evt => {}}
                            >
                                <View style={mStyles.mFormItem}>
                                    <Text style={mStyles.mFormLabel}>身份验证</Text>
                                    <View
                                        style={mStyles.mFormSelect}
                                    >
                                        <Text style={mStyles.mFormSelectText}></Text>
                                        <Image style={mStyles.mFormSelectIcon} source={arrowIcon}/>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                    {/* 安全中心、身份验证结束 */}
                    <View style={[mStyles.mt10, mStyles.mForm]}>
                        <View style={mStyles.mFormCenterContent}>
                            <TouchableHighlight
                                underlayColor={'#e8e8e8'}
                                onPress={evt => {}}
                            >
                                <View style={mStyles.mFormItem}>
                                    <Text style={mStyles.mFormLabel}>系统设置</Text>
                                    <View
                                        style={mStyles.mFormSelect}
                                    >
                                        <Text style={mStyles.mFormSelectText}></Text>
                                        <Image style={mStyles.mFormSelectIcon} source={arrowIcon}/>
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor={'#e8e8e8'}
                                onPress={evt => {}}
                            >
                                <View style={mStyles.mFormItem}>
                                    <Text style={mStyles.mFormLabel}>问题反馈</Text>
                                    <View
                                        style={mStyles.mFormSelect}
                                    >
                                        <Text style={mStyles.mFormSelectText}></Text>
                                        <Image style={mStyles.mFormSelectIcon} source={arrowIcon}/>
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor={'#e8e8e8'}
                                onPress={evt => {}}
                            >
                                <View style={mStyles.mFormItem}>
                                    <Text style={mStyles.mFormLabel}>帮助中心</Text>
                                    <View
                                        style={mStyles.mFormSelect}
                                    >
                                        <Text style={mStyles.mFormSelectText}></Text>
                                        <Image style={mStyles.mFormSelectIcon} source={arrowIcon}/>
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor={'#e8e8e8'}
                                onPress={evt => {}}
                            >
                                <View style={mStyles.mFormItem}>
                                    <Text style={mStyles.mFormLabel}>版本更新</Text>
                                    <View
                                        style={mStyles.mFormSelect}
                                    >
                                        <Text style={mStyles.mFormSelectText}></Text>
                                        <Image style={mStyles.mFormSelectIcon} source={arrowIcon}/>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={[mStyles.mt10, styles.logoutWrap]}>
                        <Text style={styles.logoutText}>退出当前账号</Text>
                    </View>
                </View>
            </View>
        );
    }
}