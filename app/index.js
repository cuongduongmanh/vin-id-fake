import React, { useEffect } from 'react';
import {
	StatusBar,
	StyleSheet,
	View
} from 'react-native';
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

const App = () => {
	useEffect(() => {
		SplashScreen.hide();
	}, []);

	return (
		<View style={styles.container}>
			{isIOS && <StatusBar barStyle='dark-content' />}
			<AppContainer />
		</View>
	);
};

export default App;
