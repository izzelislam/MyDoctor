import React, {useState, useEffect} from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { DumyUser, ILNullPhoto } from '../../../assets'
import { colors, fonts, getData } from '../../../utils'

const HomeProfile = ({ onPress }) => {
	const [profile, setProfile]= useState({
		photo: ILNullPhoto,
		fullName: '',
		profesionL: ''
	})

	useEffect(() => {
		getData('user')
			.then(res => {
				const data= res
				data.photo= {uri: res.photo}
				setProfile(res)
			})
	}, [])

	return (
		<TouchableOpacity style= {styles.container} onPress= { onPress }>
			<Image style= {styles.avatar} source= {profile.photo} />
			<View>
				<Text style= {styles.nama} >{profile.fullName}</Text>
				<Text style= {styles.profesion} >{profile.profesion}</Text>
			</View>
		</TouchableOpacity>
	)
}

export default HomeProfile

const styles= {
	container: {
		flexDirection: 'row'
	},
	avatar: {
		width: 46,
		height: 46,
		borderRadius: 46/2,
		marginRight: 12
	},
	nama: {
		fontSize: 16,
		fontFamily: fonts.primary[600],
		color: colors.text.primary,
		textTransform: 'capitalize'
	},
	profesion: {
		fontSize: 12,
		fontFamily: fonts.primary[400],
		color: colors.text.secondary,
		textTransform: 'capitalize'
	}

}