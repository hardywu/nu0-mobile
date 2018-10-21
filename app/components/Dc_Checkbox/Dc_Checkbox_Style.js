import Constant from '../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    wrap: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    icon: {
        width: 16,
        height: 16,
        resizeMode: 'contain'
    },

    text: {
        marginLeft: 6,
        fontSize: 13,
        color: Constant.DEFAULT_FONT_COLOR
    }
});