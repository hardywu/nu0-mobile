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
        return (
            <View>
                <View style={styles.unitInputWrap}>
                    <Text style={styles.unitInputGrayText}>数量</Text>
                    <TextInput style={styles.unitInput}/>
                    <Text style={styles.unitInputGrayText}>XPR</Text>
                </View>
            </View>
        );
    }
}