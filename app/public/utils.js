import {
    findNodeHandle,
    UIManager,
    AsyncStorage
} from 'react-native';

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
    }
}

export default utils;