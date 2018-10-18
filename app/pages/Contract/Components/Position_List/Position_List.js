/**
 * 合约页 挂单-持仓组件
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

import mStyles from '../../../../public/common_style';
import styles from './Position_List_Style';

export default class PositionList extends Component {
    constructor(props) {
        super(props);
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
                        <TouchableOpacity style={styles.itemBtnBox}  activeOpacity={Constant.TOUCHABLE_OPACITY_ACTIVE_OPACITY}>
                            <Text style={styles.itemBtnText}>对平价</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemBtnBox}  activeOpacity={Constant.TOUCHABLE_OPACITY_ACTIVE_OPACITY}>
                            <Text style={styles.itemBtnText}>市价平</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemBtnBox}  activeOpacity={Constant.TOUCHABLE_OPACITY_ACTIVE_OPACITY}>
                            <Text style={styles.itemBtnText}>止损</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemBtnBox}  activeOpacity={Constant.TOUCHABLE_OPACITY_ACTIVE_OPACITY}>
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
        return (
            <FlatList
                showsVerticalScrollIndicator={false}
                data={[{}, {}]}
                renderItem={this.renderListItem}
                keyExtractor={(item, index) => String(index)}
            />
        );
    }
}