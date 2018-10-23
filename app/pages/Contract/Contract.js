/**
 * 合约页
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    StatusBar,
    ScrollView,
    Image
} from 'react-native';
import Form from './Components/Form/Form'; //交易左边表单组件
import PriceList from './Components/Price_List/Price_List'; //交易右边价格表格组件
import PendingOrderList from './Components/Pending_Order_List/Pending_Order_List'; //挂单-列表组件
import PositionList from './Components/Position_List/Position_List'; //持仓-列表组件
import SideMenu from './Components/Side_Menu/Side_Menu'; //侧边菜单组件
import Constant from '../../public/constant';
import { SelectAnim, DcSelect } from '../../components/Dc_Select/Dc_Select'

import mStyles from '../../public/common_style';
import styles from './Contract_Style';

import searchIcon from '../../static/imgs/search.png' //搜索图标
import menuIcon2 from '../../static/imgs/menu_2.png' //菜单图标
import arrowIcon from '../../static/imgs/arrow_gray.png' //箭头图标
import trendActiveIcon from '../../static/imgs/trend_active.png' //箭头图标

let selectAnim1 = new SelectAnim();
let selectAnim2 = new SelectAnim();
let selectAnim3 = new SelectAnim();
let selectAnim4 = new SelectAnim();

export default class Contract extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainNav: [
                {
                    type: 0,
                    name: '交易',
                    isActive: false,
                }, {
                    type: 1,
                    name: '挂单',
                    isActive: false,
                }, {
                    type: 2,
                    name: '持仓',
                    isActive: true,
                }
            ], //一级导航
            trade: {
                contractType: {
                    isShow: false,
                    value: {
                        type: 0,
                        code: 0
                    },
                    options: [
                        {
                            type: 0,
                            name: 'BTC',
                            data: [
                                {
                                    code: 0,
                                    name: '当周·0928'
                                }, {
                                    code: 1,
                                    name: '次周·1005'
                                }, {
                                    code: 2,
                                    name: '季度·1228'
                                }
                            ]
                        }, {
                            type: 1,
                            name: 'LTC1',
                            data: [
                                {
                                    code: 0,
                                    name: '当周·0929'
                                }, {
                                    code: 1,
                                    name: '次周·1005'
                                }, {
                                    code: 2,
                                    name: '季度·1228'
                                }
                            ]
                        }, {
                            type: 2,
                            name: 'LTC2',
                            data: [
                                {
                                    code: 0,
                                    name: '当周·0930'
                                }, {
                                    code: 1,
                                    name: '次周·1005'
                                }, {
                                    code: 2,
                                    name: '季度·1228'
                                }
                            ]
                        }, {
                            type: 3,
                            name: 'LTC3',
                            data: [
                                {
                                    code: 0,
                                    name: '当周·0931'
                                }, {
                                    code: 1,
                                    name: '次周·1005'
                                }, {
                                    code: 2,
                                    name: '季度·1228'
                                }
                            ]
                        }
                    ]
                }, //合约类型下拉框
                priceList: {
                    select: {
                        isShow: false,
                        value: {
                            code: 0,
                            name: '0.001'
                        },
                        options: [
                            {
                                code: 0,
                                name: '0.001'
                            }, {
                                code: 1,
                                name: '0.02'
                            }
                        ]
                    } //下拉框
                }, //右侧价格列表栏
            }, //交易页的数据
            restingOrder: {
                filterSelect1: {
                    isShow: false,
                    value: {
                        code: 0,
                        name: 'BTC'
                    },
                    selectOptions: [
                        {
                            code: 0,
                            name: 'BTC'
                        }, {
                            code: 1,
                            name: 'LTC'
                        }, {
                            code: 2,
                            name: 'ETH'
                        }, {
                            code: 3,
                            name: 'ETC'
                        }, {
                            code: 4,
                            name: 'BCH'
                        }, {
                            code: 5,
                            name: 'BTG'
                        }, {
                            code: 6,
                            name: 'XRP'
                        }, {
                            code: 7,
                            name: 'EOS'
                        }
                    ]
                }, //挂单页-筛选数据1
                filterSelect2: {
                    isShow: false,
                    value: {
                        code: 0,
                        name: '当周'
                    },
                    selectOptions: [
                        {
                            code: 0,
                            name: '当周'
                        }, {
                            code: 1,
                            name: '次周'
                        }, {
                            code: 2,
                            name: '季度'
                        }
                    ]
                }, //挂单页-筛选数据2
                filterSelect3: {
                    isShow: false,
                    value: {
                        code: 0,
                        name: '普通委托'
                    },
                    selectOptions: [
                        {
                            code: 0,
                            name: '普通委托'
                        }, {
                            code: 1,
                            name: '计划委托'
                        }, {
                            code: 2,
                            name: '跟踪委托'
                        }, {
                            code: 3,
                            name: '冰上委托'
                        }, {
                            code: 4,
                            name: '时间加权委托'
                        }
                    ]
                } //挂单页-筛选数据3
            }, //挂单页数据
            position: {
                filterSelect: {
                    isShow: false,
                    value: {
                        code: 0,
                        name: 'BTC'
                    },
                    selectOptions: [
                        {
                            code: 0,
                            name: 'BTC'
                        }, {
                            code: 1,
                            name: 'LTC'
                        }, {
                            code: 2,
                            name: 'ETH'
                        }, {
                            code: 3,
                            name: 'ETC'
                        }, {
                            code: 4,
                            name: 'BCH'
                        }, {
                            code: 5,
                            name: 'BTG'
                        }, {
                            code: 6,
                            name: 'XRP'
                        }, {
                            code: 7,
                            name: 'EOS'
                        }
                    ]
                }, //持仓页-筛选数据
            }, //持仓页数据
            sideMenu: {
                isShow: false
            } //侧边菜单栏
        }
    }

    //处理一级导航释放事件
    handleMainNavRelease = (evt, index) => {
        let { mainNav } = this.state;
        mainNav.forEach((item, _index) => {
            if(index === _index) {
                item.isActive = true;
            } else {
                item.isActive = false;
            }
        });
        this.setState({ mainNav: mainNav });
    }

    //菜单按钮释放事件
    handleSideMenuRelease = evt => {
        let { sideMenu } = this.state;
        sideMenu.isShow = true;
        this.setState({ sideMenu: sideMenu });
    }

    //设置菜单的值
    setMenu = (menu, callback) => {
        this.setState({ menu: menu }, () => {
            if(callback) {
                callback();
            } else {
                return false;
            }
        });
    }

    //处理菜单modal层释放事件
    handleMenuSideModalWrapRelease = evt => {
        let { sideMenu } = this.state;
        sideMenu.isShow = false;
        this.setState({ sideMenu: sideMenu });
    }

    //处理搜索按钮释放事件
    handleGoSearchRelease = evt => {
        const { navigate } = this.props.navigation;
        navigate('Search');
    }

    //交易页-处理合约类型下拉框释放事件
    handleTradeContractOptionsRelease = evt => {
        let { trade } = this.state;
        trade.contractType.isShow = !trade.contractType.isShow;
        this.setState({ trade: trade });
    }

    //交易页-处理合约类型下拉框选项释放事件
    handleTradeContractOptionsItemRelease = (evt, parentIndex, childIndex) => {
        let { trade } = this.state;
        trade.contractType.isShow = !trade.contractType.isShow;
        trade.contractType.value.type = parentIndex;
        trade.contractType.value.code = childIndex;
        this.setState({ trade: trade });
    }

    //设置priceList的值
    setPriceList = (priceList, callback) => {
        let { trade } = this.state;
        trade.priceList = priceList;
        this.setState({ trade: trade }, () => {
            if(callback) {
                callback();
            } else {
                return false;
            }
        });
    }

    //设置 挂单页-筛选数据1 的值
    setROFilterSelect1 = (filterSelect, callback) => {
        let { restingOrder } = this.state;
        restingOrder.filterSelect1 = filterSelect;
        this.setState({ restingOrder: restingOrder }, () => {
            if(callback) {
                callback();
            } else {
                return false;
            }
        });
    }

    //处理 挂单页-筛选栏1 释放事件
    handleROFilterSelectRelease1 = evt => {
        let { restingOrder } = this.state;
        let select = restingOrder.filterSelect1;
        if(select.isShow) {
            selectAnim1.scaleFadeOut().start(() => {
                select.isShow = false;
                this.setState({ restingOrder: restingOrder });
            });
        } else {
            select.isShow = true;
            this.setState({ restingOrder: restingOrder }, () => {
                selectAnim1.scaleFadeIn().start();
            });
        }
    }

    //处理 挂单页-筛选栏option1 释放事件
    handleROFilterSelectOptionsRelease1 = (obj) => {
        let { restingOrder } = this.state;
        let select = restingOrder.filterSelect1;
        selectAnim1.scaleFadeOut().start(() => {
            select.isShow = false;
            select.value.name = obj.name;
            select.value.code = obj.code;
            this.setState({ restingOrder: restingOrder });
        });
    }

    //处理 挂单页-筛选栏modal层1 释放事件
    handleROFilterSelectWrapRelease1 = evt => {
        let { restingOrder } = this.state;
        let select = restingOrder.filterSelect1;
        selectAnim1.scaleFadeOut().start(() => {
            select.isShow = false;
            this.setState({ restingOrder: restingOrder });
        });
    }

    //设置 挂单页-筛选数据2 的值
    setROFilterSelect2 = (filterSelect, callback) => {
        let { restingOrder } = this.state;
        restingOrder.filterSelect2 = filterSelect;
        this.setState({ restingOrder: restingOrder }, () => {
            if(callback) {
                callback();
            } else {
                return false;
            }
        });
    }

    //处理 挂单页-筛选栏2 释放事件
    handleROFilterSelectRelease2 = evt => {
        let { restingOrder } = this.state;
        let select = restingOrder.filterSelect2;
        if(select.isShow) {
            selectAnim2.scaleFadeOut().start(() => {
                select.isShow = false;
                this.setState({ restingOrder: restingOrder });
            });
        } else {
            select.isShow = true;
            this.setState({ restingOrder: restingOrder }, () => {
                selectAnim2.scaleFadeIn().start();
            });
        }
    }

    //处理 挂单页-筛选栏option2 释放事件
    handleROFilterSelectOptionsRelease2 = (obj) => {
        let { restingOrder } = this.state;
        let select = restingOrder.filterSelect2;
        selectAnim2.scaleFadeOut().start(() => {
            select.isShow = false;
            select.value.name = obj.name;
            select.value.code = obj.code;
            this.setState({ restingOrder: restingOrder });
        });
    }

    //处理 挂单页-筛选栏modal层2 释放事件
    handleROFilterSelectWrapRelease2 = evt => {
        let { restingOrder } = this.state;
        let select = restingOrder.filterSelect2;
        selectAnim2.scaleFadeOut().start(() => {
            select.isShow = false;
            this.setState({ restingOrder: restingOrder });
        });
    }

    //设置 挂单页-筛选数据3 的值
    setROFilterSelect3 = (filterSelect, callback) => {
        let { restingOrder } = this.state;
        restingOrder.filterSelect3 = filterSelect;
        this.setState({ restingOrder: restingOrder }, () => {
            if(callback) {
                callback();
            } else {
                return false;
            }
        });
    }

    //处理 挂单页-筛选栏3 释放事件
    handleROFilterSelectRelease3 = evt => {
        let { restingOrder } = this.state;
        let select = restingOrder.filterSelect3;
        if(select.isShow) {
            selectAnim3.scaleFadeOut().start(() => {
                select.isShow = false;
                this.setState({ restingOrder: restingOrder });
            });
        } else {
            select.isShow = true;
            this.setState({ restingOrder: restingOrder }, () => {
                selectAnim3.scaleFadeIn().start();
            });
        }
    }

    //处理 挂单页-筛选栏option3 释放事件
    handleROFilterSelectOptionsRelease3 = (obj) => {
        let { restingOrder } = this.state;
        let select = restingOrder.filterSelect3;
        selectAnim3.scaleFadeOut().start(() => {
            select.isShow = false;
            select.value.name = obj.name;
            select.value.code = obj.code;
            this.setState({ restingOrder: restingOrder });
        });
    }

    //处理 挂单页-筛选栏modal层3 释放事件
    handleROFilterSelectWrapRelease3 = evt => {
        let { restingOrder } = this.state;
        let select = restingOrder.filterSelect3;
        selectAnim3.scaleFadeOut().start(() => {
            select.isShow = false;
            this.setState({ restingOrder: restingOrder });
        });
    }

    //设置 持仓页-筛选数据 的值
    setPFilterSelect = (filterSelect, callback) => {
        let { position } = this.state;
        position.filterSelect = filterSelect;
        this.setState({ position: position }, () => {
            if(callback) {
                callback();
            } else {
                return false;
            }
        });
    }

    //处理 持仓页-筛选数据 释放事件
    handlePFilterSelectRelease = evt => {
        let { position } = this.state;
        let select = position.filterSelect;
        if(select.isShow) {
            selectAnim4.scaleFadeOut().start(() => {
                select.isShow = false;
                this.setState({ position: position });
            });
        } else {
            select.isShow = true;
            this.setState({ position: position }, () => {
                selectAnim4.scaleFadeIn().start();
            });
        }
    }

    //处理 持仓页-筛选数据选项 释放事件
    handlePFilterSelectOptionsRelease = (obj) => {
        let { position } = this.state;
        let select = position.filterSelect;
        selectAnim4.scaleFadeOut().start(() => {
            select.isShow = false;
            select.value.name = obj.name;
            select.value.code = obj.code;
            this.setState({ position: position });
        });
    }

    //处理 持仓页-筛选数据modal层 释放事件
    handlePFilterSelectWrapRelease = evt => {
        let { position } = this.state;
        let select = position.filterSelect;
        selectAnim4.scaleFadeOut().start(() => {
            select.isShow = false;
            this.setState({ position: position });
        });
    }

    render() {
        let {
            mainNav,
            trade,
            restingOrder,
            position,
            sideMenu
        } = this.state;
        const { navigation } = this.props;
        //一级导航DOM
        let mainNavActiveIndex = null;
        let mainNavDOM = mainNav.map((item, index) => {
            if(item.isActive === true) {
                mainNavActiveIndex = index;
            }
            return (
                <View
                    style={[styles.navItem, item.isActive ? mStyles.mBlueBorderBottom : '']}
                    key={index}
                    onStartShouldSetResponder={() => true}
                    onResponderRelease={evt => this.handleMainNavRelease(evt, index)}
                >
                    <Text style={[styles.navItemText, item.isActive ? mStyles.mBlueColor : '']}>{item.name}</Text>
                </View>
            )
        });

        //交易页-合约类型下拉框选项DOM
        let tradeContractOptionsDOM = [];
        for(let i = 0; i < trade.contractType.options.length; i++) {
            let arr = [];
            for(let j = 0; j < trade.contractType.options[i].data.length; j++) {
                arr.push(
                    <View
                        style={[
                            styles.tradeContractTypeChildItem,
                            (trade.contractType.value.type === i) && (trade.contractType.value.code === j) ? mStyles.mBlueBorder : ''
                        ]}
                        key={j}
                        onStartShouldSetResponder={() => true}
                        onResponderRelease={evt => this.handleTradeContractOptionsItemRelease(evt, i, j)}
                    >
                        <Text
                            style={[
                                styles.tradeContractTypeChildItemText,
                                (trade.contractType.value.type === i) && (trade.contractType.value.code === j) ? mStyles.mBlueBg : '',
                                {color: (trade.contractType.value.type === i) && (trade.contractType.value.code === j) ? '#fff' : Constant.DEFAULT_FONT_COLOR}
                            ]}
                            numberOfLines={1}
                        >
                            {trade.contractType.options[i].data[j].name}
                        </Text>
                    </View>
                )
            }
            tradeContractOptionsDOM.push(
                <View style={styles.tradeContractOptionsItem} key={i}>
                    <Text style={styles.tradeContractTypeText}>{trade.contractType.options[i].name}</Text>
                    <View style={styles.tradeContractTypeChild}>
                        {arr}
                    </View>
                </View>
            )
        }

        return (
            <View style={mStyles.mFlex1}>
                {/* 头部开始 */}
                <View style={styles.header}>
                    <View style={[mStyles.mCenterContent, styles.headerCenterContent]}>
                        <View style={styles.headerMain}>
                            <Image
                                style={styles.headerMenu}
                                source={menuIcon2}
                                onStartShouldSetResponder={() => true}
                                onResponderRelease={evt => this.handleSideMenuRelease(evt)}
                            />
                            <Text style={styles.headerTitle}>合约</Text>
                            <Image
                                style={styles.headerSearch}
                                source={searchIcon}
                                onStartShouldSetResponder={() => true}
                                onResponderRelease={evt => this.handleGoSearchRelease(evt)}
                            />
                        </View>
                    </View>
                </View>
                {/* 头部结束 */}
                {/* 导航开始 */}
                <View style={styles.nav}>
                    {mainNavDOM}
                </View>
                {/* 导航结束 */}
                {/* 页面开始 */}
                <View style={styles.body}>
                    {/* 交易页面开始 */}
                    <ScrollView
                        style={[
                            {display: mainNavActiveIndex === 0 ? 'flex' : 'none'},
                            styles.row
                        ]}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.trade}>
                            <View style={[styles.tradeHeader]}>
                                <View style={[mStyles.mCenterContent, styles.tradeHeaderCenterContent]}>
                                    <View
                                        style={styles.tradeHeaderSelect}
                                        onStartShouldSetResponder={() => true}
                                        onResponderRelease={evt => this.handleTradeContractOptionsRelease(evt)}
                                    >
                                        <Text style={styles.tradeHeaderSelectText}>
                                            {trade.contractType.options[trade.contractType.value.type].name + '  '}
                                            {trade.contractType.options[trade.contractType.value.type].data[trade.contractType.value.code].name}
                                        </Text>
                                        <Image style={styles.tradeHeaderSelectArrow} source={arrowIcon} />
                                    </View>
                                    <View style={styles.tradeHeaderQuo}>
                                        <Text style={[styles.tradeHeaderQuoText, mStyles.mGreenColor]}>$1.1228</Text>
                                        <Image style={styles.tradeHeaderQuoIcon} source={trendActiveIcon} />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.tradeBody}>
                                <View style={[mStyles.mCenterContent, styles.tradeCenterContent]}>
                                    <View style={styles.tradeForm}>
                                        <Form />
                                    </View>
                                    <View style={styles.tradeList}>
                                        <PriceList 
                                            data={trade.priceList}
                                            setData={this.setPriceList}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View
                                style={[
                                    styles.tradeContractOptionsWrap,
                                    {height: trade.contractType.isShow ? 240 : 0}
                                ]}
                            >
                                <ScrollView style={[mStyles.mCenterContent, styles.tradeContractOptionsCenterContent]}>
                                    {/* <View style={styles.tradeContractOptionsItem}>
                                        <Text style={styles.tradeContractTypeText}>BTC合约</Text>
                                        <View style={styles.tradeContractTypeChild}>
                                            <View
                                                style={styles.tradeContractTypeChildItem}
                                                onStartShouldSetResponder={() => true}
                                                onResponderRelease={evt => this.handleTradeContractOptionsItemRelease(evt, 0, 0)}
                                            >
                                                <Text style={styles.tradeContractTypeChildItemText} numberOfLines={1}>当周·0928</Text>
                                            </View>
                                        </View>
                                    </View> */}
                                    {tradeContractOptionsDOM}
                                </ScrollView>
                            </View>
                        </View>
                    </ScrollView>
                    {/* 交易页面结束 */}
                    {/* 挂单页面开始 */}
                    <View style={[{display: mainNavActiveIndex === 1 ? 'flex' : 'none'},styles.row]}>
                        <View style={styles.filterWrap}>
                            <View style={[styles.filterCenterContent, mStyles.mCenterContent]}>
                                <View style={styles.filterItem}>
                                    <View
                                        ref='ROFilterSelect1'
                                        style={styles.filterItemVal}
                                        collapsable={false}
                                        onStartShouldSetResponder={() => true}
                                        onResponderRelease={evt => this.handleROFilterSelectRelease1(evt)}
                                    >
                                        <Text style={styles.filterItemValText}>{restingOrder.filterSelect1.value.name}</Text>
                                        <Image style={styles.filterItemValArrow} source={arrowIcon}/>
                                    </View>
                                    <View style={styles.filterItemSelectOptions}>
                                        <DcSelect
                                            selectHeaderRef={this.refs.ROFilterSelect1}
                                            dcStyle={selectAnim1.style}
                                            options={restingOrder.filterSelect1}
                                            setOptions={this.setROFilterSelect1}
                                            onOptionsRelease={obj => this.handleROFilterSelectOptionsRelease1(obj)}
                                            onWrapRelease={evt => this.handleROFilterSelectWrapRelease1(evt)}
                                        />
                                    </View>
                                </View>
                                <View style={styles.filterItem}>
                                    <View
                                        ref='ROFilterSelect2'
                                        style={styles.filterItemVal}
                                        collapsable={false}
                                        onStartShouldSetResponder={() => true}
                                        onResponderRelease={evt => this.handleROFilterSelectRelease2(evt)}
                                    >
                                        <Text style={styles.filterItemValText}>{restingOrder.filterSelect2.value.name}</Text>
                                        <Image style={styles.filterItemValArrow} source={arrowIcon}/>
                                    </View>
                                    <View style={styles.filterItemSelectOptions}>
                                        <DcSelect
                                            selectHeaderRef={this.refs.ROFilterSelect2}
                                            dcStyle={selectAnim2.style}
                                            options={restingOrder.filterSelect2}
                                            setOptions={this.setROFilterSelect2}
                                            onOptionsRelease={obj => this.handleROFilterSelectOptionsRelease2(obj)}
                                            onWrapRelease={evt => this.handleROFilterSelectWrapRelease2(evt)}
                                        />
                                    </View>
                                </View>
                                <View style={styles.filterItem}>
                                    <View
                                        ref='ROFilterSelect3'
                                        style={styles.filterItemVal}
                                        collapsable={false}
                                        onStartShouldSetResponder={() => true}
                                        onResponderRelease={evt => this.handleROFilterSelectRelease3(evt)}
                                    >
                                        <Text style={styles.filterItemValText}>{restingOrder.filterSelect3.value.name}</Text>
                                        <Image style={styles.filterItemValArrow} source={arrowIcon}/>
                                    </View>
                                    <View style={styles.filterItemSelectOptions}>
                                        <DcSelect
                                            selectHeaderRef={this.refs.ROFilterSelect3}
                                            dcStyle={selectAnim3.style}
                                            options={restingOrder.filterSelect3}
                                            setOptions={this.setROFilterSelect3}
                                            onOptionsRelease={obj => this.handleROFilterSelectOptionsRelease3(obj)}
                                            onWrapRelease={evt => this.handleROFilterSelectWrapRelease3(evt)}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <PendingOrderList />
                    </View>
                    {/* 挂单页面结束 */}
                    {/* 持仓页面开始 */}
                    <View style={[{display: mainNavActiveIndex === 2 ? 'flex' : 'none'},styles.row]}>
                        <View style={styles.filterWrap}>
                            <View style={[styles.filterCenterContent, mStyles.mCenterContent]}>
                                <View style={styles.filterItem}>
                                    <View
                                        ref='PFilterSelect'
                                        style={styles.filterItemVal}
                                        collapsable={false}
                                        onStartShouldSetResponder={() => true}
                                        onResponderRelease={evt => this.handlePFilterSelectRelease(evt)}
                                    >
                                        <Text style={styles.filterItemValText}>{position.filterSelect.value.name}</Text>
                                        <Image style={styles.filterItemValArrow} source={arrowIcon}/>
                                    </View>
                                    <View style={[styles.filterItemSelectOptions]}>
                                        <DcSelect
                                            selectHeaderRef={this.refs.PFilterSelect}
                                            dcStyle={selectAnim4.style}
                                            options={position.filterSelect}
                                            setOptions={this.setPFilterSelect}
                                            onOptionsRelease={obj => this.handlePFilterSelectOptionsRelease(obj)}
                                            onWrapRelease={evt => this.handlePFilterSelectWrapRelease(evt)}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <PositionList />
                    </View>
                    {/* 持仓页面结束 */}
                </View>
                {/* 页面结束 */}
                {/* 侧边菜单开始 */}
                <SideMenu
                    data={sideMenu}
                    navigation={navigation}
                    setData={this.setMenu}
                    onModalWrapRelease={evt => this.handleMenuSideModalWrapRelease(evt)}
                />
                {/* 侧边结束开始 */}
            </View>
        );
    }
}