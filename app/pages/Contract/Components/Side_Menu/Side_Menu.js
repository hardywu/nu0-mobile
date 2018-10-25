/**
 * 币币页 侧边菜单组件
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
    Modal
} from 'react-native';
import Anim from '../../../../public/animation'

import mStyles from '../../../../public/common_style';
import styles from './Side_Menu_Style';

import arrowIcon from '../../../../static/imgs/menu.png'; //菜单图标

export default class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: [
                {
                    code: 0,
                    name: '账户权益',
                    page: 'ContractAccount'
                }, {
                    code: 1,
                    name: '市场总览',
                    page: 'MarketOverview'
                }, {
                    code: 2,
                    name: '历史委托',
                    page: 'ContractHistoricalEntrustment'
                }, {
                    code: 3,
                    name: '合约账单',
                    page: 'ContractBill'
                }, {
                    code: 4,
                    name: '交割记录',
                    page: 'DeliveryRecord'
                }, {
                    code: 5,
                    name: '爆仓订单',
                    page: 'WarehouseOrder'
                }
            ]
        }
    }

    handleMenuItemPress = (evt, index, page) => {
        const {
            data,
            setData,
            navigation
        } = this.props;
        navigation.navigate(page);
        data.isShow = false;
        setData(data);
    }

    handleMenuRelease = (evt, index) => {
        const {
            data,
            setData,
            navigation
        } = this.props;
        data.isShow = false;
        setData(data);
    }

    render() {
        let {
            menu
        } = this.state;
        const {
            data,
            onModalWrapRelease
        } = this.props;
        let menuItemDOM = menu.map((item, index) => {
            return (
                <Text
                    style={styles.sideMenuMainItem}
                    key={index}
                    onPress={evt => this.handleMenuItemPress(evt, index, item.page)}
                >
                    {item.name}
                </Text>
            );
        });
        return (
            <Modal
                visible={data.isShow}
                transparent={true}
                animationType={'fade'}
                onRequestClose={() => false}
            >
                <View
                    style={styles.sideMenuWrap}
                    onStartShouldSetResponder={() => true}
                    onResponderRelease={evt => onModalWrapRelease(evt)}
                >
                    <View style={styles.sideMenuOuter}>
                        <Image
                            style={styles.sideMenuIcon}
                            source={arrowIcon}
                            onStartShouldSetResponder={() => true}
                            onResponderRelease={evt => this.handleMenuRelease(evt)}
                        />
                        <ScrollView style={styles.sideMenuMain}>
                            {menuItemDOM}
                        </ScrollView>
                    </View> 
                </View>
            </Modal>
        );
    }
}