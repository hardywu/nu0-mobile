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
        return (
            <View>
                <View style={styles.checkWrap}>
                    <Text
                        style={styles.checkText}
                        ellipsizeMode={'tail'}
                        numberOfLines={1}
                    >
                        12321312321312312131232131232开仓
                    </Text>
                </View>
            </View>
        );
    }
}