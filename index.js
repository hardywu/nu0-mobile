import { AppRegistry } from 'react-native';
import Router from './app/public/router'
import { YellowBox } from 'react-native'; 

YellowBox.ignoreWarnings([
    'Warning: isMounted(...) is deprecated',
    'Module RCTImageLoader',
    'Remote debugger'
]);
AppRegistry.registerComponent('digital_cash', () => Router);
