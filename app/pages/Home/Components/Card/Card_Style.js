import Contract from '../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    plr10: {
        paddingLeft: 10,
        paddingRight: 10
    },

    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 70,
        backgroundColor: '#fff'
    },

    userContainerCenter: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    loginContainerCenter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    loginRBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    login: {
        fontSize: 16,
        color: Contract.BLUE_COLOR
    },

    userImg: {
        width: 50,
        height: 50
    },

    logoImg: {
        width: 120,
        height: 50
    },

    settingImg: {
        width: 22,
        height: 22,
        marginLeft: 20
    },

    tel: {
        fontSize: 26,
    },

    mainContainer: {
        flex: 1,
        backgroundColor: 'pink'
    }
});