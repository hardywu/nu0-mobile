import Contract from '../../../../public/constant'
import { 
    Platform,
    StyleSheet
} from 'react-native'

export default styles = StyleSheet.create({
    modalWrap: {
        flex: 1
    },

    ccsWrap: {
        position: 'absolute',
        top: 98,
        width: '100%',
        height: 340,
        backgroundColor: '#f5f9fc'
    },

    ccsHead: {
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: '#f5f9fc'
    },

    ccsHeadCenter: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    ccsHeadItem: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    ccsHeadCurrency: {
        flex: 0.2,
        justifyContent: 'flex-start'
    },

    ccsHeadCouple: {
        flex: 0.3,
        justifyContent: 'flex-start'
    },

    ccsHeadPrice: {
        flex: 0.3,
        justifyContent: 'flex-end'
    },

    ccsHeadRange: {
        flex: 0.2,
        justifyContent: 'flex-end'
    },

    ccsHeadText: {
        fontSize: 10,
        color: '#959499'
    },

    ccsHeadSortText: {
        fontSize: 5,
        lineHeight: 5,
        color: '#959499'
    },

    ccsBody: {
        flex: 1,
        flexDirection: 'row'
    },

    ccsBodyCurrency: {
        width: '20%',
        backgroundColor: '#f5f9fc'
    },

    ccsBodyData: {
        width: '80%',
    },

    ccsBodyCurrencyItem: {
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 16,
    },

    ccsBodyCurrencyItemActive: {
        backgroundColor: '#fff'
    },

    ccsBodyCurrencyItemText: {
        fontSize: 14,
        lineHeight: 14,
        color: Contract.DEFAULT_FONT_COLOR
    },

    ccsBodyCurrencyItemIcon: {
        width: 14,
        height: 14,
        resizeMode: 'center'
    },

    ccsBodyDataItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 16,
        paddingRight: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f6f6f6',
        backgroundColor: '#fff'
    },

    ccsBodyDataItemText: {
        fontSize: 14,
        lineHeight: 14,
        color: Contract.DEFAULT_FONT_COLOR
    },

    ccsBodyDataCoupleText: {
        width: '37.5%',
        textAlign: 'left'
    },

    ccsBodyDataPriceText: {
        width: '37.5%',
        textAlign: 'right',
        color: '#898989'
    },

    ccsBodyDataRangeText: {
        width: '25%',
        textAlign: 'right'
    }
});