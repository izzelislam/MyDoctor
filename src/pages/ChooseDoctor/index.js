import React, {useEffect, useState} from 'react'
import { View, Text } from 'react-native'
import { Header, List } from '../../components'
import { DumyDoctor1 } from '../../assets'
import { colors } from '../../utils'
import { Fire } from '../../config'

const ChooseDoctor = ({ navigation, route }) => {
	const categoryItem= route.params
	const [listDoctor, setListDoctor]= useState([])

	useEffect(() => {
		callDoctorByCategory(categoryItem.category)
	}, [])

	const callDoctorByCategory= category => {
		Fire.database().ref('doctors/')
				.orderByChild('category')
				.equalTo(category)
				.once('value')
				.then( res => {
					if(res.val() !== null){
						const oldData= res.val()
						const dat= []
						Object.keys(oldData).map(key => {
							dat.push({
								id: key,
								data: oldData[key]
							})
						})
						setListDoctor(dat)
					}
				}).catch(err => console.log(err))
	}

	return (
		<View style= { styles.page }>
			<Header 
				title={`Pilih ${categoryItem.category}`}
				type="dark" onPress= { () => navigation.goBack() }
			/>
			{listDoctor.map(doctor =>{
				return(
						<List onPress={ () => navigation.navigate('DoctorProfile', doctor) }
									key={doctor.id}
									type="next" 
									avatar={{uri:doctor.data.photo}} 
									name={doctor.data.fullName}
									desc={doctor.data.gender} />
					)
				})}
		</View>
	)
}

export default ChooseDoctor

const styles= {
	page: {
		flex: 1,
		backgroundColor: colors.white
	}
}