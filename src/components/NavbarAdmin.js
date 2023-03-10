import React from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch } from "react-redux";
import { logout as logoutAction } from "../redux/reducers/auth";

import { useNavigation } from "@react-navigation/native";

const NavbarAdmin = () => {
  const [toggle, setToggle] = React.useState(false);
  const navigation = useNavigation()
  const dispatch = useDispatch()
  
  const logout = () => {
    dispatch(logoutAction())
  }

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <View style={styles.navbarContainer}>
        <View style={styles.navbarImage}>
          <Image source={require("../../assets/Tiku.jpg")} style={{ width: 125, height: 50, marginLeft: 30 }} />
        </View>
        <View>
          <TouchableOpacity onPress={() => setToggle(!toggle)} style={{ marginRight: 30 }}>
            <Image source={require("../../assets/Group.png")} style={{ width: 20, height: 20 }} />
          </TouchableOpacity>
        </View>
      </View>

      {toggle && (
        <View style={{position: 'absolute', top : 70, right: 0, left:0, zIndex: 10, backgroundColor: 'white'}}>
        <View style={{ flex: 1, marginHorizontal: 30, marginVertical: 30, flexDirection: "row", alignItems: "center", backgroundColor: "#FCFDFE", borderRadius: 4, borderColor: "#DEDEDE", borderWidth: 1, paddingHorizontal: 10 }}>
            <Icon name="search" size={30} color="#6E7191" />
            <TextInput style={{ flex: 1, height: 50, paddingHorizontal: 15, fontSize: 18 }} placeholder='Search..'/>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={{ flex: 1, paddingVertical: 15, alignItems: "center", borderBottomWidth: 1, borderColor: "#DEDEDE", borderTopWidth: 1 }}>
            <Text  style={styles.navbarText}>Dashboard</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('ManageMovie')} style={styles.navbarList}>
            <Text  style={styles.navbarText}>Manage Movie</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('ManageSchedule')} style={styles.navbarList}>
            <Text  style={styles.navbarText}>Manage Schedule</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.navbarList}>
            <Text  style={styles.navbarText}>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={logout} style={styles.navbarList}>
            <Text style={styles.navbarText}>Logout</Text>
          </TouchableOpacity>

          <View style={{ flex: 1, paddingVertical: 15, alignItems: "center" }}>
            <Text style={{ fontSize: 18, color: "#6E7191" }}>?? 2020 Tickitz. All Rights Reserved.</Text>
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

export default NavbarAdmin;
