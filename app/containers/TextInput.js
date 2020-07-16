import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import PropTypes from 'prop-types';
import { BorderlessButton } from 'react-native-gesture-handler';

// import Text from './Text';
import sharedStyles from '../views/Styles';
import { themes } from '../constants/colors';
import CustomIcon from './UriIcon';

export const styles = StyleSheet.create({
	error: {
		textAlign: 'center',
		paddingTop: 5
	},
	inputContainer: {
		marginBottom: 10
	},
	label: {
		marginBottom: 10,
		fontSize: 14,
		...sharedStyles.textSemibold
	},
	input: {
		...sharedStyles.textRegular,
		height: 48,
		fontSize: 16,
		paddingLeft: 14,
		paddingRight: 14,
		borderWidth: StyleSheet.hairlineWidth,
		borderRadius: 2
	},
	inputIconLeft: {
		paddingLeft: 45
	},
	inputIconRight: {
		paddingRight: 45
	},
	wrap: {
		position: 'relative'
	},
	iconContainer: {
		position: 'absolute',
		top: 14
	},
	iconLeft: {
		left: 15
	},
	iconRight: {
		right: 15
	}
});


export default class NITextInput extends React.PureComponent {
	static propTypes = {
		label: PropTypes.string,
		error: PropTypes.object,
		secureTextEntry: PropTypes.bool,
		containerStyle: PropTypes.any,
		inputStyle: PropTypes.object,
		inputRef: PropTypes.func,
		testID: PropTypes.string,
		iconLeft: PropTypes.string,
		placeholder: PropTypes.string,
		editable: PropTypes.bool,
		theme: PropTypes.string,
		value: PropTypes.string,
		isText: PropTypes.bool
	};

	static defaultProps = {
		error: {},
		theme: 'light'
	};

	state = {
		showPassword: false
	};

	get iconLeft() {
		const { testID, iconLeft, theme } = this.props;
		return (
			<CustomIcon
				name={iconLeft}
				testID={testID ? `${ testID }-icon-left` : null}
				style={[styles.iconContainer, styles.iconLeft, { color: themes[theme].bodyText }]}
				size={20}
			/>
		);
	}

	get iconPassword() {
		const { showPassword } = this.state;
		const { testID, theme } = this.props;
		return (
			<BorderlessButton onPress={this.tooglePassword} style={[styles.iconContainer, styles.iconRight]}>
				<CustomIcon
					name={showPassword ? 'Eye' : 'eye-off'}
					testID={testID ? `${ testID }-icon-right` : null}
					style={{ color: themes[theme].auxiliaryText }}
					size={20}
				/>
			</BorderlessButton>
		);
	}

	tooglePassword = () => {
		this.setState(prevState => ({ showPassword: !prevState.showPassword }));
	};

	render() {
		const { showPassword } = this.state;
		const {
			label, error, secureTextEntry, containerStyle, inputRef, iconLeft, inputStyle, testID, placeholder, theme, value, isText, ...inputProps
		} = this.props;
		const { dangerColor } = themes[theme];
		const textStyle = [
			styles.input,
			error.error && {
				color: dangerColor,
				borderColor: dangerColor
			},
			iconLeft && styles.inputIconLeft,
			secureTextEntry && styles.inputIconRight,
			{
				backgroundColor: themes[theme].backgroundColor,
				borderColor: themes[theme].separatorColor,
				color: themes[theme].titleText
			},
			inputStyle
		];
		return (
			<View style={[styles.inputContainer, containerStyle]}>
				{label ? (
					<Text
						contentDescription={null}
						accessibilityLabel={null}
						style={[
							styles.label,
							{ color: themes[theme].titleText },
							error.error && { color: dangerColor }
						]}
					>
						{label}
					</Text>
				) : null}
				<View style={styles.wrap}>
					{!isText
						? (
							<TextInput
								style={textStyle}
								ref={inputRef}
								autoCorrect={false}
								autoCapitalize='none'
								underlineColorAndroid='transparent'
								secureTextEntry={secureTextEntry && !showPassword}
								testID={testID}
								accessibilityLabel={placeholder}
								placeholder={placeholder}
								contentDescription={placeholder}
								theme={theme}
								value={value}
								{...inputProps}
							/>
						) : <Text numberOfLines={1} style={textStyle}>{value}</Text>}
					{iconLeft ? this.iconLeft : null}
					{secureTextEntry ? this.iconPassword : null}
				</View>
				{error.error ? <Text style={[styles.error, { color: dangerColor }]}>{error.reason}</Text> : null}
			</View>
		);
	}
}
