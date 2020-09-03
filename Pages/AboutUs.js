import React, { useState } from 'react';
import { Text, FlatList, View, Image, Button, StyleSheet, Alert, ScrollView} from 'react-native';
import CustomHeader from '../module/CustomHeader';
import { DrawerActions } from '@react-navigation/native';
  
const AboutUs= ({ navigation }) => {
    return (
      <View>
        <CustomHeader title="About Us" leftButton={() => {
              navigation.dispatch(DrawerActions.openDrawer());
        }} secondButton={true}/>
        <ScrollView>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>About Us</Text>
          </View>
      </ScrollView>
      </View>
    );
}

export default AboutUs;