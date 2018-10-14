import Contract from '../../../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    quoContainer: {
        flexDirection: 'column',
        // paddingLeft: 10,
        // paddingRight: 10
    },

    quoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 9,
        paddingBottom: 9,
        borderBottomWidth: 1,
        borderBottomColor: '#d9d9d9',
    },

    quoItemName: {
        fontSize: 16,
        color: Contract.DEFAULT_FONT_COLOR,
    },

    quoItemNameBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    quoItemIndexBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    quoItemIndexPrice: {
        fontSize: 18
    },

    quoItemIndexPercentage: {
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 23,
        paddingRight: 23,
        borderRadius: 2,
        marginLeft: 16,
        fontSize: 13,
        color: '#fff'
    }
});