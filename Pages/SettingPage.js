import React, { useState } from 'react';
import { Text, FlatList, View, Image, Button, StyleSheet, Alert, ScrollView} from 'react-native';
import CustomButton from '../module/CustomButton';
import CustomHeader from '../module/CustomHeader';
import { DrawerActions } from '@react-navigation/native';

  
const SettingPage = ({ navigation }) => {
    return (
      <ScrollView>
        <CustomHeader title="Setting" leftButton={() => {
              navigation.dispatch(DrawerActions.openDrawer());
        }}/>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Setting Page</Text>
          <CustomButton textShow={"Logout"} navMove={() => {
              navigation.navigate('Home')
          }}/>
        </View>
      </ScrollView>
    );
}

export default SettingPage;