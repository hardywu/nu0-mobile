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
import styles from './Notice_Style';

export default class Notice extends Component {
    render() {
        return (
            <View style={[mStyles.mFlex1, styles.noticeContainer]}>
                <View style={styles.noticeBox}>
                    <Image
                        style={styles.noticeIcon}
                        source={require('../../../../static/imgs/notice.png')}
                    />
                    <Text
                        style={styles.noticeText}
                        numberOfLines={1}
                    >
                        这是通知2这是通知2这是通知2这是通知2这是通知2这是通知2这是通知2这是通知2这是通知2这是通知这是通知2这是通知2这是通知2这是通知2这是通知2这是通知2这是通知2这是通知2这是通知2这是通知22
                    </Text>
                </View>
            </View>
        );
    }
}