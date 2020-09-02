import React from 'react';
import { View, StyleSheet} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import {Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerContent = (props) => {

    const [isDark, setIsDark] = React.useState(false);
    const toggleTheme = () => {
        setIsDark(!isDark);
    }

    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {... props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://www.kindpng.com/imgv/ioJmwwJ_dummy-profile-image-jpg-hd-png-download/'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft: 15, flexDirection: 'column'}}>
                                <Title style={styles.title}>Ali Dhanani</Title>
                                <Caption style={styles.caption}>@alidhanani</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Follows</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Follows</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('MainHome')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('ProfilePage')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Setting"
                            onPress={() => {props.navigation.navigate('SettingPage')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="About Us"
                            onPress={() => {props.navigation.navigate('AboutUs')}}
                        />

                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {props.navigation.navigate('Home')}}
                />
            </Drawer.Section>
        </View>
    );
};

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold'
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 15,
    },
    drawerSection: {
        marginTop: 15
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    }
});

export default DrawerContent;