/**
 * 选择开仓平仓的（类似单选的功能）组件
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

import mStyles from '../../../../../public/common_style';
import styles from './Check_Style';

export default class Check extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            text, //文本内容
            isActive, //是否处于激活状态
            onRelease //释放事件
        } = this.props;

        return (
            <View
                style={[styles.checkWrap, isActive ? mStyles.mBlueBorder : '']}
                onStartShouldSetResponder={() => true}
                onResponderRelease={() => onRelease()}
            >
                <Text
                    style={[styles.checkText, isActive ? mStyles.mBlueColor : '']}
                    ellipsizeMode={'tail'}
                    numberOfLines={1}
                >
                    {text}
                </Text>
            </View>
        );
    }
}