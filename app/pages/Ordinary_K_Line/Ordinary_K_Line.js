/**
 * 不含买卖按钮的k线
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
    WebView
} from 'react-native';
import Constant from '../../public/constant'
import Header from '../../components/Header/Header';
import KLine from '../../web/html/ordinary_k_line.html';

import mStyles from '../../public/common_style';
import styles from './Ordinary_K_Line_Style';

export default class Web extends Component {
    constructor(props) {
        super(props);
    }

    //处理 返回按钮 释放事件
    handleGoBackRelease = evt => {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={[mStyles.mFlex1, styles.wrap]}>
                <Header
                    title='个人中心'
                    onGoBackRelease={evt => this.handleGoBackRelease(evt)}
                />
                <WebView
                    style={[mStyles.mFlex1]} 
                    source={KLine}
                />
            </View>
        );
    }
}