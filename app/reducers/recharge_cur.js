import * as types from '../constants/types'; // 导入事件类别,用来做事件类别的判断

// 初始状态
const initialState = {
    code: 0, //货币的id
    name: 'USTD' //货币中文名字
};

// 不同类别的事件使用switch对应处理过程
export default function rechargeCur(state = initialState, action) {
    switch (action.type) {
        //设置充值币种
        case types.SET_RECHARGE_CUR:
            return {
                ...state,
                ...action.rechargeCur
            }
            break;
        default:
            return state;
    }
}