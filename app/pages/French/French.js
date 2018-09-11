/**
 *行情页
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
    LayoutAnimation
} from 'react-native';
import Anim from '../../public/animation'
import mStyles from '../../public/common_style';
import styles from './French_Style';

//一级导航显示和隐藏的动画
const mainNavAnim = {
    style: {
        opacity: new Animated.Value(0.6),
        scale: new Animated.Value(0.92)
    },

    //显示
    scaleFadeIn: function() {
        return (
            Anim.parallel([
                Anim.timing(this.style.opacity, 1, 100, Easing.ease),
                Anim.timing(this.style.scale, 1, 100, Easing.ease),
            ])
        )
    },

    //隐藏
    scaleFadeOut: function() {
        return (
            Anim.parallel([
                Anim.timing(this.style.opacity, 0, 100, Easing.ease),
                Anim.timing(this.style.scale, .92, 100, Easing.ease),
            ])
        );
    }
}

export default class French extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mainNav: {
                isShow: false,
                data: [
                    {
                        isActive: true,
                        icon: require('../../static/imgs/dc/USDT.png'),
                        name: 'USDT'
                    }, {
                        isActive: false,
                        icon: require('../../static/imgs/dc/BTC.png'),
                        name: 'BTC'
                    }, {
                        isActive: false,
                        icon: require('../../static/imgs/dc/ETH.png'),
                        name: 'ETH'
                    }, {
                        isActive: false,
                        icon: require('../../static/imgs/dc/ETC.png'),
                        name: 'ETC'
                    }, {
                        isActive: false,
                        icon: require('../../static/imgs/dc/LTC.png'),
                        name: 'LTC'
                    }, {
                        isActive: false,
                        icon: require('../../static/imgs/dc/EOS.png'),
                        name: 'EOS'
                    }, {
                        isActive: false,
                        icon: require('../../static/imgs/dc/BCH.png'),
                        name: 'BCH'
                    }, {
                        isActive: false,
                        icon: require('../../static/imgs/dc/QTUM.png'),
                        name: 'QTUM'
                    }, {
                        isActive: false,
                        icon: require('../../static/imgs/dc/NEO.png'),
                        name: 'NEO'
                    }, {
                        isActive: false,
                        icon: require('../../static/imgs/dc/XUC.png'),
                        name: 'XUC'
                    }
                ]
            }, //一级导航
        }
    }

    //处理一级导航按钮点击事件
    handleMainNavRelease = (evt) => {
        const _this = this;
        let { mainNav } = this.state;

        if(mainNav.isShow) {
            mainNavAnim.scaleFadeOut().start(() => {
                mainNav.isShow = false;
                _this.setState({ mainNav: mainNav });
            });
        } else {
            mainNav.isShow = true;
            _this.setState({ mainNav: mainNav }, () => {
                mainNavAnim.scaleFadeIn().start();
            });
        }
    }

    //处理一级导航选项点击事件
    handleMainNavItemRelease = (evt, index) => {
        let { mainNav } = this.state;

        mainNavAnim.scaleFadeOut().start(() => {
            mainNav.isShow = false;
            this.setState({ mainNav: mainNav });
        });

        let data = mainNav.data;
        for(let i = 0; i < data.length; i++) {
            if(i === index) {
                data[i].isActive = true;
            } else {
                data[i].isActive = false;
            }
        }
        this.setState({ mainNav: mainNav });
    }

    renderListItem = (item) => {
        return (
            <View style={styles.listItem}>
                <View style={styles.listItemHead}>
                    <View style={styles.listItemHeadInfo}>
                        <Text style={styles.listItemHeadInfoUser}>图弹幕比付款</Text>
                        <Text style={styles.listItemHeadDeal}>已交易12334</Text>
                        <Text style={styles.listItemHeadDealRate}>成交率20%</Text>
                    </View>
                    <View style={styles.listItemHeadPayFunc}></View>
                </View>
                <View style={styles.listItemBody}>
                    <View style={styles.listItemBodyItem}>
                        <Text style={styles.listItemBodyItemValBig}>1,234,23.00</Text>
                        <Text style={styles.listItemBodyItemKey}>价格CNY</Text>
                    </View>
                    <View style={styles.listItemBodyItem}>
                        <Text style={styles.listItemBodyItemValSmall}>1234-23321</Text>
                        <Text style={styles.listItemBodyItemKey}>限额</Text>
                    </View>
                    <View style={[styles.listItemBodyItem, {borderRightWidth: 0}]}>
                        <Text style={styles.listItemBodyItemValSmall}>10,000</Text>
                        <Text style={styles.listItemBodyItemKey}>数量</Text>
                    </View>
                </View>
            </View>
        )
    }

    render() {
        const _this = this;
        let {
            mainNav
        } = this.state;

        //遍历一级导航的选项
        let mainNavItemsDOM = mainNav.data.map((items, index) => {
            if(mainNav.data[index].isActive === true) {
                mainNav.title = mainNav.data[index].name; //如果一级导航选项中isActive为true，那么导航title就为这个选项的name
            }
            return (
                <View 
                    style={styles.mainNavCurItem} 
                    onStartShouldSetResponder={() => true}
                    onResponderRelease={evt => this.handleMainNavItemRelease(evt, index)}
                    key={index}
                >
                    <Image 
                        style={styles.mainNavCurItemIcon}
                        source={items.icon}
                    />
                    <Text style={styles.mainNavCurItemName}>{items.name}</Text>
                </View>
            )
        });

        let listData = [
            {
                
            }, {
                
            }, {
                
            }, {
                
            }, {
                
            }, {
                
            }, {
                
            }, {
                
            }, {
                
            }, {
                
            }, {
                
            }, {
                
            }, {
                
            }, {
                
            }, {
                
            }, {
                
            },

        ]

        return (
            <View style={mStyles.mFlex1}>
                <StatusBar
                    backgroundColor='#fff'
                    hidden={true}
                    animated={true}
                    barStyle='dark-content'
                />
                <View style={styles.header}>
                    <View style={[mStyles.mCenterContent, styles.headerCenter]}>
                        <View style={styles.mainNavLeft}>
                            <Text style={styles.mainNavLeftText}>CNY</Text>
                        </View>
                        <View 
                            style={styles.mainNavCenter}
                            onStartShouldSetResponder={() => true}
                            onResponderRelease={this.handleMainNavRelease}
                        >
                            <Text style={styles.mainNavCenterText}>{mainNav.title}/CNY</Text>
                            <Image                             
                                style={{
                                    width: 14,
                                    height: 14,
                                    marginLeft: 8
                                }}
                                source={require('../../static/imgs/arrow.png')}
                            />
                        </View>
                        <View style={styles.mainNavRight}>
                            <Text style={[styles.mainNavRightText, mStyles.mRedColor]}>¥7823.21</Text>
                        </View>
                    </View>
                </View>
                {/* 购买，出售，委托，订单 选择开始 */}
                <View style={styles.subNav}>
                    <View style={styles.subNavItemWrap}>
                        <View style={[styles.subNavItem, mStyles.mGreenBorderBottom]}>
                            <Text style={[styles.subNavItemText, mStyles.mGreenColor]}>购买</Text>
                        </View>
                    </View>
                    <View style={styles.subNavItemWrap}>
                        <View style={[styles.subNavItem, mStyles.mRedBorderBottom]}>
                            <Text style={[styles.subNavItemText, mStyles.mRedColor]}>出售</Text>
                        </View>
                    </View>
                    <View style={styles.subNavItemWrap}>
                        <View style={[styles.subNavItem, mStyles.mBlueBorderBottom]}>
                            <Text style={[styles.subNavItemText, mStyles.mBlueColor]}>委托单</Text>
                        </View>
                    </View>
                    <View style={styles.subNavItemWrap}>
                        <View style={styles.subNavItem}>
                            <Text style={styles.subNavItemText}>订单</Text>
                        </View>
                    </View>
                </View>
                {/* 购买，出售，委托，订单 选择结束 */}
                {/* 搜索栏开始 */}
                <View style={styles.searchBar}></View>
                {/* 搜索栏结束 */}
                {/* 列表开始 */}
                <View style={styles.list}>
                    <FlatList
                        data={listData}
                        renderItem={this.renderListItem}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                {/* 列表结束 */}
                {/* 货币选择开始 */}
                <Animated.View 
                        style={[
                            styles.mainNavCur,
                            {
                                height: mainNav.isShow ? 'auto' : 0,
                                opacity: mainNavAnim.style.opacity, 
                                transform: [
                                    {scale: mainNavAnim.style.scale}
                                ]
                            }
                        ]}
                    >
                        {/* <View style={styles.mainNavCurItem}>
                            <Image 
                                style={styles.mainNavCurItemIcon}
                                source={require('../../static/imgs/BCN.png')}
                            />
                            <Text style={styles.mainNavCurItemName}>BCN</Text>
                        </View> */}
                        {mainNavItemsDOM}
                    </Animated.View>
                    {/* 货币选择结束 */}
            </View>
        );
    }
}