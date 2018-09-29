import {
    findNodeHandle,
    UIManager
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
    }
}

export default utils;