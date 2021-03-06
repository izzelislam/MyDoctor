import React from 'react'
import { View, Text } from 'react-native'
import { fonts, colors } from '../../../utils'

const IsMe = ({text, date}) => {
	return (
		<View style= { styles.container }>
			<View style= { styles.chatcontent } >
				<Text style= { styles.text }>{text}</Text>
			</View>
			<Text style= { styles.date }>{date}</Text>
		</View>
	)
}

export default IsMe

const styles= {
	container: {
		marginBottom: 20,
		alignItems: 'flex-end',
		paddingRight: 16
	},
	chatcontent: {
		maxWidth: "70%",
		padding: 12,
		backgroundColor: colors.cardlight,
		paddingRight: 18,
		borderRadius: 10,
		borderBottomRightRadius: 0
	},
	text: {
		fontSize: 14,
		fontFamily: fonts.primary.normal,
		color: colors.text.primary
	},
	date: {
		fontSize: 11,
		fontFamily: fonts.primary.normal,
		color: colors.text.secondary,
		paddingTop: 8
	}
}