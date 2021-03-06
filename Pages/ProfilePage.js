import React, { useState } from 'react';
import { Text, FlatList, View, Image, Button, StyleSheet, Alert, ScrollView} from 'react-native';
import CustomText from '../module/CustomText';
import CustomButton from '../module/CustomButton';
import CustomHeader from '../module/CustomHeader';
import { DrawerActions } from '@react-navigation/native';

  
const ProfilePage = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <View>
            <CustomHeader title="Profile" leftButton={() => {
                    navigation.dispatch(DrawerActions.openDrawer());
            }} secondButton={true}/>
            <ScrollView>
                <View style={styles.container}>
                    <Image style={styles.imageModify} source={require('../Pictures/DummyImage.png')} />
                    <CustomText  
                        placeHold={"Username"} 
                        changeText={(text) => {
                            setUsername(text)
                        }}
                        Default={username}
                    />
                    <CustomText  
                        placeHold={"Fullname"} 
                        changeText={(text) => {
                            setFullname(text)
                        }}
                        Default={fullname}
                    />
                    <CustomText  
                        placeHold={"Email"} 
                        changeText={(text) => {
                            setEmail(text)
                        }}
                        Default={email}
                    />
                    <CustomText  
                        placeHold={"Password"} 
                        changeText={(text) => {
                            setPassword(text)
                        }}
                        Default={password}
                        isPassword={true}

                    />
                    <CustomText  
                        placeHold={"ConfirmPassword"} 
                        changeText={(text) => {
                            setConfirmPassword(text)
                        }}
                        Default={confirmPassword}
                        isPassword={true}
                    />
                    <CustomButton textShow={"Save"} navMove={() => {
                        // To do something
                        alert("Save");
                    }}/>
                </View>
            </ScrollView>
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
      marginBottom: 20
    },
    imageModify: {
        borderWidth: 2,
        borderColor: "#20232a",
        borderRadius: 10,
        marginBottom: 10,
    }
  });

export default ProfilePage;