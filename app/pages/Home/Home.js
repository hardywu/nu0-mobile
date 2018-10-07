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
import utils from '../../public/utils';
import Card from './Components/Card/Card';
import Card2 from './Components/Card2/Card2';
import Notice from './Components/Notice/Notice';
import Banner from './Components/Banner/Banner';
import Quotation from './Components/Quotation/Quotation';

import mStyles from '../../public/common_style';
import styles from './Home_Style';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: null //用户信息
        }
    }

    componentWillMount() {
        //FIXME: 用redux处理登录
        const _this = this;
        utils.storage.delete('userInfo');
        // utils.storage.get('userInfo').then(val => {
        //     _this.setState({ userInfo: val });
        // });
    }

    handleLoginPress = () => {
        const { navigate } = this.props.navigation;
        navigate('Login');
    }
    
    render() {
        let { userInfo } = this.state;
        const { navigation } = this.props;
        return (
            <View style={mStyles.mFlex1}>
                <View style={styles.userContainer}>
                    {/* 登录的状态开始 */}
                    <View style={[styles.userContainerCenter, styles.plr10, { display: 'none' }]}>
                        <Image
                            style={styles.userImg}
                            source={require('../../static/imgs/user_default.png')}
                        />
                        <Text style={styles.tel}>17922764886</Text>
                    </View>
                    {/* 登录的状态结束 */}
                    {/* 未登录的状态开始 */}
                    <View style={[styles.loginContainerCenter, styles.plr10]}>
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
                    {/* {userInfo !== null ? <Card2 navigation={navigation}/> : <Card />} */}
                    <Card2 navigation={navigation}/>
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
                </ScrollView>
            </View>
        );
    }
}