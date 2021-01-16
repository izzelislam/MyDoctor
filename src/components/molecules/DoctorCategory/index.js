import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { ILCatUmum, ILCatPsikiater, ILCatObat } from '../../../assets'
import { colors, fonts } from '../../../utils'

const DoctorCategory = ({ category, onPress }) => {
	const Icon= () => {
		if (category === 'umum') {
			return <ILCatUmum style= { styles.ilustration } />
		}
		if (category === 'psikiater') {
			return <ILCatPsikiater style= { styles.ilustration } />
		}
		if (category === 'obat') {
			return <ILCatObat style= { styles.ilustration } />
		}

		return <ILCatUmum style= { styles.ilustration } />
	}
	return (
		<TouchableOpacity style= { styles.container } onPress= { onPress }>
			<Icon />
			<Text style= { styles.label }>Saya Butuh</Text>
			<Text style= { styles.category }>{ category }</Text>
		</TouchableOpacity>
	)
}

export default DoctorCategory

const styles= {
	container: {
		padding: 12,
		alignSelf: 'flex-start',
		backgroundColor: colors.cardlight,
		borderRadius: 10,
		marginRight: 10,
		height: 130,
	},
	ilustration: {
		marginBottom: 28
	},
	label: {
		fontSize: 12,
		fontFamily: fonts.primary[300],
		color: colors.text.primary,
	},
	category: {
		fontSize: 12,
		fontFamily: fonts.primary[600],
		color: colors.text.primary
	}
}