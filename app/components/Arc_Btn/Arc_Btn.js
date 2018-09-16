/**
 * 公用 弧形按钮（买入/卖出的按钮）
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
import mStyles from '../../public/common_style';
import styles from './Arc_Btn_Style';

export default class ArcBtn extends Component {
    render() {
        const {
            text,
            color,
            backgroundColor,
            onRelease
        } = this.props;

        return (
            <View
                onStartShouldSetResponder={() => true}
                onResponderRelease={evt => onRelease(evt)}
            >
               <View style={[styles.ArcBtnWrap, {backgroundColor: backgroundColor}]}>
                    <Text style={[styles.ArcBtnText, {color: color}]}>{text}</Text>
               </View>
            </View>
        );
    }
}