import React from 'react';
import {
	View, Animated, Easing, StyleSheet, Image
} from 'react-native';
import { Pages } from 'react-native-pages';
import { width, height } from '../../utils/scalling';
import { animateNextTransition } from '../../utils/layoutAnimation';
import Text from '../../containers/Text';

const styles = StyleSheet.create({
	image: {
		width,
		height: 600,
		resizeMode: 'cover'
	},
	container: {
		backgroundColor: '#263238',
		width,
		height: 600
	}
});

class SplashScreenOne extends React.PureComponent {
	onMoveToNext = () => {
		const { navigation } = this.props;
		navigation.navigate('SplashScreenTwo', animateNextTransition);
	};

	componentDidMount(): void {
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={styles.container}>
					<Pages
						horizontal
						indicatorPosition='bottom'
						indicatorColor='#FF9100'
						indicatorOpacity={0.54}
					>
						<Image source={require('../../assets/background/banner-1.jpg')} style={styles.image} />
						<Image source={require('../../assets/background/banner-2.jpg')} style={styles.image} />
						<Image source={require('../../assets/background/banner-3.jpg')} style={styles.image} />
					</Pages>
				</View>
				<Text langID='facebook' style={{ color: 'yellow' }} />
			</View>
		);
	}
}

export default SplashScreenOne;
