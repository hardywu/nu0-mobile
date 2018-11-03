/**
 * 公用 底部
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
import styles from './Empty_Bottom_Bar_Style';
 
let paddingBottomValue = (() => {
    if(utils.isIos()) {
        if(utils.isIphoneX()) {
            return 34; //如果是iponex返回44
        } else {
            return 0; //如果不是iponex返回20
        }
    } else {
        return 0; //如果是android系统返回0
    }
})();


export default class EmptyBottomBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { backgroundColor } = this.props;
        return (
            <View style={{
                paddingBottom: paddingBottomValue,
                backgroundColor: backgroundColor
            }}>
            </View>
        );
    }
}

EmptyBottomBar.defaultProps = {
    backgroundColor: '#fff'
}