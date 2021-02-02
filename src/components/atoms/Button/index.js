import React from 'react'
import { TouchableOpacity, Text,View } from 'react-native'
import { colors } from '../../../utils'
import IconOnly from './IconOnly'
import BtnIconSend from './BtnIconSend'

const Button = ({ type, title, onPress, icon , disable}) => {
	if (type === 'button-icon-send') {
		return <BtnIconSend disable= { disable } onPress={onPress} />
	}

	if (type === 'icon-only') {
		return (
			<IconOnly icon= {icon} onPress= {onPress}/>
		)
	}
	if (disable) {
		return (
			<View style= {styles.disableBg} >
				<Text style= { styles.disableText }>{title}</Text>
			</View>
		)
	}
	return (
		<TouchableOpacity style= {styles.button(type)} onPress= {onPress}>
			<Text style= { styles.title(type) }>{title}</Text>
		</TouchableOpacity>
	)
}

export default Button

const styles= {
	button: (type) => ({
		backgroundColor: type === 'secondary' ? colors.button.secondary.background : colors.button.primary.background,
		borderRadius: 10,
		paddingVertical: 10
	}),
	disableBg: {
		borderRadius: 10,
		paddingVertical: 10,
		backgroundColor: colors.button.disable.background
	},
	disableText: {
		fontSize: 18,
		fontFamily: 'Nunito-SemiBold',
		textAlign: 'center',
		color: colors.button.disable.text
	},
	title: (type) => ({
		fontSize: 18,
		fontFamily: 'Nunito-SemiBold',
		textAlign: 'center',
		color: type === 'secondary' ? colors.button.secondary.text : colors.button.primary.text
	})
}