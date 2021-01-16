import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { IconRemovePhoto } from '../../../assets'
import { fonts, colors } from '../../../utils'

const Profile = ({ name, desc, isRemove, photo, onPress }) => {
	return (
		<View style= { styles.container }>
			{!isRemove &&
				<View style= { styles.borderProfile }>
					<Image style= { styles.avatar } source= { photo } />
				</View>
			}
			{isRemove && (
				<TouchableOpacity style= { styles.borderProfile } onPress= { onPress }>
					<Image style= { styles.avatar } source= { photo } />
					{ isRemove && <IconRemovePhoto style= { styles.remove }/> }
				</TouchableOpacity>
			)}

			{
				name && (
					<View>
						<Text style= { styles.name }>{ name }</Text>
						<Text style= { styles.profesion }>{ desc }</Text>
					</View>
				)
			}
		</View>
	)
}

export default Profile

const styles= {
	container: {
		alignItems: 'center'
	},
	avatar: {
		width: 110,
		height: 110,
		borderRadius: 110/2
	},
	borderProfile: {
		width: 130,
		height: 130,
		borderRadius: 130/2,
		borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: colors.border

	},
	name: {
		fontSize: 20,
		fontFamily: fonts.primary[600],
		color: colors.text.primary,
		marginTop: 16,
		textAlign: 'center'
	},
	profesion: {
		fontSize: 16,
		fontFamily: fonts.primary[600],
		color: colors.text.secondary,
		marginTop: 2,
		textAlign: 'center'
	},
	remove: {
		position: 'absolute',
		right: 8,
		bottom: 8
	}
}