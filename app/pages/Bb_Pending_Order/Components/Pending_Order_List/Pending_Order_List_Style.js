import Constant from '../../../../public/constant'
import { 
    Platform,
    StyleSheet
} from 'react-native'

export default styles = StyleSheet.create({
    itemWrap: {
        backgroundColor: '#fff'
    },

    itemCenterContent: {
        paddingTop: 5,
        paddingBottom: 5,
    },

    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5
    },

    itemRowText: {
        width: '24.6%',
        fontSize: 14,
        textAlign: 'center',
    },

    itemBtnWrap: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#f0f0f0'
    },

    itemBtnCenterContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    itemBtnBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
        paddingTop: 8,
        paddingBottom: 8,
        borderWidth: 1,
        borderColor: Constant.ACTIVE_COLOR,
        borderRadius: 4,
        backgroundColor: Constant.ACTIVE_COLOR
    },

    itemBtnText: {
        fontSize: 13,
        color: '#fff'
    }
});