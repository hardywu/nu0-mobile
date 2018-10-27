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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
    },

    itemCol: {
        width: '32%',
        alignItems: 'center'
    },

    itemRowText: {
        fontSize: 14,
        textAlign: 'center'
    },

    itemRowText: {
        marginTop: 5,
        marginBottom: 5
    }
});