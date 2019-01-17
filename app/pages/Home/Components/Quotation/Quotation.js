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
        const { data } = this.props;
        let DOM = [];
        data.forEach((item, index) => {
            if(!item.ticker.change) {
                item.ticker.change = '';
            }
            DOM.push(
                <View style={styles.quoItem} key={index}>
                    <View style={styles.quoItemNameBox}>
                        <Text style={styles.quoItemName}>{item.name}</Text>
                    </View>
                    <View style={styles.quoItemIndexBox}>
                        <Text style={[
                            styles.quoItemIndexPrice,
                            item.ticker.change.indexOf('+') !== -1 ? mStyles.mRedColor : '',
                            item.ticker.change.indexOf('-') !== -1 ? mStyles.mGreenColor : '',
                        ]}>{item.ticker.last}</Text>
                        <Text style={[
                            styles.quoItemIndexPercentage,
                            item.ticker.change.indexOf('+') !== -1 ? mStyles.mRedBg : '',
                            item.ticker.change.indexOf('-') !== -1 ? mStyles.mGreenBg : '',
                            item.ticker.change.indexOf('-') === -1 && item.ticker.change.indexOf('+') ? mStyles.mBackgroundColor : ''
                        ]}>{item.ticker.change}</Text>
                    </View>
                </View>
            )
        });
        return (
            <View style={[mStyles.mFlex1, styles.quoContainer]}>
                {/* <View style={styles.quoItem}>
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
                </View> */}
                {DOM}
            </View>
        );
    }
}