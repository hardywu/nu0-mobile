/**
 *首页
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
import styles from './Quotation_Style';

export default class Quotation extends Component {
    render() {
        return (
            <View style={[mStyles.mFlex1, styles.quoContainer]}>
                <View style={styles.quoItem}>
                    <View style={styles.quoItemNameBox}>
                        <Text style={styles.quoItemName}>BTC</Text>
                    </View>
                    <View style={styles.quoItemIndexBox}>
                        <Text style={[styles.quoItemIndexPrice, mStyles.mRedColor]}>$123223</Text>
                        <Text style={[styles.quoItemIndexPercentage, mStyles.mRedBg]}>-7.28%</Text>
                    </View>
                </View>
                <View style={styles.quoItem}>
                    <View style={styles.quoItemNameBox}>
                        <Text style={styles.quoItemName}>ETH</Text>
                    </View>
                    <View style={styles.quoItemIndexBox}>
                        <Text style={[styles.quoItemIndexPrice, mStyles.mGreenColor]}>$123</Text>
                        <Text style={[styles.quoItemIndexPercentage, mStyles.mGreenBg]}>-7.28%</Text>
                    </View>
                </View>
                <View style={styles.quoItem}>
                    <View style={styles.quoItemNameBox}>
                        <Text style={styles.quoItemName}>ETC</Text>
                    </View>
                    <View style={styles.quoItemIndexBox}>
                        <Text style={[styles.quoItemIndexPrice, mStyles.mRedColor]}>$123</Text>
                        <Text style={[styles.quoItemIndexPercentage, mStyles.mRedBg]}>-7.28%</Text>
                    </View>
                </View>
                <View style={styles.quoItem}>
                    <View style={styles.quoItemNameBox}>
                        <Text style={styles.quoItemName}>ETH</Text>
                    </View>
                    <View style={styles.quoItemIndexBox}>
                        <Text style={[styles.quoItemIndexPrice, mStyles.mGreenColor]}>$123</Text>
                        <Text style={[styles.quoItemIndexPercentage, mStyles.mGreenBg]}>-7.28%</Text>
                    </View>
                </View>
                <View style={styles.quoItem}>
                    <View style={styles.quoItemNameBox}>
                        <Text style={styles.quoItemName}>ETC</Text>
                    </View>
                    <View style={styles.quoItemIndexBox}>
                        <Text style={[styles.quoItemIndexPrice, mStyles.mRedColor]}>$123</Text>
                        <Text style={[styles.quoItemIndexPercentage, mStyles.mRedBg]}>-7.28%</Text>
                    </View>
                </View>
                <View style={styles.quoItem}>
                    <View style={styles.quoItemNameBox}>
                        <Text style={styles.quoItemName}>ETH</Text>
                    </View>
                    <View style={styles.quoItemIndexBox}>
                        <Text style={[styles.quoItemIndexPrice, mStyles.mGreenColor]}>$123</Text>
                        <Text style={[styles.quoItemIndexPercentage, mStyles.mGreenBg]}>-7.28%</Text>
                    </View>
                </View>
            </View>
        );
    }
}