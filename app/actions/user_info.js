import * as types from '../constants/types'; // 导入事件类型,用来做分配给各个事件
import utils from '../public/utils';

//设置用户信息
export function setUserInfo(data) {
    return dispatch => {
        dispatch({
            type: types.SET_USER_INFO,
            userInfo: data
        });
    }
}

//删除用户信息
export function delUserInfo() {
    return dispatch => {
        dispatch({
            type: types.DEL_USER_INFO,
            userInfo: null
        });
    }
}