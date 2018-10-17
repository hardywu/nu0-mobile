import * as types from '../constants/types'; // 导入事件类别,用来做事件类别的判断

// 初始状态
const initialState = {
    isSuccess: false, //是否登录成功
    user: null //用户信息
}

// 不同类别的事件使用switch对应处理过程
export default function loginStatus(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_IN_DOING:
            return {
                ...state,
                isSuccess: false,
            }
            break;
        case types.LOGIN_IN_DONE:
            return {
                ...state,
                isSuccess: true,
                user: action.user
            }
            break;
        case types.LOGIN_IN_ERROR:
            return {
                ...state,
                isSuccess: false,
            }
            break;
        default:
            return state;
    }
}