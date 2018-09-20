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
import styles from './Select_Box_Style';

export default class SelectBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <View style={styles.selectBoxWrap}>
                    <Text style={styles.selectBoxName}>多仓</Text>
                    <Text style={[styles.selectBoxVal, mStyles.mGreenColor]}>10x</Text>
                </View>
            </View>
        );
    }
}