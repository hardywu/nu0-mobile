import Contract from '../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    header: {
        flexDirection: 'column',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
        backgroundColor: '#fff'
    },

    headerMainNav: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },

    headerMainNavWrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        overflow: 'hidden',
        width: 132,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: Contract.BLUE_COLOR
    },

    headerMainNavItem: {
        backgroundColor: '#fff',
    },

    headerMainNavItemActive: {
        backgroundColor: Contract.BLUE_COLOR
    },

    headerMainNavItemName: {
        width: 65,
        paddingTop: 6,
        paddingBottom: 6,
        fontSize: 13,
        color: Contract.BLUE_COLOR,
        textAlign: 'center'
    },

    headerMainNavItemNameActive: {
        color: '#fff'
    },

    headerSubNav: {
        position: 'relative',
        top: 1,
        // backgroundColor: '#fff'
    },

    headerSubNavWrap: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    headerSubNavItem: {
        lineHeight: 13,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 14,
        paddingLeft: 20,
        paddingRight: 20,
        color: Contract.GRAY_COLOR
    },

    headerSubNavItemWrap: {
        borderBottomWidth: 1,
        borderBottomColor: 'transparent'
    },

    headerSubNavItemWrapActive: {
        borderBottomColor: Contract.ACTIVE_COLOR
    },

    headerSubNavItemActive: {
        color: Contract.ACTIVE_COLOR
    },

    mainContainer: {
        flex: 1
    }
});