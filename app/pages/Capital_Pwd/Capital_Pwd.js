/**
 * 设置资金密码页
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
import ArcBtn from '../../components/Arc_Btn/Arc_Btn';
import EmptyTopBar from '../../components/Empty_Top_Bar/Empty_Top_Bar';
import EmptyBottomBar from '../../components/Empty_Bottom_Bar/Empty_Bottom_Bar';

import mStyles from '../../public/common_style';
import styles from './Capital_Pwd_Style';

export default class CapitalPwd extends Component {
    constructor(props) {
        super(props);
    }

    //处理 返回按钮 释放事件
    handleGoBackRelease = evt => {
        this.props.navigation.goBack();
    }

    //处理 确认按钮 释放事件
    handleConfirmRelease = evt => {
        //TODO: 确认修改操作
        alert('确认修改');
    }

    render() {
        return (
            <View style={[mStyles.mFlex1, mStyles.mBackgroundColor]}>
                <EmptyTopBar backgroundColor='#fff'/>
                <Header
                    title='设置资金密码'
                    onGoBackRelease={evt => this.handleGoBackRelease(evt)}
                />
                <View style={[mStyles.mt10]}>
                    <View style={mStyles.mForm}>
                        <View style={mStyles.mFormCenterContent}>
                            <View style={mStyles.mFormItem}>
                                <Text style={mStyles.mFormLabel}>资金密码</Text>
                                <TextInput
                                    style={mStyles.mFormInput}
                                    placeholder='资金密码'
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                            <View style={mStyles.mFormItem}>
                                <Text style={mStyles.mFormLabel}>再次输入</Text>
                                <TextInput
                                    style={mStyles.mFormInput}
                                    placeholder='再次输入'
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                            <View style={mStyles.mFormItem}>
                                <Text style={mStyles.mFormLabel}>短信验证码</Text>
                                <TextInput
                                    style={mStyles.mFormInput}
                                    placeholder='短信验证码'
                                    underlineColorAndroid='transparent'
                                />
                                <Text style={mStyles.mFormTextVfCode}>发送验证码</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[mStyles.mt10, mStyles.mFormCenterContent]}>
                        <ArcBtn
                            text='确认'
                            color='#fff'
                            backgroundColor='#e0e0e0'
                            onRelease={evt => this.handleConfirmRelease(evt)}
                        />
                    </View>
                </View>
                <EmptyBottomBar backgroundColor={Constant.M_BACKGROUND_COLOR}/>
            </View>
        );
    }
}