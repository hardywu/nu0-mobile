/**
 *首页
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    StatusBar,
    ScrollView,
    Image
} from 'react-native';
import { connect } from 'react-redux';
import Constant from '../../public/constant';
import utils from '../../public/utils';
import api from '../../public/api';
import Card from './Components/Card/Card';
import Card2 from './Components/Card2/Card2';
import Notice from './Components/Notice/Notice';
import Banner from './Components/Banner/Banner';
import Quotation from './Components/Quotation/Quotation';
import EmptyTopBar from '../../components/Empty_Top_Bar/Empty_Top_Bar';
import EmptyBottomBar from '../../components/Empty_Bottom_Bar/Empty_Bottom_Bar';
import * as loginAction from '../../actions/login';
import * as userInfoAction from '../../actions/user_info';

import mStyles from '../../public/common_style';
import styles from './Home_Style';

class Home extends Component {
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
            console.log(msg)
        })
    }

    //处理 登录按钮 释放事件
    handleLoginPress = () => {
        const { navigate } = this.props.navigation;
        navigate('Login');
    }
    
    //处理 用户图标 释放事件
    handleUserIconRelease = evt => {
        this.props.navigation.navigate('UserCenter'); //跳转到个人中心页
    }

    render() {
        let {
            user
        } = this.state;
        const {
            navigation,
            userInfo
        } = this.props;

        return (
            <View style={mStyles.mFlex1}>
                <EmptyTopBar backgroundColor='#fff'/>
                <View style={styles.userContainer}>
                    {/* 登录的状态开始 */}
                    <View style={[
                        mStyles.mCenterContent,
                        styles.userContainerCenter,
                        userInfo !== null ? mStyles.mFlex : mStyles.mHide 
                    ]}>
                        <Image
                            style={styles.userImg}
                            source={require('../../static/imgs/user_default.png')}
                            onStartShouldSetResponder={() => true}
                            onResponderRelease={evt => this.handleUserIconRelease(evt)}
                        />
                        <Text style={styles.userName}>{user.email}</Text>
                    </View>
                    {/* 登录的状态结束 */}
                    {/* 未登录的状态开始 */}
                    <View style={[
                        mStyles.mCenterContent,
                        styles.loginContainerCenter,
                        userInfo === null ? mStyles.mFlex : mStyles.mHide
                    ]}>
                        <Image
                            style={styles.logoImg}
                            source={require('../../static/imgs/logo.png')}
                        />
                        <View style={styles.loginRBox}>
                            <Text 
                                style={styles.login}
                                onPress={this.handleLoginPress}
                            >
                                登录/注册
                            </Text>
                            <Image
                                style={styles.settingImg}
                                source={require('../../static/imgs/setting.png')}
                            />
                        </View>
                    </View>
                    {/* 未登录的状态结束 */}
                </View>
                <ScrollView
                    style={styles.mainContainer}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={[mStyles.mCenterContent]}>
                        {userInfo !== null ? <Card2 navigation={navigation}/> : <Card />}
                        {/* <Card2 navigation={navigation}/> */}
                        <Notice />
                        <Banner />
                        <View style={styles.quoTitleBox}>
                            <Image 
                                style={{
                                    width: 20,
                                    height: 20,
                                    marginRight: 6
                                }}
                                source={require('../../static/imgs/trend.png')}
                            />
                            <Text style={styles.quoTitle}>指数</Text>
                        </View>
                        <Quotation />
                        <Text style={[styles.bottomCont, mStyles.mGrayColor]}>OKEx获得上亿投资</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default connect(
    // (state) => ({
    //     loginStatus: state.loginStatus,
    //     userInfo: state.userInfo
    // }),
    // (dispatch) => ({
    //     updateUserInfo: data => dispatch(userInfoAction.updateUserInfo(data))
    // })
)(Home)