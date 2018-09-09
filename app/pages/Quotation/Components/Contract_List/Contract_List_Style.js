import Contract from '../../../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },

    mainItemNameWrap: {
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
    },

    mainItemName: {
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 12,
        paddingRight: 12,
        fontSize: 14,
        color: Contract.GRAY_COLOR,
        backgroundColor: '#f8f8f8'
    },

    subItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 12,
        paddingRight: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
        backgroundColor: '#fff'
    },

    subItemLeft: {
        flexDirection: 'column'
    },

    subItemRight: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    subItemName: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    subItemMainName: {
        fontSize: 16,
        color: Contract.DEFAULT_FONT_COLOR,
    },

    subItemNameBreak: {
        marginLeft: 4,
        marginRight: 4,
        fontSize: 12,
        color: '#767678',
    },

    subItemSubName: {
        fontSize: 12,
        color: '#767678',
    },

    subItemDeal: {
        marginTop: 4
    },

    subItemDealNum: {
        fontSize: 12,
        color: Contract.GRAY_COLOR
    },

    subItemValue: {
        alignItems: 'flex-end'
    },

    subItemMainValue: {
        fontSize: 16
    },

    subItemSubValue: {
        marginTop: 4,
        fontSize: 12,
        color: Contract.GRAY_COLOR
    },

    subItemTrend: {
        marginLeft: 24,
        overflow: 'hidden',
        borderRadius: 5
    },

    subItemTrendNum: {
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 12,
        paddingRight: 12,
        fontSize: 14,
        color: '#fff'
    }
});