import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Input} from '../../components';

const Login = ({navigation, route}) => {
  const data = route.params;
  useEffect(() => {
    console.log('data useEffect: ', data);
  }, [data]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = () => {
    if (email.length > 0) {
      const dataNew = {
        email,
        password,
      };
      console.log('datanew: ', dataNew);
      if (data.email === dataNew.email) {
        navigation.replace('Home', data);
      } else {
        alert('Email dan password salah');
      }
    }
  };
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Hello Again! Welcome Back</Text>
      <View style={styles.gap} />
      <Input
        placeholder="Email address"
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
      <Button title="Sign In" onPress={onSubmit} />
      <View style={styles.gap} />
      <Text style={styles.or}>or</Text>
      <View style={styles.gap} />
      <Button title="Sign Up" onPress={() => navigation.navigate('Register')} />
    </View>
  );
};

export default Login;

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
