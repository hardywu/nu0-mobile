import React, { Component } from 'react';
import { Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import utils from '../../public/utils';
import api from '../../public/api';
import Card from './Components/Card/Card';
import Card2 from './Components/Card2/Card2';
import Notice from './Components/Notice/Notice';
import Banner from './Components/Banner/Banner';
import Quotation from './Components/Quotation/Quotation';
import Toast from 'react-native-root-toast';
import * as loginAction from '../../actions/login';
import * as userInfoAction from '../../actions/user_info';

import mStyles from '../../public/common_style';
import styles from './Home_Style';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
      },
      //指数数据
      tickerList: [
        // {
        //     id: '',
        //     name: '',
        //     ticker: ''
        // }
      ],
    };
  }

  componentDidMount() {
    let { user, tickerList } = this.state;
    //请求用户信息接口
    api
      .getV1AccountsMe()
      .then(res => {
        //设置用昵称为邮箱
        user.email = res.email;
        this.setState({ user: user });
      })
      .catch(err => {
        utils.toast.show(err.msg);
        console.log(err);
      });
    //发起获取指数数据请求
    api.getPublicMarketsTickers().then(res => {
      for (let key in res) {
        tickerList.push({
          id: key,
          name: key.toUpperCase(),
          ticker: res[key].ticker,
        });
      }
      this.setState({ tickerList: tickerList });
    });
  }

  //处理 登录按钮 释放事件
  handleLoginPress = () => {
    const { navigate } = this.props.navigation;
    navigate('Login');
  };

  //处理 用户图标 释放事件
  handleUserIconRelease = evt => {
    this.props.navigation.navigate('UserCenter'); //跳转到个人中心页
  };

  render() {
    let { user, tickerList } = this.state;
    const { navigation, userInfo, t } = this.props;

    return (
      <SafeAreaView style={mStyles.mFlex1}>
        <View style={styles.userContainer}>
          <View style={styles.loginRBox}>
            <Text style={styles.login} onPress={this.handleLoginPress}>
              {t('Sign In/Up')}
            </Text>
            <EvilIcons
              name="user"
              size={32}
              onPress={this.handleUserIconRelease}
            />
          </View>
        </View>
        <ScrollView
          style={styles.mainContainer}
          showsVerticalScrollIndicator={false}>
          <View style={[mStyles.mCenterContent]}>
            {userInfo !== null ? <Card2 navigation={navigation} /> : <Card />}
            {/* <Card2 navigation={navigation}/> */}
            {/* <Notice /> */}
            {/* <Banner /> */}
            <View style={styles.quoTitleBox}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 6,
                }}
                source={require('../../static/imgs/trend.png')}
              />
              <Text style={styles.quoTitle}>指数</Text>
            </View>
            <Quotation data={tickerList} />
            {/* <Text style={[styles.bottomCont, mStyles.mGrayColor]}>OKEx获得上亿投资</Text> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default connect()(withTranslation()(Home));
