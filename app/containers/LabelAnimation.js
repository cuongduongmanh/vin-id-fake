import React from 'react';
import {
	View, Animated, StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
	textContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden'
	},
	text: {
		backgroundColor: 'transparent',
		textAlign: 'center',
		fontSize: 52
	},
	index: {
		fontSize: 10,
		color: 'rgba(255, 255, 255, .63)'
	}
});

const Label = ({
	color, backgroundColor, text, effect, index, pages, progress
}) => {
	const style = { color };

	switch (effect) {
		case 'skew':
			style.transform = [{
				skewX: progress.interpolate({
					inputRange: [-0.75, 0, 0.75],
					outputRange: ['45deg', '0deg', '-45deg']
				})
			}];
			break;

		case 'rise':
			style.transform = [{
				translateY: progress.interpolate({
					inputRange: [-0.5, 0, 0.5],
					outputRange: [50, 0, -50]
				})
			}];

			style.opacity = progress.interpolate({
				inputRange: [-0.5, 0, 0.5],
				outputRange: [0, 1, 0]
			});
			break;

		case 'zoom':
			style.transform = [{
				scale: progress.interpolate({
					inputRange: [-1, 0, 1],
					outputRange: [4, 1, 0]
				})
			}];

			style.opacity = progress.interpolate({
				inputRange: [-0.25, 0, 1],
				outputRange: [0, 1, 1]
			});
			break;

		case 'flip':
			style.transform = [{
				rotate: progress.interpolate({
					inputRange: [-1, 0, 1],
					outputRange: ['360deg', '0deg', '-360deg']
				})
			}];
			break;

		case 'slide':
			style.transform = [{
				translateX: progress.interpolate({
					inputRange: [-1, 0, 1],
					outputRange: [-100, 0, 100]
				})
			}];
			break;
	}

	return (
		<View style={[styles.textContainer, { backgroundColor }]}>
			<Animated.Text style={[styles.text, style]}>
				{text}
				{'\n'}
				<Animated.Text style={styles.index}>{`[${ index + 1 } / ${ pages }]`}</Animated.Text>
			</Animated.Text>
		</View>
	);
};

export default Label;
