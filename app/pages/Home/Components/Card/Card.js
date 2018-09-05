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
import styles from './Card_Style';

export default class Card extends Component {
    render() {
        return (
            <View style={[mStyles.mFlex1, styles.cardContainer]}>
                <ScrollView
                    style={styles.cardScroll}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={[styles.cardItem, styles.bgBule]}>
                        <Text style={styles.cardItemB}>买比特币</Text>
                        <Text style={styles.cardItemS}>手把手实操攻略</Text>
                    </View>
                    <View style={[styles.cardItem, styles.bgPurple]}>
                        <Text style={styles.cardItemB}>买比特币</Text>
                        <Text style={styles.cardItemS}>手把手实操攻略</Text>
                    </View>
                    <View style={[styles.cardItem, styles.bgGreen]}>
                        <Text style={styles.cardItemB}>买比特币</Text>
                        <Text style={styles.cardItemS}>手把手实操攻略</Text>
                    </View>
                    <View style={[styles.cardItem, styles.bgGreen]}>
                        <Text style={styles.cardItemB}>买比特币</Text>
                        <Text style={styles.cardItemS}>手把手实操攻略</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}