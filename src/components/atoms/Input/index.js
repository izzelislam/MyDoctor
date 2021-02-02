import React, {useState} from 'react'
import { Text, View, TextInput } from 'react-native'
import { colors } from '../../../utils'

const Input = ({label, value, onChangeText, secureTextEntry, disable}) => {
	const [border,setBorder] = useState(colors.border)
	const onFocusForm= () => {
		setBorder(colors.tertiary)
	}

	const onBlurForm= () => {
		setBorder(colors.border)
	}
	return (
		<View>
			<Text style= { styles.label }>{ label }</Text>
			<TextInput
				editable={!disable}
				selectTextOnFocus={!disable}
				secureTextEntry={secureTextEntry}
				onFocus={onFocusForm}
				onBlur={onBlurForm}
				style={ styles.input(border) }
				value={value}
				onChangeText={onChangeText}
			/>
		</View>
	)
}

export default Input

const styles= {
	input: (border) => ({
		padding: 12,
		borderWidth: 1,
		borderColor: border,
		borderRadius: 10,
	}) ,
	label: {
		fontFamily: 'Nunito-Regular',
		fontSize: 16,
		marginBottom: 6,
		color: colors.text.secondary,

	}
}