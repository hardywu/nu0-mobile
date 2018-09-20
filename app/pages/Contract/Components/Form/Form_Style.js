import Contract from '../../../../public/constant';
import {
    StyleSheet,
    Platform
} from 'react-native';

let formSelectStyle = (() => {
    if(Platform.OS === "ios") {
        return { zIndex: 9 }
    } else {
        return {}
    }
})()

export default styles = StyleSheet.create({
    mt12: {
        marginTop: 12
    },

    formSelect: formSelectStyle,

    formSelectMain: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    formSelectResult: {
        fontSize: 14,
        color: Contract.DEFAULT_FONT_COLOR
    },

    formSelectResultArrow: {
        width: 14,
        height: 14,
        marginLeft: 8,
        resizeMode: 'contain'
    }
});