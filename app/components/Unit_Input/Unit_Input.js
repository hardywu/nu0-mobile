/**
 * 公用 带单位的input
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
import styles from './Unit_Input_Style';

export default class ASInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            name, //名字
            value, //值
            unit, //单位
            onChange
        } = this.props;

        return (
            <View>
                <View style={styles.unitInputWrap}>
                    <Text style={styles.unitInputGrayText}>{name}</Text>
                    <TextInput
                        style={styles.unitInput}
                        underlineColorAndroid="transparent"
                        value={value}
                        onChangeText={val => onChange(val)}
                    />
                    <Text style={styles.unitInputGrayText}>{unit}</Text>
                </View>
            </View>
        );
    }
}