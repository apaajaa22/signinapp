import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const Input = ({placeholder, ...rest}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} {...rest} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {borderWidth: 1, paddingHorizontal: 10, borderRadius: 10},
});
