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
import Swiper from 'react-native-swiper';
import mStyles from '../../../../public/common_style';
import styles from './Banner_Style';

export default class Banner extends Component {
    render() {
        return (
            <View style={[mStyles.mFlex1, styles.bannerContainer]}>
                <Swiper
                    style={styles.bannerBox}
                    showsPagination={false}
                    loop={true}
                    autoplay={true}
                    horizontal={true}
                    key={3}
                >
                    <View style={styles.bannerItem}>
                        <Image
                            style={styles.bannerItemImg}
                            source={require('../../../../static/imgs/timg.jpg')}
                        />
                    </View>
                    <View style={styles.bannerItem}>
                        <Image
                            style={styles.bannerItemImg}
                            source={require('../../../../static/imgs/timg.jpg')}
                        />
                    </View>
                    <View style={styles.bannerItem}>
                        <Image
                            style={styles.bannerItemImg}
                            source={require('../../../../static/imgs/timg.jpg')}
                        />
                    </View>
                </Swiper>
            </View>
        );
    }
}