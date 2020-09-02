import React, { useState } from 'react';
import { Text, FlatList, View, Image, Button, StyleSheet, Alert} from 'react-native';

  
const ProfilePage = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "Profile",
            headerLeft: () => (
                <CustomTabButton textShow={"Logout"} navMove={() => navigation.openDrawer()} />
            ),
            headerRight: () => (
                <CustomTabButton textShow={"Add"} navMove={() => {
                    Alert.prompt('Alert Title', 'message', [
                        {
                            text: 'ok',
                            onPress: str => ShowData.push(str),
                        },
                        {
                            text: 'Cancel',
                            onPress: () => console.log('Pressed Cancel!'),
                            style: 'cancel',
                        },
                    ]);
                }
            }/>
            ),
        });
    }, [navigation]);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../Pictures/DummyImage.png')} />
      </View>
    );
}

export default ProfilePage;