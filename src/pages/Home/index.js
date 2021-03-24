import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Home = ({route}) => {
  const data = route.params;
  return (
    <View style={styles.page}>
      <Text style={styles.label}>Halo Selamat Datang</Text>
      <Text style={styles.label}>Nama: {data.name}</Text>
      <Text style={styles.label}>email: {data.email}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {justifyContent: 'center', alignItems: 'center', flex: 1},
  label: {fontSize: 24, fontFamily: 'Transat-Medium', textAlign: 'center'},
});
