import React from 'react'
import { View, Text } from 'react-native'
import { Header, Profile, ProfileItem, Button, Gap } from '../../components'
import { colors } from '../../utils'

const DoctorProfile = ({ navigation, route }) => {
	const doctor= route.params
	console.log(doctor)
	return (
		<View style= { styles.page }>
			<Header title="Doctor Profile" onPress= { () => navigation.goBack() } />
			<Profile name={doctor.data.fullName} desc={doctor.data.profession} photo={{uri:doctor.data.photo}}/>
			<Gap height= {10} />
			<ProfileItem label="Alumnus" value={doctor.data.university} />
			<ProfileItem label="Tempat Praktik" value={doctor.data.hospital_address} />
			<ProfileItem label="No. STR" value={doctor.data.str_number} />
			<View style= { styles.action }>
				<Button title="Start Consultation" onPress={ () => navigation.navigate('Chat',doctor ) }/>
			</View>
		</View>
	)
}

export default DoctorProfile

const styles= {
	page: {
		flex: 1,
		backgroundColor: colors.white
	},
	action: {
		paddingHorizontal: 40,
		paddingTop: 23
	}
}