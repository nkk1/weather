import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';

const bgImage = { uri: "https://www.onlygfx.com/wp-content/uploads/2020/05/blue-grunge-background-6.jpg" };
//const worldImage = {uri: "https://www.onlygfx.com/wp-content/uploads/2020/01/earth-drawing-doodle-4.png"}
//const crawleyURL = "http://dataservice.accuweather.com/forecasts/v1/daily/1day/715290?apikey=QQly8ADFFXOVezeGm3CI1AdTd9KllYGw&language=en-us"
// const full http://dataservice.accuweather.com/forecasts/v1/daily/1day/715290?apikey=QQly8ADFFXOVezeGm3CI1AdTd9KllYGw&language=en-us&details=true&metric=true

const weatherURL = "http://dataservice.accuweather.com/forecasts/v1/daily/1day/715290?apikey=QQly8ADFFXOVezeGm3CI1AdTd9KllYGw&language=en-us";



export default function App() {
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);

  function fetchWeather(location){
    location = '715290';
    const apiKey = '';
    const url = `http://dataservice.accuweather.com/currentconditions/v1/${location}?apikey=${apiKey}`
    fetch(url)
        .then(r => (r.json()))
        .then(r => {
            console.log(JSON.stringify(r[0]))
            setWeather(r[0]);
            setLoaded(true);
        });
  }

  useEffect(() =>{
    fetchWeather('715290');
  }, [])

  return (
      <ImageBackground source={bgImage} style={{flex:1}}>
        <View style={styles.container}>
          <Text style={styles.largeText}>{weather.WeatherText}</Text>
          <Text style={styles.smallerText}>Crawley</Text>
          <Text style={styles.largeText}>{loaded && weather.Temperature.Metric.Value}°</Text>
          <SearchInput placeholder="Enter city name..." />
        </View>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  red: {
    color: 'red',
  },
  largeText:{
    fontFamily: "colorful-brush-stroke-alphabet",
    fontSize: 94,
    color: '#fff',
  },
  smallerText:{
    fontSize: 48,
    color: '#fff',
  }
});


function SearchInput(props) {
  return(
      <TextInput
          placeholder={props.placeholder}
      />
  )
}