/**
 * 登录页
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
import Contract from '../../public/constant';
import utils from '../../public/utils';

import mStyles from '../../public/common_style';
import styles from './Login_Style';

import closeIcon from '../../static/imgs/close.png'; //关闭按钮图标

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            //登录类型tab数据
            loginTab: [
                {
                    code: 0,
                    name: '手机号',
                    isActive: true
                }, {
                    code: 1,
                    name: '邮箱',
                    isActive: false
                }, {
                    code: 2,
                    name: '子账户',
                    isActive: false
                }
            ]
        }
    }

    //处理 关闭按钮 释放事件
    handleCloseRelease = evt => {
        const { navigate } = this.props.navigation;
        navigate('Main'); //回到主页面
    }

    //处理 注册账号按钮 释放事件
    handleRegisterRelease = evt => {
        const { navigate } = this.props.navigation;
        navigate('Register'); //跳转到注册页
    }

    // 处理 忘记密码按钮 释放事件
    handleForgetPasswordRelease = evt => {
        const { navigate } = this.props.navigation;
        navigate('ForgetPassword'); //跳转到注册页
    }

    //处理 登录类型tab 释放事件
    handleLoginTabRelease = (evt, index) => {
        let { loginTab } = this.state;
        for(let i = 0; i < loginTab.length; i++) {
            if(index === i) {
                loginTab[i].isActive = true;
            } else {
                loginTab[i].isActive = false;
            }
        }
        this.setState({ loginTab: loginTab });
    }

    //处理 登录按钮 释放事件
    handleLoginRelease = evt => {
        const { navigate } = this.props.navigation;
        utils.storage.save('userInfo', {name: 'RZeeY'}).then(() => {
            navigate('Main'); //跳转到主页
        })
    }

    render() {
        let { loginTab } = this.state;
        let loginTabActiveIndex = null;
        let loginTabDOM = loginTab.map((item, index) => {
            if(item.isActive) {
                loginTabActiveIndex = index;
            }
            return (
                <View
                    style={[
                        styles.bodyTabItem,
                        item.isActive ? styles.bodyTabItemActive : ''
                    ]}
                    key={index}
                    onStartShouldSetResponder={() => true}
                    onResponderRelease={evt => this.handleLoginTabRelease(evt, index)}
                >
                    <Text style={[
                        styles.bodyTabItemText,
                        item.isActive ? styles.bodyTabItemTextActive : ''
                    ]}>
                        {item.name}
                    </Text>
                </View>
            )
        });
        return (
            <View style={[mStyles.mFlex1, styles.loginWrap]}>
                {/* 头部开始 */}
                <View style={styles.header}>
                    <View style={[mStyles.mCenterContent, styles.headerCenterContent]}>
                        <Image
                            style={styles.close}
                            source={closeIcon}
                            onStartShouldSetResponder={() => true}
                            onResponderRelease={evt => this.handleCloseRelease(evt)}
                        />
                        <Text
                            style={styles.headerLink}
                            onStartShouldSetResponder={() => true}
                            onResponderRelease={evt => this.handleRegisterRelease(evt)}
                        >
                            注册账号
                        </Text>
                    </View>
                </View>
                {/* 头部结束 */}
                {/* 主体内容开始 */}
                <View style={styles.body}>
                    <View style={[mStyles.mCenterContent, styles.bodyCenterContent]}>
                        <Text style={styles.bodyTitle}>登录</Text>
                        <View style={styles.bodyTab}>
                            {loginTabDOM}
                            {/* <View style={[styles.bodyTabItem, styles.bodyTabItemActive]}>
                                <Text style={[styles.bodyTabItemText, styles.bodyTabItemTextActive]}>手机号</Text>
                            </View>
                            <View style={styles.bodyTabItem}>
                                <Text style={styles.bodyTabItemText}>邮箱</Text>
                            </View>
                            <View style={styles.bodyTabItem}>
                                <Text style={styles.bodyTabItemText}>子账户</Text>
                            </View> */}
                        </View>
                        <View style={styles.bodyForm}>
                            <View style={[styles.bodyFormItem, {display: loginTabActiveIndex === 0 ? 'flex' : 'none'}]}>
                                <View style={styles.bodyFormItemInput}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder='手机号'
                                        placeholderTextColor='#a7d4fe'
                                        underlineColorAndroid='transparent'
                                        multiline={true}
                                    />
                                </View>
                                <View style={styles.bodyFormItemInput}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder='密码'
                                        placeholderTextColor='#a7d4fe'
                                        underlineColorAndroid='transparent'
                                        secureTextEntry={true}
                                    />
                                </View>
                                <View style={styles.bodyFormItemLogin}>
                                    <View
                                        style={styles.loginBtn}
                                        onStartShouldSetResponder={() => true}
                                        onResponderRelease={evt => this.handleLoginRelease(evt)}
                                    >
                                        <Text style={styles.loginBtnText}>登录</Text>
                                    </View>
                                    <Text
                                        style={styles.forgetPasswordText}
                                        onStartShouldSetResponder={() => true}
                                        onResponderRelease={evt => this.handleForgetPasswordRelease(evt)}
                                    >
                                        忘记密码
                                    </Text>
                                </View>
                            </View>
                            <View style={[styles.bodyFormItem,  {display: loginTabActiveIndex === 1 ? 'flex' : 'none'}]}>
                                <View style={styles.bodyFormItemInput}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder='邮箱'
                                        placeholderTextColor='#a7d4fe'
                                        underlineColorAndroid='transparent'
                                        multiline={true}
                                    />
                                </View>
                                <View style={styles.bodyFormItemInput}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder='密码'
                                        placeholderTextColor='#a7d4fe'
                                        underlineColorAndroid='transparent'
                                        secureTextEntry={true}
                                    />
                                </View>
                                <View style={styles.bodyFormItemLogin}>
                                    <View
                                        style={styles.loginBtn}
                                        onStartShouldSetResponder={() => true}
                                        onResponderRelease={evt => this.handleLoginRelease(evt)}
                                    >
                                        <Text style={styles.loginBtnText}>登录</Text>
                                    </View>
                                    <Text
                                        style={styles.forgetPasswordText}
                                        onStartShouldSetResponder={() => true}
                                        onResponderRelease={evt => this.handleForgetPasswordRelease(evt)}
                                    >
                                        忘记密码
                                    </Text>
                                </View>
                            </View>
                            <View style={[styles.bodyFormItem,  {display: loginTabActiveIndex === 2 ? 'flex' : 'none'}]}>
                                <View style={styles.bodyFormItemInput}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder='子账户'
                                        placeholderTextColor='#a7d4fe'
                                        underlineColorAndroid='transparent'
                                        multiline={true}
                                    />
                                </View>
                                <View style={styles.bodyFormItemInput}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder='密码'
                                        placeholderTextColor='#a7d4fe'
                                        underlineColorAndroid='transparent'
                                        secureTextEntry={true}
                                    />
                                </View>
                                <View style={styles.bodyFormItemLogin}>
                                    <View
                                        style={styles.loginBtn}
                                        onStartShouldSetResponder={() => true}
                                        onResponderRelease={evt => this.handleLoginRelease(evt)}
                                    >
                                        <Text style={styles.loginBtnText}>登录</Text>
                                    </View>
                                    <Text
                                        style={styles.forgetPasswordText}
                                        onStartShouldSetResponder={() => true}
                                        onResponderRelease={evt => this.handleForgetPasswordRelease(evt)}
                                    >
                                        忘记密码
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                {/* 主体内容结束 */}
            </View>
        );
    }
}