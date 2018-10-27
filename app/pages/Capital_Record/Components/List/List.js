/**
 * 资金记录页 列表组件
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
import styles from './List_Style';

export default class PendingOrderList extends Component {
    constructor(props) {
        super(props);
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
                        <Text style={[mStyles.mBlackColor, styles.itemRowText, mStyles.mTALeft]}>IOST</Text>
                        <Text style={[mStyles.mBlackColor, styles.itemRowText, mStyles.mTARight]}>100000.00000000</Text>
                    </View>
                    <View style={styles.itemRow}>
                        <Text style={[mStyles.mGrayColor, styles.itemRowText, mStyles.mTALeft]}>2018-07-14 13:00:00</Text>
                        <Text style={[mStyles.mGrayColor, styles.itemRowText, mStyles.mTARight]}>充值成功</Text>
                    </View>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={mStyles.mFlex1}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={[{}, {}]}
                    renderItem={this.renderListItem}
                    keyExtractor={(item, index) => String(index)}
                />
            </View>
        );
    }
}