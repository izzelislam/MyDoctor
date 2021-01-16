import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { colors } from '../../../utils'

const Link = ({ title, size, align, onPress }) => {
	return (
		<TouchableOpacity onPress= { onPress }>
			<Text style= { styles.title(size,align) }>{title}</Text>
		</TouchableOpacity>
	)
}

export default Link

const styles= {
	title: (size, align) => ({
		fontSize: size,
		color: colors.text.secondary,
		fontFamily: 'Nunito-Regular',
		textDecorationLine: 'underline',
		textAlign: align
	})
}