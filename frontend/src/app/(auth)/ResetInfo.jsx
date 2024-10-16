
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Logo from '../../assets/icons/logog.svg'
import { Link } from 'expo-router';
import Social from '../../assets/icons/Group 1.svg'
const ResetInfo = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => { navigation.navigate('sign-in') }}>
        <Text style={styles.reference_linkk}>Назад</Text>
      </Pressable>
      <Logo
        style={styles.logo}
        resizeMode='contain'
      />
      <View style={styles.textExp}>
        <Text style={styles.text}>
          Мы отправили Вам сообщение НА ПОЧТУ для сброса пароля
        </Text>
      </View>

      <StatusBar backgroundColor='#161622'
        style='light' />
      <View style={styles.line}>
        <Text style={styles.lineLink}>Войти с помощью</Text>
      </View>
      <Social style={styles.img} />

    </SafeAreaView>
  )
}

export default ResetInfo;

const styles = StyleSheet.create({
  logo: {
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
  label: {

  },
  reference_link: {
    marginTop: 6,
    color: '#92B774',
    textAlign: 'center',
    fontFamily: 'Aqum2classic',
  },
  lineLink: {
    fontFamily: 'Aqum2classic',
    fontSize: 14,
    color: '#92B774',
    fontWeight: '900',
  },
  line: {
    marginTop: 245,
  },
  img: {
    marginTop: 6,
  },
  reference_linkk: {
    marginTop: 10,
    marginLeft: 282,
    color: '#92B774',
    textAlign: 'center',
    fontFamily: 'Aqum2classic',
  },
  text:
  {
    fontFamily: 'Aqum2classic',
    textAlign: 'center',
    fontSize: 20,

  },
  textExp: {
    width: 305,
    marginTop: 52,
  }
})
