import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { colors, fonts } from '../../../utils'
import { IconNext, IconUser, IconLeanguage, IconHelp, IconRate } from '../../../assets'

const List = (props) => {
	const Icon= () => {
		if ( props.icon === 'edit-profile' ) {
			return <IconUser/>
		}

		if ( props.icon === 'leaguage') {
			return <IconLeanguage/>
		}

		if ( props.icon === 'help') {
			return <IconHelp/>
		}

		if (props.icon === 'rate') {
			return <IconRate/>
		}

		return <IconUser/>
	}

	return (
		<TouchableOpacity style= { styles.container } onPress= { props.onPress }>
			{ props.icon ? <Icon/> : <Image style= { styles.avatar } source= { props.avatar } /> }
			<View style= { styles.content }>
				<Text style= { styles.name } >{ props.name }</Text>
				<Text style= { styles.desc } >{ props.desc }</Text>
			</View>
			{ props.type === 'next' && <IconNext/> }
		</TouchableOpacity>
	)
}

export default List

const styles= {
	container: {
		flexDirection: 'row',
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: colors.border,
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	content: {
		flex: 1,
		marginLeft: 16
	},
	avatar: {
		height: 46,
		width: 46,
		borderRadius: 46/2,
	},
	name: {
		fontSize: 16,
		fontFamily: fonts.primary.normal,
		color: colors.text.primary
	},
	desc: {
		fontSize: 12,
		fontFamily: fonts.primary[300],
		color: colors.text.secondary
	}
}