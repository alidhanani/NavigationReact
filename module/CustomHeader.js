import * as React from 'react';
import { Appbar } from 'react-native-paper';
import {StyleSheet} from 'react-native';

const CustomHeader = (props) => {

  return (
    <Appbar.Header style={styles.headerWork}>
      <Appbar.Action icon={require('../Pictures/menu.png')} onPress={props.leftButton} />
      <Appbar.Content title={props.title} subtitle={props.subtitle} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
    headerWork: {
      backgroundColor: "blue",
      justifyContent: 'center',
    },
  });

export default CustomHeader;