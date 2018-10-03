/**
 *首页
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
import ArcBtn from '../../components/Arc_Btn/Arc_Btn';

import mStyles from '../../public/common_style';
import styles from './Register_Style';

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
                }
            ]
        }
    }

    //处理 关闭按钮 释放事件
    handleCloseRelease = evt => {
        const { navigate } = this.props.navigation;
        navigate('Login'); //回到登录页
    }

    //处理 已有账户按钮 释放事件
    handleLoginRelease = evt => {
        const { navigate } = this.props.navigation;
        navigate('Login'); //跳转到登录页
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
                            onResponderRelease={evt => this.handleLoginRelease(evt)}
                        >
                            已有账户？
                        </Text>
                    </View>
                </View>
                {/* 头部结束 */}
                {/* 主体内容开始 */}
                <View style={styles.body}>
                    <View style={[mStyles.mCenterContent, styles.bodyCenterContent]}>
                        <Text style={styles.bodyTitle}>注册</Text>
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
                                        multiline={true}
                                    />
                                </View>
                                <View style={styles.bodyFormItemInput}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder='短信验证码'
                                        placeholderTextColor='#a7d4fe'
                                        underlineColorAndroid='transparent'
                                    />
                                    <Text style={styles.vfCodeBtn}>发送验证码</Text>
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
                                    <View style={styles.loginBtn}>
                                        <Text style={styles.loginBtnText}>注册</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.bodyFormItem,  {display: loginTabActiveIndex === 1 ? 'flex' : 'none'}]}>
                                <View style={styles.bodyFormItemInput}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder='邮箱'
                                        placeholderTextColor='#a7d4fe'
                                        multiline={true}
                                    />
                                </View>
                                <View style={styles.bodyFormItemInput}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder='邮箱验证码'
                                        placeholderTextColor='#a7d4fe'
                                        underlineColorAndroid='transparent'
                                    />
                                    <Text style={styles.vfCodeBtn}>发送验证码</Text>
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
                                    <View style={styles.loginBtn}>
                                        <Text style={styles.loginBtnText}>注册</Text>
                                    </View>
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