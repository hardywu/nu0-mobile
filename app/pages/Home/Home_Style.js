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
        backgroundColor: '#fff'
    },

    quoTitleBox: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 12,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#d9d9d9',
        marginTop: 4,
        marginLeft: 10,
        marginRight: 10
    },

    quoTitle: {
        color: Contract.GRAY_COLOR
    },

    bottomCont: {
        marginTop: 24,
        marginBottom: 10,
        textAlign: 'center'
    }
});