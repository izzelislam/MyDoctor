import React, {useState, useEffect} from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Header, Gap, Profile, Input, Button } from '../../components'
import { colors, getData, storeData, showError, showSuccess } from '../../utils'
import { ILNullPhoto } from '../../assets'
import { Fire } from '../../config'
import { launchImageLibrary } from 'react-native-image-picker'

const UpdateProfile = ({ navigation }) => {
	const [profile, setProfile]= useState({
		fullName: '',
		profesion: '',
		email: '',
	})

	const [password, setPassword]= useState('')
	const [photo, setPhoto]= useState(ILNullPhoto)
	const [photoForDb, setPhotoForDb]= useState('')

	useEffect(() => {
		getData('user')
			.then(res => {
				const data= res
				setPhoto({uri: res.photo})
				setProfile(data)
			})
	}, [])

	const update= () => {
		console.log('new password :', password)

		if (password.length > 0) {
			if (password.length < 6) {
				showError('password kurang dari 6 karakter')
			}else {
				updatePassword()
				updateProfileData()
				navigation.replace('MainApp')
			}
		}else {
			updateProfileData()
			navigation.replace('MainApp')
		}
	}

	const updatePassword= () => {
		Fire.auth().onAuthStateChanged(user =>{
			if (user) {
				user.updatePassword(password)
				.catch( err => {
					showError(err.message)
				})
			}
		})
	}

	const updateProfileData= () => {
		const data= profile
		data.photo= photoForDb
		Fire.database().ref(`users/${profile.uid}/`).update(data)
			.then(res => {
				console.log('success :', res)
				storeData('user', data)
				showSuccess('data berhasil di update')
			})
			.catch(err => {
				showError(err.message)
			})
	}

	const changeText= (key, value) => {
		setProfile({
			...profile,
			[key]: value
		})
	}

	const getImage = () => {
		launchImageLibrary({includeBase64:true, quality: 0.5, maxWidth: 200, maxHeight: 200}, response => {
		  if (response.didCancel) {
		  	showError('Anda belum memilih gambar')
		  }else {
		  	  const source = {uri: response.uri}
		  	  setPhotoForDb(`data:${response.type};base64, ${response.base64}`)
			  setPhoto(source)
			}
		});
	}

	return (
		<View style= { styles.page }>
			<Header title="Update Profile" onPress= { () => navigation.goBack() } />
			<ScrollView showsVerticalScrollIndicator= { false }>
				<View style= { styles.content }>
					<Profile isRemove photo={photo} onPress={getImage} />
					<Gap height={ 26 } />
					<Input label="Nama Lengkap" value={profile.fullName} onChangeText={(value) => changeText('fullName', value) } />
					<Gap height={ 24 } />
					<Input label="Pekerjaan" value={profile.profesion} onChangeText={(value) => changeText('profesion', value) } />
					<Gap height={ 24 } />
					<Input label="Email" disable value={profile.email} />
					<Gap height={ 24 } />
					<Input secureTextEntry label="Password" value={profile.password} onChangeText={ value => setPassword(value) } />
					<Gap height={ 40 } />
					<Button title="Save Profile" onPress= { update } />
				</View>
			</ScrollView>
		</View>
	)
}

export default UpdateProfile

const styles= {
	page: {
		flex: 1,
		backgroundColor: colors.white
	},
	content: {
		padding: 40,
		paddingTop: 0
	}
}