/**
 * 系统设置页
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
import styles from './Sys_Setting_Style';

import arrowIcon from '../../static/imgs/arrow_gray.png'; //箭头图标

export default class SysSetting extends Component {
    constructor(props) {
        super(props);
    }

    //处理 返回按钮 释放事件
    handleGoBackRelease = evt => {
        this.props.navigation.goBack();
    }

    //处理 切换计价货币 按压事件
    handleSwitchCurPress = evt => {
        // this.props.navigation.navigate('BindEmail'); //跳转到绑定邮箱页
    }

    //处理 货币概览 按压事件
    handleCurOverviewPress = evt => {
        // this.props.navigation.navigate('CapitalPwd'); //跳转设置资金密码页
    }

    //处理 费率详情 按压事件
    handleRateDetailPress = evt => {

    }

    //处理 关于 按压事件
    handleAboutPress = evt => {

    }

    render() {
        return (
            <View style={[mStyles.mFlex1, styles.wrap]}>
                <Header
                    title='系统设置'
                    onGoBackRelease={evt => this.handleGoBackRelease(evt)}
                />
                <View>
                    <View style={[mStyles.mt10, mStyles.mForm]}>
                        <View style={mStyles.mFormCenterContent}>
                            <TouchableHighlight
                                underlayColor={'#e8e8e8'}
                                onPress={evt => this.handleSwitchCurPress(evt)}
                            >
                                <View style={mStyles.mFormItem}>
                                    <Text style={mStyles.mFormLabel}>切换计价货币</Text>
                                    <View style={mStyles.mFormSelect}>
                                        <Text style={mStyles.mFormSelectTextRight}>人民币</Text>
                                        <Image style={mStyles.mFormSelectIcon} source={arrowIcon}/>
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor={'#e8e8e8'}
                                onPress={evt => this.handleCurOverviewPress(evt)}
                            >
                                <View style={mStyles.mFormItem}>
                                    <Text style={mStyles.mFormLabel}>货币概览</Text>
                                    <View style={mStyles.mFormSelect}>
                                        <Text style={mStyles.mFormSelectText}></Text>
                                        <Image style={mStyles.mFormSelectIcon} source={arrowIcon}/>
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor={'#e8e8e8'}
                                onPress={evt => this.handleRateDetailPress(evt)}
                            >
                                <View style={mStyles.mFormItem}>
                                    <Text style={mStyles.mFormLabel}>费率详情</Text>
                                    <View style={mStyles.mFormSelect}>
                                        <Text style={mStyles.mFormSelectText}></Text>
                                        <Image style={mStyles.mFormSelectIcon} source={arrowIcon}/>
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor={'#e8e8e8'}
                                onPress={evt => this.handleAboutPress(evt)}
                            >
                                <View style={mStyles.mFormItem}>
                                    <Text style={mStyles.mFormLabel}>关于</Text>
                                    <View style={mStyles.mFormSelect}>
                                        <Text style={mStyles.mFormSelectText}></Text>
                                        <Image style={mStyles.mFormSelectIcon} source={arrowIcon}/>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                    {/* 绑定手机、邮箱结束 */}
                </View>
            </View>
        );
    }
}