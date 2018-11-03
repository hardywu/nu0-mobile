/**
 * 合约账单选择页
 */
import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    StatusBar,
    ScrollView,
    Image,
    FlatList,
    TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import Constant from '../../public/constant';
import Header from '../../components/Header/Header';
import EmptyTopBar from '../../components/Empty_Top_Bar/Empty_Top_Bar';
import EmptyBottomBar from '../../components/Empty_Bottom_Bar/Empty_Bottom_Bar';
import * as rechargeCurAction from '../../actions/recharge_cur';

import mStyles from '../../public/common_style';
import styles from './Contract_Bill_Selection_Style';

import arrowIcon from '../../static/imgs/arrow_gray.png'; //箭头图标

export default class ContractBillSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItem: [
                {
                    code: 0,
                    name: '合约账单',
                    page: 'ContractBill'
                }, {
                    code: 1,
                    name: '合约委托查询',
                    page: 'ContractHistoricalEntrustment'
                }
            ]
        }
    }

    //处理 返回按钮 释放事件
    handleGoBackRelease = evt => {
        this.props.navigation.goBack();
    }

    //处理 列表元素 释放事件 
    handleItemPress = (evt, data) => {
        this.props.navigation.navigate(data.page);
    }

    renderListItem = ({item, index}) => {
        return (
            <TouchableHighlight
                underlayColor={Constant.TOUCHABLE_HIGHLIGHT_UNDERLAY_COLOR}
                onPress={evt => this.handleItemPress(evt, item)}
            >
                <View style={mStyles.mSearchSelectionListItem}>
                    <View style={[mStyles.mCenterContent, mStyles.mSearchSelectionListItemCenterContent]}>
                        <Text style={mStyles.mSearchSelectionListItemText}>{item.name}</Text>
                        <Image style={styles.arrowIcon} source={arrowIcon}/>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        let { listItem } = this.state;
        return (
            <View style={[mStyles.mFlex1, mStyles.mSearchSelectionWrap]}>
                <EmptyTopBar backgroundColor='#fff'/>
                <Header
                    title='合约账单及委托查询'
                    onGoBackRelease={evt => this.handleGoBackRelease(evt)}
                />
                <View style={mStyles.mSearchSelection}>
                    {/* 列表开始 */}
                    <FlatList
                        style={mStyles.mSearchSelectionListWrap}
                        data={listItem}
                        keyExtractor={(item, index) => String(index)}
                        renderItem={this.renderListItem}
                    />
                    {/* 列表结束 */}
                </View>
                <EmptyBottomBar backgroundColor={Constant.M_BACKGROUND_COLOR}/>
            </View>
        );
    }
}