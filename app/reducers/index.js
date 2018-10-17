import { combineReducers } from 'redux';
import loginStatus from './login'; // 导入登录的redux处理过程
import userInfo from './user_info'; // 导入登录的redux处理过程
import rechargeCur from './recharge_cur'; // 导入登录的redux处理过程

const rootReducer = combineReducers({ // 将所有的redux处理逻辑包装在一起
    loginStatus: loginStatus, //登录状态
    userInfo: userInfo, //用户信息
    rechargeCur: rechargeCur //充值货币类型
});
export default rootReducer; // 导出,作为统一入口