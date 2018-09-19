/**
 * 合约页 表单组件
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    StatusBar,
    ScrollView,
    Image,
    Animated,
    Easing,
    FlatList,
    LayoutAnimation,
    Modal,
    Picker
} from 'react-native';
import Anim from '../../../../public/animation';
import UnitInput from '../../../../components/Unit_Input/Unit_Input';
import PercentBar from '../../../../components/Percent_Bar/Percent_Bar';
import ArcBtn from '../../../../components/Arc_Btn/Arc_Btn';

import Contract from '../../../../public/constant';
import mStyles from '../../../../public/common_style';
import styles from './Form_Style';

import arrowIcon from '../../../../static/imgs/arrow_gray.png'; //菜单按钮

//select显示和隐藏的动画
const selectAnim = {
    style: {
        opacity: new Animated.Value(0.6),
        scale: new Animated.Value(0.92)
    },

    //显示
    scaleFadeIn: function() {
        return (
            Anim.parallel([
                Anim.timing(this.style.opacity, 1, 100, Easing.ease),
                Anim.timing(this.style.scale, 1, 100, Easing.ease),
            ])
        )
    },

    //隐藏
    scaleFadeOut: function() {
        return (
            Anim.parallel([
                Anim.timing(this.style.opacity, 0, 100, Easing.ease),
                Anim.timing(this.style.scale, .92, 100, Easing.ease),
            ])
        );
    }
}

export default class Form extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.form}>
                <View style={styles.formSelect}>
                    <View style={styles.formSelectMain}>
                        <Text style={styles.formSelectResult}>限价单</Text>
                        <Image style={styles.formSelectResultArrow} source={arrowIcon}></Image>
                    </View>
                    <UnitInput />
                </View>
            </View>
        )
    }
}