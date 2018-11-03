import {
    findNodeHandle,
    UIManager,
    AsyncStorage,
    Platform,
    Dimensions
} from 'react-native';
import Constant from '../public/constant';

let utils = {
    /** 
     * 获取元素位置
     * @param ref 元素的ref
     */
    layout: ref => {
        const handle = findNodeHandle(ref);

        return new Promise((resolve) => {
            UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
                resolve({
                    x,
                    y,
                    width,
                    height,
                    pageX,
                    pageY
                });
            });
        });
    },

    storage: {
        get: key => {
            return AsyncStorage.getItem(key).then((value) => {
                const jsonValue = JSON.parse(value);
                return jsonValue;
            });
        },
        
        save: (key, value) => {
            return AsyncStorage.setItem(key, JSON.stringify(value));
        },

        update: (key, value) => {
            return DeviceStorage.get(key).then((item) => {
                value = typeof value === 'string' ? value : Object.assign({}, item, value);
                return AsyncStorage.setItem(key, JSON.stringify(value));
            });
        },

        delete: key => {
            return AsyncStorage.removeItem(key);
        }
    },

    /** 
     * 是否为iphonex
     */
    isIphoneX: () => {
        return (
            Platform.OS === 'ios' && 
            ((Constant.SCREEN_HEIGHT === Constant.IPHONEX_HEIGHT && Constant.SCREEN_WIDTH === Constant.IPHONEX_WIDTH) || 
            (Constant.SCREEN_HEIGHT === Constant.IPHONEX_WIDTH && Constant.SCREEN_WIDTH === Constant.IPHONEX_HEIGHT))
        )
    },

    /** 
     * 是否为ios系统
     */
    isIos: () => {
        if(Platform.OS === 'ios') {
            return true;
        } else {
            return false;
        }
    },

    /** 
     * 是否为android系统
     */
    isAndroid: () => {
        if(Platform.OS === 'ios') {
            return false;
        } else {
            return true;
        }
    },

}

export default utils;