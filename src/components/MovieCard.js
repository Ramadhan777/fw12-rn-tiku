import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const MovieCard = (props) => {
    
    return (
        <View style={{ padding: 15, borderWidth: 2, borderColor: "#DEDEDE", borderRadius: 6, marginRight: 15 }}>
          <View style={{ marginBottom: 10 }}>
            <Image source={require(`../../assets/blackWidow.png`)} style={{ width: 120, height: 185 }} />
          </View>
          <View style={{ width: 120 }}>
            <View style={{ alignItems: "center", marginBottom: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>{props.title}</Text>
              <Text style={{ textAlign: "center", color: "#A0A3BD" }}>{props.genre}</Text>
            </View>

            <View>
              <TouchableOpacity style={{ borderWidth: 1, borderColor: "#DEDEDE", alignItems: "center", borderRadius: 4, paddingVertical: 5 }}>
                <Text style={{ color: "#1b30cf" }}>Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    )
}

export default MovieCard