import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { IconSendDark, IconSendLight } from '../../../assets'
import { colors } from '../../../utils'

const BtnIconSend = ({ disable, onPress }) => {
	return (
		<TouchableOpacity style= { styles.container(disable)} onPress={onPress} >
			{ disable && <IconSendDark/> }
			{ !disable && <IconSendLight/> }
		</TouchableOpacity>
	)
}

export default BtnIconSend

const styles= {
	container: (disable) => ({
		backgroundColor: disable ? colors.disable : colors.tertiary,
		width: 45,
		height: 45,
		borderRadius: 10,
		paddingTop: 3,
		paddingRight: 3,
		paddingBottom: 8,
		paddingLeft: 8
	})
}