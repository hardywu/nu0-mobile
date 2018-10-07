import Constant from '../../../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    bgGray: {
        backgroundColor: '#7f8289'
    },

    bgBule: {
        backgroundColor: Constant.BLUE_COLOR
    },

    bgPurple: {
        backgroundColor: '#7e6fec'
    },

    bgGreen: {
        backgroundColor: Constant.GREEN_COLOR
    },

    cardContainer: {
        height: 108,
        // paddingTop: 12,
        // paddingBottom: 12,
        // paddingLeft: 10,
        // paddingRight: 10,
        padding: 10,
        backgroundColor: '#fff'
    },

    cardScroll: {

    },

    cardItem: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: 140,
        height: '100%',
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 10,
        marginRight: 14
    },

    cardItemName: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.6)'
    },

    cardItemVal: {
        marginTop: 12,
        marginBottom: 6,
        fontSize: 15,
        color: 'rgba(255, 255, 255, 1)'
    },

    cardItemExchange: {
        fontSize: 10,
        color: 'rgba(255, 255, 255, 0.6)'
    }
});