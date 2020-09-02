import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const CustomTabButton = (props) => {
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
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: 'black',
        fontSize: 15,
        textAlign: "center",
        fontWeight: "bold"
    }
});

export default CustomTabButton;