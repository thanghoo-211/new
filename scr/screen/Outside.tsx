import * as React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { Header } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';

import * as Location from 'expo-location';
import DateTime from '../components/DateTime';
import WeatherScroll from '../components/WeatherScroll';
const API_KEY ='49cc8c821cd2aff9af04c9f98c36eb74';
const img = require('D:/Hoc/TDTU/DATN/final/app/assets/image.png')


export default function Outside() {
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
              centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
              rightComponent={{ icon: 'home', color: '#fff' }}
            />
                <ImageBackground source={img} style={styles.image} >
                <DateTime current={data.current} timezone={data.timezone} lat={data.lat} lon={data.lon}/>
                <WeatherScroll weatherData={data.daily}/>
                </ImageBackground>
            </View>
        )
    }
    const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        image:{
          flex:1, 
          resizeMode:"cover", 
          justifyContent:"center"
        }
      });