/**
 * 公用 带加减功能的input
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
                <View style={styles.UnitInputWrap}>
                    <Text style={styles.UnitInputGrayText}>数量</Text>
                    <TextInput style={styles.UnitInput}/>
                    <Text style={styles.UnitInputGrayText}>XPR</Text>
                </View>
            </View>
        );
    }
}