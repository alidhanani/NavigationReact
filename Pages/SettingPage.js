import React, { useState } from 'react';
import { Text, FlatList, View, Image, Button, StyleSheet, Alert} from 'react-native';
import CustomButton from '../module/CustomButton';

  
const SettingPage = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Setting Page</Text>
        <CustomButton textShow={"Logout"} navMove={() => {
            navigation.navigate('Home')
        }}/>
      </View>
    );
}

export default SettingPage;