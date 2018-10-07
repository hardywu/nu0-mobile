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
import styles from './Card2_Style';

export default class Card2 extends Component {
    handleMyWalletRelease = evt => {
        const { navigation } = this.props;
        navigation.navigate('MyWallet');
    }
    
    handleBbAccountRelease = evt => {
        const { navigation } = this.props;
        navigation.navigate('BbAccount');
    }

    handleContractAccountRelease = evt => {
        const { navigation } = this.props;
        navigation.navigate('ContractAccount');
    }

    handleFrenchAccountRelease = evt => {
        const { navigation } = this.props;
        navigation.navigate('FrenchAccount');
    }

    render() {
        return (
            <View style={[mStyles.mFlex1, styles.cardContainer]}>
                <ScrollView
                    style={styles.cardScroll}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <View 
                        style={[styles.cardItem, styles.bgGray]}
                        onStartShouldSetResponder={() => true}
                        onResponderRelease={evt => this.handleMyWalletRelease(evt)}
                    >
                        <Text style={styles.cardItemName}>我的钱包</Text>
                        <Text style={styles.cardItemVal}>0.00000000</Text>
                        <Text style={styles.cardItemExchange}>$0.00</Text>
                    </View>
                    <View 
                        style={[styles.cardItem, styles.bgBule]}
                        onStartShouldSetResponder={() => true}
                        onResponderRelease={evt => this.handleBbAccountRelease(evt)}
                    >
                        <Text style={styles.cardItemName}>币币账户</Text>
                        <Text style={styles.cardItemVal}>0.00000000</Text>
                        <Text style={styles.cardItemExchange}>$0.00</Text>
                    </View>
                    <View
                        style={[styles.cardItem, styles.bgPurple]}
                        onStartShouldSetResponder={() => true}
                        onResponderRelease={evt => this.handleContractAccountRelease(evt)}
                    >
                        <Text style={styles.cardItemName}>合约账户</Text>
                        <Text style={styles.cardItemVal}>0.00000000</Text>
                        <Text style={styles.cardItemExchange}>$0.00</Text>
                    </View>
                    <View
                        style={[styles.cardItem, styles.bgGreen]}
                        onStartShouldSetResponder={() => true}
                        onResponderRelease={evt => this.handleFrenchAccountRelease(evt)}
                    >
                        <Text style={styles.cardItemName}>法币账户</Text>
                        <Text style={styles.cardItemVal}>0.00000000</Text>
                        <Text style={styles.cardItemExchange}>$0.00</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}