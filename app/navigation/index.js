import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { cardStyle, defaultHeader } from './styles';

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

const Root = createSwitchNavigator({
	SplashStack
}, {
	initialRouteName: 'SplashStack'
});

const AppContainer = createAppContainer(Root);

export default AppContainer;
