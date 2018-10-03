import Contract from '../../../../public/constant'
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
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e7e7e7'
    },

    listBodyItemCur: {
        flex: 0.2,
        fontSize: 12,
        color: Contract.DEFAULT_FONT_COLOR
    },

    listBodyItemAssets: {
        flex: 0.4,
        fontSize: 12,
        color: Contract.DEFAULT_FONT_COLOR
    },

    listBodyItemFrozen: {
        flex: 0.4,
        fontSize: 11,
        color: '#ababab'
    }
});