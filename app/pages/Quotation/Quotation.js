/**
 *行情页
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    StatusBar,
    ScrollView,
    Image
} from 'react-native';
import SelfSelectionist from './Components/Self_Selection_List/Self_Selection_List';
import ContractList from './Components/Contract_List/Contract_List';
import CurrencyList from './Components/Currency_List/Currency_List';
import GlobalCurrencyList from './Components/Global_Currency_List/Global_Currency_List';
import mStyles from '../../public/common_style';
import styles from './Quotation_Style';

export default class Quotation extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            activeMainNavIndex: 0, //被激活的一级nav的索引
            subNav: [
                {
                    //okex
                    parent: 'okex',
                    items: [
                        {
                            type: 0, //type 0:自选 1:合约 2:币种 3: 全球币种
                            name: '自选', //名字
                            isActive: true //是否为激活状态
                        }, {
                            type: 1,
                            name: '合约',
                            isActive: false
                        }, {
                            type: 2,
                            name: '选项33',
                            isActive: false
                        }, {
                            type: 2,
                            name: '选项4',
                            isActive: false
                        }, {
                            type: 2,
                            name: '选项5',
                            isActive: false
                        }, {
                            type: 2,
                            name: '选项6',
                            isActive: false
                        }
                    ]
                }, {
                    //全球
                    parent: '全球',
                    items: [
                        {
                            type: 3,
                            name: '选项11',
                            isActive: true
                        }, {
                            type: 3,
                            name: '选项22',
                            isActive: false
                        }, {
                            type: 3,
                            name: '选项33',
                            isActive: false
                        }, {
                            type: 3,
                            name: '选项44',
                            isActive: false
                        }, {
                            type: 3,
                            name: '选项55',
                            isActive: false
                        }, {
                            type: 3,
                            name: '选项66',
                            isActive: false
                        }
                    ]
                }
            ], //子nav的选项配置， 根据activeMainNavIndex的值显示哪个子nav
        }
    }

    //一级导航press事件
    mainNavItemPress = (event, index) => {
        this.setState({ activeMainNavIndex: index });
    }

    //二级导航press事件
    handleSubNavPress = (event, index) => {
        let {
            activeMainNavIndex,
            subNav
        } = this.state;

        let subNavItems = subNav[activeMainNavIndex].items;
        for(let i = 0; i < subNavItems.length; i++) {
            if(i === index) {
                subNavItems[i].isActive = true;
            } else {
                subNavItems[i].isActive = false;
            }
        }

        this.setState({ subNav: subNav });
    }

    render() {
        let {
            activeMainNavIndex,
            subNav
        } = this.state;

        //渲染二级导航
        let subNavArr = [];
        subNavArr = subNav[activeMainNavIndex].items.map((item, index) => {
            return (
                <View
                    style={[
                        styles.headerSubNavItemWrap,
                        item.isActive ? styles.headerSubNavItemWrapActive : ''
                    ]}
                    key={index}
                >
                    <Text
                        style={[
                            styles.headerSubNavItem,
                            item.isActive ? styles.headerSubNavItemActive : ''
                        ]}
                        onPress={
                            (event) => {
                                this.handleSubNavPress(event, index);
                            }
                        }
                    >
                        {item.name}
                    </Text>
                </View>
            );
        });

        //根据type选择对应的list组件
        let listComponent = null;
        for(let i = 0; i < subNav[activeMainNavIndex].items.length; i++) {
            if(subNav[activeMainNavIndex].items[i].isActive === true) {
                let type = subNav[activeMainNavIndex].items[i].type;
                if(type === 0) {
                    listComponent = <SelfSelectionist />;
                } else if(type === 1) {
                    listComponent = <ContractList />;
                } else if(type === 2) {
                    listComponent = <CurrencyList />;
                } else if(type === 3) {
                    listComponent = <GlobalCurrencyList />
                }
                        
                break;
            }
        }

        return (
            <View style={mStyles.mFlex1}>
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
                                    OKEx
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
                                    全球
                                </Text>
                            </View>
                        </View>
                    </View>
                    {/* 一级导航结束 */}
                    {/* 二级导航开始 */}
                    <View style={styles.headerSubNav}>
                        <ScrollView
                            contentContainerStyle={styles.headerSubNavWrap}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                        >
                            {subNavArr}
                            {/* <View style={[styles.headerSubNavItemWrap, styles.headerSubNavItemWrapActive]}>
                                <Text
                                    style={[styles.headerSubNavItem, styles.headerSubNavItemActive]}
                                    onPress={this.handleSubNavPress}
                                >
                                    选项1
                                </Text>
                            </View> */}
                        </ScrollView>
                    </View>
                    {/* 二级导航结束 */}
                </View>
                {/* 头部结束 */}
                {/* 主体内容开始 */}
                    {listComponent}
                {/* 主体内容结束 */}
            </View>
        );
    }
}