/**
 * 公用 改价弹窗
 * ...props
 * 名称 类型 必填 说明
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
    LayoutAnimation ,
    Modal,
    TouchableOpacity
} from 'react-native';
import Constant from '../../public/constant';
import ASInput from '../../components/AS_Input/AS_Input';

import mStyles from '../../public/common_style';
import styles from './Price_Change_Pop_Style';

import closeIcon from '../../static/imgs/close.png';

export default class PriceChangePop extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            show,
            onYesPress,
            onClosePress
        } = this.props;
        return (
            <Modal
                visible={show ? true : false}
                animationType='fade'
                presentationStyle='overFullScreen'
                transparent={true}
                onRequestClose={() => false}
            >
                <View style={mStyles.mModalWrap}>
                    <View style={mStyles.mPopWrap}>
                        <View style={mStyles.mPopHead}>
                            <Text style={mStyles.mPopHeadText}>改价</Text>
                            <Image
                                style={mStyles.mPopHeadClose}
                                source={closeIcon}
                                onStartShouldSetResponder={() => true}
                                onResponderRelease={evt => onClosePress(evt)}
                            />
                        </View>
                        <View style={mStyles.mPopBody}>
                            <View style={styles.row}>
                                <View style={styles.rowItem}>
                                    <Text style={styles.rowItemKey}>交易账户:</Text>
                                    <Text style={styles.rowItemVal}>ddsa</Text>
                                </View>
                                <View style={styles.rowItem}>
                                    <Text style={styles.rowItemKey}>合约:</Text>
                                    <Text style={styles.rowItemVal}>MHI8</Text>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={styles.rowItem}>
                                    <Text style={styles.rowItemKey}>交易账户:</Text>
                                    <Text style={styles.rowItemVal}>ddsa</Text>
                                </View>
                                <View style={styles.rowItem}>
                                    <Text style={styles.rowItemKey}>合约:</Text>
                                    <Text style={styles.rowItemVal}>MHI8</Text>
                                </View>
                            </View>
                            <View style={styles.priceBtnWrap}>
                                <TouchableOpacity activeOpacity={Constant.TOUCHABLE_OPACITY_ACTIVE_OPACITY}>
                                    <Text style={styles.priceBtnText}>排队价</Text>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={Constant.TOUCHABLE_OPACITY_ACTIVE_OPACITY}>
                                    <Text style={styles.priceBtnText}>最新价</Text>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={Constant.TOUCHABLE_OPACITY_ACTIVE_OPACITY}>
                                    <Text style={styles.priceBtnText}>对手价</Text>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={Constant.TOUCHABLE_OPACITY_ACTIVE_OPACITY}>
                                    <Text style={styles.priceBtnText}>市场价格</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>价格</Text>
                                <View style={styles.ASInputWrap}>
                                    <ASInput
                                        placeholder='价格'
                                        value='0'
                                    />
                                </View>
                                <TouchableOpacity activeOpacity={Constant.TOUCHABLE_OPACITY_ACTIVE_OPACITY}>
                                    <Text style={[styles.priceBtnText, mStyles.mGreenColor]}>卖出</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={mStyles.mPopFoot}>
                            <TouchableOpacity
                                style={[mStyles.mBlueBg, mStyles.mBlueBorder, styles.confirmBtnBox]}
                                activeOpacity={Constant.TOUCHABLE_OPACITY_ACTIVE_OPACITY}
                                onPress={evt => onYesPress(evt)}
                            >
                                <Text style={[mStyles.mWhiteColor, styles.confirmBtnText]}>确定</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}

PriceChangePop.defaultProps = {
    show: false,
    onYesPress: evt => true,
    onClosePress: evt => true
}