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
import styles from './Login_Style';

export default class Login extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={mStyles.mFlex1}>
                <Text>这是登陆页面</Text>
            </View>
        );
    }
}