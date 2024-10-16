import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Button from "../../components/Button.jsx";
import Logo from '../../assets/icons/logog.svg';
import Social from '../../assets/icons/Group 1.svg';

const Stack = createNativeStackNavigator();

const Auth = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Logo style={styles.logo} resizeMode='contain' />

      <Button
        title="Войти"
        backgroundColor='#92B774'
        color='#3B543C'
        handlePress={() => navigation.navigate('sign-in')}
      />

      <Button
        title="Зарегистрироваться"
        backgroundColor='#3B543C'
        color='#92B774'
        handlePress={() => navigation.navigate('sign-up')}
      />

      <View style={styles.divider}>
        <Text style={styles.dividerText}>Войти с помощью</Text>
      </View>

      <Social style={styles.socialIcon} />
      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  logo: {
    width: 328,
    height: 136,
    marginTop: 195,
  },
  divider: {
    marginTop: 230,
  },
  dividerText: {
    fontFamily: 'Aqum2classic',
    fontSize: 14,
    color: '#92B774',
    fontWeight: '900',
    lineHeight: 17,
  },
  socialIcon: {
    marginTop: 6,
  },
});

export default Auth;
