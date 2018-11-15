import * as types from '../constants/types'; // 导入事件类型,用来做分配给各个事件
import utils from '../public/utils';

//设置token
export function setToken(data) {
    return dispatch => {
        dispatch({
            type: types.SET_TOKEN,
            token: data
        });
    }
}

//删除token
export function delToken() {
    return dispatch => {
        dispatch({
            type: types.DEL_TOKEN,
            token: null
        });
    }
}