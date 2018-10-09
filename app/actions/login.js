import * as types from '../constants/types'; // 导入事件类型,用来做分配给各个事件
import utils from '../public/utils';
import * as userInfoAction from '../actions/user_info';

// 模拟用户信息
let user = {
    name: 'RZeeY',
    id: 24,
}

// 访问登录接口 根据返回结果来划分action属于哪个type,然后返回对象,给reducer处理
export function login(success, fail) {
    return dispatch => {
        dispatch(isLogining()); // 正在执行登录请求
        // 模拟用户登录
        let result = fetch('https://www.baidu.com/')
            .then((res) => {
                dispatch(loginSuccess(true, user, success)); // 登录请求完成
                utils.storage.save('userInfo', user).then(() => {
                    dispatch(userInfoAction.updateUserInfo(user));
                });
            }).catch((e) => {
                dispatch(loginError(false, fail)); // 登录请求出错
            })
    }
}

function isLogining() {
    console.log('正在登录');
    return {
        type: types.LOGIN_IN_DOING
    }
}

function loginSuccess(isSuccess, res, callback) {
    console.log('登录成功');
    callback(res);
    return {
        type: types.LOGIN_IN_DONE,
        user: user
    }
}

function loginError(isSuccess, callback) {
    console.log('登录失败');
    callback();
    return {
        type: types.LOGIN_IN_ERROR
    }
}