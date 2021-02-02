import React from 'react'
import { View, Text, Image } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atoms'
import { DumyDoctor1 } from '../../../assets'

const DarkProfile = ({ onPress, title, desc, avatar }) => {
	return (
		<View style= { styles.container } >
			<Button type="icon-only" icon="back-light" onPress= { onPress } />
			<View style= { styles.content }>
				<Text style= { styles.name }>{title}</Text>
				<Text style= { styles.desc }>{desc}</Text>
			</View>
			<Image style= { styles.avatar } source= {avatar} />
		</View>
	)
}

export default DarkProfile

const styles= {
	container: {
		backgroundColor: colors.secondary,
		paddingVertical: 30,
		paddingLeft: 20,
		paddingRight: 16,
		borderBottomRightRadius: 20,
		borderBottomLeftRadius: 20,
		flexDirection: 'row',
		alignItems: 'center'
	},
	content: {
		flex: 1
	},
	avatar: {
		width: 46,
		height: 46,
		borderRadius: 46/2
	},
	name: {
		fontSize: 20,
		fontFamily: fonts.primary[600],
		color: colors.white,
		textAlign: 'center'
	},
	desc: {
		fontSize: 14,
		fontFamily: fonts.primary.normal,
		marginTop: 6,
		textAlign: 'center',
		color: colors.text.subTitle	
	}
}