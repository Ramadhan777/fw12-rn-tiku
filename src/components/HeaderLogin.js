import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const HeaderLogin = (props) => {
  return (
    <>
      <View>
        <Image source={require('../../assets/Tiku.jpg')}
        style={styles.image}/>
      </View>
      <View style={{ paddingVertical: 30}}>
        <Text style={{fontSize: 40, fontWeight: 'bold' }}>{props.title}</Text>
        <Text style={{fontSize: 18, color: '#8692A6', marginTop: 3}}>{props.description}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 125, height: 50 
  }

})

export default HeaderLogin