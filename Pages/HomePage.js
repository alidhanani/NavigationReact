import React, { useState } from 'react';
import { Text, TextInput, View, Image, Button, StyleSheet } from 'react-native';
import CustomButton from '../module/CustomButton';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>
      <View style={styles.btnContainer}>
        <View style={styles.buttonLogin}>
          <CustomButton textShow={"Login"} navMove={() => {
              navigation.navigate('Login')
          }}/>
        </View>
        <View style={styles.buttonSignUp}>
          <CustomButton textShow={"Sign Up"} navMove={() => {
              navigation.navigate('SignUp')
          }}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: "#eaeaea",
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonLogin: {
    padding: 4
  },
  buttonSignUp: {
    padding: 4
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    width: 300,
  },
  btnContainer: {
    paddingTop: 30
  }
});

export default HomePage;