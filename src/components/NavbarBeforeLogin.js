import React from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import {useNavigation} from '@react-navigation/native'

const NavbarBeforeLogin = () => {
  const [toggle, setToggle] = React.useState(false);
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.navbarContainer}>
        <View style={styles.navbarImage}>
          <Image source={require("../../assets/Tiku.jpg")} style={{ width: 125, height: 50}} />
        </View>
        <View>
          <TouchableOpacity onPress={() => setToggle(!toggle)} >
            <Image source={require("../../assets/Group.png")} style={{ width: 20, height: 20 }} />
          </TouchableOpacity>
        </View>
      </View>

      {toggle && (
        <View style={{position: 'absolute', top : 70, right: 0, left:0, zIndex: 10, backgroundColor: 'white'}}>
          <TouchableOpacity style={{ flex: 1, paddingVertical: 15, alignItems: "center", borderBottomWidth: 1, borderColor: "#DEDEDE", borderTopWidth: 1 }} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.navbarText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navbarList} onPress={() => navigation.navigate('ListMovie')}>
            <Text style={styles.navbarText}>List Movie</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navbarList} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.navbarText} >Sign In</Text>
          </TouchableOpacity>

          <View style={{ flex: 1, paddingVertical: 15, alignItems: "center" }}>
            <Text style={{ fontSize: 18, color: "#6E7191" }}>© 2020 Tickitz. All Rights Reserved.</Text>
          </View>

        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
    marginHorizontal: 30
  },
  navbarImage: {
    flex: 1,
  },
  navbarList: {
    flex: 1,
    paddingVertical: 15,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#DEDEDE",
  },
  navbarText: {
    fontSize: 23,
  },
});

export default NavbarBeforeLogin;
