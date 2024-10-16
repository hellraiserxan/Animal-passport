import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Pressable
} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Logo from '../../assets/icons/logog.svg'
import FormField from '../../components/FormField'
import Button from '../../components/Button';
import Social from '../../assets/icons/Group 1.svg'
import { forgotPassword } from '../../lib/appwrite';
const Reset = ({ navigation }) => {
  const [email, setEmail] = useState('');
  function handleReset() {
    try {
      forgotPassword(email);
      navigation.navigate('resetInfo');
    }
    catch (error) {
      throw error
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => { navigation.navigate('sign-in') }}>
        <Text style={styles.reference_linkToBack}>Назад</Text>
      </Pressable>
      <Logo
        style={styles.wir}
        resizeMode='contain'
      />
      <Text style={styles.label}>Введите E-MAIL</Text>
      <FormField
        title="EMAIL"
        value={email}
        handleChangeText={(event) => {
          setEmail(event)
        }}
        keyboardType="email-address"
      />
      <Button
        backgroundColor='#3B543C'
        color='#92B774'
        title='Отправить'
        handlePress={handleReset}
      />

      <StatusBar backgroundColor='#161622'
        style='light' />
      <View style={styles.line}>
        <Text style={styles.text}>Войти с помощью</Text>
      </View>
      <Social style={styles.img} />

    </SafeAreaView>
  )
}

export default Reset;

const styles = StyleSheet.create({
  wir: {
    width: 328,
    height: 136,
    marginTop: 170,
  },
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    fontFamily: 'Aqum2classic',
    flex: 1,
  },

  reference_linkToBack: {
    color: '#92B774',
    textAlign: 'center',
    fontFamily: 'Aqum2classic',
    marginTop: 10,
    marginLeft: 282,
  },
  text: {
    fontFamily: 'Aqum2classic',
    fontSize: 14,
    color: '#92B774',
    fontWeight: '900',
  },
  line: {
    marginTop: 224,
  },
  img: {
    marginTop: 6,
  },
  reference_link: {
    marginTop: 10,
    marginLeft: 282,
    color: '#92B774',
    textAlign: 'center',
    fontFamily: 'Aqum2classic',
  },
  label: {
    fontSize: 14,
    color: '#92B774',
    fontFamily: 'Aqum2classic',
    lineHeight: 17,
    position: 'absolute',
    left: 43,
    top: 385,
  }
})
