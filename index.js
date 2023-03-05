/**
 * @format
 */

import {AppRegistry} from 'react-native';

import MainScreen from './view/Welcome';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainScreen);
