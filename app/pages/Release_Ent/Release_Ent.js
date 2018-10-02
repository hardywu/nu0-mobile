/**
 * 发布委托单页
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    StatusBar,
    ScrollView,
    TextInput,
    Image,
    Animated,
    Easing,
    FlatList
} from 'react-native';
import { SelectAnim, DcSelect } from '../../components/Dc_Select/Dc_Select'

import mStyles from '../../public/common_style';
import styles from './Release_Ent_Style';

import goBackIcon from '../../static/imgs/go_back.png'; //返回图标
import arrowIcon from '../../static/imgs/arrow_gray.png'; //箭头图标

let selectAnim1 = new SelectAnim();
let selectAnim2 = new SelectAnim();
export default class ReleaseEnt extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mainNav: [
                {
                    type: 0,
                    name: '我要购买',
                    isActive: true,
                }, {
                    type: 1,
                    name: '我要出售',
                    isActive: false,
                }
            ], // 一级导航
            buy: {
                pricingModeSelect: {
                    isShow: false,
                    value: {
                        code: 0,
                        name: '固定价格'
                    },
                    selectOptions: [
                        {
                            code: 0,
                            name: '固定价格'
                        }, {
                            code: 1,
                            name: '浮动价格'
                        }
                    ]
                }, //
            }, //我要购买
            sell: {
                pricingModeSelect: {
                    isShow: false,
                    value: {
                        code: 0,
                        name: '固定价格33'
                    },
                    selectOptions: [
                        {
                            code: 0,
                            name: '固定价格33'
                        }, {
                            code: 1,
                            name: '浮动价格33'
                        }
                    ]
                }, //
            } //我要出售
        }
    }

    //处理返回按钮释放事件
    handleGoBackRelease = (evt) => {
        this.props.navigation.goBack();
    }

    //处理一级导航释放事件
    handleMainNavRelease = (evt, index) => {
        let { mainNav } = this.state;

        mainNav.forEach((item, _index) => {
            if(index === _index) {
                item.isActive = true;
            } else {
                item.isActive = false;
            }
        });

        this.setState({ mainNav: mainNav });
    }

    //处理 购买-定价方式 释放事件
    handleBuyPricingModeSelectRelease = evt => {
        let { buy } = this.state;
        let select = buy.pricingModeSelect;

        if(select.isShow) {
            selectAnim1.scaleFadeOut().start(() => {
                select.isShow = false;
                this.setState({ buy: buy });
            });
        } else {
            select.isShow = true;
            this.setState({ buy: buy }, () => {
                selectAnim1.scaleFadeIn().start();
            });
        }
    }

    //处理 购买-定价方式选项 释放事件
    handleBuyPricingModeSelectOptionsRelease = obj => {
        let { buy } = this.state;
        let select = buy.pricingModeSelect;
        
        selectAnim1.scaleFadeOut().start(() => {
            select.isShow = false;
            select.value.name = obj.name;
            select.value.code = obj.code;
            this.setState({ buy: buy });
        });
    }

    //设置 购买-定价方式 的值
    setBuyPricingModeSelect = (pricingModeSelect, callback) => {
        let { buy } = this.state;
        buy.pricingModeSelect = pricingModeSelect;
        this.setState({ buy: buy }, () => {
            if(callback) {
                callback();
            } else {
                return false;
            }
        });
    }

    //处理 购买-定价方式选项modal层 释放事件
    handleBuyPricingModeSelectWrapRelease = evt => {
        let { buy } = this.state;
        let select = buy.pricingModeSelect;
        
        selectAnim1.scaleFadeOut().start(() => {
            select.isShow = false;
            this.setState({ buy: buy });
        });
    }
    
    //处理 出售-定价方式 释放事件
    handleSellPricingModeSelectRelease = evt => {
        let { sell } = this.state;
        let select = sell.pricingModeSelect;

        if(select.isShow) {
            selectAnim1.scaleFadeOut().start(() => {
                select.isShow = false;
                this.setState({ sell: sell });
            });
        } else {
            select.isShow = true;
            this.setState({ sell: sell }, () => {
                selectAnim1.scaleFadeIn().start();
            });
        }
    }

    //处理 出售-定价方式选项 释放事件
    handleSellPricingModeSelectOptionsRelease = obj => {
        let { sell } = this.state;
        let select = sell.pricingModeSelect;
        
        selectAnim1.scaleFadeOut().start(() => {
            select.isShow = false;
            select.value.name = obj.name;
            select.value.code = obj.code;
            this.setState({ sell: sell });
        });
    }

    //设置 出售-定价方式 的值
    setSellPricingModeSelect = (pricingModeSelect, callback) => {
        let { sell } = this.state;
        sell.pricingModeSelect = pricingModeSelect;
        this.setState({ sell: sell }, () => {
            if(callback) {
                callback();
            } else {
                return false;
            }
        });
    }

    //处理 购买-定价方式选项modal层 释放事件
    handleSellPricingModeSelectWrapRelease = evt => {
        let { sell } = this.state;
        let select = sell.pricingModeSelect;
        
        selectAnim1.scaleFadeOut().start(() => {
            select.isShow = false;
            this.setState({ sell: sell });
        });
    }

    render() {
        let {
            mainNav,
            buy,
            sell
        } = this.state;

        //一级导航DOM
        let mainNavActiveIndex = null;
        let mainNavDOM = mainNav.map((item, index) => {
            if(item.isActive === true) {
                mainNavActiveIndex = index;
            }
            return (
                <View
                    style={[
                        styles.navItem,
                        (item.isActive) && (item.type === 0) ? mStyles.mGreenBorderBottom : '',
                        (item.isActive) && (item.type === 1) ? mStyles.mRedBorderBottom : '',
                    ]}
                    key={index}
                    onStartShouldSetResponder={() => true}
                    onResponderRelease={evt => this.handleMainNavRelease(evt, index)}
                >
                    <Text style={[
                        styles.navItemText,
                        (item.isActive) && (item.type === 0) ? mStyles.mGreenColor : '',
                        (item.isActive) && (item.type === 1) ? mStyles.mRedColor : ''
                    ]}>
                        {item.name}
                    </Text>
                </View>
            )
        });
        
        return (
            <View style={mStyles.mFlex1}>
                {/* 头部开始 */}
                <View style={styles.head}>
                    <View style={[styles.headCenterContent, mStyles.mCenterContent]}>
                        <Image
                            style={styles.goBackIcon}
                            source={goBackIcon}
                            onStartShouldSetResponder={() => true}
                            onResponderRelease={evt => this.handleGoBackRelease(evt)}
                        />
                        <Text style={styles.headTitle}>发布委托单(USDT/CNY)</Text>
                        <Text style={styles.headPrice}>¥6.54</Text>
                    </View>
                    {/* 导航开始 */}
                    <View style={styles.nav}>
                        {mainNavDOM}
                    </View>
                    {/* 导航结束 */}
                </View>
                {/* 头部结束 */}
                {/* 主体内容开始 */}
                <View style={styles.body}>
                    {/* 购买开始 */}
                    <View style={{display: mainNavActiveIndex === 0 ? 'flex' : 'none'}}>
                        <View style={[mStyles.mCenterContent, styles.thead]}>
                            <Text style={styles.theadText}>价格</Text>
                            <Text style={styles.theadText}>当前盘口价格6.83CNY</Text>
                        </View>
                        <View style={styles.tbody}>
                            <View>
                                <View style={[mStyles.mCenterContent, styles.tbodyRow,styles.tbodyRowBorder]}>
                                    <View style={styles.tbodyRowLeft}>
                                        <Text style={styles.tbodyRowText}>定价方式</Text>
                                    </View>
                                    <View style={[styles.tbodyRowRight]}>
                                        <View
                                            ref='buyPricingModeSelect'
                                            style={styles.tbodySelect}
                                            collapsable={false}
                                            onStartShouldSetResponder={() => true}
                                            onResponderRelease={evt => this.handleBuyPricingModeSelectRelease(evt)}
                                        >
                                            <Text style={styles.tbodyRowText}>{buy.pricingModeSelect.value.name}</Text>
                                            <Image style={styles.tbodySelectlArrow} source={arrowIcon}/>
                                        </View>
                                        <DcSelect
                                            selectHeaderRef={this.refs.buyPricingModeSelect}
                                            dcStyle={selectAnim1.style}
                                            options={buy.pricingModeSelect}
                                            setOptions={this.setBuyPricingModeSelect}
                                            onOptionsRelease={obj => this.handleBuyPricingModeSelectOptionsRelease(obj)}
                                            onWrapRelease={evt => {this.handleBuyPricingModeSelectWrapRelease(evt)}}
                                        />
                                    </View>
                                </View>
                                <View style={[mStyles.mCenterContent, styles.tbodyRow]}>
                                    <View style={styles.tbodyRowLeft}>
                                        <Text style={styles.tbodyRowText}>交易价格</Text>
                                    </View>
                                    <View style={styles.tbodyRowRight}>
                                        <TextInput
                                            style={[styles.tbodyRowInput, styles.tbodyRowText]}
                                            underlineColorAndroid='transparent'
                                            placeholder={'请输入交易价格'}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={[mStyles.mCenterContent, styles.thead]}>
                            <Text style={styles.theadText}>交易数额</Text>
                        </View>
                        <View style={styles.tbody}>
                            <View style={[mStyles.mCenterContent, styles.tbodyRow, styles.tbodyRowBorder]}>
                                <View style={styles.tbodyRowLeft}>
                                    <Text style={styles.tbodyRowText}>数量(USDT)</Text>
                                </View>
                                <View style={styles.tbodyRowRight}>
                                    <TextInput
                                        style={[styles.tbodyRowInput, styles.tbodyRowText]}
                                        underlineColorAndroid='transparent'
                                        placeholder={'请输入购买数量'}
                                    />
                                </View>
                            </View>
                            <View style={[mStyles.mCenterContent, styles.tbodyRow]}>
                                <View style={styles.tbodyRowLeft}>
                                    <Text style={styles.tbodyRowText}>金额(CNY)</Text>
                                </View>
                                <View style={styles.tbodyRowRight}>
                                    <TextInput
                                        style={[styles.tbodyRowInput, styles.tbodyRowText]}
                                        underlineColorAndroid='transparent'
                                        placeholder={'最小交易额2000'}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={[mStyles.mCenterContent, styles.thead]}>
                            <Text style={styles.theadText}>对手限制</Text>
                        </View>
                        <View style={styles.tbody}>
                            <View style={[mStyles.mCenterContent, styles.tbodyRow, {height: 60}]}>
                                <View style={styles.tbodyRowLeft}>
                                    <Text style={styles.tbodyRowText}>交易方式</Text>
                                </View>
                                <View style={styles.tbodyRowRight}>
                                    <TextInput
                                        style={[styles.tbodyRowInput, styles.tbodyRowText]}
                                        multiline={true}
                                        underlineColorAndroid='transparent'
                                        placeholder={'1.订单有效期为15分钟，请及时付款并点击【我已付款】按钮 2.币由系统锁定托管，请安心下单'}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* 购买结束 */}
                    {/* 出售开始 */}
                    <View style={{display: mainNavActiveIndex === 1 ? 'flex' : 'none'}}>
                        <View style={[mStyles.mCenterContent, styles.thead]}>
                            <Text style={styles.theadText}>价格</Text>
                            <Text style={styles.theadText}>当前盘口价格6.83CNY</Text>
                        </View>
                        <View style={styles.tbody}>
                            <View>
                                <View style={[mStyles.mCenterContent, styles.tbodyRow,styles.tbodyRowBorder]}>
                                    <View style={styles.tbodyRowLeft}>
                                        <Text style={styles.tbodyRowText}>定价方式</Text>
                                    </View>
                                    <View style={[styles.tbodyRowRight]}>
                                        <View
                                            ref='sellPricingModeSelect'
                                            style={styles.tbodySelect}
                                            collapsable={false}
                                            onStartShouldSetResponder={() => true}
                                            onResponderRelease={evt => this.handleSellPricingModeSelectRelease(evt)}
                                        >
                                            <Text style={styles.tbodyRowText}>{sell.pricingModeSelect.value.name}</Text>
                                            <Image style={styles.tbodySelectlArrow} source={arrowIcon}/>
                                        </View>
                                        <DcSelect
                                            selectHeaderRef={this.refs.sellPricingModeSelect}
                                            dcStyle={selectAnim1.style}
                                            options={sell.pricingModeSelect}
                                            setOptions={this.setBuyPricingModeSelect}
                                            onOptionsRelease={obj => this.handleSellPricingModeSelectOptionsRelease(obj)}
                                            onWrapRelease={evt => {this.handleSellPricingModeSelectWrapRelease(evt)}}
                                        />
                                    </View>
                                </View>
                                <View style={[mStyles.mCenterContent, styles.tbodyRow]}>
                                    <View style={styles.tbodyRowLeft}>
                                        <Text style={styles.tbodyRowText}>交易价格</Text>
                                    </View>
                                    <View style={styles.tbodyRowRight}>
                                        <TextInput
                                            style={[styles.tbodyRowInput, styles.tbodyRowText]}
                                            underlineColorAndroid='transparent'
                                            placeholder={'请输入交易价格'}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={[mStyles.mCenterContent, styles.thead]}>
                            <Text style={styles.theadText}>交易数额</Text>
                        </View>
                        <View style={styles.tbody}>
                            <View style={[mStyles.mCenterContent, styles.tbodyRow, styles.tbodyRowBorder]}>
                                <View style={styles.tbodyRowLeft}>
                                    <Text style={styles.tbodyRowText}>数量(USDT)</Text>
                                </View>
                                <View style={styles.tbodyRowRight}>
                                    <TextInput
                                        style={[styles.tbodyRowInput, styles.tbodyRowText]}
                                        underlineColorAndroid='transparent'
                                        placeholder={'可用 0.0'}
                                    />
                                </View>
                            </View>
                            <View style={[mStyles.mCenterContent, styles.tbodyRow]}>
                                <View style={styles.tbodyRowLeft}>
                                    <Text style={styles.tbodyRowText}>金额(CNY)</Text>
                                </View>
                                <View style={styles.tbodyRowRight}>
                                    <TextInput
                                        style={[styles.tbodyRowInput, styles.tbodyRowText]}
                                        underlineColorAndroid='transparent'
                                        placeholder={'最小交易额2000'}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={[mStyles.mCenterContent, styles.thead]}>
                            <Text style={styles.theadText}>对手限制</Text>
                        </View>
                        <View style={styles.tbody}>
                            <View style={[mStyles.mCenterContent, styles.tbodyRow, {height: 60}]}>
                                <View style={styles.tbodyRowLeft}>
                                    <Text style={styles.tbodyRowText}>交易方式</Text>
                                </View>
                                <View style={styles.tbodyRowRight}>
                                    <TextInput
                                        style={[styles.tbodyRowInput, styles.tbodyRowText]}
                                        multiline={true}
                                        underlineColorAndroid='transparent'
                                        placeholder={'1.订单有效期为15分钟，请及时付款并点击【我已付款】按钮 2.币由系统锁定托管，请安心下单'}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* 出售开始 */}
                </View>
                {/* 主体内容结束 */}
                {/* 发布委托按钮开始 */}
                <View style={styles.submitWrap}>
                    <View style={styles.submitBtn}>
                        <Text style={styles.submitBtnText}>发布委托单</Text>
                    </View>
                </View>
                {/* 发布委托按钮结束 */}
            </View>
        );
    }
}