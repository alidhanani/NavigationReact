import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const CustomText = (props) => {
  return (
    <TextInput 
        style={styles.textCustom}
        placeholder={props.placeHold}
        onChangeText={props.changeText}
        defaultValue={props.Default}
        secureTextEntry={props.isPassword}
    />
  );
}

const styles = StyleSheet.create({
    textCustom: {
        fontSize: 20,
        fontStyle: "normal",
        borderRadius: 5,
        borderColor: "black",
        backgroundColor: "white",
        height: 40,
        paddingHorizontal: 10,
    }
});

export default CustomText;