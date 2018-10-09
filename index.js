import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Router from './app/public/router';
import { YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import store from './app/store/store';

YellowBox.ignoreWarnings([
    'Warning: isMounted(...) is deprecated',
    'Module RCTImageLoader',
    'Remote debugger'
]);
const _store = store();
class Root extends Component {
    render() {
        return (
            <Provider store={_store}>
                <Router />
            </Provider>
        )
    }
}
AppRegistry.registerComponent('digital_cash', () => Root);
