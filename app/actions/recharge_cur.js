import * as types from '../constants/types'; // 导入事件类型,用来做分配给各个事件
import utils from '../public/utils';

//设置充值货币类型
export function setRechargeCur(data) {
    return dispatch => {
        dispatch({
            type: types.SET_RECHARGE_CUR,
            rechargeCur: data
        });
    }
}