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
import Contract from '../../public/constant'
import Header from '../../components/Header/Header';
import AccountCard from '../../components/Account_Card/Account_Card';

import mStyles from '../../public/common_style';
import styles from './Forget_Password_Style';

import vfCodeIcon from '../../static/imgs/vf_code.png'; //本地验证码图标

export default class ForgetPassword extends Component {
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
                    title='找回登录密码'
                    onGoBackRelease={evt => this.handleGoBackRelease(evt)}
                />
                <View style={mStyles.mt10}>
                    <View style={mStyles.mForm}>
                        <View style={mStyles.mFormCenterContent}>
                            <View style={mStyles.mFormItem}>
                                <Text style={mStyles.mFormLabel}>账户名</Text>
                                <TextInput
                                    style={mStyles.mFormInput}
                                    placeholder='邮箱/手机号'
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                            <View style={mStyles.mFormItem}>
                                <Text style={mStyles.mFormLabel}>验证码</Text>
                                <TextInput
                                    style={mStyles.mFormInput}
                                    placeholder='验证码'
                                    underlineColorAndroid='transparent'
                                />
                                <Image style={mStyles.mFormVfCode} source={vfCodeIcon}/>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}