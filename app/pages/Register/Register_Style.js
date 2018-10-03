import Contract from '../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    input: {
        flex: 1,
        padding: 0,
        fontSize: 14,
        color: '#fff'
    },

    vfCodeBtn: {
        width: 90,
        fontSize: 14,
        color: '#fff'
    },

    loginWrap: {
        backgroundColor: '#5ba8f8'
    },

    header: {
        width: '100%',
        height: 40,
        paddingTop: 12,
        paddingBottom: 12
    },

    headerCenterContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    close: {
        width: 18,
        height: 18,
        resizeMode: 'contain'
    },

    headerLink: {
        fontSize: 14,
        color: '#fff'
    },
    
    body: {
        flex: 1
    },

    bodyCenterContent: {
        flex: 1
    },

    bodyTitle: {
        marginTop: 60,
        marginBottom: 60,
        fontSize: 26,
        color: '#fff'
    },

    bodyTab: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    bodyTabItem: {
        paddingLeft: 14,
        paddingRight: 14,
        borderBottomWidth: 2,
        borderBottomColor: 'transparent'
    },

    bodyTabItemActive: {
        borderBottomColor: '#fff'
    },

    bodyTabItemText: {
        lineHeight: 40,
        color: '#a7d4fe'
    },

    bodyTabItemTextActive: {
        color: '#fff'
    },

    bodyForm: {
        marginTop: 32
    },

    bodyFormItemInput: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#a7d4fe',
        marginBottom: 20
    },

    bodyFormItemLogin: {
        marginTop: 26
    },

    loginBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderRadius: 50,
        backgroundColor: '#fff'
    },

    loginBtnText: {
        fontSize: 15,
        lineHeight: 46,
        color: Contract.BLUE_COLOR
    },

    forgetPasswordText: {
        marginTop: 18,
        textAlign: 'center',
        color: '#fff'
    }
});