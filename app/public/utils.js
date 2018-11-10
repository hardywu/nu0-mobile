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
     * 底层请求
     * @param url 请求的地址
     * @param options 配置对象
     */
    disRequest: function (url, options) {
        options.cache = options.cache || 'default';
        options.headers = options.headers || {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        return new Promise(function (resolve, reject) {
            fetch(
                url,
                options
            ).then((res) => {
                if (res.ok) {
                    resolve(res.json());
                } else {
                    console.log('返回数据异常');
                    reject({
                        status: res.status
                    });
                }
            }).catch((err) => {
                console.log('网络异常');
                reject(err);
            })
        })
    },

    /** 
     * 获取元素位置
     * @param ref 元素的ref
     */
    layout: function (ref) {
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
        get: function (key) {
            return AsyncStorage.getItem(key).then((value) => {
                const jsonValue = JSON.parse(value);
                return jsonValue;
            });
        },
        save: function (key, value) {
            return AsyncStorage.setItem(key, JSON.stringify(value));
        },
        update: function (key, value) {
            return DeviceStorage.get(key).then((item) => {
                value = typeof value === 'string' ? value : Object.assign({}, item, value);
                return AsyncStorage.setItem(key, JSON.stringify(value));
            });
        },
        delete: function (key) {
            return AsyncStorage.removeItem(key);
        }
    },

    /** 
     * 是否为iphonex
     */
    isIphoneX: function () {
        return (
            Platform.OS === 'ios' &&
            ((Constant.SCREEN_HEIGHT === Constant.IPHONEX_HEIGHT && Constant.SCREEN_WIDTH === Constant.IPHONEX_WIDTH) ||
                (Constant.SCREEN_HEIGHT === Constant.IPHONEX_WIDTH && Constant.SCREEN_WIDTH === Constant.IPHONEX_HEIGHT))
        )
    },

    /** 
     * 是否为ios系统
     */
    isIos: function () {
        if (Platform.OS === 'ios') {
            return true;
        } else {
            return false;
        }
    },

    /** 
     * 是否为android系统
     */
    isAndroid: function () {
        if (Platform.OS === 'ios') {
            return false;
        } else {
            return true;
        }
    },

}

export default utils;