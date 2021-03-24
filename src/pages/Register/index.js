import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Input} from '../../components';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = () => {
    if (email.length > 0) {
      const data = {
        name,
        email,
        password,
      };
      console.log(data);
      navigation.navigate('Login', data);
    }
  };
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Hello! Signup to get started</Text>
      <View style={styles.gap} />
      <Input
        placeholder="Name"
        value={name}
        onChangeText={value => setName(value)}
      />
      <View style={styles.gap} />
      <Input
        placeholder="Email Address"
        value={email}
        onChangeText={value => setEmail(value)}
      />
      <View style={styles.gap} />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={value => setPassword(value)}
        secureTextEntry
      />
      <View style={styles.gap} />

      <View style={styles.gap} />
      <Button title="Sign Up" onPress={onSubmit} />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '700',
    maxWidth: '40%',
  },
  page: {
    backgroundColor: 'white',
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  gap: {height: 20},
  or: {textAlign: 'center', fontSize: 16, fontWeight: '700'},
});
