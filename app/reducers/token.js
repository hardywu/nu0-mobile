import * as types from '../constants/types';

const initialState = null;

export default function token(state = initialState, action) {
    switch (action.type) {
        //设置token
        case types.SET_TOKEN:
            return state || action.token
            break;
        //删除token
        case types.DEL_TOKEN:
            return null
            break;
        default:
            return state;
    }
}