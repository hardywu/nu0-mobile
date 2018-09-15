/**
 * 公用 百分比bar
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
import styles from './Percent_Bar_Style';

export default class PercentBar extends Component {
    render() {
        return (
            <View>
                <View style={styles.PercentBarWrap}>
                    <Text style={styles.PercentBarItem}>25%</Text>
                    <Text style={styles.PercentBarItem}>50%</Text>
                    <Text style={styles.PercentBarItem}>75%</Text>
                    <Text style={styles.PercentBarItem}>100%</Text>
                </View>
            </View>
        );
    }
}