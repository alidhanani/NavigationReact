import React, { useState } from 'react';
import { Text, FlatList, View, Image, Button, StyleSheet, Alert, ScrollView} from 'react-native';
import CustomHeader from '../module/CustomHeader';
import { DrawerActions } from '@react-navigation/native';
  
const AboutUs= ({ navigation }) => {
    return (
      <ScrollView>
        <CustomHeader title="About Us" leftButton={() => {
              navigation.dispatch(DrawerActions.openDrawer());
        }}/>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>About Us</Text>
        </View>
      </ScrollView>
    );
}

export default AboutUs;