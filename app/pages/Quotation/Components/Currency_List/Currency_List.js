/**
 *币种列表组件
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    StatusBar,
    ScrollView,
    Image
} from 'react-native';
import mStyles from '../../../../public/common_style';
import styles from './Currency_List_Style';

export default class CurrencyList extends Component {
    render() {
        const {
            list,
            currentItem
        } = this.props;
        //列表元素DOM
        let listItemDOM = [];
        let reg = new RegExp(`${currentItem.id}$`, 'i')
        //匹配list中对应的ticker
        for(let key in list) {
            if(reg.test(key)) {
                let tmpData = list[key];
                listItemDOM.push(
                    <View style={styles.item} key={key}>
                        <View style={styles.itemLeft}>
                            <View style={styles.itemName}>
                                <Text style={styles.itemMainName}>{key.split(currentItem.id)[0].toUpperCase()}</Text>
                                <Text style={styles.itemNameBreak}>/</Text>
                                <Text style={styles.itemSubName}>{currentItem.name}</Text>
                            </View>
                            <View style={styles.itemDeal}>
                                <Text style={styles.itemDealNum}>成交量 {tmpData.ticker.vol}</Text>
                            </View>
                        </View>
                        <View style={styles.itemRight}>
                            <View style={styles.itemValue}>
                                <Text style={[styles.itemMainValue, mStyles.mBlackColor]}>{tmpData.ticker.last}</Text>
                                {/* <Text style={styles.itemSubValue}>Y233.22</Text> */}
                            </View>
                            <View style={styles.itemTrend}>
                                <Text style={[styles.itemTrendNum, mStyles.mRedBg]}>-0.92%</Text>
                            </View>
                        </View>
                    </View>
                )
            }
        }
        return (
            <View style={[styles.mFlex1, {height: '100%'}]}>
                {/* 排序栏开始 */}
                <View style={styles.sortContainer}>
                    <View style={styles.sortLeft}>
                        <View style={styles.sortItem}>
                            <Text style={styles.sortName}>币种</Text>
                            <View style={styles.sortDirection}>
                                <Text style={styles.sortDirectionSymbol}>▲</Text>
                                <Text style={styles.sortDirectionSymbol}>▼</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.sortRight}>
                        <View style={styles.sortItem}>
                            <Text style={styles.sortName}>最新价</Text>
                            <View style={styles.sortDirection}>
                                <Text style={styles.sortDirectionSymbol}>▲</Text>
                                <Text style={styles.sortDirectionSymbol}>▼</Text>
                            </View>
                        </View>
                        <View style={styles.sortItem}>
                            <Text style={[styles.sortName, {marginLeft: 30}]}>24H涨跌</Text>
                            <View style={styles.sortDirection}>
                                <Text style={styles.sortDirectionSymbol}>▲</Text>
                                <Text style={styles.sortDirectionSymbol}>▼</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* 排序栏结束 */}
                <ScrollView
                    style={styles.mainContainer}
                    showsVerticalScrollIndicator={false}
                >
                    {/* 循环项目item开始 */}
                    {listItemDOM}
                    {/* <View style={styles.item}>
                        <View style={styles.itemLeft}>
                            <View style={styles.itemName}>
                                <Text style={styles.itemMainName}>BTC</Text>
                                <Text style={styles.itemNameBreak}>/</Text>
                                <Text style={styles.itemSubName}>{currentItem.name}</Text>
                            </View>
                            <View style={styles.itemDeal}>
                                <Text style={styles.itemDealNum}>成交量 12300</Text>
                            </View>
                        </View>
                        <View style={styles.itemRight}>
                            <View style={styles.itemValue}>
                                <Text style={[styles.itemMainValue, mStyles.mGreenColor]}>$2312123.22</Text>
                                <Text style={styles.itemSubValue}>Y233.22</Text>
                            </View>
                            <View style={styles.itemTrend}>
                                <Text style={[styles.itemTrendNum, mStyles.mRedBg]}>-0.92%</Text>
                            </View>
                        </View>
                    </View> */}
                    {/* 循环项目item结束 */}
                </ScrollView>
            </View>
        );
    }
}