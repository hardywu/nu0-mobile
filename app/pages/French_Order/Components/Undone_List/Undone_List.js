/**
 * 法币订单页-未完成列表组件
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
    LayoutAnimation
} from 'react-native';

import mStyles from '../../../../public/common_style';
import styles from './Undone_List_Style';

import zfbDisableIcon from '../../../../static/imgs/zfb_disable.png';
import zfbNormalIcon from '../../../../static/imgs/zfb_normal.png'
import wzfDisableIcon from '../../../../static/imgs/wzf_disable.png';
import wzfNormalIcon from '../../../../static/imgs/wzf_normal.png'
import bankDisableIcon from '../../../../static/imgs/bank_disable.png';
import bankNormalIcon from '../../../../static/imgs/bank_normal.png';
import grayArrowIcon from '../../../../static/imgs/arrow_gray.png'; //灰色箭头icon
import unselectedIcon from '../../../../static/imgs/unselected.png'; //位选中icon
import selectedIcon from '../../../../static/imgs/selected.png'; //选中icon
import releaseIcon from '../../../../static/imgs/release.png'; //发布按钮icon

export default class UndoneList extends Component {
    constructor(props) {
        super(props);
    }

    //列表循环元素
    renderListItem = (item, index) => {
        const { isCertification } = this.props.data;
        return (
            <View style={styles.listItem}>
                <View style={[styles.listItemHead, isCertification ? mStyles.mGreenBorderLeft : '']}>
                    <View style={styles.listItemHeadItem1}>
                        <Text style={[styles.listItemHeadTitle, isCertification ? styles.color1 : '']}>购买</Text>
                        <Text style={[styles.listItemHeadSubTitle, isCertification ? styles.color2 : '']}>USDT</Text>
                    </View>
                    <View style={styles.listItemHeadItem2}>
                        <Text style={[styles.listItemHeadUserName, isCertification ? mStyles.mFontColor999 : '']}>图弹幕比付款</Text>
                        <Image
                            style={styles.listItemHeadPayFuncIcon}
                            source={bankNormalIcon}
                        />
                        <Image
                            style={styles.listItemHeadPayFuncIcon}
                            source={wzfNormalIcon}
                        />
                        <Image
                            style={styles.listItemHeadPayFuncIcon}
                            source={zfbNormalIcon}
                        />
                    </View>
                    <View style={[styles.listItemHeadItem3, styles.justifyContentFlexEnd]}>
                        <Text style={[styles.listItemHeadStatus]}>未完成</Text>
                    </View>
                </View>
                <View style={styles.listItemBody}>
                    <View style={styles.listItemBodyItem}>
                        <Text style={[styles.listItemBodyItemValBig, isCertification ? mStyles.mBlackColor : '']}>1,234,23.00</Text>
                        <Text style={styles.listItemBodyItemKey}>价格CNY</Text>
                    </View>
                    <View style={styles.listItemBodyItem}>
                        <Text style={[styles.listItemBodyItemValSmall, isCertification ? mStyles.mBlackColor : '']}>1234-23321</Text>
                        <Text style={styles.listItemBodyItemKey}>限额</Text>
                    </View>
                    <View style={[styles.listItemBodyItem, {borderRightWidth: 0}]}>
                        <Text style={[styles.listItemBodyItemValSmall, isCertification ? mStyles.mBlackColor : '']}>10,000</Text>
                        <Text style={styles.listItemBodyItemKey}>数量</Text>
                    </View>
                </View>
            </View>
        )
    }

    render() {
        const {
            data,
            setData
        }  = this.props;
        const { undoneList } = data;
        return (
            <View style={styles.mFlex1}>
                {/* 列表开始 */}
                <FlatList
                    data={undoneList.data}
                    renderItem={this.renderListItem}
                    keyExtractor={(item, index) => String(index)}
                    showsVerticalScrollIndicator={false}
                />
                {/* 列表结束 */}
            </View>
        );
    }
}