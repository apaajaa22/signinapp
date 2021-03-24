import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.page} onPress={onPress}>
      <Text style={styles.Text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0E4A86',
    height: 55,
    borderRadius: 10,
  },
  Text: {color: 'white', fontSize: 16, fontWeight: '700'},
});
