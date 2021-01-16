import React, {useState} from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Header, Input, Button, Gap, Loading } from '../../components'
import { colors, useForm, storeData, getData, showError } from '../../utils'
import { Fire } from '../../config'
import { useDispatch } from 'react-redux'

const Register = ({ navigation, title }) => {
	const [form, setForm] = useForm({
		fullName: '',
		profesion: '',
		email: '',
		password: ''
	})

	const dispatch= useDispatch()
	const onContinue = async () => {
		dispatch({type: 'SET_LOADING', value: true})
		try {
			const success = await Fire.auth().createUserWithEmailAndPassword(form.email, form.password)
		  	setForm('reset')

		  	const data ={
		  		fullName: form.fullName,
		  		profesion: form.profesion,
		  		email: form.email,
		  		uid: success.user.uid
		  	}

		  	Fire.database()
		  		.ref('users/'+ success.user.uid + '/')
		  		.set(data)

		  	storeData(data)
		  	navigation.navigate('UploadPhoto',data)
		} catch (error) {
		    const errorMessage = error.message;
		    showError(errorMessage)
		}
		dispatch({type: 'SET_LOADING', value: false})
	}

	return (
		<>
			<View style= { styles.wrapper }>
				<Header onPress= { () => navigation.goBack() } title="Daftar Akun" />
				<View style= { styles.page }>
				<ScrollView showsVerticalScrollIndicator={false}>
					<Input label="Full Name" value={form.fullName} onChangeText={ (value) => setForm('fullName',value) }/>
					<Gap height={24}/>
					<Input label="Pekerjaan" value={form.profesion} onChangeText={ (value) => setForm('profesion',value) }/>
					<Gap height={24}/>
					<Input label="Email Address" value={form.email} onChangeText={ (value) => setForm('email',value) }/>
					<Gap height={24}/>
					<Input label="Password" secureTextEntry value={form.password} onChangeText={ (value) => setForm('password',value) }/>
					<Gap height={40}/>
					<Button title="Continue" onPress={ onContinue } />
				</ScrollView>
				</View>
			</View>
		</>
	)
}

export default Register

const styles= {
	page: {
		padding: 40,
		paddingTop: 0,
	},
	wrapper: {
		flex:1,
		backgroundColor: colors.white,
	}
}