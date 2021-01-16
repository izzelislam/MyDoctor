import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import { Header, Profile, List, Gap } from '../../components'
import { ILNullPhoto } from '../../assets'
import { colors, getData } from '../../utils'
import { Fire } from '../../config'

const UserProfile = ({ navigation }) => {
	const [profile, setProfile]= useState({
		fullName: '',
		profesion: '',
		photo: ILNullPhoto
	})

	useEffect(() => {
		getData('user')
			.then(res =>{
				// console.log(res)
				const data= res
				data.photo= {uri: res.photo}
				setProfile(data)
			})
	}, [])

	const signOut= () => {
		Fire.auth().signOut()
			.then( () => {
				console.log('berhasil sign out')
				navigation.replace('GetStarted')
			} )
	}

	return (
		<View style= { styles.page }>
			<Header title="Profile" onPress= { () => navigation.goBack() }/>
			<Gap height= {10}/>
			{ profile.fullName.length > 0 && <Profile name={profile.fullName} desc={profile.profesion} photo={profile.photo} /> }
			<Gap height= {16}/>
			<List name="Edit Profile" desc="Last updated yesterday" type="next" icon="edit-profile" onPress= { () => navigation.navigate('UpdateProfile') } />
			<List name="Edit Profile" desc="Last updated yesterday" type="next" icon="leaguage"/>
			<List name="Edit Profile" desc="Last updated yesterday" type="next" icon="rate"/>
			<List name="Sign Out" desc="Last updated yesterday" type="next" icon="help" onPress={ signOut } />
		</View>
	)
}

export default UserProfile

const styles= {
	page: {
		flex: 1,
		backgroundColor: colors.white
	}
}