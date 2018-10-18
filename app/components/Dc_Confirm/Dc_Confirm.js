/**
 * 公用 确认弹窗
 * ...props
 * 名称 类型 必填 说明
 * show Boolean false 是否显示弹窗
 * text String false 文本内容
 * yesBtnText String false 自定义yes按钮的文本
 * noBtnText String false 自定义no按钮的文本
 * onYesPress Function false 点击确定的回调
 * onNoPress Function false 点击取消的回调
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
    LayoutAnimation,
    Modal,
    TouchableOpacity
} from 'react-native';
import Constant from '../../public/constant'

import mStyles from '../../public/common_style';
import styles from './Dc_Confirm_Style';

export default class DcConfirm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            show,
            text,
            yesBtnText,
            noBtnText,
            onYesPress,
            onNoPress
        } = this.props;
        return (
            <Modal
                visible={show ? true : false}
                animationType='fade'
                presentationStyle='overFullScreen'
                transparent={true}
                onRequestClose={() => false}
            >
                <View
                    style={styles.modalWrap}
                >
                    <View style={styles.confirmWrap}>
                        {/* 文本内容开始 */}
                        <View style={styles.confirmContWrap}>
                            <Text style={styles.confirmContText}>{text}</Text>
                        </View>
                        {/* 文本内容结束 */}
                        {/* 按钮开始 */}
                        <View style={styles.confirmBtnWrap}>
                            <TouchableOpacity 
                                style={[mStyles.mGrayBorder, styles.confirmBtnBox]} 
                                activeOpacity={Constant.TOUCHABLE_OPACITY_ACTIVE_OPACITY}
                                onPress={evt => onNoPress(evt)}
                            >
                                <Text style={[mStyles.mBlackColor, styles.confirmBtnText]}>{noBtnText}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[mStyles.mBlueBg, mStyles.mBlueBorder, styles.confirmBtnBox]}
                                activeOpacity={Constant.TOUCHABLE_OPACITY_ACTIVE_OPACITY}
                                onPress={evt => onYesPress(evt)}
                            >
                                <Text style={[mStyles.mWhiteColor, styles.confirmBtnText]}>{yesBtnText}</Text>
                            </TouchableOpacity>
                        </View>
                        {/* 按钮结束 */}
                    </View>
                </View>
            </Modal>
        );
    }
}

DcConfirm.defaultProps = {
    show: false,
    text: '是否确定本次操作',
    yesBtnText: '确定',
    noBtnText: '取消',
    onYesPress: evt => false,
    onNoPress: evt => true
}