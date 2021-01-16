import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { List } from '../../components'
import { colors, fonts } from '../../utils'
import { DumyDoctor1, DumyDoctor2, DumyDoctor3 } from '../../assets'

const Messages = ({ navigation }) => {
	const [ doctors, setDoctors ]= useState([
		{
			id: 1,
			avatar: DumyDoctor1,
			name: "Alexander Jannie",
			desc: "Baik ibu, terima kasih banyak atas wakt..."
		},
		{
			id: 2,
			avatar: DumyDoctor2,
			name: "Alexander Jannie",
			desc: "Baik ibu, terima kasih banyak atas wakt..."
		},
		{
			id: 3,
			avatar: DumyDoctor3,
			name: "Alexander Jannie",
			desc: "Baik ibu, terima kasih banyak atas wakt..."
		},
	])
	return (
		<View style= { styles.page }>
			<View style= { styles.content }>
				<Text style= { styles.title }>Messages</Text>
				{ doctors.map( doctor => {
					return (
						<List key={ doctor.id } avatar={ doctor.avatar } name={ doctor.name } desc={ doctor.desc }
							onPress= { () => navigation.navigate('Chat') } />
					)
				} ) }
			</View>
		</View>
	)
}

export default Messages

const styles= {
	page: {
		backgroundColor: colors.secondary,
		flex: 1
	},
	content: {
		backgroundColor: colors.white,
		flex: 1,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
	},
	title: {
		fontSize: 20,
		color: colors.text.primary,
		fontFamily: fonts.primary[600],
		marginTop: 30,
		marginLeft: 16
	}
}