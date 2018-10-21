/**
 * 公用 预设止损弹窗
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
    TouchableOpacity,
    Switch
} from 'react-native';
import Constant from '../../public/constant';
import ASInput from '../AS_Input/AS_Input';
import DcCheckbox from '../Dc_Checkbox/Dc_Checkbox';

import mStyles from '../../public/common_style';
import styles from './Stops_Pop_Style';

import closeIcon from '../../static/imgs/close.png';

export default class StopsPop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forevery: false
        }
    }

    render() {
        const _this = this;
        let {
            forevery
        } = this.state;
        const  {
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
                            <Text style={mStyles.mPopHeadText}>预设止损</Text>
                            <Image 
                                style={mStyles.mPopHeadClose}
                                source={closeIcon}
                                onStartShouldSetResponder={() => true}
                                onResponderRelease={evt => onClosePress(evt)}
                            />
                        </View>
                        <View style={mStyles.mPopBody}>
                            <View style={styles.row}>
                                <DcCheckbox
                                    selected={forevery}
                                    text='永远有效'
                                    onPress={evt => {
                                        this.setState({ forevery: !this.state.forevery })
                                    }}
                                />
                                <DcCheckbox
                                    text='市场止盈损'
                                />
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>N秒后市价</Text>
                                <View style={styles.ASInputWrap}>
                                    <ASInput
                                        placeholder='价格'
                                        value='0'
                                    />
                                </View>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>回撤跳止损</Text>
                                <View style={styles.ASInputWrap}>
                                    <ASInput
                                        placeholder='价格'
                                        value='0'
                                    />
                                </View>
                            </View>
                            <View style={styles.row}>
                                <DcCheckbox
                                    text='按跳'
                                />
                                <TouchableOpacity activeOpacity={Constant.TOUCHABLE_OPACITY_ACTIVE_OPACITY}>
                                    <Text style={[styles.textBtn, mStyles.mBlueColor]}>止盈价格</Text>
                                </TouchableOpacity>
                                <View style={styles.ASInputWrap}>
                                    <ASInput
                                        placeholder='价格'
                                        value='0'
                                    />
                                </View>
                            </View>
                            <View style={styles.row}>
                                <DcCheckbox
                                    text='按跳'
                                />
                                <TouchableOpacity activeOpacity={Constant.TOUCHABLE_OPACITY_ACTIVE_OPACITY}>
                                    <Text style={[styles.textBtn, mStyles.mBlueColor]}>止损价格</Text>
                                </TouchableOpacity>
                                <View style={styles.ASInputWrap}>
                                    <ASInput
                                        placeholder='价格'
                                        value='0'
                                    />
                                </View>
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

StopsPop.defaultProps = {
    show: false,
    onYesPress: evt => true,
    onClosePress: evt => true
}