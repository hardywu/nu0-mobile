/**
 * 市场总览页
 */
import React, { Component } from 'react';
import {
    Button,
    Text,
    TextInput,
    View,
    StatusBar,
    ScrollView,
    Image,
    FlatList,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import Constant from '../../public/constant'
import Header from '../../components/Header/Header';
import * as rechargeCurAction from '../../actions/recharge_cur';

import mStyles from '../../public/common_style';
import styles from './Recharge_Style';

import arrowIcon from '../../static/imgs/arrow_gray.png'; //箭头图标
import qrCodeIcon from '../../static/imgs/qr_code.png'; //二维码

class Recharge extends Component {
    constructor(props) {
        super(props);
    }

    //处理 返回按钮 释放事件
    handleGoBackRelease = evt => {
        this.props.navigation.goBack();
    }

    //处理 币种选择 释放事件
    handleCurSelectionPress = evt => {
        this.props.navigation.navigate('RechargeCurSelection'); 
    }

    render() {
        const { rechargeCur } = this.props
        return (
            <View style={[mStyles.mFlex1, styles.wrap]}>
                <Header
                    title='充值'
                    onGoBackRelease={evt => this.handleGoBackRelease(evt)}
                />
                {/* 主体内容开始 */}
                <View style={styles.mainContainer}>
                    {/* 币种选择开始 */}
                    <View style={[mStyles.mt10, mStyles.mForm]}>
                        <View style={mStyles.mFormCenterContent}>
                            <TouchableHighlight
                                underlayColor={Constant.TOUCHABLE_HIGHLIGHT_UNDERLAY_COLOR}
                                onPress={evt => this.handleCurSelectionPress(evt)}
                            >
                                <View style={mStyles.mFormItem}>
                                    <Text style={mStyles.mFormLabel}>币种选择</Text>
                                    <View style={mStyles.mFormSelect}>
                                        <Text style={mStyles.mFormSelectText}>{rechargeCur.name}</Text>
                                        <Image style={mStyles.mFormSelectIcon} source={arrowIcon}/>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                    {/* 币种选择结束 */}
                    {/* 充值地址开始 */}
                    <View style={[mStyles.mt10, styles.rechargeWrap]}>
                        <View style={mStyles.mCenterContent}>
                            <View style={[mStyles.mt10, styles.rechargeImgWrap]}>
                                <Image style={styles.rechargeImg} source={qrCodeIcon}/>
                            </View>
                            <Text style={[mStyles.mt10, styles.rechargeUrlTitle]}>充币地址</Text>
                            <Text style={[styles.rechargeUrl]}>https://www.baidu.com/</Text>
                            <TouchableOpacity
                                style={[mStyles.mt10, styles.rechargeBtn]}
                                activeOpacity={Constant.TOUCHABLE_OPACITY_ACTIVE_OPACITY}
                            >
                                <Text style={styles.rechargeBtnText}>复制地址</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* 充值地址结束 */}
                    {/* 注意事项开始 */}
                    <View style={[mStyles.mt10, styles.noticeWrap]}>
                        <View style={mStyles.mFormCenterContent}>
                            <Text style={styles.noticeTitle}>注意事项</Text>
                            <Text style={[mStyles.mt10, styles.noticeCont]}>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</Text>
                        </View>
                    </View>
                    {/* 注意事项结束 */}
                </View>
                {/* 主体内容结束 */}
            </View>
        );
    }
}

export default connect(
    (state) => ({
        rechargeCur: state.rechargeCur
    }),
    (dispatch) => ({
        setRechargeCur: data => dispatch(rechargeCurAction.setRechargeCur(data))
    })
)(Recharge)