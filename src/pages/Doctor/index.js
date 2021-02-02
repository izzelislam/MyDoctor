import React, {useEffect, useState} from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Gap, HomeProfile, DoctorCategory, RatedDoctor, NewsItem } from '../../components'
import { colors, fonts, getData } from '../../utils'
import { DumyDoctor1 } from '../../assets'
import { Fire } from '../../config'


const Doctor = ({ navigation }) => {
	const [news, setNews]= useState([])
	const [doctorCategory, setDoctorCategory]= useState([])
	const [dok, setDok]= useState([])

	useEffect(() => {
		getCategory()
		getTopRatedDoctor()
		getNews()
	}, [])

	const getNews= () => {
		Fire.database().ref('news/').once('value')
			.then((res) => {
				if (res.val()) {
					const dat= res.val()
					const dataFilter= dat.filter(el => el !== null)
					setNews(dataFilter)
				}
			})
	}

	const getTopRatedDoctor= () => {
		Fire.database().ref('doctors/')
			.orderByChild('rate')
			.limitToLast(3)
			.once('value')
			.then((res) => {
				if (res.val()) {
					const oldData= res.val()
					const data= []
					Object.keys(oldData).map( key => {
						data.push({
							id: key,
							data: oldData[key],
						})
					})
					setDok(data);
					console.log('parsing data', dok)
				}
			})
	}

	const getCategory= () => {
		Fire.database().ref('doctor_category/').once('value')
			.then( res =>{
				if (res.val()) {
					const data= res.val()
					const filtered= data.filter(el => el !== null)
					setDoctorCategory(res.val())
				}
			})
	}

	return (
		<View style= {styles.page} >
			<View style= { styles.content }>
				<ScrollView showsVerticalScrollIndicator= { false }>
					<View style= { styles.wrappersection }>
						<Gap height= { 30 }/>
						<HomeProfile onPress={ () => navigation.navigate('UserProfile') } />
						<Gap height= {30}/>
						<Text style= {styles.welcome} >Mau konsultasi dengan siapa hari ini?</Text>
					</View>
					<View style= { styles.wraperscroll }>
						<ScrollView horizontal showsHorizontalScrollIndicator= { false }>
							<View style= { styles.category }>
								<Gap width= { 32 }/>
								{
									doctorCategory.map( item => {
										return (
											<DoctorCategory 
												key={ item.id } 
												category={ item.category } 
												onPress= { () => navigation.navigate('ChooseDoctor', item) }
											/>
										)
									})
								}
								<Gap width= { 22 }/>
							</View>
						</ScrollView>
					</View>
					<View style= { styles.wrappersection }>
						<Text style= { styles.sectionlabel }>Top Rated Doctor</Text>

						{ dok.map( (doctor) => {
							return (
								<RatedDoctor 
								key={doctor.id}
								name={doctor.data.fullName} 
								desc={doctor.data.profession}
								avatar= {{uri: doctor.data.photo}} 
								onPress= { () => navigation.navigate('DoctorProfile', doctor) } />
							)
						})}

						<Text style= { styles.sectionlabel }>Good News</Text>
					</View>
					{ news.map( item => {
						return <NewsItem title={item.title} date={item.date} image={{uri:item.image}} key={item.id} />
						} ) 
					}
				</ScrollView>
			</View>
		</View>
	)
}

export default Doctor

const styles= {
	page: {
		backgroundColor: colors.secondary,
		flex: 1
	},
	content: {
		backgroundColor: colors.white,
		flex: 1,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20
	},
	welcome: {
		fontSize: 20,
		fontFamily: fonts.primary[600],
		color: colors.text.primary,
		marginBottom: 16,
		maxWidth: 209
	},
	category: {
		flexDirection: 'row'
	},
	wrappersection: {
		paddingHorizontal: 16
	},
	wraperscroll: {
		marginHorizontal: -16
	},
	sectionlabel: {
		fontSize: 16,
		fontFamily: fonts.primary[600],
		color: colors.text.primary,
		marginBottom: 16,
		marginTop: 30
	}
}