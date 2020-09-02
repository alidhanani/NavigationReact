import React, { useState } from 'react';
import { Text, FlatList, View, Image, Button, StyleSheet, Alert, ScrollView} from 'react-native';
import CustomTabButton from '../module/CustomTabButton';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutUs from './AboutUs';
import SettingPage from './SettingPage';
import ProfilePage from './ProfilePage';
import DrawerContent from '../module/DrawerContent';
import CustomHeader from '../module/CustomHeader';
import { DrawerActions } from '@react-navigation/native';




const HomeScreen = ({ navigation }) => {


    var ShowData = [
        {key: 'Devin'},
        {key: 'Dan'},
        {key: 'Dominic'},
        {key: 'Jackson'},
        {key: 'James'},
        {key: 'Joel'},
        {key: 'John'},
        {key: 'Jillian'},
        {key: 'Jimmy'},
        {key: 'Julie'},
      ]
      
    React.useLayoutEffect(() => {
        navigation.setOptions({
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
    <ScrollView>
      <CustomHeader title="Home" leftButton={() => {
            navigation.dispatch(DrawerActions.openDrawer());
      }}/>
      <View style={styles.container}>
      <FlatList
        data={ShowData}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
      </View>
    </ScrollView>
  );
}
  
const Drawer = createDrawerNavigator();
  
const MainScreen = () => {
    return (
        <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="MainHome" component={HomeScreen} options={{ 
              drawerLabel: 'Home',
            }}/>
            <Drawer.Screen name="ProfilePage" component={ProfilePage} navigationOptions={{ 
              drawerLabel: 'Profile Page',
              headerTitle: "Profile"
            }}/>
            <Drawer.Screen name="SettingPage" component={SettingPage} options={{ 
              drawerLabel: 'Setting Page',
            }}/>
          <Drawer.Screen name="AboutUs" component={AboutUs} options={{ 
              drawerLabel: 'About Us',
            }}/>
        </Drawer.Navigator>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: "#eaeaea",
    justifyContent: 'center',
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
    fontWeight: "bold"
  },
  btnContainer: {
    paddingTop: 30
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default MainScreen;