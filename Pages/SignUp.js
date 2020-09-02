import React, { useState } from 'react';
import { Text, TextInput, View, Image, Button, StyleSheet } from 'react-native';
import CustomButton from '../module/CustomButton';
import CustomText from '../module/CustomText';
import CustomTabButton from '../module/CustomTabButton';

const SignUpPage = ({ navigation }) => {
  const [text, setText] = useState('');
  const [textPass, setTextPass] = useState('');
  const [textConfirmPass, setTextConfirmPass] = useState('');
  React.useLayoutEffect(() => {
    navigation.setOptions({
        headerLeft: () => (
        <CustomTabButton textShow={"Back"} navMove={() => navigation.navigate('Home')} />
        ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View>
          <View style={styles.textUsername}>
              <CustomText 
                placeHold={"username"} 
                changeText={(text) => {
                    setText(text)
                }}
                Default={text}
                />
          </View>
          <View style={styles.textPassword}>
          <CustomText 
                placeHold={"password"} 
                changeText={(text) => {
                    setTextPass(text)
                }}
                Default={textPass}
                isPassword={true}
                />
          </View>
          <View style={styles.textPassword}>
          <CustomText 
                placeHold={"confirm password"} 
                changeText={(text) => {
                    setTextConfirmPass(text)
                }}
                Default={textConfirmPass}
                isPassword={true}
                />
          </View>
      </View>
      <View>
        <CustomButton textShow={"Login"} navMove={() => {
            if(textConfirmPass == textPass) {
                alert("Success")
                navigation.navigate('MainScreen')
            } else {
                alert("Password Dont match")
            }
        }}/>
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
    padding: 10
  },
  buttonSignUp: {
    padding: 10
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
  },
  textUsername: {
      padding: 10
  },
  textPassword: {
      padding: 10
  }
});

export default SignUpPage;