import React from 'react'
import { View, Text, Image } from 'react-native'
import { fonts, colors } from '../../../utils'
import { DumyDoctor3 } from '../../../assets'

const Other = () => {
	return (
		<View style= { styles.container }>
			<Image source= { DumyDoctor3 } style= { styles.avatar } />
			<View>
				<View style= { styles.chatcontent } >
				<Text style= { styles.text }>Ibu dokter, apakah memakan jeruk tiap hari itu buruk?</Text>
				</View>
				<Text style= { styles.date }>4.20 AM</Text>
			</View>
		</View>
	)
}

export default Other

const styles= {
	container: {
		marginBottom: 20,
		alignItems: 'flex-end',
		flexDirection: 'row',
		paddingLeft: 16
	},
	chatcontent: {
		maxWidth: "80%",
		padding: 12,
		backgroundColor: colors.primary,
		paddingRight: 18,
		borderRadius: 10,
		borderBottomLeftRadius: 0
	},
	text: {
		fontSize: 14,
		fontFamily: fonts.primary.normal,
		color: colors.white
	},
	date: {
		fontSize: 11,
		fontFamily: fonts.primary.normal,
		color: colors.text.secondary,
		paddingTop: 8
	},
	avatar: {
		width: 30,
		height: 30,
		borderRadius: 30/2,
		marginRight: 12
	}
}