/**
 * 搜索页
 */
import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    StatusBar,
    ScrollView,
    Image,
    FlatList
} from 'react-native';

import mStyles from '../../public/common_style';
import styles from './Search_Style';

import goBackIcon from '../../static/imgs/go_back.png'; //返回图标
import searchIcon from '../../static/imgs/search.png'; //搜索图标
import collectionNoIcon from '../../static/imgs/collection_no.png'; //未收藏图标
import collectionYesIcon from '../../static/imgs/collection_yes.png'; //已收藏图标

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nav: {
                value: {
                    code: 0,
                    name: '币币交易'
                },
                data: [
                    {
                        code: 0,
                        name: '币币交易'
                    }, {
                        code: 1,
                        name: '合约交易'
                    }
                ]
            }, //导航数据
            list: [
                [
                    {
                        code: 0,
                        name: '币币1',
                        isCollection: false
                    }
                ], [
                    {
                        code: 0,
                        name: '合约1',
                        isCollection: true
                    }, {
                        code: 1,
                        name: '合约2',
                        isCollection: false
                    }
                ]
            ] //列表的数据
        }
    }

    _keyExtractor = (item, index) => String(index);

    renderListItem = (parentIndex, data) => {
        let {item, index} = data;

        return (
            <View style={styles.historyItem} key={index}>
                <View style={[mStyles.mCenterContent, styles.historyItemCenter]}>
                    <Text style={[styles.historyItemText, mStyles.mBlueColor]}>{item.name}</Text>
                    <Image
                        style={styles.historyItemIcon}
                        source={item.isCollection ? collectionYesIcon : collectionNoIcon}
                        onStartShouldSetResponder={() => true}
                        onResponderRelease={evt => this.handleCollectionRelease(evt, parentIndex, index)}
                    />
                </View>
            </View>
        )
    }

    //处理返回按钮释放事件
    handleGoBackRelease = (evt) => {
        this.props.navigation.goBack();
    }

    //处理导航栏释放事件
    handleNavRelease = (evt, activeIndex) => {
        let { nav } = this.state;
        nav.value = {
            code: nav.data[activeIndex].code,
            name: nav.data[activeIndex].name
        }
        this.setState({nav: nav});
    }

    //处理收藏按钮点击事件
    handleCollectionRelease = (evt, parentIndex, childIndex) => {
        let { list } = this.state;
        //将对应的isCollection属性取反
        list[parentIndex][childIndex].isCollection = !list[parentIndex][childIndex].isCollection;
        this.setState({ list: list });
    }

    render() {
        let {
            nav,
            list
        } = this.state;

        let navDOM = nav.data.map((item, index) => {
            return (
                <View
                    style={[
                        styles.headNavItem,
                        nav.value.code === index ? mStyles.mBlueBorderBottom : ''
                    ]}
                    key={index}
                    onStartShouldSetResponder={() => true}
                    onResponderRelease={evt => this.handleNavRelease(evt, index)}
                >
                    <Text style={[
                        styles.headNavItemText,
                        nav.value.code === index ? mStyles.mBlueColor : ''
                    ]}>
                        {item.name}
                    </Text>
                </View>
            )
        });

        return (
            <View style={[mStyles.mFlex1, styles.wrap]}>
                {/* 头部（搜索栏、导航栏）开始 */}
                <View style={styles.head}>
                    {/* 搜索栏开始 */}
                    <View style={[styles.headInputCenterContent, mStyles.mCenterContent]}>
                        <Image
                            style={styles.goBackIcon}
                            source={goBackIcon}
                            onStartShouldSetResponder={() => true}
                            onResponderRelease={evt => this.handleGoBackRelease(evt)}
                        />
                        <View style={styles.headInputWrap}>
                            <Image style={styles.headInputSearchIcon} source={searchIcon}/>
                            <TextInput
                                style={styles.headInput}
                                placeholder={'搜索感兴趣的币种'}
                                placeholderTextColor={'#939ca6'}
                            />
                        </View>
                    </View>
                    {/* 搜索栏结束 */}
                    {/* 导航栏开始 */}
                    <View style={styles.headNavWrap}>
                        {navDOM}
                    </View>
                    {/* 导航栏结束 */}
                </View>
                {/* 头部（搜索栏、导航栏）结束 */}
                {/* 主体内容开始 */}
                <View style={styles.body}>
                    {/* 清空搜索历史开始 */}
                    <View style={styles.emptyingHistory}>
                        <View style={[mStyles.mCenterContent, styles.emptyingHistoryCenter]}>
                            <Text style={styles.emptyingHistoryText}>搜索历史</Text>
                            <Text style={[styles.emptyingHistoryText, mStyles.mBlueColor]}>清除历史记录</Text>
                        </View>
                    </View>
                    {/* 清空搜索历史结束 */}
                    {/* 搜索历史列表开始 */}
                    <View style={styles.history}>
                        <FlatList
                            style={{display: nav.value.code === 0 ? 'flex' : 'none'}}
                            keyExtractor={this._keyExtractor}
                            data={list[0]}
                            renderItem={data => this.renderListItem(0, data)}
                            showsVerticalScrollIndicator={false}
                        />
                        <FlatList
                            style={{display: nav.value.code === 1 ? 'flex' : 'none'}}
                            keyExtractor={this._keyExtractor}
                            data={list[1]}
                            renderItem={data => this.renderListItem(1, data)}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                    {/* 搜索历史列表结束 */}
                </View>
                {/* 主体内容结束 */}
            </View>
        );
    }
}