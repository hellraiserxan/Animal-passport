import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Animated
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../../assets/icons/logog.svg';
import Button from '../../components/Button';
import Social from '../../assets/icons/Group 1.svg';
import FormField from '../../components/FormField';
import { loginUser } from '../../lib/appwrite';

const SignIn = ({ navigation }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const fadeAnimEmp = useRef(new Animated.Value(0)).current;

  const fadeInEmpty = () => {
    Animated.timing(fadeAnimEmp, {
      toValue: 1,
      duration: 10,
      useNativeDriver: true,
    }).start()

  }
  const fadeOutEmpty = () => {
    Animated.timing(fadeAnimEmp, {
      toValue: 0,
      duration: 10,
      useNativeDriver: true,
    }).start()
  }
  const handleChange = (field) => (value) => {
    setForm(prevState => ({ ...prevState, [field]: value }));
  };

  const handleLogin = async () => {
    try {
      const { email, password } = form;
      if (!email || !password) {
        fadeInEmpty();
        return;
      }
      await loginUser(email, password);
      navigation.navigate('Main')
    } catch (error) {
      console.error(error);

    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={Platform.select({ ios: 100, android: 0 })}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <Pressable onPress={() => navigation.navigate('Auth')}>
            <Text style={styles.referenceLinkToBack}>Назад</Text>
          </Pressable>

          <Logo style={styles.logo} resizeMode='contain' />
          <Animated.View style={{ opacity: fadeAnimEmp }}>
            <Text style={styles.animated}>Заполните все поля!</Text>
          </Animated.View>
          <FormField
            title="E-MAIL"
            value={form.email}
            inputRef={emailInputRef}
            hadleNextFocus={() => passwordInputRef.current.focus()}
            handleChangeText={(event) => setForm({ ...form, email: event })}
          />
          <FormField
            title="ПАРОЛЬ"
            value={form.password}
            inputRef={passwordInputRef}
            handleChangeText={(event) => setForm({ ...form, password: event })}
          />

          <Button
            title='Войти'
            backgroundColor='rgba(146, 183, 116, 1)'
            color='#133115'
            handlePress={handleLogin}
          />

          <Pressable onPress={() => navigation.navigate('reset')}>
            <Text style={styles.referenceLink}>Забыли пароль?</Text>
          </Pressable>

          <StatusBar backgroundColor='#161622' style='light' />

          <View style={styles.line}>
            <Text style={styles.lineLink}>Войти с помощью</Text>
          </View>
          <Social style={styles.socialImg} />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    flex: 1,
  },
  referenceLinkToBack: {
    marginTop: 10,
    marginLeft: 282,
    color: '#92B774',
    textAlign: 'center',
    fontFamily: 'Aqum2classic'
  },
  logo: {
    width: 328,
    height: 136,
    marginTop: 170,
  },
  referenceLink: {
    marginTop: 6,
    color: '#92B774',
    textAlign: 'center',
    fontFamily: 'Aqum2classic',
    fontWeight: '900',
    lineHeight: 17,
    fontWeight: 900,

  },
  lineLink: {
    fontFamily: 'Aqum2classic',
    fontSize: 14,
    color: '#92B774',
    fontWeight: '900',
    lineHeight: 17,
    fontWeight: 900,
  },
  line: {
    marginTop: 129,
  },
  socialImg: {
    marginTop: 6,
  },
  animated: {
    fontSize: 14,
    color: '#AB4242',
    fontFamily: 'Aqum2classic',
    marginRight: 110,
    position: 'absolute',
    left: -150,
    bottom: -25,
  }
});
