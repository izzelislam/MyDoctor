import React from 'react'
import { View, Text, ImageBackground, ScrollView } from 'react-native'
import { ILHospital, DumyHospital, DumyHospital1, DumyHospital2 } from '../../assets'
import { colors, fonts } from '../../utils'
import { ListHospital } from '../../components'

const Hospitals = () => {
	return (
		<View style= { styles.page }>
			<ImageBackground source= { ILHospital } style= { styles.background }>
				<Text style= { styles.title }>Nearby Hospitals</Text>
				<Text style= { styles.subtitle }>3 tersedia</Text>
			</ImageBackground>
			<View style= { styles.content }>
				<ScrollView showsVerticalScrollIndicator= { false }>
					<ListHospital type="Rumah Sakit" name="Citra BUngga Merdeka" address="Jln. Surya Sejahtera 20" pic= { DumyHospital }/>
					<ListHospital type="Rumah Sakit" name="Citra BUngga Merdeka" address="Jln. Surya Sejahtera 20" pic= { DumyHospital1 }/>
					<ListHospital type="Rumah Sakit" name="Citra BUngga Merdeka" address="Jln. Surya Sejahtera 20" pic= { DumyHospital2 }/>
				</ScrollView>
			</View>
		</View>
	)
}

export default Hospitals

const styles= {
	page: {
		flex: 1,
		backgroundColor: colors.secondary
	},
	background: {
		height: 240,
		paddingTop: 30,
		alignItems: 'center'
	},
	title: {
		fontSize: 20,
		fontFamily: fonts.primary[600],
		color: colors.white
	},
	subtitle: {
		fontSize: 14,
		fontFamily: fonts.primary[300],
		color: colors.white
	},
	content: {
		flex: 1,
		backgroundColor: colors.white,
		borderRadius: 20,
		marginTop: -30,
		paddingTop: 30-16,
	}
}