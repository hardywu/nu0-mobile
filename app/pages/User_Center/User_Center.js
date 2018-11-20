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
//组件
import Constant from '../../public/constant'
import Header from '../../components/Header/Header';
import EmptyTopBar from '../../components/Empty_Top_Bar/Empty_Top_Bar';
import EmptyBottomBar from '../../components/Empty_Bottom_Bar/Empty_Bottom_Bar';
//样式
import mStyles from '../../public/common_style';
import styles from './User_Center_Style';
//图片
import userDefaultIcon from '../../static/imgs/user_default.png'; //用户默认头像
import arrowIcon from '../../static/imgs/arrow_gray.png'; //箭头图标
//其他
import utils from '../../public/utils';
import api from '../../public/api';

export default class FrenchAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: ''
            }
        }
    }

    componentDidMount() {
        let { user } = this.state;
        //请求用户信息接口
        api.getV1AccountsMe().then(res => {
            //设置用昵称为邮箱
            user.email = res.email;
            this.setState({ user: user });
        }).catch(msg => {
            utils.toast.show(msg);
            console.log(msg);
        });
    }

    //处理 返回按钮 释放事件
    handleGoBackRelease = evt => {
        this.props.navigation.goBack();
    }

    //处理 退出当前账户按钮 按压事件
    handleLogoutPress = evt => {
        //删除本地token
        utils.storage.delete('token').then(() => {
            console.log('删除本地token 成功');
            return(true);
        }).then(() => {
            //删除本地登录信息
            return utils.storage.delete('userLoginInfo').then(() => {
                console.log('删除本地登录信息 成功');
                return(true);
            });
        }).then(() => {
            //跳转到登录页
            this.props.navigation.navigate('Login');
        });
    }

    handleCurSelectionRelease = evt => {

    }

    //处理 安全中心 按压事件
    handleSecurityPress = evt => {
        this.props.navigation.navigate('SecurityCenter'); //跳转到安全中心页
    }

    //处理 系统设置 按压事件
    handleSysSettingPress = evt => {
        this.props.navigation.navigate('SysSetting'); //跳转到系统设置页
    }

    render() {
        let {
            user
        } = this.state;
        return (
            <View style={[mStyles.mFlex1, mStyles.mBackgroundColor]}>
                <EmptyTopBar backgroundColor='#fff'/>
                <Header
                    title='个人中心'
                    onGoBackRelease={evt => this.handleGoBackRelease(evt)}
                />
                <View style={[mStyles.mFlex1]}>
                    {/* 用户信息开始 */}
                    <View style={[mStyles.mt10, styles.userWrap]}>
                        <View style={[mStyles.mCenterContent, styles.userCenterContent]}>
                            <Image
                                style={styles.userImg}
                                source={userDefaultIcon}
                            />
                            <Text style={styles.userName}>{user.email}</Text>
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
                                underlayColor={Constant.TOUCHABLE_HIGHLIGHT_UNDERLAY_COLOR}
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
                                underlayColor={Constant.TOUCHABLE_HIGHLIGHT_UNDERLAY_COLOR}
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
                                underlayColor={Constant.TOUCHABLE_HIGHLIGHT_UNDERLAY_COLOR}
                                onPress={evt => this.handleSysSettingPress(evt)}
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
                                underlayColor={Constant.TOUCHABLE_HIGHLIGHT_UNDERLAY_COLOR}
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
                                underlayColor={Constant.TOUCHABLE_HIGHLIGHT_UNDERLAY_COLOR}
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
                                underlayColor={Constant.TOUCHABLE_HIGHLIGHT_UNDERLAY_COLOR}
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
                    {/* 退出登录按钮开始 */}
                    <TouchableHighlight
                        style={[mStyles.mt10, styles.logoutWrap]}
                        underlayColor={Constant.TOUCHABLE_HIGHLIGHT_UNDERLAY_COLOR}
                        onPress={evt => this.handleLogoutPress(evt)}
                    >
                            <Text style={styles.logoutText}>退出当前账号</Text>
                    </TouchableHighlight>
                    {/* 退出登录按钮结束 */}
                </View>
                <EmptyBottomBar backgroundColor={Constant.M_BACKGROUND_COLOR}/>
            </View>
        );
    }
}