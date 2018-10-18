import Constant from '../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    modalWrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.7)'
    },
    
    confirmWrap: {
        width: 256,
        padding: 18,
        backgroundColor: '#fff',
        borderRadius: 4
    },

    confirmContWrap: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    confirmContText: {
        fontSize: 14,
        textAlign: 'center',
        color: Constant.DEFAULT_FONT_COLOR
    },  

    confirmBtnWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 18
    }, 
    
    confirmBtnBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '46%',
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 1,
        borderRadius: 4
    },

    confirmBtnText: {
        fontSize: 14
    }
});