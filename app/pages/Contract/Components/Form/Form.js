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
import { SelectAnim, DcSelect } from '../../../../components/Dc_Select/Dc_Select'
import Check from './Check/Check';
import SelectBox from './Select_Box/Select_Box';

import Contract from '../../../../public/constant';
import mStyles from '../../../../public/common_style';
import styles from './Form_Style';

import arrowIcon from '../../../../static/imgs/arrow_gray.png'; //菜单按钮

let selectAnim = new SelectAnim();

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tradeTypeSelect: {
                isShow: false,
                value: {
                    code: 0,
                    name: '限价单'
                },
                selectOptions: [
                    {
                        code: 0,
                        name: '限价单'
                    }, {
                        code: 1,
                        name: '计划委托'
                    }, {
                        code: 2,
                        name: '跟踪委托'
                    }, {
                        code: 3,
                        name: '冰山委托'
                    }, {
                        code: 4,
                        name: '时间加权委托'
                    }
                ]
            }, //类型下拉框
            positionType: {
                value: 0,
                options: [
                    {
                        code: 0,
                        name: '开仓'
                    }, {
                        code: 1,
                        name: '平仓'
                    }
                ]
            }, //开仓/平仓单选
            priceType: {
                value: 0,
                options: [
                    {
                        code: 0,
                        name: '对手价'
                    }, {
                        code: 1,
                        name: '买一价'
                    }, {
                        code: 2,
                        name: '卖一价'
                    }
                ]
            }, //价格类型单选 0:对手价 1:买一价 2:卖一价
            priceInput: {
                name: '价格',
                value: '23.32',
                unit: 'CNY'
            }, //价格输入框
            numInput: {
                name: '数量',
                value: '23.3212321',
                unit: 'XRP'
            }, //数量输入框
            triggerPriceInput: {
                name: '触发价格',
                value: '0',
                unit: 'CNY'
            }, //触发价格输入框
            entrustPriceInput: {
                name: '委托价格',
                value: '0',
                unit: 'CNY'
            }, //触发价格输入框
            activationPriceInput: {
                name: '激活价格',
                value: '0',
                unit: 'CNY'
            }, //激活价格输入框
            amplitudeInput: {
                name: '回调幅度',
                value: '0',
                unit: '%'
            }, //回调幅度输入框
            entrustDepthInput: {
                name: '委托深度',
                value: '0',
                unit: '%'
            }, //委托深度输入框
            entrustTotalInput: {
                name: '委托总数',
                value: '10',
                unit: 'XRP'
            }, //委托总数输入框
            singleMeanValueInput: {
                name: '单笔均值',
                value: '20',
                unit: 'XRP'
            }, //单笔均值输入框
            priceLimitInput: {
                name: '价格限制',
                value: '30',
                unit: 'CNY'
            }, //价格限制输入框
            scavengingRangeInput: {
                name: '扫单范围',
                value: '40',
                unit: '%'
            }, //扫单范围输入框
            scavengingRatioInput: {
                name: '扫单比例',
                value: '50',
                unit: '%'
            }, //扫单范围输入框
            singleLimitInput: {
                name: '单笔上限',
                value: '60',
                unit: 'XRP'
            }, //单笔上限输入框
            entrustIntervalInput: {
                name: '委托间隔',
                value: '70',
                unit: 'XRP'
            }, //委托间隔输入框
        }
    }

    setTradeTypeSelect = (tradeTypeSelect, callback) => {
        this.setState({ tradeTypeSelect: tradeTypeSelect }, () => {
            if(callback) {
                callback();
            } else {
                return false;
            }
        });
    }

    handleTradeTypeSelectRelease = (evt) => {
        let { tradeTypeSelect } = this.state;

        if(tradeTypeSelect.isShow) {
            selectAnim.scaleFadeOut().start(() => {
                tradeTypeSelect.isShow = false;
                this.setState({ tradeTypeSelect: tradeTypeSelect });
            });
        } else {
            tradeTypeSelect.isShow = true;
            this.setState({ tradeTypeSelect: tradeTypeSelect }, () => {
                selectAnim.scaleFadeIn().start();
            });
        }
    }

    //处理类型下拉框选项释放事件
    handleTradeTypeSelectOptionsRelease = (obj) => {
        let { tradeTypeSelect } = this.state;
        
        selectAnim.scaleFadeOut().start(() => {
            tradeTypeSelect.isShow = false;
            tradeTypeSelect.value.name = obj.name;
            tradeTypeSelect.value.code = obj.code;
            this.setState({ tradeTypeSelect: tradeTypeSelect });
        });
    }

    //处理买入按钮释放事件
    handleSellBtnRelease = evt => {
        alert('买入');
    }

    //处理卖出按钮释放事件
    handleSellBtnRelease = evt => {
        alert('卖出');
    }

    //处理平仓/开仓单选点击事件
    handlePositionRelease = (index) => {
        let { positionType } = this.state;

        positionType.value = index;
        this.setState({ positionType: positionType });
    }

    //处理对手价/买一价/卖一价单选点击事件
    handlePriceTypeRelease = (index) => {
        let { priceType } = this.state;

        if(priceType.value === index) {
            priceType.value = null;
        } else {
            priceType.value = index;
        }
        this.setState({ priceType: priceType });
    }

    //处理价格输入框内容改变事件
    handlePriceInputChange = val => {
        let { priceInput } = this.state;

        priceInput.value = val;
        this.setState({ priceInput: priceInput });
    }

    //处理数量输入框内容改变事件
    handleNumInputChange = val => {
        let { numInput } = this.state;

        numInput.value = val;
        this.setState({ numInput: numInput });
    }

    //处理触发价格输入框内容改变事件
    handleTriggerPriceInputChange = val => {
        let { triggerPriceInput } = this.state;

        triggerPriceInput.value = val;
        this.setState({ triggerPriceInput: triggerPriceInput });
    }

    //处理委托价格输入框内容改变事件
    handleEntrustPriceInputChange = val => {
        let { entrustPriceInput } = this.state;

        entrustPriceInput.value = val;
        this.setState({ entrustPriceInput: entrustPriceInput });
    }

    //处理激活价格输入框内容改变事件
    handleActivationPriceInputChange = val => {
        let { activationPriceInput } = this.state;

        activationPriceInput.value = val;
        this.setState({ activationPriceInput: activationPriceInput });
    }

    //处理回调幅度输入框内容改变事件
    handleAmplitudeInputChange = val => {
        let { amplitudeInput } = this.state;

        amplitudeInput.value = val;
        this.setState({ amplitudeInput: amplitudeInput });
    }

    //处理委托深度输入框内容改变事件
    handleEntrustDepthInputChange = val => {
        let { entrustDepthInput } = this.state;

        entrustDepthInput.value = val;
        this.setState({ entrustDepthInput: entrustDepthInput });
    }

    //处理委托总数输入框内容改变事件
    handleEntrustTotalInputChange = val => {
        let { entrustTotalInput } = this.state;

        entrustTotalInput.value = val;
        this.setState({ entrustTotalInput: entrustTotalInput });
    }

    //处理单笔均值输入框内容改变事件
    handleSingleMeanValueInputChange = val => {
        let { singleMeanValueInput } = this.state;

        singleMeanValueInput.value = val;
        this.setState({ singleMeanValueInput: singleMeanValueInput });
    }

    //处理价格限制输入框内容改变事件
    handlePriceLimitInputChange = val => {
        let { priceLimitInput } = this.state;

        priceLimitInput.value = val;
        this.setState({ priceLimitInput: priceLimitInput });
    }

    //处理扫单范围输入框内容改变事件
    handleScavengingRangeInputChange = val => {
        let { scavengingRangeInput } = this.state;

        scavengingRangeInput.value = val;
        this.setState({ scavengingRangeInput: scavengingRangeInput });
    }

    //处理扫单范围输入框内容改变事件
    handleScavengingRatioInputChange = val => {
        let { scavengingRatioInput } = this.state;

        scavengingRatioInput.value = val;
        this.setState({ scavengingRatioInput: scavengingRatioInput });
    }

    //处理单笔上限输入框内容改变事件
    handleSingleLimitInputChange = val => {
        let { singleLimitInput } = this.state;

        singleLimitInput.value = val;
        this.setState({ singleLimitInput: singleLimitInput });
    }

    //处理委托间隔输入框内容改变事件
    handleEntrustIntervalInputChange = val => {
        let { entrustIntervalInput } = this.state;

        entrustIntervalInput.value = val;
        this.setState({ entrustIntervalInput: entrustIntervalInput });
    }

    render() {
        let {
            tradeTypeSelect,
            positionType,
            priceType,
            priceInput,
            numInput,
            triggerPriceInput,
            entrustPriceInput,
            activationPriceInput,
            amplitudeInput,
            entrustDepthInput,
            entrustTotalInput,
            singleMeanValueInput,
            priceLimitInput,
            scavengingRangeInput,
            scavengingRatioInput,
            singleLimitInput,
            entrustIntervalInput
        } = this.state;

        return (
            <View style={[styles.form]}>
                <View style={styles.formSelect}>
                    <View
                        style={styles.formSelectMain}
                        onStartShouldSetResponder={() => true}
                        onResponderRelease={evt => this.handleTradeTypeSelectRelease(evt)}
                    >
                        <Text style={styles.formSelectResult}>{tradeTypeSelect.value.name}</Text>
                        <Image style={styles.formSelectResultArrow} source={arrowIcon}></Image>
                    </View>
                    <View style={styles.formSelectOptions}>
                        <DcSelect
                            dcStyle={selectAnim.style}
                            options={tradeTypeSelect}
                            setOptions={this.setTradeTypeSelect}
                            onOptionsRelease={obj => this.handleTradeTypeSelectOptionsRelease(obj)}
                        />
                    </View>
                </View>
                <View style={[styles.fromItem, styles.mt12]}>
                    <View style={styles.inputInline2}>
                        <Check
                            text={positionType.options[0].name}
                            isActive={positionType.value === 0 ? true : false}
                            onRelease={() => this.handlePositionRelease(0)}
                        />
                    </View>
                    <View style={styles.inputInline2}>
                        <Check
                            text={positionType.options[1].name}
                            isActive={positionType.value === 1 ? true : false}
                            onRelease={() => this.handlePositionRelease(1)}
                        />
                    </View>
                </View>
                <View style={[styles.fromItem, styles.mt12]}>
                    <View style={styles.inputInline2}>
                        <SelectBox />
                    </View>
                    <View style={styles.inputInline2}>
                        <SelectBox />
                    </View>
                </View>
                {/* 限价单的form内容开始 */}
                <View style={{display: tradeTypeSelect.value.code === 0 ? 'flex' : 'none'}}>
                    <View style={[styles.fromItem, styles.mt12]}>
                        <View style={styles.inputInline1}>
                            <UnitInput
                                name={priceInput.name}
                                value={priceInput.value}
                                unit={priceInput.unit}
                                onChange={val => this.handlePriceInputChange(val)}
                            />
                        </View>
                    </View>
                    <View style={[styles.fromItem, styles.mt12]}>
                        <View style={styles.inputInline3}>
                            <Check
                                text={priceType.options[0].name}
                                isActive={priceType.value === 0 ? true : false}
                                onRelease={() => this.handlePriceTypeRelease(0)}
                            />
                        </View>
                        <View style={styles.inputInline3}>
                            <Check
                                text={priceType.options[1].name}
                                isActive={priceType.value === 1 ? true : false}
                                onRelease={() => this.handlePriceTypeRelease(1)}
                            />
                        </View>
                        <View style={styles.inputInline3}>
                            <Check
                                text={priceType.options[2].name}
                                isActive={priceType.value === 2 ? true : false}
                                onRelease={() => this.handlePriceTypeRelease(2)}
                            />
                        </View>
                    </View>
                    <View style={[styles.fromItem, styles.mt12]}>
                        <View style={styles.inputInline1}>
                            <UnitInput 
                                name={numInput.name}
                                value={numInput.value}
                                unit={numInput.unit}
                                onChange={val => this.handleNumInputChange(val)}
                            />
                        </View>
                    </View>
                </View>
                {/* 限价单的form内容结束 */}
                {/* 计划委托的form内容开始 */}
                <View style={{display: tradeTypeSelect.value.code === 1 ? 'flex' : 'none'}}>
                    <View style={[styles.fromItem, styles.mt12]}>
                        <View style={styles.inputInline1}>
                            <UnitInput
                                name={triggerPriceInput.name}
                                value={triggerPriceInput.value}
                                unit={triggerPriceInput.unit}
                                onChange={val => this.handleTriggerPriceInputChange(val)}
                            />
                        </View>
                    </View>
                    <View style={[styles.fromItem, styles.mt12]}>
                        <View style={styles.inputInline1}>
                            <UnitInput
                                name={entrustPriceInput.name}
                                value={entrustPriceInput.value}
                                unit={entrustPriceInput.unit}
                                onChange={val => this.handleEntrustPriceInputChange(val)}
                            />
                        </View>
                    </View>
                    <View style={[styles.fromItem, styles.mt12]}>
                        <View style={styles.inputInline1}>
                            <UnitInput 
                                name={numInput.name}
                                value={numInput.value}
                                unit={numInput.unit}
                                onChange={val => this.handleNumInputChange(val)}
                            />
                        </View>
                    </View>
                </View>
                {/* 计划委托的form内容结束 */}
                {/* 跟踪委托的form内容开始 */}
                <View style={{display: tradeTypeSelect.value.code === 2 ? 'flex' : 'none'}}>
                    <View style={[styles.fromItem, styles.mt12]}>
                        <View style={styles.inputInline1}>
                            <UnitInput
                                name={activationPriceInput.name}
                                value={activationPriceInput.value}
                                unit={activationPriceInput.unit}
                                onChange={val => this.handleActivationPriceInputChange(val)}
                            />
                        </View>
                    </View>
                    <View style={[styles.fromItem, styles.mt12]}>
                        <View style={styles.inputInline1}>
                            <UnitInput
                                name={amplitudeInput.name}
                                value={amplitudeInput.value}
                                unit={amplitudeInput.unit}
                                onChange={val => this.handleAmplitudeInputChange(val)}
                            />
                        </View>
                    </View>
                    <View style={[styles.fromItem, styles.mt12]}>
                        <View style={styles.inputInline1}>
                            <UnitInput 
                                name={numInput.name}
                                value={numInput.value}
                                unit={numInput.unit}
                                onChange={val => this.handleNumInputChange(val)}
                            />
                        </View>
                    </View>
                </View>
                {/* 跟踪委托的form内容结束 */}
                {/* 冰山委托的form内容开始 */}
                <View style={{display: tradeTypeSelect.value.code === 3 ? 'flex' : 'none'}}>
                    <View style={[styles.fromItem, styles.mt12]}>
                        <View style={styles.inputInline1}>
                            <UnitInput
                                name={entrustDepthInput.name}
                                value={entrustDepthInput.value}
                                unit={entrustDepthInput.unit}
                                onChange={val => this.handleEntrustDepthInputChange(val)}
                            />
                        </View>
                    </View>
                    <View style={[styles.fromItem, styles.mt12]}>
                        <View style={styles.inputInline1}>
                            <UnitInput
                                name={entrustTotalInput.name}
                                value={entrustTotalInput.value}
                                unit={entrustTotalInput.unit}
                                onChange={val => this.handleEntrustTotalInputChange(val)}
                            />
                        </View>
                    </View>
                    <View style={[styles.fromItem, styles.mt12]}>
                        <View style={styles.inputInline1}>
                            <UnitInput 
                                name={singleMeanValueInput.name}
                                value={singleMeanValueInput.value}
                                unit={singleMeanValueInput.unit}
                                onChange={val => this.handleSingleMeanValueInputChange(val)}
                            />
                        </View>
                    </View>
                    <View style={[styles.fromItem, styles.mt12]}>
                        <View style={styles.inputInline1}>
                            <UnitInput 
                                name={priceLimitInput.name}
                                value={priceLimitInput.value}
                                unit={priceLimitInput.unit}
                                onChange={val => this.handlePriceLimitInputChange(val)}
                            />
                        </View>
                    </View>
                </View>
                {/* 冰山委托的form内容结束 */}
                {/* 时间加权委托的form内容开始 */}
                <View style={{display: tradeTypeSelect.value.code === 4 ? 'flex' : 'none'}}>
                    <View style={[styles.fromItem, styles.mt12]}>
                        <View style={styles.inputInline1}>
                            <UnitInput
                                name={scavengingRangeInput.name}
                                value={scavengingRangeInput.value}
                                unit={scavengingRangeInput.unit}
                                onChange={val => this.handleScavengingRangeInputChange(val)}
                            />
                        </View>
                    </View>
                    <View style={[styles.fromItem, styles.mt12]}>
                        <View style={styles.inputInline1}>
                            <UnitInput
                                name={scavengingRatioInput.name}
                                value={scavengingRatioInput.value}
                                unit={scavengingRatioInput.unit}
                                onChange={val => this.handleScavengingRatioInputChange(val)}
                            />
                        </View>
                    </View>
                    <View style={[styles.fromItem, styles.mt12]}>
                        <View style={styles.inputInline1}>
                            <UnitInput 
                                name={entrustTotalInput.name}
                                value={entrustTotalInput.value}
                                unit={entrustTotalInput.unit}
                                onChange={val => this.handleEntrustTotalInputChange(val)}
                            />
                        </View>
                    </View>
                    <View style={[styles.fromItem, styles.mt12]}>
                        <View style={styles.inputInline1}>
                            <UnitInput 
                                name={singleLimitInput.name}
                                value={singleLimitInput.value}
                                unit={singleLimitInput.unit}
                                onChange={val => this.handleSingleLimitInputChange(val)}
                            />
                        </View>
                    </View>
                    <View style={[styles.fromItem, styles.mt12]}>
                        <View style={styles.inputInline1}>
                            <UnitInput 
                                name={priceLimitInput.name}
                                value={priceLimitInput.value}
                                unit={priceLimitInput.unit}
                                onChange={val => this.handlePriceLimitInputChange(val)}
                            />
                        </View>
                    </View>
                    <View style={[styles.fromItem, styles.mt12]}>
                        <View style={styles.inputInline1}>
                            <UnitInput 
                                name={entrustIntervalInput.name}
                                value={entrustIntervalInput.value}
                                unit={entrustIntervalInput.unit}
                                onChange={val => this.handleEntrustIntervalInputChange(val)}
                            />
                        </View>
                    </View>
                </View>
                {/* 时间加权委托的form内容结束 */}
                <View style={[styles.fromItem, styles.mt12]}>
                    <View style={styles.inputInline1}>
                        <ArcBtn
                            text={positionType.value === 0 ? '买入开多（看涨）' : '买入平空'}
                            color={'#fff'}
                            backgroundColor={'#ccc'}
                            onRelease={evt => this.handleBuyBtnRelease(evt)}
                        />
                    </View>
                </View>
                <View style={[styles.fromItem, styles.mt12]}>
                    <View style={styles.inputInline2}>
                        <View style={styles.fromItemNotice}>
                            <Text style={[styles.fromItemNoticeText, styles.fromItemNoticeName]}>可用</Text>
                            <Text style={[styles.fromItemNoticeText, styles.fromItemNoticeVal]}>0</Text>
                        </View>
                    </View>
                    <View style={styles.inputInline2}>
                        <View style={styles.fromItemNotice}>
                            <Text style={[styles.fromItemNoticeText, styles.fromItemNoticeName]}>可开多</Text>
                            <Text style={[styles.fromItemNoticeText, styles.fromItemNoticeVal]}>12323121321</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.fromItem, styles.mt12]}>
                    <View style={styles.inputInline1}>
                        <ArcBtn
                            text={positionType.value === 0 ? '卖出开空（看跌）' : '卖出平多'}
                            color={'#fff'}
                            backgroundColor={'#ccc'}
                            onRelease={evt => this.handleSellBtnRelease(evt)}
                        />
                    </View>
                </View>
                <View style={[styles.fromItem, styles.mt12]}>
                    <View style={styles.inputInline2}>
                        <View style={styles.fromItemNotice}>
                            <Text style={[styles.fromItemNoticeText, styles.fromItemNoticeName]}>可用</Text>
                            <Text style={[styles.fromItemNoticeText, styles.fromItemNoticeVal]}>0</Text>
                        </View>
                    </View>
                    <View style={styles.inputInline2}>
                        <View style={styles.fromItemNotice}>
                            <Text style={[styles.fromItemNoticeText, styles.fromItemNoticeName]}>可开多</Text>
                            <Text style={[styles.fromItemNoticeText, styles.fromItemNoticeVal]}>123</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}