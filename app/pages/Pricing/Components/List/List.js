/**
 * 币币页 表单组件
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
    Picker
} from 'react-native';
import Anim from '../../../../public/animation'
import ASInput from '../../../../components/AS_Input/AS_Input';
import PercentBar from '../../../../components/Percent_Bar/Percent_Bar';
import ArcBtn from '../../../../components/Arc_Btn/Arc_Btn';

import mStyles from '../../../../public/common_style';
import styles from './List_Style';

import arrowIcon from '../../../../static/imgs/arrow_gray.png'; //箭头图标

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

export default class List extends Component {
    constructor(props) {
        super(props);
    }

    //处理select的结果栏的释放事件
    handleSelectMainRelease = (evt) => {
        const _this = this;
        const {
            data,
            setData
        } = this.props;

        let select = data.select;

        if(select.isShow) {
            selectAnim.scaleFadeOut().start(() => {
                select.isShow = false;
                setData(data);
            });
        } else {
            select.isShow = true;
            setData(data, () => {
                selectAnim.scaleFadeIn().start();
            });
        }
    } 
    
    //处理select的options栏的释放事件
    handleSelectOptionsRelease = (evt, index) => {
        const _this = this;
        const {
            data,
            setData
        } = this.props;
        const select = data.select;

        if(select.isShow) {
            selectAnim.scaleFadeOut().start(() => {
                select.isShow = false;
                select.value = {
                    code: select.options[index].code,
                    name: select.options[index].name
                }
                setData(data);
            });
        } else {
            select.isShow = true;
            setData(data, () => {
                selectAnim.scaleFadeIn().start();
            });
        }
    }

    render() {
        const {
            data
        } = this.props;

        let select = data.select;

        let selectOptionsDOM = select.options.map((item, index) => {
            return (
                <Text
                    style={[
                        styles.listFilterOptionsItem,
                        item.code === select.value.code ? mStyles.mBlueColor : ''
                    ]}
                    key={index}
                    onStartShouldSetResponder={() => true}
                    onResponderRelease={evt => this.handleSelectOptionsRelease(evt, index)}
                >
                    {item.name}
                </Text>
            );
        });

        return (
            <View style={styles.listWrap}>
                {/* 筛选开始 */}
                <View style={styles.listFilter}>
                    <View 
                        style={styles.listFilterVal}
                        onStartShouldSetResponder={() => true}
                        onResponderRelease={evt => this.handleSelectMainRelease(evt)}
                    >
                        <Text style={styles.listFilterText}>{data.select.value.name}</Text>
                        <Image style={styles.listFilterArrow} source={arrowIcon} />
                    </View>
                    <Animated.View  style={[
                        styles.listFilterOptions,
                        {
                            height: select.isShow ? 'auto' : 0,
                            paddingTop: select.isShow ? 8 : 0,
                            paddingBottom: select.isShow ? 8 : 0,
                            opacity: selectAnim.style.opacity, 
                            transform: [
                                {scale: selectAnim.style.scale}
                            ]
                        }
                    ]}>
                        {selectOptionsDOM}
                        {/* <Text style={styles.listFilterOptionsItem}>选项1</Text>
                        <Text style={styles.listFilterOptionsItem}>选项2</Text>
                        <Text style={styles.listFilterOptionsItem}>选项3</Text> */}
                    </Animated.View >
                </View>
                {/* 筛选结束 */}
                {/* 列表开始 */}
                <View style={styles.list}>
                    <View style={[styles.listHead, styles.separate, styles.mt8, styles.mb8]}>
                        <Text style={styles.listHeadItem}>价格(USTD)</Text>
                        <Text style={styles.listHeadItem}>数量(BTC)</Text>
                    </View>
                    <View style={styles.listBody}>
                        {/* 列表循环体开始 */}
                        <View style={[styles.listBodyItem, styles.separate]}>
                            <Text style={[styles.listBodyItemVal, styles.listBodyItemValLeft, mStyles.mRedColor]}>21332</Text>
                            <Text style={[styles.listBodyItemVal, styles.listBodyItemValRight]}>0.231</Text>
                        </View>
                        <View style={[styles.listBodyItem, styles.separate]}>
                            <Text style={[styles.listBodyItemVal, styles.listBodyItemValLeft, mStyles.mRedColor]}>21332.3412</Text>
                            <Text style={[styles.listBodyItemVal, styles.listBodyItemValRight]}>0.231</Text>
                        </View>
                        <View style={[styles.listBodyItem, styles.separate]}>
                            <Text style={[styles.listBodyItemVal, styles.listBodyItemValLeft, mStyles.mRedColor]}>21332.3412</Text>
                            <Text style={[styles.listBodyItemVal, styles.listBodyItemValRight]}>0.231</Text>
                        </View>
                        <View style={[styles.listBodyItem, styles.separate]}>
                            <Text style={[styles.listBodyItemVal, styles.listBodyItemValLeft, mStyles.mRedColor]}>21332.3412</Text>
                            <Text style={[styles.listBodyItemVal, styles.listBodyItemValRight]}>0.231</Text>
                        </View>
                        <View style={[styles.listBodyItem, styles.separate]}>
                            <Text style={[styles.listBodyItemVal, styles.listBodyItemValLeft, mStyles.mRedColor]}>21332.341</Text>
                            <Text style={[styles.listBodyItemVal, styles.listBodyItemValRight]}>0.231</Text>
                        </View>
                        {/* 列表循环体结束 */}
                        {/* 分割线开始 */}
                        <View style={[styles.listBodyLine, styles.mb8]}></View>
                        {/* 分割线结束 */}
                        {/* 列表循环体开始 */}
                        <View style={[styles.listBodyItem, styles.separate]}>
                            <Text style={[styles.listBodyItemVal, styles.listBodyItemValLeft, mStyles.mGreenColor]}>21332</Text>
                            <Text style={[styles.listBodyItemVal, styles.listBodyItemValRight]}>0.231</Text>
                        </View>
                        <View style={[styles.listBodyItem, styles.separate]}>
                            <Text style={[styles.listBodyItemVal, styles.listBodyItemValLeft, mStyles.mGreenColor]}>21332.3412</Text>
                            <Text style={[styles.listBodyItemVal, styles.listBodyItemValRight]}>0.231</Text>
                        </View>
                        <View style={[styles.listBodyItem, styles.separate]}>
                            <Text style={[styles.listBodyItemVal, styles.listBodyItemValLeft, mStyles.mGreenColor]}>21332.3412</Text>
                            <Text style={[styles.listBodyItemVal, styles.listBodyItemValRight]}>0.231</Text>
                        </View>
                        <View style={[styles.listBodyItem, styles.separate]}>
                            <Text style={[styles.listBodyItemVal, styles.listBodyItemValLeft, mStyles.mGreenColor]}>21332.3412</Text>
                            <Text style={[styles.listBodyItemVal, styles.listBodyItemValRight]}>0.231</Text>
                        </View>
                        <View style={[styles.listBodyItem, styles.separate]}>
                            <Text style={[styles.listBodyItemVal, styles.listBodyItemValLeft, mStyles.mGreenColor]}>21332.341</Text>
                            <Text style={[styles.listBodyItemVal, styles.listBodyItemValRight]}>0.231</Text>
                        </View>
                        {/* 列表循环体结束 */}
                    </View>
                </View>
                {/* 列表结束 */}
            </View>
        );
    }
}