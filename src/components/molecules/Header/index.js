import React from 'react'
import { View, Text } from 'react-native'
import { IconBackDark } from '../../../assets'
import { Gap, Button } from '../../../components'
import { colors } from '../../../utils'
import DarkProfile from './DarkProfile'

const Header = ({ onPress, title, type }) => {
	if (type === 'dark-profile') {
		return <DarkProfile onPress= { onPress } />
	}
	return (
		<View style= { styles.container(type) }>
			<Button type="icon-only" icon={ type === 'dark' ? 'back-light' : 'back-dark'} onPress= { onPress }/>
			<Text style= { styles.title(type) }>{ title }</Text>
			<Gap width={24}/>
		</View>
	)
}

export default Header

const styles= {
	container: (type) => ({
		paddingHorizontal: 16,
		paddingVertical: 30,
		backgroundColor: type === 'dark' ? colors.secondary : colors.white,
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomLeftRadius: type === 'dark' ? 20 : 0,
		borderBottomRightRadius: type === 'dark' ? 20 : 0
	}) ,
	title: (type) => ({
		flex: 1,
		textAlign: 'center',
		fontSize: 20,
		fontFamily: 'Nunito-SemiBold',
		color: type === 'dark' ? colors.white : colors.text.primary
	})
}