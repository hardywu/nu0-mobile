import {
    findNodeHandle,
    UIManager,
    AsyncStorage,
    Platform,
    Dimensions
} from 'react-native';
import Constant from '../public/constant';
import Toast from 'react-native-root-toast';

let utils = {
    // domain: 'http://auth.wb.local/api',
    // domain2: 'http://api.wb.local/api',
    domain: 'https://www.test.nu0.one/api/v2/barong',
    domain2: 'https://www.test.nu0.one/api/v2/peatio',

    //请求错误信息
    requestCodeMessage: {
        200: '服务器成功返回请求的数据。',
        201: '新建或修改数据成功。',
        202: '一个请求已经进入后台排队（异步任务）。',
        204: '删除数据成功。',
        400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
        401: '用户没有权限（令牌、用户名、密码错误）。',
        403: '用户得到授权，但是访问是被禁止的。',
        404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
        406: '请求的格式不可得。',
        410: '请求的资源被永久删除，且不会再得到的。',
        422: '当创建一个对象时，发生一个验证错误。',
        500: '服务器发生错误，请检查服务器。',
        502: '网关错误。',
        503: '服务不可用，服务器暂时过载或维护。',
        504: '网关超时。',
    },

    //
    errCodeMessage: {
        3000: {
            status: 3000,
            msg: '未知错误'
        },
        5000: {
            status: 5000,
            msg: '网络错误'
        }
    },

    /** 
     * 判断是否操作成功
     */
    checkRequestSuccess: function (res) {
        if ((res.status === 200) || (res.status === 201) || (res.status === 202) || (res.status === 204)) {
            return true;
        } else {
            return false;
        }
    },

    /** 
     * 返回错误信息
     */
    checkErrorType: function (response) {
        if (response.status in this.requestCodeMessage) {
            return {
                status: response.status,
                msg: this.requestCodeMessage[response.status]
            }
        } else {
            return errCodeMessage[3000];
        }
    },

    /** 
     * json转urlencoded格式
     */
    jsonToUrlencoded: function (obj) {
        let str = [];
        for (let key in obj) {
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
        options.headers = options.headers || {};
        options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
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

    //信息弹窗
    toast: {
        index: null,
        /** 
         * 显示弹窗
         * @param content 文本内容
         */
        show: function (content) {
            this.index = Toast.show(content, {
                duration: Constant.TOAST_DURATION,
                position: Constant.TOAST_POSITION,
            });
        },
        /** 
         * 隐藏弹窗
         */
        hide: function () {
            Toast.hide(this.index);
        }
    }
}

export default utils;