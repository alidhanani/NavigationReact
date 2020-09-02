import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const CustomButton = (props) => {
  const [text, setText] = useState('');
  return (
    <TouchableOpacity onPress={props.navMove}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>
                {props.textShow}
            </Text>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'green',
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 10,
        width: 200,
        margin: 3
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: "center",
    }
});

export default CustomButton;