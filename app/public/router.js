import React, {
    Component
} from 'react';
import {
    Text,
    View,
    StatusBar,
    ScrollView,
    Image
} from 'react-native';
import {
    createStackNavigator,
    StackActions,
    NavigationActions
} from 'react-navigation';
import {
    MainTabNav
} from '../components/Main_Tab_Nav/Main_Tab_Nav';
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
import utils from '../public/utils';
import {
    connect
} from 'react-redux';
import * as loginAction from '../actions/login';
import * as userInfoAction from '../actions/user_info';
import * as tokenAction from '../actions/token';

class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: null
        }
        this.StackNavigator = null;
    }

    componentWillMount() {
        utils.storage.get('token').then(data => {
            console.log(`token: ${data}`)
            if(data) {
                this.setState({ token: data });       
            } else {
                this.setState({ token: null });
            }
        });
    }

    componentWillUpdate(props, state) {
        this.StackNavigator = createStackNavigator({
            Main: {
                screen: MainTabNav,
                navigationOptions: ({
                    navigation
                }) => ({
                    header: null
                })
            },
            //注册页
            Register: {
                screen: Register,
                navigationOptions: ({
                    navigation
                }) => ({
                    header: null
                })
            },
            //登录页
            Login: {
                screen: Login,
                navigationOptions: ({
                    navigation
                }) => ({
                    header: null
                })
            },
            //忘记密码页
            ForgetPassword: {
                screen: ForgetPassword,
                navigationOptions: ({
                    navigation
                }) => ({
                    header: null
                })
            },
            //搜索页
            Search: {
                screen: Search,
                navigationOptions: ({
                    navigation
                }) => ({
                    header: null
                })
            },
            //发布委托单页
            ReleaseEnt: {
                screen: ReleaseEnt,
                navigationOptions: ({
                    navigation
                }) => ({
                    header: null
                })
            },
            //我的钱包页
            MyWallet: {
                screen: MyWallet,
                navigationOptions: ({
                    navigation
                }) => ({
                    header: null
                })
            },
            //合约账户
            ContractAccount: {
                screen: ContractAccount,
                navigationOptions: ({
                    navigation
                }) => ({
                    header: null
                })
            },
            //法币账户
            FrenchAccount: {
                screen: FrenchAccount,
                navigationOptions: ({
                    navigation
                }) => ({
                    header: null
                })
            },
            //币币账户
            BbAccount: {
                screen: BbAccount,
                navigationOptions: ({
                    navigation
                }) => ({
                    header: null
                })
            },
            //资金划转
            CapitalTransfer: {
                screen: CapitalTransfer,
                navigationOptions: ({
                    navigation
                }) => ({
                    header: null
                })
            },
            //币种选择
            CurSelection: {
                screen: CurSelection,
                navigationOptions: ({
                    navigation
                }) => ({
                    header: null
                })
            },
            //个人中心
            UserCenter: {
                screen: UserCenter,
                navigationOptions: ({
                    navigation
                }) => ({
                    header: null
                })
            },
            //安全中心
            SecurityCenter: {
                screen: SecurityCenter,
                navigationOptions: ({
                    navigation
                }) => ({
                    header: null
                })
            },
            //绑定邮箱
            BindEmail: {
                screen: BindEmail,
                navigationOptions: ({
                    navigation
                }) => ({
                    header: null
                })
            },
            //设置资金密码
            CapitalPwd: {
                screen: CapitalPwd,
                navigationOptions: ({
                    navigation
                }) => ({
                    header: null
                })
            },
            //系统设置
            SysSetting: {
                screen: SysSetting,
                navigationOptions: ({
                    navigation
                }) => ({
                    header: null
                })
            },
            //汇率概览
            ExchangeRateSurvey: {
                screen: ExchangeRateSurvey,
                navigationOptions: ({
                    navigation
                }) => ({
                    header: null
                })
            },
            //市场总览
            MarketOverview: {
                screen: MarketOverview,
                navigationOptions: ({
                    navigation
                }) => ({
                    header: null
                })
            },
            //充值
            Recharge: {
                screen: Recharge,
                navigationOptions: ({
                    navigation
                }) => ({
                    header: null
                })
            },
            //充值币种选择
            RechargeCurSelection: {
                screen: RechargeCurSelection,
                navigationOptions: ({
                    navigation
                }) => ({
                    header: null
                })
            },
            //交割记录
            DeliveryRecord: {
                screen: DeliveryRecord,
                navigationOptions: ({
                    navigation
                }) => ({
                    header: null
                })
            },
            //OrdinaryKLine
            OrdinaryKLine: {
                screen: OrdinaryKLine,
                navigationOptions: ({
                    navigation
                }) => ({
                    header: null
                })
            },
            //合约历史委托
            ContractHistoricalEntrustment: {
                screen: ContractHistoricalEntrustment,
                navigationOptions: ({
                    navigation
                }) => ({
                    header: null
                })
            },
            //币币历史委托
            BbHistoricalEntrustment: {
                screen: BbHistoricalEntrustment,
                navigationOptions: ({
                    navigation
                }) => ({
                    header: null
                })
            },
            //币币我的挂单
            BbPendingOrder: {
                screen: BbPendingOrder,
                navigationOptions: ({
                    navigation
                }) => ({
                    header: null
                })
            },
            //爆仓订单
            WarehouseOrder: {
                screen: WarehouseOrder,
                navigationOptions: ({
                    navigation
                }) => ({
                    header: null
                })
            },
            //合约账单
            ContractBill: {
                screen: ContractBill,
                navigationOptions: ({
                    navigation
                }) => ({
                    header: null
                })
            },
            //币币账单
            BbBill: {
                screen: BbBill,
                navigationOptions: ({
                    navigation
                }) => ({
                    header: null
                })
            },
            //资金记录
            CapitalRecord: {
                screen: CapitalRecord,
                navigationOptions: ({
                    navigation
                }) => ({
                    header: null
                })
            },
            //币币账单选择页
            BbBillSelection: {
                screen: BbBillSelection,
                navigationOptions: ({
                    navigation
                }) => ({
                    header: null
                })
            },
            //杠杆账单
            LeverBill: {
                screen: LeverBill,
                navigationOptions: ({
                    navigation
                }) => ({
                    header: null
                })
            },
            //合约账单选择页
            ContractBillSelection: {
                screen: ContractBillSelection,
                navigationOptions: ({
                    navigation
                }) => ({
                    header: null
                })
            },
            //法币订单页
            FrenchOrder: {
                screen: FrenchOrder,
                navigationOptions: ({
                    navigation
                }) => ({
                    header: null
                })
            },
        }, {
            initialRouteName: state.token ? 'Main' : 'Login', //如果有token则进入主页，否则进入注册页
            // initialRouteName: 'Main',
            headerMode: 'screen'
        });
    }

    render() {
        let { StackNavigator } = this;
        if(StackNavigator) {
            return <StackNavigator/>
        } else {
            return <View/>
        }
    }
}

export default connect(
    (state) => ({
        userInfo: state.userInfo,
        token: state.token
    }),
    (dispatch) => ({
        setUserInfo: data => dispatch(userInfoAction.setUserInfo(data)),
        delUserInfo: data => dispatch(userInfoAction.delUserInfo(data)),
        setToken: data => dispatch(tokenAction.setToken(data)),
        delToken: () => dispatch(tokenAction.delToken())
    })
)(Router)