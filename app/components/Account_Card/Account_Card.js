/**
 * 公用 账户卡片组件
 */
import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    StatusBar,
    ScrollView,
    Image,
    Animated,
    Easing,
    FlatList,
    LayoutAnimation,
    Modal
} from 'react-native';

import mStyles from '../../public/common_style';
import styles from './Account_Card_Style';

export default class AccountCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            title,
            originalVal,
            exchangeVal,
            color,
            backgroundColor
        } = this.props;
        return (
            <View style={[styles.wrap, {backgroundColor: backgroundColor}]}>
                <Text style={[styles.nameText, {color: color}]}>{title}</Text>
                <Text style={[styles.valText, {color: color}]}>฿{originalVal}</Text>
                <Text style={[styles.exchangeText, {color: color}]}>￥{exchangeVal}</Text>
            </View>
        );
    }
}

AccountCard.defaultProps = {
    title: '-',
    originalVal: '-.--',
    exchangeVal: '-.--',
    color: '#fff',
    backgroundColor: '#7f8289'
}