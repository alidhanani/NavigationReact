import React, { useState } from 'react';
import { Text, FlatList, View, Image, Button, StyleSheet, Alert, ScrollView} from 'react-native';
import CustomButton from '../module/CustomButton';
import CustomHeader from '../module/CustomHeader';
import { DrawerActions } from '@react-navigation/native';

  
const SettingPage = ({ navigation }) => {
    return (
      <View>
        <CustomHeader title="Setting" leftButton={() => {
              navigation.dispatch(DrawerActions.openDrawer());
        }} secondButton={true}/>
        <ScrollView>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Setting Page</Text>
          </View>
      </ScrollView>
      </View>
    );
}

export default SettingPage;