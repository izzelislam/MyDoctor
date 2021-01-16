import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { ILLogo } from '../../assets'
import { Input, Link, Button, Gap } from '../../components'
import { colors, fonts, useForm, storeData, showError } from '../../utils'
import { Fire } from '../../config'
import { useDispatch } from 'react-redux'

const Login = ({ navigation }) => {
	const dispatch= useDispatch()
	const [form, setForm]= useForm({
		email: '',
		password: ''
	})

	const login= () => {
		dispatch({ type: 'SET_LOADING', value: true})
		Fire.auth().signInWithEmailAndPassword(form.email,form.password)
			.then( res => {
					dispatch({ type: 'SET_LOADING', value: false })

				Fire.database()
					.ref(`users/${res.user.uid}/`)
					.once('value')
					.then( resDB => {
						storeData('user',resDB.val())
						navigation.replace('MainApp')
					})
			})
			.catch( err => {
				dispatch({ type: 'SET_LOADING', value: false })
				showError(err.message)
			})
	}

	return (
		<>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={ styles.page }>
					<ILLogo/>
					<Text style= {styles.title }>Masuk dan mulai berkonsultasi</Text>
					<Input label="Email Address" value={form.email} onChangeText={ value => setForm('email', value) } />
					<Gap height={24} />
					<Input label="Password" secureTextEntry value={form.password} onChangeText={ value => setForm('password',value) } />
					<Gap height={10} />
					<Link title="Forgot My Password" size={12} />
					<Gap height={30}/>
					<Button title="Sign In" onPress={login} />
					<Gap height={20}/>
					<Link
						title="Create New Account" 
						size={16} align="center" 
						onPress={ () => navigation.navigate('Register') }
					/>
				</View>
				</ScrollView>
		</>
	)
}

export default Login

const styles= {
	page: {
		padding: 40,
		flex: 1,
		backgroundColor: colors.white
	},
	title: {
		color: colors.text.primary,
		fontSize: 20,
		fontFamily: fonts.primary[600],
		marginVertical: 40,
		maxWidth: 153
	}
}