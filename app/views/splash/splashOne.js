import React from 'react';
import {
	View, StyleSheet, Image
} from 'react-native';
import { Pages } from 'react-native-pages';
import PropTypes from 'prop-types';
import { width } from '../../utils/scalling';
import { animateNextTransition } from '../../utils/layoutAnimation';
import I18n from '../../i18n';
import Button from '../../containers/Button';

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
	static propTypes = {
		navigation: PropTypes.object
	};

	static defaultProps = {
	};

	onMoveToNext = () => {
		const { navigation } = this.props;
		navigation.navigate('Login', animateNextTransition);
	};

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
				<Button
					style={{ marginTop: 35 }}
					title={I18n.t('enter_phone')}
					type='primary'
					onPress={this.onMoveToNext}
					theme='dark'
				/>

			</View>
		);
	}
}

export default SplashScreenOne;
