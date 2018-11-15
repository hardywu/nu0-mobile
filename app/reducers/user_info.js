import * as types from '../constants/types'; // 导入事件类别,用来做事件类别的判断

// 初始状态
const initialState = null;

// 不同类别的事件使用switch对应处理过程
export default function userInfo(state = initialState, action) {
    switch (action.type) {
        case types.SET_USER_INFO:
            return {
                ...state,
                userInfo: action.userInfo
            }
            break;
        case types.DEL_USER_INFO:
            return {
                ...state,
                userInfo: null
            }
            break;
        default:
            return state;
    }
}