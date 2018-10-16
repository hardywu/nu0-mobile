
import Constant from '../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    wrap: {
        backgroundColor: '#f8f8f8'
    },

    mainContainer: {
        flex: 1,
        // justifyContent: 'center'
    },

    exchangeRateWrap: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#d9d9d9'
    },

    countryIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain'
    },

    exchangeRateText: {
        fontSize: 22,
        color: Constant.DEFAULT_FONT_COLOR
    }
});