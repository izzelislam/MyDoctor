import React from 'react'
import { View, Text } from 'react-native'
import { IconSendDark, IconSendLight } from '../../../assets'
import { colors } from '../../../utils'

const BtnIconSend = ({ disable }) => {
	return (
		<View style= { styles.container(disable) }>
			{ disable && <IconSendDark/> }
			{ !disable && <IconSendLight/> }
		</View>
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