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
import Constant from '../../public/constant';
import utils from '../../public/utils';

import mStyles from '../../public/common_style';
import styles from './Empty_Top_Bar_Style';
 
let paddingTopValue = (() => {
    if(utils.isIos()) {
        if(utils.isIphoneX()) {
            return 44; //如果是iponex返回44
        } else {
            return 20; //如果不是iponex返回20
        }
    } else {
        return 0; //如果是android系统返回0
    }
})();


export default class EmptyTopBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { backgroundColor } = this.props;
        return (
            <View style={{
                paddingTop: paddingTopValue,
                backgroundColor: backgroundColor
            }}>
            </View>
        );
    }
}

EmptyTopBar.defaultProps = {
    backgroundColor: '#fff'
}