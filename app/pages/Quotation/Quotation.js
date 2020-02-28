/**
 *行情页
 */
import React, { Component } from 'react';
import { Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
//组件
import SelfSelectionist from './Components/Self_Selection_List/Self_Selection_List';
import ContractList from './Components/Contract_List/Contract_List';
import CurrencyList from './Components/Currency_List/Currency_List';
import GlobalCurrencyList from './Components/Global_Currency_List/Global_Currency_List';
import EmptyTopBar from '../../components/Empty_Top_Bar/Empty_Top_Bar';
import EmptyBottomBar from '../../components/Empty_Bottom_Bar/Empty_Bottom_Bar';
//样式
import mStyles from '../../public/common_style';
import styles from './Quotation_Style';
//其他
import utils from '../../public/utils';
import api from '../../public/api';

export default class Quotation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //被激活的一级nav的索引
      activeMainNavIndex: 0,
      //子nav的选项配置， 根据activeMainNavIndex的值显示哪个子nav
      subNav: [
        {
          //okex
          parent: 'DC',
          items: [
            // {
            //     type: 0, //type 0:自选 1:合约 2:币种 3: 全球币种
            //     id: '', //id
            //     name: '自选', //名字
            //     isActive: false //是否为激活状态
            // }, {
            //     type: 1,
            //     id: '',
            //     name: '合约',
            //     isActive: false
            // }
          ],
        },
        {
          //全球
          parent: '全球',
          items: [
            {
              type: 3,
              name: '选项11',
              isActive: true,
            },
            {
              type: 3,
              name: '选项22',
              isActive: false,
            },
            {
              type: 3,
              name: '选项33',
              isActive: false,
            },
            {
              type: 3,
              name: '选项44',
              isActive: false,
            },
            {
              type: 3,
              name: '选项55',
              isActive: false,
            },
            {
              type: 3,
              name: '选项66',
              isActive: false,
            },
          ],
        },
      ],
      //market tikers列表
      marketsTickers: {},
    };
  }

  componentDidMount() {
    const that = this;
    //请求间隔时间，单位秒
    const reqInterval = 5;
    let { subNav, marketsTickers } = this.state;
    //发起币种请求
    api
      .getPublicCurrencies()
      .then(res => {
        subNav[0].items = [];
        //遍历res的数据
        res.forEach((item, index) => {
          //设置二级导航栏
          subNav[0].items.push({
            type: 2,
            id: item.id,
            name: item.id.toUpperCase(),
            isActive: false,
          });
        });
        subNav[0].items[0].isActive = true;
        this.setState({ subNav: subNav });
      })
      .catch(err => {
        utils.toast.show(err.msg);
        console.log(`err: ${err.msg}`);
      });
    this.getAllData();
    setInterval(() => {
      this.getAllData();
    }, reqInterval * 1000);
  }

  //一级导航press事件
  mainNavItemPress = (event, index) => {
    this.setState({ activeMainNavIndex: index });
  };

  //二级导航press事件
  handleSubNavPress = (event, index) => {
    let { activeMainNavIndex, subNav } = this.state;
    let subNavItems = subNav[activeMainNavIndex].items;
    for (let i = 0; i < subNavItems.length; i++) {
      if (i === index) {
        subNavItems[i].isActive = true;
      } else {
        subNavItems[i].isActive = false;
      }
    }
    this.setState({ subNav: subNav });
  };

  //获取页面所有数据
  getAllData() {
    const that = this;
    let { subNav, marketsTickers } = this.state;
    //请求计数
    let reqCount = {
      //请求总共数量
      target: 1,
      //当前完成请求数量
      current: 0,
    };
    return new Promise((resolve, reject) => {
      //发起币种请求
      // api.getV2Currencies().then(res => {
      //     //遍历res的数据
      //     res.forEach((item, index) => {
      //         //设置二级导航栏
      //         subNav[0].items.push({
      //             type: 2,
      //             id: item.id,
      //             name: item.name,
      //             isActive: false
      //         });
      //     });
      //     this.setState({ subNav: subNav });
      // }).catch(err => {
      //     utils.toast.show(err.msg);
      //     console.log(`err: ${err.msg}`);
      // });
      //发起market tikers列表请求
      api
        .getPublicMarketsTickers()
        .then(res => {
          reqCount.current++;
          this.setState({ marketsTickers: res });
          if (reqCount.current === reqCount.target) {
            resolve();
          }
        })
        .catch(err => {
          utils.toast.show(err.msg);
          console.log(`err: ${err.msg}`);
        });
    });
  }

  render() {
    let { activeMainNavIndex, subNav, marketsTickers } = this.state;
    //渲染二级导航
    let subNavArr = [];
    subNavArr = subNav[activeMainNavIndex].items.map((item, index) => {
      return (
        <View
          style={[
            styles.headerSubNavItemWrap,
            item.isActive ? styles.headerSubNavItemWrapActive : '',
          ]}
          key={index}>
          <Text
            style={[
              styles.headerSubNavItem,
              item.isActive ? styles.headerSubNavItemActive : '',
            ]}
            onPress={event => this.handleSubNavPress(event, index)}>
            {item.name}
          </Text>
        </View>
      );
    });
    //根据type选择对应的list组件
    let listComponent = [];
    //list中当前处于激活状态的item
    let listActiveItem = null;
    //遍历subNav.items
    for (let i = 0; i < subNav[activeMainNavIndex].items.length; i++) {
      //如果item处于active状态则渲染对应组件
      if (subNav[activeMainNavIndex].items[i].isActive === true) {
        listActiveItem = subNav[activeMainNavIndex].items[i];
        let type = subNav[activeMainNavIndex].items[i].type;
        if (type === 0) {
          listComponent = <SelfSelectionist />;
        } else if (type === 1) {
          listComponent = <ContractList />;
        } else if (type === 2) {
          listComponent = (
            <CurrencyList currentItem={listActiveItem} list={marketsTickers} />
          );
        } else if (type === 3) {
          listComponent = <GlobalCurrencyList />;
        }
      }
    }

    // for (let i = 0; i < subNav[activeMainNavIndex].items.length; i++) {
    //     let type = subNav[activeMainNavIndex].items[i].type;
    //     let tmp = null;
    //     if (type === 0) {
    //         tmp = <SelfSelectionist />;
    //     } else if (type === 1) {
    //         tmp = <ContractList />;
    //     } else if (type === 2) {
    //         tmp = <CurrencyList />;
    //     } else if (type === 3) {
    //         tmp = <GlobalCurrencyList />
    //     }
    //     listComponent.push(
    //         <View
    //             style={[mStyles.mFlex1, {
    //                 display: subNav[activeMainNavIndex].items[i].isActive === true ? 'flex' : 'none'
    //             }]}
    //             key={i}
    //         >
    //             {tmp}
    //         </View>
    //     );
    // }

    return (
      <SafeAreaView style={[mStyles.mFlex1]}>
        <EmptyTopBar backgroundColor="#fff" />
        {/* 头部开始 */}
        <View style={styles.header}>
          {/* 一级导航开始 */}
          <View style={styles.headerMainNav}>
            <View style={styles.headerMainNavWrap}>
              <View
                style={[
                  styles.headerMainNavItem,
                  activeMainNavIndex === 0
                    ? styles.headerMainNavItemActive
                    : '',
                ]}>
                <Text
                  style={[
                    styles.headerMainNavItemName,
                    activeMainNavIndex === 0
                      ? styles.headerMainNavItemNameActive
                      : '',
                  ]}
                  onPress={event => this.mainNavItemPress(event, 0)}>
                  DC
                </Text>
              </View>
              <View
                style={[
                  styles.headerMainNavItem,
                  activeMainNavIndex === 1
                    ? styles.headerMainNavItemActive
                    : '',
                ]}>
                <Text
                  style={[
                    styles.headerMainNavItemName,
                    activeMainNavIndex === 1
                      ? styles.headerMainNavItemNameActive
                      : '',
                  ]}
                  onPress={event => this.mainNavItemPress(event, 1)}>
                  自定义
                </Text>
              </View>
            </View>
          </View>
          {/* 一级导航结束 */}
          {/* 二级导航开始 */}
          <View style={styles.headerSubNav}>
            <ScrollView
              contentContainerStyle={styles.headerSubNavWrap}
              showsHorizontalScrollIndicator={false}
              horizontal={true}>
              {subNavArr}
              {/* <View style={[styles.headerSubNavItemWrap, styles.headerSubNavItemWrapActive]}>
                                <Text
                                    style={[styles.headerSubNavItem, styles.headerSubNavItemActive]}
                                    onPress={this.handleSubNavPress}
                                >
                                    选项1
                                </Text>
                            </View> */}
            </ScrollView>
          </View>
          {/* 二级导航结束 */}
        </View>
        {/* 头部结束 */}
        {/* 主体内容开始 */}
        <View style={mStyles.mFlex1}>{listComponent}</View>
        {/* 主体内容结束 */}
      </SafeAreaView>
    );
  }
}
