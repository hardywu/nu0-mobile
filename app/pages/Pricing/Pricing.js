/**
 *币币页
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
import mStyles from '../../public/common_style';
import styles from './Pricing_Style';

export default class Pricing extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            activeMainNavIndex: 0, //被激活的一级nav的索引
        }
    }

    //一级导航press事件
    mainNavItemPress = (event, index) => {
        this.setState({ activeMainNavIndex: index });
    }

    render() {
        let {
            activeMainNavIndex
        } = this.state;

        return (
            <View>
                <StatusBar
                    backgroundColor='#fff'
                    hidden={true}
                    animated={true}
                    barStyle='dark-content'
                />
                {/* 头部开始 */}
                <View style={styles.header}>
                    {/* 一级导航开始 */}
                    <View style={styles.headerMainNav}>
                        <View style={styles.headerMainNavWrap}>
                            <View style={[
                                    styles.headerMainNavItem,
                                    activeMainNavIndex === 0 ? styles.headerMainNavItemActive : ''
                                ]}
                            >
                                <Text 
                                    style={[
                                        styles.headerMainNavItemName,
                                        activeMainNavIndex === 0 ? styles.headerMainNavItemNameActive : ''
                                    ]}
                                    onPress={
                                        event => {
                                            this.mainNavItemPress(event, 0)
                                        }
                                    }
                                >
                                    币币
                                </Text>
                            </View>
                            <View style={[
                                    styles.headerMainNavItem,
                                    activeMainNavIndex === 1 ? styles.headerMainNavItemActive : ''
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.headerMainNavItemName,
                                        activeMainNavIndex === 1 ? styles.headerMainNavItemNameActive : ''
                                    ]}
                                    onPress={
                                        event => {
                                            this.mainNavItemPress(event, 1)
                                        }
                                    }
                                >
                                    杠杆
                                </Text>
                            </View>
                        </View>
                    </View>
                    {/* 一级导航结束 */}
                </View>
                {/* 头部结束 */}
            </View>
        );
    }
}