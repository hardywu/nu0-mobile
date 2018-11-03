import Contract from '../../public/constant'
import {
    StyleSheet,
    Platform
} from 'react-native';

let filterWrapStyle = (() => {
    if(Platform.OS === "ios") {
        return {
            width: '100%',
            height: 40,
            zIndex: 9
        }
    } else {
        return {
            width: '100%',
            height: 40
        }
    }
})()

export default styles = StyleSheet.create({
    body: {
        flex: 1
    },

    row: {
        flex: 1
    },

    //筛选开始
    filterWrap: filterWrapStyle,

    filterCenterContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    filterItem: {
        flex: 1
    },

    filterItemVal: {
        opacity: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    filterItemValText: {
        fontSize: 14,
        color: Contract.DEFAULT_FONT_COLOR
    },

    filterItemValArrow: {
        width: 12,
        height: 12,
        marginLeft: 4,
        resizeMode: 'contain'
    },
    //筛选结束
});