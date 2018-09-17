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
    }

    handleMenuItemPress = (evt, index) => {
        switch(index) {
            case 0: 
                alert('资金划转')
                break;
            case 1: 
                alert('我的挂单')
                break;
            case 2: 
                alert('历史委托')
                break;
            case 3: 
                alert('杠杆解释说明')
                break;
            default: 
                break;
        }
    }

    handleMenuRelease = evt => {
        const {
            data,
            setData
        } = this.props;

        data.isShow = false;
        setData(data);
    }

    render() {
        const { data } = this.props;

        return (
            <Modal
                visible={data.isShow}
                transparent={true}
                animationType={'fade'}
            >
                <View style={styles.sideMenuWrap}>
                    <View style={styles.sideMenuOuter}>
                        <Image
                            style={styles.sideMenuIcon}
                            source={arrowIcon}
                            onStartShouldSetResponder={() => true}
                            onResponderRelease={evt => this.handleMenuRelease(evt)}
                        />
                        <View style={styles.sideMenuMain}>
                            <Text
                                style={styles.sideMenuMainItem}
                                onPress={evt => this.handleMenuItemPress(evt, 0)}
                            >
                                资金划转
                            </Text>
                            <Text
                                style={styles.sideMenuMainItem}
                                onPress={evt => this.handleMenuItemPress(evt, 1)}
                            >
                                我的挂单
                            </Text>
                            <Text
                                style={styles.sideMenuMainItem}
                                onPress={evt => this.handleMenuItemPress(evt, 2)}
                            >
                                历史委托
                            </Text>
                            <Text
                                style={styles.sideMenuMainItem}
                                onPress={evt => this.handleMenuItemPress(evt, 3)}
                            >
                                杠杆解释说明
                            </Text>
                        </View>
                    </View> 
                </View>
            </Modal>
        );
    }
}