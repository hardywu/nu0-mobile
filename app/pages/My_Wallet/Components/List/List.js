/**
 * 我的钱包页 列表组件
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
    Picker
} from 'react-native';

import mStyles from '../../../../public/common_style';
import styles from './List_Style';

export default class List extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <View style={styles.listWrap}>
                <View style={[mStyles.mCenterContent, styles.listCenterContent]}>
                    <View style={styles.listHead}>
                        <Text style={styles.listHeadText}>资产明细</Text>
                    </View>
                    <View style={styles.listBody}>
                        <View style={styles.listBodyItem}>
                            <Text style={styles.listBodyItemCur}>BTC</Text>
                            <Text style={styles.listBodyItemAssets}>0.00000000</Text>
                            <Text style={styles.listBodyItemFrozen}>冻结 0.00000000</Text>
                        </View>
                        <View style={styles.listBodyItem}>
                            <Text style={styles.listBodyItemCur}>BTC</Text>
                            <Text style={styles.listBodyItemAssets}>0.00000000</Text>
                            <Text style={styles.listBodyItemFrozen}>冻结 0.00000000</Text>
                        </View>
                        <View style={styles.listBodyItem}>
                            <Text style={styles.listBodyItemCur}>BTC</Text>
                            <Text style={styles.listBodyItemAssets}>0.00000000</Text>
                            <Text style={styles.listBodyItemFrozen}>冻结 0.00000000</Text>
                        </View>
                        <View style={styles.listBodyItem}>
                            <Text style={styles.listBodyItemCur}>BTC</Text>
                            <Text style={styles.listBodyItemAssets}>0.00000000</Text>
                            <Text style={styles.listBodyItemFrozen}>冻结 0.00000000</Text>
                        </View>
                        <View style={styles.listBodyItem}>
                            <Text style={styles.listBodyItemCur}>BTC</Text>
                            <Text style={styles.listBodyItemAssets}>0.00000000</Text>
                            <Text style={styles.listBodyItemFrozen}>冻结 0.00000000</Text>
                        </View>
                        <View style={styles.listBodyItem}>
                            <Text style={styles.listBodyItemCur}>BTC</Text>
                            <Text style={styles.listBodyItemAssets}>0.00000000</Text>
                            <Text style={styles.listBodyItemFrozen}>冻结 0.00000000</Text>
                        </View>
                        <View style={styles.listBodyItem}>
                            <Text style={styles.listBodyItemCur}>BTC</Text>
                            <Text style={styles.listBodyItemAssets}>0.00000000</Text>
                            <Text style={styles.listBodyItemFrozen}>冻结 0.00000000</Text>
                        </View>
                        <View style={styles.listBodyItem}>
                            <Text style={styles.listBodyItemCur}>BTC</Text>
                            <Text style={styles.listBodyItemAssets}>0.00000000</Text>
                            <Text style={styles.listBodyItemFrozen}>冻结 0.00000000</Text>
                        </View>
                        <View style={styles.listBodyItem}>
                            <Text style={styles.listBodyItemCur}>BTC</Text>
                            <Text style={styles.listBodyItemAssets}>0.00000000</Text>
                            <Text style={styles.listBodyItemFrozen}>冻结 0.00000000</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}