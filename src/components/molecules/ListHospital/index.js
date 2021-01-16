import React from 'react'
import { View, Text, Image } from 'react-native'
import { colors, fonts } from '../../../utils'

const ListHospital = (props) => {
	return (
		<View style= { styles.container }>
			<Image style= { styles.image } source= { props.pic }/>
			<View>
				<Text style= { styles.title }>{ props.type }</Text>
				<Text style= { styles.title }>{ props.name }</Text>
				<Text style= { styles.address }>{ props.address }</Text>
			</View>
		</View>
	)
}

export default ListHospital

const styles= {
	container: {
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: colors.border,
		padding:16
	},
	image: {
		width: 80,
		height: 60,
		borderRadius: 11,
		marginRight: 16,
	},
	title: {
		fontSize: 16,
		fontFamily: fonts.primary.normal,
		color: colors.text.primary
	},
	address: {
		fontSize: 12,
		fontFamily: fonts.primary[300],
		color: colors.text.secondary,
		marginTop: 6
	}
}