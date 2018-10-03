import Contract from '../../../../public/constant'
import { 
    Platform,
    StyleSheet
} from 'react-native'

export default styles = StyleSheet.create({
    listItem: {
        marginBottom: 10,
        backgroundColor: '#fff'
    },

    listItemHead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e7e7e7'
    },

    listItemBody: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: 12
    },

    listItemBodyEle: {
        width: '50%',
        marginTop: 12
    },

    listItemBodyEleTitle: {
        fontSize: 12,
        color: '#838383'
    },

    listItemBodyEleVal: {
        marginTop: 10,
        fontSize: 11,
        color: Contract.DEFAULT_FONT_COLOR
    }
});