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
import styles from './AS_Input_Style';

export default class ASInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isFocus: false, //是否处于焦点状态
        }
    }

    handleFocus = () => {
        this.setState({ isFocus: true });
    }

    handleBlur = () => {
        this.setState({ isFocus: false });
    }

    render() {
        let {
            isFocus
        } = this.state;

        return (
            <View>
                <View style={[
                    styles.ASInputWrap,
                    isFocus ? mStyles.mBlueBorder : ''
                ]}>
                    <View style={styles.ASInputOperationLeft}>
                        <Text style={[styles.ASInputOperation, mStyles.mBlueColor]}>-</Text>
                    </View>
                    <TextInput
                        style={styles.ASInput}
                        underlineColorAndroid='transparent'
                        keyboardType='numeric'
                        placeholder='测试以西'
                        onFocus={() => this.handleFocus()}
                        onBlur={() => this.handleBlur()}
                    />
                    <View style={styles.ASInputOperationRight}>
                        <Text style={[styles.ASInputOperation, mStyles.mBlueColor]}>+</Text>
                    </View>
                </View>
            </View>
        );
    }
}