/**
 * 安全中心页
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
    TouchableHighlight,
    Switch
} from 'react-native';
import Constant from '../../public/constant'
import Header from '../../components/Header/Header';

import mStyles from '../../public/common_style';
import styles from './Security_Center_Style';

import userDefaultIcon from '../../static/imgs/user_default.png'; //用户默认头像
import arrowIcon from '../../static/imgs/arrow_gray.png'; //箭头图标

export default class SecurityCenter extends Component {
    constructor(props) {
        super(props);
    }

    //处理 返回按钮 释放事件
    handleGoBackRelease = evt => {
        this.props.navigation.goBack();
    }

    //处理 绑定邮箱 按压事件
    handleEmailPress = evt => {
        this.props.navigation.navigate('BindEmail'); //跳转到绑定邮箱页
    }

    //处理 资金密码 按压事件
    handleCapitalPwdPress = evt => {
        this.props.navigation.navigate('CapitalPwd'); //跳转设置资金密码页
    }

    render() {
        return (
            <View style={[mStyles.mFlex1, styles.wrap]}>
                <Header
                    title='安全中心'
                    onGoBackRelease={evt => this.handleGoBackRelease(evt)}
                />
                <View>
                    {/* 绑定手机、邮箱开始 */}
                    <View style={[mStyles.mt10, mStyles.mForm]}>
                        <View style={mStyles.mFormCenterContent}>
                            <View style={mStyles.mFormItem}>
                                <Text style={mStyles.mFormLabel}>绑定手机</Text>
                                <Text style={mStyles.mFormValueText}>已绑定</Text>
                            </View>
                            <TouchableHighlight
                                underlayColor={'#e8e8e8'}
                                onPress={evt => this.handleEmailPress(evt)}
                            >
                                <View style={mStyles.mFormItem}>
                                    <Text style={mStyles.mFormLabel}>绑定邮箱</Text>
                                    <View style={mStyles.mFormSelect}>
                                        <Text style={mStyles.mFormSelectText}></Text>
                                        <Image style={mStyles.mFormSelectIcon} source={arrowIcon}/>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                    {/* 绑定手机、邮箱结束 */}
                    {/* 资金密码开始 */}
                    <View style={[mStyles.mt10, mStyles.mForm]}>
                        <View style={mStyles.mFormCenterContent}>
                            <TouchableHighlight
                                underlayColor={'#e8e8e8'}
                                onPress={evt => this.handleCapitalPwdPress(evt)}
                            >
                                <View style={mStyles.mFormItem}>
                                    <Text style={mStyles.mFormLabel}>资金密码</Text>
                                    <View style={mStyles.mFormSelect}>
                                        <Text style={mStyles.mFormSelectText}></Text>
                                        <Image style={mStyles.mFormSelectIcon} source={arrowIcon}/>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                    {/* 资金密码开始 */}
                </View>
            </View>
        );
    }
}