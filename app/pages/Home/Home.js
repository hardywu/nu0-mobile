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
import mStyles from '../../public/common_style'; 
import styles from './Home_Style';

export default class Home extends Component {
    render() {
        return (
            <View style={ mStyles.mFlex1 }>
                <StatusBar backgroundColor='#333' animated={ true } barStyle='dark-content'/>
                <View style={ styles.userContainer }>
                    {/* 登录的状态开始 */}
                    <View style={ [styles.userContainerCenter, styles.plr10, {display: 'none'}] }>
                        <Image
                            style={ styles.userImg }
                            source={ require('../../static/imgs/user_default.png') }
                        />
                        <Text style={ styles.tel }>17922764886</Text>
                    </View>
                    {/* 登录的状态结束 */}
                    {/* 未登录的状态开始 */}
                    <View style={ [styles.loginContainerCenter, styles.plr10] }>
                        <Image
                            style={ styles.logoImg }
                            source={ require('../../static/imgs/logo.png') }
                        />
                        <View style={ styles.loginRBox }>
                            <Text style={ styles.login }>登录/注册</Text>
                            <Image
                                style={ styles.settingImg }
                                source={ require('../../static/imgs/setting.png') }
                            />
                        </View>
                    </View>
                    {/* 未登录的状态结束 */}
                </View>
                <ScrollView
                    style={ styles.mainContainer }
                    showsVerticalScrollIndicator={ false }
                >
                    
                </ScrollView>
            </View>
        );
    }
}