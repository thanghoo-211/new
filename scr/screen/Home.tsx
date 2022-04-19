import * as React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import { Header, Button, ButtonGroup, withTheme } from '@rneui/themed';
import styled from 'styled-components';
import * as Location from 'expo-location';
import DateTime from '../components/DateTime';
import WeatherScroll from '../components/WeatherScroll';
const API_KEY ='49cc8c821cd2aff9af04c9f98c36eb74';
const img = require('D:/Hoc/TDTU/DATN/final/app/assets/Elephants.jpg')

const ButtonContainer = styled(View)`
    display:flex;
    flex-direction: row;
    justify-content: space-around;
`
const ButtonContainer2 = styled(View)`
    display:flex;
    flex-direction: row;
    justify-content: space-around;
`


export default function Home() {
    const[data, setData] = React.useState({});

    React.useEffect(() =>  {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            fetchDataFromApi("40.7128", "-74.0060")
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          fetchDataFromApi(location.coords.latitude, location.coords.longitude);
        })();
      }, [])


      const fetchDataFromApi = (latitude, longitude) => {
        if(latitude && longitude) {
          fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {
    
          // console.log(data)
          setData(data)
          })
        }
}



    return (
        <View style={styles.container}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'WELCOME', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <ImageBackground source={img} style={styles.image} >
                <DateTime current={data.current} timezone={data.timezone} lat={data.lat} lon={data.lon}/>
            <ButtonContainer>
                <Button
              title={'ON FAN'}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
                    <Button
              title={'OFF FAN'}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
            </ButtonContainer>
            <ButtonContainer2>
                        <Button
              title={'ON PUMP'}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
                        <Button
              title={'OFF BUMP'}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
            </ButtonContainer2>
            
        </ImageBackground>  
        

        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      color:'black'
      
    },
    image:{
      flex:1, 
      resizeMode:"cover", 
      justifyContent:"center"
    },
    text:{
        color:'white'
    }
  });

