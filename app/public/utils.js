import {
    findNodeHandle,
    UIManager,
    AsyncStorage,
    Platform,
    Dimensions
} from 'react-native';
import Constant from '../public/constant';

let utils = {
    //baseurl
    domain: 'http://auth.wb.local/api',
    // domain: '132.232.221.240/api',

    checkRequestSuccess: function(res) {
        if((res.status === 200) || (res.status === 201)) {
            return true;
        } else {
            return false;
        }
    },

    checkErrorType: function (response) {
        if(response.status === 400) {
            return 'Bad Request'
        } else if(response.status === 401) {
            return 'Unauthorized'
        } else if(response.status === 404) {
            return 'Not Found'
        }
    },

    jsonToFormData: function(obj) {
        let str = [];
        for(let key in obj){
            str.push(`${key}=${obj[key]}`)
        }
        return str.join('&');
        // let formData = new FormData();
		// for(let key in obj){
		// 	formData.append(key, obj[key]);
		// }
        // return formData
    },

    /**
     * 底层请求
     * @param url 请求的地址
     * @param options 配置对象
     */
    disRequest: function (url, options) {
        options.cache = options.cache || 'default';
        options.headers = options.headers || {
            'Content-Type': 'application/x-www-form-urlencoded',
            // 'Authorization': 'API_KEY'
        };
        return fetch(url, options);
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