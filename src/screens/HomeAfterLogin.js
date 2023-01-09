import React from "react";
import { ScrollView, Image, Text, StyleSheet, View } from "react-native";
import NavbarAfterLogin from '../components/NavbarAfterLogin'
import EmailBox from "../components/EmailBox";
import Footer from "../components/Footer";
import NowShowing from "../components/NowShowing";
import UpcomingMovies from "../components/UpcomingMovies";

const HomeAfterLogin = () => {
  return (
    <ScrollView style={styles.container}>
      <NavbarAfterLogin />
      <View>
        <View style={{marginVertical: 60, paddingLeft: 30}}>
          <Text style={{fontSize: 19, color: '#A0A3BD'}}>Nearest Cinema, Newest Movie,</Text>
          <Text style={{fontSize: 40, color: '#1b30cf', fontWeight: 'bold'}}>Find out now!</Text>
        </View>
        <View style={{marginBottom: 100}}>
            <Image source={require('../../assets/Group13.png')} style={{ width: 373, heght: 433, marginLeft: 10}}/>
        </View>
      </View>

      <NowShowing/>

      <UpcomingMovies />

      <EmailBox />

      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
  },
});

export default HomeAfterLogin;
