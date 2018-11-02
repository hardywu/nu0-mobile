/**
 * 公用 头部
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    Platform,
    Dimensions
} from 'react-native';

import mStyles from '../../public/common_style';
import styles from './Empty_Top_Bar_Style';

// iPhoneX
const X_WIDTH = 375;
const X_HEIGHT = 812;
 
// screen
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
 
function isIphoneX() {
    return (
        Platform.OS === 'ios' && 
        ((SCREEN_HEIGHT === X_HEIGHT && SCREEN_WIDTH === X_WIDTH) || 
        (SCREEN_HEIGHT === X_WIDTH && SCREEN_WIDTH === X_HEIGHT))
    )
}

export default class EmptyTopBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{
                paddingTop: isIphoneX() ? 44 : 20
            }}>
            </View>
        );
    }
}