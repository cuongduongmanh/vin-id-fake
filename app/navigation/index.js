import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { cardStyle, defaultHeader } from './styles';
import TabNavigator from './TabNavigator';

const SplashStack = createSwitchNavigator({
	SplashScreenOne: {
		getScreen: () => require('../views/splash/splashOne').default
	},
	Login: {
		getScreen: () => require('../views/Login').default
	}
}, {
	defaultNavigationOptions: defaultHeader,
	cardStyle,
	headerMode: 'none',
	initialRouteName: 'SplashScreenOne'
});

const TabStack = createStackNavigator({
	Tab: TabNavigator
}, {
	headerMode: 'none'
});

const Root = createSwitchNavigator({
	SplashStack,
	TabStack
}, {
	initialRouteName: 'SplashStack'
});

const AppContainer = createAppContainer(Root);

export default AppContainer;
