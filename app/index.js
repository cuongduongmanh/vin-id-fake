import * as React from 'react';
import {
	StatusBar,
	StyleSheet,
	Text,
	View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SplashScreen from 'react-native-splash-screen';
import { isIOS } from './utils/deviceInfo';
import AppContainer from './navigation';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	label: {
		fontSize: 16,
		fontWeight: 'normal',
		marginBottom: 48
	}
});

class HomeScreen extends React.Component {
	render(){
		return (
			<View style={styles.container}>
				{isIOS && <StatusBar barStyle='dark-content' />}
				<AppContainer />
			</View>
		  );
	}
}

class SettingsScreen extends React.Component {
	render(){
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			  <Text>Settings!</Text>
			</View>
		  );
	}
}

const Tab = createBottomTabNavigator({
	Home:{
		screen: HomeScreen,
	},
	Settings:{
		screen : SettingsScreen,
	}
});

export default createAppContainer(Tab);