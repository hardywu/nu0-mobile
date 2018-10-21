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
        const {
            placeholder,
            value,
            onAddRelease,
            onSubRelease,
            onValChange
        } = this.props;

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
                        <Text
                            style={[styles.ASInputOperation, mStyles.mBlueColor]}
                            onStartShouldSetResponder={() => true}
                            onResponderRelease={evt => onSubRelease(evt)}
                        >-</Text>
                    </View>
                    <TextInput
                        style={styles.ASInput}
                        underlineColorAndroid='transparent'
                        keyboardType='numeric'
                        placeholder={placeholder}
                        value={value}
                        onFocus={() => this.handleFocus()}
                        onBlur={() => this.handleBlur()}
                        onChangeText={val => onValChange(val)}
                    />
                    <View style={styles.ASInputOperationRight}>
                        <Text
                            style={[styles.ASInputOperation, mStyles.mBlueColor]}
                            onStartShouldSetResponder={() => true}
                            onResponderRelease={evt => onAddRelease(evt)}
                        >
                            +
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

ASInput.defaultProps = {
    onValChange: evt => true,
    onSubRelease: evt => true,
    onAddRelease: evt => true
}