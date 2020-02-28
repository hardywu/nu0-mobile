import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import { MainTabNav } from '../components/Main_Tab_Nav/Main_Tab_Nav';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import ForgetPassword from '../pages/Forget_Password/Forget_Password';
import Search from '../pages/Search/Search';
import ReleaseEnt from '../pages/Release_Ent/Release_Ent';
import MyWallet from '../pages/My_Wallet/My_Wallet';
import ContractAccount from '../pages/Contract_Account/Contract_Account';
import FrenchAccount from '../pages/French_Account/French_Account';
import BbAccount from '../pages/Bb_Account/Bb_Account';
import CapitalTransfer from '../pages/Capital_Transfer/Capital_Transfer';
import CurSelection from '../pages/Cur_Selection/Cur_Selection';
import UserCenter from '../pages/User_Center/User_Center';
import SecurityCenter from '../pages/Security_Center/Security_Center';
import BindEmail from '../pages/Bind_Email/Bind_Email';
import CapitalPwd from '../pages/Capital_Pwd/Capital_Pwd';
import SysSetting from '../pages/Sys_Setting/Sys_Setting';
import ExchangeRateSurvey from '../pages/Exchange_Rate_Survey/Exchange_Rate_Survey';
import MarketOverview from '../pages/Market_Overview/Market_Overview';
import Recharge from '../pages/Recharge/Recharge';
import RechargeCurSelection from '../pages/Recharge_Cur_Selection/Recharge_Cur_Selection';
import DeliveryRecord from '../pages/Delivery_Record/Delivery_Record';
import OrdinaryKLine from '../pages/Ordinary_K_Line/Ordinary_K_Line';
import ContractHistoricalEntrustment from '../pages/Contract_Historical_Entrustment/Contract_Historical_Entrustment';
import BbHistoricalEntrustment from '../pages/Bb_Historical_Entrustment/Bb_Historical_Entrustment';
import BbPendingOrder from '../pages/Bb_Pending_Order/Bb_Pending_Order';
import WarehouseOrder from '../pages/Warehouse_Order/Warehouse_Order';
import ContractBill from '../pages/Contract_Bill/Contract_Bill';
import BbBill from '../pages/Bb_Bill/Bb_Bill';
import CapitalRecord from '../pages/Capital_Record/Capital_Record';
import BbBillSelection from '../pages/Bb_Bill_Selection/Bb_Bill_Selection';
import LeverBill from '../pages/Lever_Bill/Lever_Bill';
import ContractBillSelection from '../pages/Contract_Bill_Selection/Contract_Bill_Selection';
import FrenchOrder from '../pages/French_Order/French_Order';
import { connect } from 'react-redux';
import * as userInfoAction from '../actions/user_info';
import * as tokenAction from '../actions/token';

const Stack = createStackNavigator();

const Router = function({ token }) {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerTransparent: true,
      }}>
      <Stack.Screen
        name="Main"
        component={MainTabNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={() => ({ headerTitle: '' })}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={({ navigation }) => ({
          headerTitle: '',
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Register')}
              title="Registry"
            />
          ),
        })}
      />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="ReleaseEnt" component={ReleaseEnt} />
      <Stack.Screen name="MyWallet" component={MyWallet} />
      <Stack.Screen name="ContractAccount" component={ContractAccount} />
      <Stack.Screen name="FrenchAccount" component={FrenchAccount} />
      <Stack.Screen name="BbAccount" component={BbAccount} />
      <Stack.Screen name="CapitalTransfer" component={CapitalTransfer} />
      <Stack.Screen name="CurSelection" component={CurSelection} />
      <Stack.Screen name="UserCenter" component={UserCenter} />
      <Stack.Screen name="SecurityCenter" component={SecurityCenter} />
      <Stack.Screen name="BindEmail" component={BindEmail} />
      <Stack.Screen name="CapitalPwd" component={CapitalPwd} />
      <Stack.Screen name="SysSetting" component={SysSetting} />
      <Stack.Screen name="ExchangeRateSurvey" component={ExchangeRateSurvey} />
      <Stack.Screen name="MarketOverview" component={MarketOverview} />
      <Stack.Screen name="Recharge" component={Recharge} />
      <Stack.Screen
        name="RechargeCurSelection"
        component={RechargeCurSelection}
      />
      <Stack.Screen name="DeliveryRecord" component={DeliveryRecord} />
      <Stack.Screen name="OrdinaryKLine" component={OrdinaryKLine} />
      <Stack.Screen
        name="ContractHistoricalEntrustment"
        component={ContractHistoricalEntrustment}
      />
      <Stack.Screen
        name="BbHistoricalEntrustment"
        component={BbHistoricalEntrustment}
      />
      <Stack.Screen name="BbPendingOrder" component={BbPendingOrder} />
      <Stack.Screen name="WarehouseOrder" component={WarehouseOrder} />
      <Stack.Screen name="ContractBill" component={ContractBill} />
      <Stack.Screen name="BbBill" component={BbBill} />
      <Stack.Screen name="CapitalRecord" component={CapitalRecord} />
      <Stack.Screen name="BbBillSelection" component={BbBillSelection} />
      <Stack.Screen name="LeverBill" component={LeverBill} />
      <Stack.Screen
        name="ContractBillSelection"
        component={ContractBillSelection}
      />
      <Stack.Screen name="FrenchOrder" component={FrenchOrder} />
    </Stack.Navigator>
  );
};

export default connect(
  state => ({
    userInfo: state.userInfo,
    token: state.token,
  }),
  dispatch => ({
    setUserInfo: data => dispatch(userInfoAction.setUserInfo(data)),
    delUserInfo: data => dispatch(userInfoAction.delUserInfo(data)),
    setToken: data => dispatch(tokenAction.setToken(data)),
    delToken: () => dispatch(tokenAction.delToken()),
  }),
)(Router);
