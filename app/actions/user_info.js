import * as types from '../constants/types'; // 导入事件类型,用来做分配给各个事件
import utils from '../public/utils';

export function updateUserInfo(userInfo) {
    return dispatch => {
        // utils.storage.save('userInfo', userInfo).then(() => {
            // console.log('用户信息 保存成功');
            dispatch((() => {
                return {
                    type: types.UPDATE_USER_INFO,
                    userInfo: userInfo
                }
            })());
        // });
    }
}