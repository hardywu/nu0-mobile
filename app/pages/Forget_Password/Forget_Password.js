/**
 * 忘记密码页
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
import EmptyTopBar from '../../components/Empty_Top_Bar/Empty_Top_Bar';
import EmptyBottomBar from '../../components/Empty_Bottom_Bar/Empty_Bottom_Bar';

import mStyles from '../../public/common_style';
import styles from './Forget_Password_Style';

import vfCodeIcon from '../../static/imgs/vf_code.png'; //本地验证码图标

export default class ForgetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0 //当前步骤计数 0:填写手机号,输入图片验证码;  1:填写新密码，发送短信验证码;
        }
    }

    //处理 返回按钮 释放事件
    handleGoBackRelease = evt => {
        this.props.navigation.goBack();
    }

    //处理 下一步按钮 释放事件
    handleNextRelease = evt => {
        let { step } = this.state;
        step++; //步骤数+1，进入下一步
        this.setState({ step: step });
    }

    //处理 确认修改按钮 释放事件
    handleConfirmModificationRelease = evt => {
        //TODO: 确认修改操作
        alert('确认修改');
    }

    render() {
        let { step } = this.state;
        return (
            <View style={[mStyles.mFlex1, mStyles.mBackgroundColor]}>
                <EmptyTopBar backgroundColor='#fff'/>
                <Header
                    title='找回登录密码'
                    onGoBackRelease={evt => this.handleGoBackRelease(evt)}
                />
                <View style={[mStyles.mFlex1, mStyles.mBackgroundColor]}>
                    {/* 第一步开始 */}
                    <View style={[mStyles.mt10, step === 0 ? mStyles.mFlex : mStyles.mHide]}>
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
                                    <Image style={mStyles.mFormImgVfCode} source={vfCodeIcon}/>
                                </View>
                            </View>
                        </View>
                        <View style={[mStyles.mt10, mStyles.mFormCenterContent]}>
                            <ArcBtn
                                text='下一步'
                                color='#fff'
                                backgroundColor='#e0e0e0'
                                onRelease={evt => this.handleNextRelease(evt)}
                            />
                        </View>
                    </View>
                    {/* 第一步结束 */}
                    {/* 第二步开始 */}
                    <View style={[mStyles.mt10, step === 1 ? mStyles.mFlex : mStyles.mHide]}>
                        <View style={mStyles.mForm}>
                            <View style={mStyles.mFormCenterContent}>
                                <View style={mStyles.mFormItem}>
                                    <Text style={mStyles.mFormLabel}>登录密码</Text>
                                    <TextInput
                                        style={mStyles.mFormInput}
                                        placeholder='登录密码'
                                        underlineColorAndroid='transparent'
                                    />
                                </View>
                                <View style={mStyles.mFormItem}>
                                    <Text style={mStyles.mFormLabel}>确认密码</Text>
                                    <TextInput
                                        style={mStyles.mFormInput}
                                        placeholder='确认密码'
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
                                    <Text style={mStyles.mFormTextVfCode}>发送验证码</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[mStyles.mt10, mStyles.mFormCenterContent]}>
                            <ArcBtn
                                text='确认修改'
                                color='#fff'
                                backgroundColor='#e0e0e0'
                                onRelease={evt => this.handleConfirmModificationRelease(evt)}
                            />
                        </View>
                    </View>
                    {/* 第二步结束 */}
                </View>
                <EmptyBottomBar backgroundColor={Constant.M_BACKGROUND_COLOR}/>
            </View>
        );
    }
}