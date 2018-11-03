/**
 * 交割记录页
 */
import React, { Component } from 'react';
import {
    Button,
    Text,
    TextInput,
    View,
    StatusBar,
    ScrollView,
    Image,
    FlatList,
    TouchableOpacity,
    TouchableHighlight,
    Switch
} from 'react-native';
import Constant from '../../public/constant'
import Header from '../../components/Header/Header';
import EmptyTopBar from '../../components/Empty_Top_Bar/Empty_Top_Bar';
import EmptyBottomBar from '../../components/Empty_Bottom_Bar/Empty_Bottom_Bar';

import mStyles from '../../public/common_style';
import styles from './Delivery_Record_Style';

export default class DeliveryRecord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainTab: {
                value: {
                    code: 0,
                    name: 'TRA1'
                },
                options: [
                    {
                        code: 0,
                        name: 'TRA1'
                    }, {
                        code: 1,
                        name: 'TRA2'
                    }, {
                        code: 2,
                        name: 'TRA3'
                    }
                ]
            }
        }
    }
    
    //处理返回按钮释放事件
    handleGoBackRelease = (evt) => {
        this.props.navigation.goBack();
    }

    renderListItem = (item, index) => {
        return (
            <View>
                <View style={styles.listItemHead}>
                    <View style={mStyles.mCenterContent}>
                        <Text style={styles.listItemHeadText}>2018-09-12</Text>
                    </View>
                </View>
                <View style={styles.listItemBody}>
                    <View style={mStyles.mCenterContent}>
                        <View style={styles.listItemBodyRow}>
                            <View style={styles.listItemBodyRowKey}>
                                <Text style={styles.listItemBodyRowKeyText}>1091交割</Text>
                            </View>
                            <View style={styles.listItemBodyRowVal}>
                                <Text style={styles.listItemBodyRowValText}>$1231232131=¥123123123</Text>
                            </View>
                        </View>
                        <View style={styles.listItemBodyRow}>
                            <View style={styles.listItemBodyRowKey}>
                                <Text style={styles.listItemBodyRowKeyText}>1091结算</Text>
                            </View>
                            <View style={styles.listItemBodyRowVal}>
                                <Text style={styles.listItemBodyRowValText}>$1231232131=¥123123</Text>
                            </View>
                        </View>
                        <View style={styles.listItemBodyRow}>
                            <View style={styles.listItemBodyRowKey}>
                                <Text style={styles.listItemBodyRowKeyText}>1091结算</Text>
                            </View>
                            <View style={styles.listItemBodyRowVal}>
                                <Text style={styles.listItemBodyRowValText}>$1231232131=¥123123123</Text>
                            </View>
                        </View>
                        <View style={styles.listItemBodyRow}>
                            <View style={styles.listItemBodyRowKey}>
                                <Text style={styles.listItemBodyRowKeyText}>穿仓用户亏损分摊</Text>
                            </View>
                            <View style={styles.listItemBodyRowVal}>
                                <Text style={styles.listItemBodyRowValText}>0.0</Text>
                            </View>
                        </View>
                        <View style={styles.listItemBodyRow}>
                            <View style={styles.listItemBodyRowKey}>
                                <Text style={styles.listItemBodyRowKeyText}>准备金分摊</Text>
                            </View>
                            <View style={styles.listItemBodyRowVal}>
                                <Text style={styles.listItemBodyRowValText}>0.0</Text>
                            </View>
                        </View>
                        <View style={styles.listItemBodyRow}>
                            <View style={styles.listItemBodyRowKey}>
                                <Text style={styles.listItemBodyRowKeyText}>分摊比例</Text>
                            </View>
                            <View style={styles.listItemBodyRowVal}>
                                <Text style={styles.listItemBodyRowValText}>0.0</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    //处理  一级tab选项 释放事件
    handleMainTabItemRelease = (evt, data) => {
        let { mainTab } = this.state;
        mainTab.value = {
            code: data.code,
            name: data.name
        };
        this.setState({ mainTab: mainTab });
    }

    render() {
        let {
            mainTab
        } = this.state;
        //一级tab的DOM
        let mainTabItemDOM = mainTab.options.map((item, index) => {
            return (
                <View
                    style={[
                        styles.mainTabItem, mainTab.value.code === item.code ? 
                        mStyles.mBlueBorderBottom : ''
                    ]}
                    onStartShouldSetResponder={() => true}
                    onResponderRelease={evt => this.handleMainTabItemRelease(evt, item)}
                    key={index}
                >
                    <Text style={[
                        styles.mainTabItemText,
                        mainTab.value.code === item.code ? mStyles.mBlueColor : ''
                    ]}>
                        {item.name}
                    </Text>
                </View>
            )
        });
        return (
            <View style={[mStyles.mFlex1, styles.wrap]}>
                <EmptyTopBar backgroundColor='#fff'/>
                <Header
                    title='交割记录'
                    onGoBackRelease={evt => this.handleGoBackRelease(evt)}
                />
                <View style={mStyles.mFlex1}>
                    {/* 主tab开始 */}
                    <View>
                        <ScrollView
                            style={styles.mainTabWrap}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            {mainTabItemDOM}
                            {/* <View style={[styles.mainTabItem, mStyles.mBlueBorderBottom]}>
                                <Text style={[styles.mainTabItemText, mStyles.mBlueColor]}>TVC</Text>
                            </View>
                            <View style={styles.mainTabItem}>
                                <Text style={styles.mainTabItemText}>TVC</Text>
                            </View>
                            <View style={styles.mainTabItem}>
                                <Text style={styles.mainTabItemText}>TVC</Text>
                            </View> */}
                        </ScrollView>
                    </View>
                    {/* 主tab结束 */}
                    {/* 列表开始 */}
                    <View style={styles.mainContent}>
                        <FlatList
                            style={mainTab.value.code === 0 ? mStyles.mFlex : mStyles.mHide}
                            showsVerticalScrollIndicator={false}
                            data={[{}, {}]}
                            renderItem={this.renderListItem}
                            keyExtractor={(item, index) => String(index)}
                        />
                        <FlatList
                            style={mainTab.value.code === 1 ? mStyles.mFlex : mStyles.mHide}
                            showsVerticalScrollIndicator={false}
                            data={[{}, {}, {}]}
                            renderItem={this.renderListItem}
                            keyExtractor={(item, index) => String(index)}
                        />
                        <FlatList
                            style={mainTab.value.code === 2 ? mStyles.mFlex : mStyles.mHide}
                            showsVerticalScrollIndicator={false}
                            data={[{}, {}, {}, {}]}
                            renderItem={this.renderListItem}
                            keyExtractor={(item, index) => String(index)}
                        />
                    </View>
                    {/* 列表结束 */}
                </View>
                <EmptyBottomBar backgroundColor={Constant.M_BACKGROUND_COLOR}/>
            </View>
        );
    }
}