import Contract from '../../../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    sortContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 12,
        paddingRight: 12,
        backgroundColor: '#f8f8f8'
    },

    sortRight: {
        flexDirection: 'row',
    },

    sortItem: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    sortName: {
        fontSize: 14,
        color: Contract.GRAY_COLOR
    },

    sortDirection: {
        marginLeft: 2
    },

    sortDirectionSymbol: {
        fontSize: 6,
        lineHeight: 6,
        color: Contract.GRAY_COLOR
    },

    mainContainer: {
        flex: 1
    },

    item: {
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

    itemLeft: {
        flexDirection: 'column'
    },

    itemRight: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    itemName: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    itemMainName: {
        fontSize: 16,
        color: Contract.DEFAULT_FONT_COLOR,
    },

    itemNameBreak: {
        marginLeft: 4,
        marginRight: 4,
        fontSize: 12,
        color: '#767678',
    },

    itemSubName: {
        fontSize: 12,
        color: '#767678',
    },

    itemDeal: {
        marginTop: 4
    },

    itemDealNum: {
        fontSize: 12,
        color: Contract.GRAY_COLOR
    },

    itemValue: {
        alignItems: 'flex-end',
    },

    itemMainValue: {
        fontSize: 16
    },

    itemSubValue: {
        marginTop: 4,
        fontSize: 12,
        color: Contract.GRAY_COLOR
    },

    itemTrend: {
        marginLeft: 24,
        overflow: 'hidden',
        borderRadius: 5
    },

    itemTrendNum: {
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 12,
        paddingRight: 12,
        fontSize: 14,
        color: '#fff'
    }
});