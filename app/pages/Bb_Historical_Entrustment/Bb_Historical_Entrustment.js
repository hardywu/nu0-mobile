/**
 * 币币历史委托页
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    StatusBar,
    ScrollView,
    Image
} from 'react-native';
import Constant from '../../public/constant';
import PendingOrderList from './Components/Pending_Order_List/Pending_Order_List'; //挂单-列表组件
import Header from '../../components/Header/Header';
import EmptyTopBar from '../../components/Empty_Top_Bar/Empty_Top_Bar';
import EmptyBottomBar from '../../components/Empty_Bottom_Bar/Empty_Bottom_Bar';
import { SelectAnim, DcSelect } from '../../components/Dc_Select/Dc_Select'

import mStyles from '../../public/common_style';
import styles from './Bb_Historical_Entrustment_Style';

import arrowIcon from '../../static/imgs/arrow_gray.png' //箭头图标

let selectAnim1 = new SelectAnim();
let selectAnim2 = new SelectAnim();
let selectAnim3 = new SelectAnim();

export default class ContractHistoricalEntrustment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restingOrder: {
                filterSelect1: {
                    isShow: false,
                    value: {
                        code: 0,
                        name: 'BTC2'
                    },
                    selectOptions: [
                        {
                            code: 0,
                            name: 'BTC2'
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
        }
    }

    //处理 返回按钮 释放事件
    handleGoBackRelease = evt => {
        this.props.navigation.goBack();
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

    render() {
        let { restingOrder } = this.state;
        const { navigation } = this.props;

        return (
            <View style={mStyles.mFlex1}>
                <EmptyTopBar backgroundColor='#fff'/>
                <Header
                    title='历史委托'
                    onGoBackRelease={evt => this.handleGoBackRelease(evt)}
                />
                {/* 页面开始 */}
                <View style={styles.body}>
                    {/* 挂单页面开始 */}
                    <View style={[mStyles.mFlex, styles.row]}>
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
                </View>
                {/* 页面结束 */}
                <EmptyBottomBar backgroundColor={Constant.M_BACKGROUND_COLOR}/>
            </View>
        );
    }
}