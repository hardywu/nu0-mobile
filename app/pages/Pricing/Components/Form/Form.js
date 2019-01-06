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
    Modal,
    Picker
} from 'react-native';
import Anim from '../../../../public/animation'
import ASInput from '../../../../components/AS_Input/AS_Input';
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

    getTradeType = () => {
        const { data } = this.props;
        if(data.tradeType === 0) {
            return data.buy
        } else if(data.tradeType === 1) {
            return data.sell
        }
    }

    //处理买入卖出按钮释放事件
    handleFormTypeBtnRelease = (evt, index) => {
        const _this = this;
        const {
            data,
            setData
        } = this.props;

        // 如果点击的是买入
        if(index === 0) {
            data.tradeType = 0;
            setData(data);
        } else {
            // 如果点击的是卖出
            data.tradeType = 1;
            setData(data);
        }
    }

    //处理select的结果栏的释放事件
    handleFormSelectMainRelease = () => {
        const _this = this;
        const {
            data,
            setData
        } = this.props;
        const select = this.getTradeType().select;

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
    handleFormSelectOptionsRelease = (evt, index) => {
        const _this = this;
        const {
            data,
            setData
        } = this.props;
        const select = this.getTradeType().select;

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

    //处理价格input加号按钮释放事件
    handlePriceInputAddRelease = () => {
        const {
            data,
            setData
        } = this.props;
        this.getTradeType().priceInput.value = parseFloat((this.getTradeType().priceInput.value + 0.0001).toFixed(4));
        setData(data);
    }

    //处理价格input减号按钮释放事件
    handlePriceInputSubRelease = () => {
        const {
            data,
            setData
        } = this.props;
        this.getTradeType().priceInput.value = parseFloat((this.getTradeType().priceInput.value - 0.0001).toFixed(4));
        if(this.getTradeType().priceInput.value < 0) {
            this.getTradeType().priceInput.value = 0;
        }
        setData(data);
    }

    handlePriceInputValChange = (val) => {
        let {
            data,
            setData
        } = this.props;
        if(val) {
            val = val.replace(/[^(0-9)|(.)]/g,'');
            let valSplit = val.split('.');
            if(valSplit[1]) {
                if(valSplit[1].length >= 4) {
                    valSplit[1] = valSplit[1].slice(0, 4);
                }
            }
            val = valSplit.join('.');
            this.getTradeType().priceInput.value = parseFloat(val);
        } else {
            this.getTradeType().priceInput.value = 0;
        }
        setData(data);
    }

    //处理数量input加号按钮释放事件
    handleNumberInputAddRelease = () => {
        const {
            data,
            setData
        } = this.props;
        this.getTradeType().numberInput.value = parseFloat((this.getTradeType().numberInput.value + 0.000001).toFixed(6));
        setData(data);
    }

    //处理数量input减号按钮释放事件
    handleNumberInputSubRelease = () => {
        const {
            data,
            setData
        } = this.props;
        this.getTradeType().numberInput.value = parseFloat((this.getTradeType().numberInput.value - 0.000001).toFixed(6));
        if(this.getTradeType().numberInput.value < 0) {
            this.getTradeType().numberInput.value = 0;
        }
        setData(data);
    }

    handleNumberInputValChange = (val) => {
        let {
            data,
            setData
        } = this.props;
        if(val) {
            val = val.replace(/[^(0-9)|(.)]/g,'');
            let valSplit = val.split('.');
            if(valSplit[1]) {
                if(valSplit[1].length >= 6) {
                    valSplit[1] = valSplit[1].slice(0, 6);
                }
            }
            val = valSplit.join('.');
            this.getTradeType().numberInput.value = parseFloat(val);
        } else {
            this.getTradeType().numberInput.value = 0;
        }
        setData(data);
    }

    //处理买入卖出提交按钮释放事件
    handleArcBtnRelease = (evt) => {
        alert('提交');
    }

    render() {
        const {
            data
        } = this.props;
        let select = this.getTradeType().select;
        let priceInput = this.getTradeType().priceInput;
        let numberInput = this.getTradeType().numberInput;
        let tradeType = data.tradeType;
        //估值金额
        let valuation = this.getTradeType().valuation;
        //买入/卖出金额
        let price = priceInput.value * numberInput.value;

        let selectOptionsDOM = select.options.map((item, index) => {
            return (
                <Text
                    style={[
                        styles.formSelectOptionsItem,
                        item.code === select.value.code ? mStyles.mBlueColor : ''
                    ]}
                    key={index}
                    onStartShouldSetResponder={() => true}
                    onResponderRelease={evt => this.handleFormSelectOptionsRelease(evt, index)}
                >
                    {item.name}
                </Text>
            );
        });

        let submitBtnStyle = (() => {
            let tmp = {};
            //如果是买入
            if(tradeType === 0) {
                tmp.text = `买入${data.currencyCoupleDisplay.couplesId}`;
                if(price > 0) {
                    tmp.color = '#fff';
                    tmp.backgroundColor = Contract.GREEN_COLOR;
                } else {
                    tmp.color = '#fff';
                    tmp.backgroundColor = '#ccc';
                }
            } else {
                //如果是卖出
                tmp.text = `卖出${data.currencyCoupleDisplay.couplesId}`;
                if(price > 0) {
                    tmp.color = '#fff';
                    tmp.backgroundColor = Contract.RED_COLOR;
                } else {
                    tmp.color = '#fff';
                    tmp.backgroundColor = '#ccc';
                }
            }
            return tmp;
        })()
        
        return (
            <View style={styles.form}>
                {/* 买入/卖出按钮开始 */}
                <View style={styles.formTypeBtn}>
                    <Text style={[
                            styles.formTypeBtnText,
                            tradeType === 0 ? mStyles.mGreenBg : mStyles.mGreenColor
                        ]}
                        onStartShouldSetResponder={() => true}
                        onResponderRelease={evt => this.handleFormTypeBtnRelease(evt, 0)}
                    >
                        买入
                    </Text>
                    <Text style={[
                            styles.formTypeBtnText,
                            tradeType === 1 ? mStyles.mRedBg : mStyles.mRedColor
                        ]}
                        onStartShouldSetResponder={() => true}
                        onResponderRelease={evt => this.handleFormTypeBtnRelease(evt, 1)}
                    >
                        卖出
                    </Text>
                </View>
                {/* 买入/卖出按钮结束 */}
                {/* 下拉框开始 */}
                <View style={[styles.formSelect, styles.mt12]}>
                    <View 
                        style={styles.formSelectMain}
                        onStartShouldSetResponder={() => true}
                        onResponderRelease={evt => this.handleFormSelectMainRelease(evt)}
                    >
                        <Text style={styles.formSelectResult}>{select.value.name}</Text>
                        <Image style={styles.formSelectResultArrow} source={arrowIcon}></Image>
                    </View>
                    <Animated.View  style={[
                        styles.formSelectOptions,
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
                        {/* <Text style={styles.formSelectOptionsItem}>选项1</Text>
                        <Text style={styles.formSelectOptionsItem}>选项2</Text>
                        <Text style={styles.formSelectOptionsItem}>选项3</Text> */}
                    </Animated.View >
                </View>
                {/* 下拉框结束 */}
                {/* 输入框1开始 */}
                <View style={styles.mt12}>
                    <ASInput
                        placeholder={priceInput.placeholder}
                        value={String(priceInput.value)}
                        onAddRelease={this.handlePriceInputAddRelease}
                        onSubRelease={this.handlePriceInputSubRelease}
                        onValChange={val => this.handlePriceInputValChange(val)}
                    />
                </View>
                {/* 输入框1结束 */}
                {/* 估值开始 */}
                <View style={[styles.formValuation, styles.mt12]}>
                    <Text style={styles.formValuationText}>估值 {`$${valuation}`}</Text>
                </View>
                {/* 估值结束 */}
                {/* 输入框2开始 */}
                <View style={styles.mt12}>
                    <ASInput
                        placeholder={numberInput.placeholder}
                        value={String(numberInput.value)}
                        onAddRelease={this.handleNumberInputAddRelease}
                        onSubRelease={this.handleNumberInputSubRelease}
                        onValChange={val => this.handleNumberInputValChange(val)}
                    />
                </View>
                {/* 输入框2结束 */}
                {/* 百分比bar开始 */}
                <View style={styles.mt12}>
                    <PercentBar />
                </View>
                {/* 百分比bar结束 */}
                {/* 可用开始 */}
                <View style={[
                    styles.mt12, 
                    {
                        display: price > 0 ? 'flex' : 'none'
                    }
                ]}>
                    <View style={styles.formAbleWrap}>
                        <Text style={styles.formAbleName}>买入金额</Text>
                        <Text style={styles.formAbleVal}>{`${price.toFixed(2)}`}</Text>
                    </View>
                </View>
                {/* 可用结束 */}
                {/* 可用开始 */}
                <View style={[
                    styles.mt12,
                    {
                        display: price <= 0 ? 'flex' : 'none'
                    }
                ]}>
                    <View style={styles.formAbleWrap}>
                        <Text style={styles.formAbleName}>可用</Text>
                        <Text style={styles.formAbleVal}>
                            {tradeType === 0 ? `${data.buy.couldUsable.value}${data.currencyCoupleDisplay.pricingCurId}` : `${data.sell.couldUsable.value}${data.currencyCoupleDisplay.couplesId}`}
                        </Text>
                    </View>
                </View>
                {/* 可用结束 */}
                {/* 可买/卖开始 */}
                <View style={[
                    styles.mt12,
                    {
                        display: price <= 0 ? 'flex' : 'none'
                    }
                ]}>
                    <View style={styles.formAbleWrap}>
                        <Text style={styles.formAbleName}>{tradeType === 0 ? '可买' : '可卖'}</Text>
                        <Text style={styles.formAbleVal}>{tradeType === 0 ? `${data.buy.couldBuy.value}${data.currencyCoupleDisplay.couplesId}` : `${data.sell.couldSell.value}${data.currencyCoupleDisplay.pricingCurId}`}</Text>
                    </View>
                </View>
                {/* 可买/卖结束 */}
                {/* 按钮开始 */}
                <View style={styles.mt12}>
                    <ArcBtn
                        text={submitBtnStyle.text}
                        color={submitBtnStyle.color}
                        backgroundColor={submitBtnStyle.backgroundColor}
                        onRelease={this.handleArcBtnRelease}
                    />
                </View>
                {/* 百分比bar结束 */}
            </View>
        );
    }
}