import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { fonts, colors } from '../../../utils'
import { Button } from '../../../components'

const InputChat = ({onPress, value, placeholder, onChangeText}) => {
	return (
		<View style= { styles.container }>
			<TextInput
				style= { styles.input }
				value={value}
				placeholder={`Tulis pesan untuk ${placeholder}`}
				onChangeText={onChangeText}
			/>
			<Button type="button-icon-send" onPress={onPress} />
		</View>
	)
}

export default InputChat

const styles= {
	container: {
		padding: 16,
		flexDirection: 'row',
	},
	input: {
		backgroundColor: colors.disable,
		padding: 14,
		borderRadius: 10,
		flex: 1,
		marginRight: 10,
		fontSize: 14,
		fontFamily: fonts.primary.normal,
		maxHeight: 45
	}
}