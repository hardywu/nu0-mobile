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
import Anim from '../../public/animation'

import mStyles from '../../public/common_style';
import styles from './Dc_Select_Style';

//select显示和隐藏的动画
export const selectAnim = {
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

export class DcSelect extends Component {
    render() {
        const {
            options
        } = this.props

        let selectOptionsDom = options.selectOptions.map((item, index) => {
            return (
                <Text style={styles.dcSelectOptionsItem} key={index}>{item.name}</Text>
            )
        })
        
        return (
            <Animated.View  style={[
                styles.dcSelectOptions,
                {
                    height: options.isShow ? 'auto' : 0,
                    paddingTop: options.isShow ? 8 : 0,
                    paddingBottom: options.isShow ? 8 : 0,
                    opacity: selectAnim.style.opacity, 
                    transform: [
                        {scale: selectAnim.style.scale}
                    ]
                }
            ]}>
                {selectOptionsDom}
                {/* <Text style={styles.dcSelectOptionsItem}>选项1</Text>
                <Text style={styles.dcSelectOptionsItem}>选项2</Text>
                <Text style={styles.dcSelectOptionsItem}>选项3</Text> */}
            </Animated.View >
        );
    }
}