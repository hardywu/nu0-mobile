/**
 * 合约页 挂单-列表组件
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
import PriceChangePop from '../../../../components/Price_Change_Pop/Price_Change_Pop';
import StopsPop from '../../../../components/Stops_Pop/Stops_Pop';

import mStyles from '../../../../public/common_style';
import styles from './Pending_Order_List_Style';

export default class PendingOrderList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cancellationConfirm: {
                show: false
            }, //撤单
            priceChangePop: {
                show: false
            }, //改价
            stopsPop: {
                show: false
            }, //预设止损
        }
    }

    //处理 撤单按钮 按压事件
    handleCancellationPress = evt => {
        //显示撤单确认弹窗
        let { cancellationConfirm } = this.state;
        cancellationConfirm.show = true;
        this.setState({ cancellationConfirm: cancellationConfirm });
    }

    //处理 撤单确认弹窗确定 按压事件
    handleCancellationYesPress = evt => {
        let { cancellationConfirm } = this.state;
        cancellationConfirm.show = false;
        this.setState({ cancellationConfirm: cancellationConfirm });
    }

    //处理 撤单确认弹窗取消 按压事件
    handleCancellationNoPress = evt => {
        let { cancellationConfirm } = this.state;
        cancellationConfirm.show = false;
        this.setState({ cancellationConfirm: cancellationConfirm });
    }

    //处理 改价按钮 按压事件
    handlePriceChangePress = evt => {
        //显示改价确认弹窗
        let { priceChangePop } = this.state;
        priceChangePop.show = true;
        this.setState({ priceChangePop: priceChangePop });
    }

    //处理 改价弹窗确定 按压事件
    handlePriceChangePopYesPress = evt => {
        let { priceChangePop } = this.state;
        priceChangePop.show = false;
        this.setState({ priceChangePop: priceChangePop });
    }

    //处理 改价关闭 按压事件
    handlePriceChangePopClosePress = evt => {
        let { priceChangePop } = this.state;
        priceChangePop.show = false;
        this.setState({ priceChangePop: priceChangePop });
    }

    //处理 预设止损按钮 按压事件
    handleStopsPress = evt => {
        let { stopsPop } = this.state;
        stopsPop.show = true;
        this.setState({ stopsPop: stopsPop });
    }

    //处理 预设止损确定 按压事件
    handleStopsPopYesPress = evt => {
        let { stopsPop } = this.state;
        stopsPop.show = false;
        this.setState({ stopsPop: stopsPop });
    }

    //处理 预设止损关闭 按压事件
    handleStopsPopClosePress = evt => {
        let { stopsPop } = this.state;
        stopsPop.show = false;
        this.setState({ stopsPop: stopsPop });
    }

    renderListItem = (item, index) => {
        return (
            <View style={[mStyles.mb10, styles.itemWrap]}>
                <View style={[mStyles.mCenterContent, styles.itemCenterContent]}>
                    <View style={styles.itemRow}>
                        <Text style={[mStyles.mBlackColor, styles.itemRowText]}>小1221212恒指1810</Text>
                        <Text style={[mStyles.mBlackColor, styles.itemRowText]}>256621.0</Text>
                        <Text style={[mStyles.mBlackColor, styles.itemRowText]}>买入</Text>
                        <Text style={[mStyles.mBlackColor, styles.itemRowText]}>1</Text>
                    </View>
                    <View style={styles.itemRow}>
                        <Text style={[mStyles.mGrayColor, styles.itemRowText]}>2018-12-21</Text>
                        <Text style={[mStyles.mGrayColor, styles.itemRowText]}>1</Text>
                        <Text style={[mStyles.mGrayColor, styles.itemRowText]}>开仓</Text>
                        <Text style={[mStyles.mGrayColor, styles.itemRowText]}>已挂单</Text>
                    </View>
                    <View style={styles.itemRow}>
                        <Text style={[mStyles.mBlackColor, styles.itemRowText]}>回撤跳:0</Text>
                        <Text style={[mStyles.mBlackColor, styles.itemRowText]}>止损价:0.0</Text>
                        <Text style={[mStyles.mBlackColor, styles.itemRowText]}>止盈价:0.0</Text>
                        <Text style={[mStyles.mBlackColor, styles.itemRowText]}>无</Text>
                    </View>
                </View>
                <View style={styles.itemBtnWrap}>
                    <View style={[mStyles.mCenterContent, styles.itemBtnCenterContent]}>
                        <TouchableOpacity
                            style={styles.itemBtnBox} 
                            activeOpacity={Constant.TOUCHABLE_OPACITY_ACTIVE_OPACITY}
                            onPress={evt => this.handleCancellationPress(evt)}
                        >
                            <Text style={styles.itemBtnText}>撤单</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.itemBtnBox} 
                            activeOpacity={Constant.TOUCHABLE_OPACITY_ACTIVE_OPACITY}
                            onPress={evt => this.handlePriceChangePress(evt)}
                        >
                            <Text style={styles.itemBtnText}>改价</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.itemBtnBox} 
                            activeOpacity={Constant.TOUCHABLE_OPACITY_ACTIVE_OPACITY}
                            onPress={evt => this.handleStopsPress(evt)}
                        >
                            <Text style={styles.itemBtnText}>预设止损</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    render() {
        let {
            cancellationConfirm,
            priceChangePop,
            stopsPop
        } = this.state;
        return (
            <View style={mStyles.mFlex1}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={[{}, {}]}
                    renderItem={this.renderListItem}
                    keyExtractor={(item, index) => String(index)}
                />
                <DcConfirm
                    show={cancellationConfirm.show}
                    text='是否确定撤单'
                    onYesPress={evt => this.handleCancellationYesPress(evt)}
                    onNoPress={evt => this.handleCancellationNoPress(evt)}
                />
                <PriceChangePop
                    show={priceChangePop.show}
                    onYesPress={evt => this.handlePriceChangePopYesPress(evt)}
                    onClosePress={evt => this.handlePriceChangePopClosePress(evt)}
                />
                <StopsPop
                    show={stopsPop.show}
                    onYesPress={evt => this.handleStopsPopYesPress(evt)}
                    onClosePress={evt => this.handleStopsPopClosePress(evt)}
                />
            </View>
        );
    }
}