import Constant from '../../../../public/constant'
import { 
    Platform,
    StyleSheet
} from 'react-native'

export default styles = StyleSheet.create({
    listWrap: {
        backgroundColor: '#fff'
    },

    listHead: {
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e7e7e7'
    },

    listHeadText: {
        fontSize: 13,
        color: '#808080'
    },

    listBodyItem: {
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1'
    },

    listBodyItemHead: {
        marginTop: 14,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    listBodyItemHeadCur: {
        width: '40%'
    },

    listBodyItemHeadExtra: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '50%',
        flexWrap: 'wrap'
    },

    listBodyItemHeadExtraItem: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },

    listBodyItemHeadCurText: {
        fontSize: 12,
        color: Constant.DEFAULT_FONT_COLOR
    },

    listBodyItemHeadExtraKey: {
        fontSize: 12,
        color: '#8a8a8a'
    },

    listBodyItemHeadExtraVal: {
        fontSize: 12,
        color: Constant.DEFAULT_FONT_COLOR
    },

    listBodyItemBody: {
        marginTop: 18,
    },

    curTableHead: {
        flexDirection: 'row',
        alignItems: 'center' 
    },

    curTableHeadText: {
        flex: 1,
        fontSize: 12,
        color: '#adadad'
    },

    curTableBody: {
        marginTop: 14,
    },

    curTableBodyItem: {
        flexDirection: 'row',
        alignItems: 'center' ,
        marginBottom: 12
    },

    curTableBodyItemText: {
        flex: 1,
        fontSize: 12,
        color: Constant.DEFAULT_FONT_COLOR
    }
});