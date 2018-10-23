/**
 * 合约页 持仓-列表组件
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
    Picker,
    TouchableOpacity
} from 'react-native';
import Constant from '../../../../public/constant';
import DcConfirm from '../../../../components/Dc_Confirm/Dc_Confirm';

import mStyles from '../../../../public/common_style';
import styles from './Position_List_Style';

export default class PositionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parityConfirm: {
                show: false
            }, //对价平确认弹窗
            marketPriceConfirm: {
                show: false
            }, //市价平确认弹窗
            backhandConfirm: {
                show: false
            }, //反手确认弹窗
        }
    }

    //处理 对平价按钮 按压事件
    handleParityPress = evt => {
        let { parityConfirm } = this.state;
        parityConfirm.show = true;
        this.setState({ parityConfirm: parityConfirm });
    }

    //处理 对平价确认弹窗确定 按压事件
    handleParityNoPress = evt => {
        let { parityConfirm } = this.state;
        parityConfirm.show = false;
        this.setState({ parityConfirm: parityConfirm });
    }

    //处理 对平价确认弹窗取消 按压事件
    handleParityYesPress = evt => {
        let { parityConfirm } = this.state;
        parityConfirm.show = false;
        this.setState({ parityConfirm: parityConfirm });
    }

    //处理 市价平按钮 按压事件
    handleMarketPricePress = evt => {
        let { marketPriceConfirm } = this.state;
        marketPriceConfirm.show = true;
        this.setState({ marketPriceConfirm: marketPriceConfirm });
    }

    //处理 市价平确认弹窗确定 按压事件
    handleMarketPriceNoPress = evt => {
        let { marketPriceConfirm } = this.state;
        marketPriceConfirm.show = false;
        this.setState({ marketPriceConfirm: marketPriceConfirm });
    }

    //处理 市价平确认弹窗取消 按压事件
    handleMarketPriceYesPress = evt => {
        let { marketPriceConfirm } = this.state;
        marketPriceConfirm.show = false;
        this.setState({ marketPriceConfirm: marketPriceConfirm });
    }

    //处理 反手按钮 按压事件
    handleBackhandPress = evt => {
        let { backhandConfirm } = this.state;
        backhandConfirm.show = true;
        this.setState({ backhandConfirm: backhandConfirm });
    }

    //处理 反手确认弹窗确定 按压事件
    handleBackhandNoPress = evt => {
        let { backhandConfirm } = this.state;
        backhandConfirm.show = false;
        this.setState({ backhandConfirm: backhandConfirm });
    }

    //处理 反手确认弹窗取消 按压事件
    handleBackhandYesPress = evt => {
        let { backhandConfirm } = this.state;
        backhandConfirm.show = false;
        this.setState({ backhandConfirm: backhandConfirm });
    }

    renderListItem = (item, index) => {
        return (
            <View style={[mStyles.mb10, styles.itemWrap]}>
                <View style={[mStyles.mCenterContent, styles.itemCenterContent]}>
                    <View style={styles.itemRow}>
                        <Text style={[mStyles.mBlackColor, styles.itemRowText]}>小1221212恒指1810</Text>
                        <Text style={[mStyles.mBlackColor, styles.itemRowText]}>256621.0</Text>
                        <Text style={[mStyles.mBlackColor, styles.itemRowText]}>34</Text>
                        <Text style={[mStyles.mBlackColor, styles.itemRowText]}>zy0161</Text>
                    </View>
                    <View style={styles.itemRow}>
                        <Text style={[mStyles.mRedColor, styles.itemRowText]}>买入</Text>
                        <Text style={[mStyles.mGreenColor, styles.itemRowText]}>-2124CNY</Text>
                        <Text style={[mStyles.mBlackColor, styles.itemRowText]}>24</Text>
                        <Text style={[mStyles.mBlackColor, styles.itemRowText]}>无</Text>
                    </View>
                </View>
                <View style={styles.itemBtnWrap}>
                    <View style={[mStyles.mCenterContent, styles.itemBtnCenterContent]}>
                        <TouchableOpacity
                            style={styles.itemBtnBox} 
                            activeOpacity={Constant.TOUCHABLE_OPACITY_ACTIVE_OPACITY}
                            onPress={evt => this.handleParityPress(evt)}
                        >
                            <Text style={styles.itemBtnText}>对价平</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.itemBtnBox} 
                            activeOpacity={Constant.TOUCHABLE_OPACITY_ACTIVE_OPACITY}
                            onPress={evt => this.handleMarketPricePress(evt)}
                        >
                            <Text style={styles.itemBtnText}>市价平</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemBtnBox} activeOpacity={Constant.TOUCHABLE_OPACITY_ACTIVE_OPACITY}>
                            <Text style={styles.itemBtnText}>止损</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.itemBtnBox}
                            activeOpacity={Constant.TOUCHABLE_OPACITY_ACTIVE_OPACITY}
                            onPress={evt => this.handleBackhandPress(evt)}
                        >
                            <Text style={styles.itemBtnText}>反手</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemBtnBox}  activeOpacity={Constant.TOUCHABLE_OPACITY_ACTIVE_OPACITY}>
                            <Text style={styles.itemBtnText}>行情</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    render() {
        let {
            parityConfirm,
            marketPriceConfirm,
            backhandConfirm
        } = this.state;
        return (
            <View style={mStyles.mFlex1}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={[{}, {}, {}, {}, {}]}
                    renderItem={this.renderListItem}
                    keyExtractor={(item, index) => String(index)}
                />
                <DcConfirm
                    show={parityConfirm.show}
                    text='是否确定对价平'
                    onYesPress={evt => this.handleParityYesPress(evt)}
                    onNoPress={evt => this.handleParityNoPress(evt)}
                />
                <DcConfirm
                    show={marketPriceConfirm.show}
                    text='是否确定市价平'
                    onYesPress={evt => this.handleMarketPriceNoPress(evt)}
                    onNoPress={evt => this.handleMarketPriceYesPress(evt)}
                />
                <DcConfirm
                    show={backhandConfirm.show}
                    text='是否确定反手'
                    onYesPress={evt => this.handleBackhandNoPress(evt)}
                    onNoPress={evt => this.handleBackhandYesPress(evt)}
                />
            </View>
        );
    }
}