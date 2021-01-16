import React from 'react'
import { View, Text, Image } from 'react-native'
import { DumyNews1 } from '../../../assets'
import { fonts, colors } from '../../../utils'

const NewsItem = ({title, date, image}) => {
	return (
		<View style= { styles.container }>
			<View style= { styles.titlewrapper }>
				<Text style= { styles.title }>{title}</Text>
				<Text style= { styles.date }>{date}</Text>
			</View>
			<Image style= { styles.image } source= { image }/>
		</View>
	)
}

export default NewsItem

const styles= {
	container: {
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: colors.border,
		paddingBottom: 12,
		paddingTop: 16,
		paddingHorizontal: 16
	},
	titlewrapper: {
		flex: 1
	},
	title: {
		fontSize: 16,
		fontFamily: fonts.primary[600],
		color: colors.text.primary,
		maxWidth: '90%'
	},
	date: {
		marginTop:4,
		fontSize: 12,
		fontFamily: fonts.primary.normal,
		color: colors.text.secondary
	},
	image: {
		width: 80,
		height: 60,
		borderRadius: 11
	}
}