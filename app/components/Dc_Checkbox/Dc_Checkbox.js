/**
 * 公用 复选框
 * ...props
 * 名称 类型 必填 说明
 * text String false 文本内容
 * selected Boolean false 是否为选中状态
 * onPress Function false 按压事件回调
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
    LayoutAnimation
} from 'react-native';
import  Constant from '../../public/constant'

import mStyles from '../../public/common_style';
import styles from './Dc_Checkbox_Style';

import unSelectedIcon from '../../static/imgs/unselected.png'; //未选中图标
import selectedIcon from '../../static/imgs/selected.png'; //选中图标

export default class DcCheckbox extends Component {
    render() {
        const {
            text,
            selected,
            onPress
        } = this.props;
        return (
            <View
                style={styles.wrap}
                onStartShouldSetResponder={() => true}
                onResponderRelease={evt => onPress(evt)}
            >
                <Image style={styles.icon} source={selected ? selectedIcon : unSelectedIcon }/>
                <Text style={styles.text}>{text}</Text>
            </View>
        );
    }
}

DcCheckbox.defaultProps = {
    text: '',
    selected: false,
    onPress: evt => true
}