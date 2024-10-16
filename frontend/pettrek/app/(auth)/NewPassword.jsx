import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../../assets/icons/logog.svg';
import Button from '../../components/Button';
import Social from '../../assets/icons/Group 1.svg';
import FormField from '../../components/FormField';

const newPassword = ({ navigation }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleChange = (field) => (value) => {
    setForm(prevState => ({ ...prevState, [field]: value }));
  };

  const handleSubmit = () => {
    navigation.navigate('Auth');
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
            <Text style={styles.referenceLink}>Назад</Text>
          </Pressable>

          <Logo style={styles.logo} resizeMode='contain' />

          <FormField
            title="E-MAIL"
            value={form.email}
            inputRef={emailInputRef}
            hadleNextFocus={() => passwordInputRef.current.focus()}
            handleChangeText={handleChange('email')}
          />
          <FormField
            title="ПАРОЛЬ"
            value={form.password}
            inputRef={passwordInputRef}
            handleChangeText={handleChange('password')}
          />

          <Button
            title='Войти'
            backgroundColor='rgba(146, 183, 116, 1)'
            color='#133115'
            handlePress={handleSubmit}
          />

          <Pressable onPress={() => navigation.navigate('reset')}>
            <Text style={styles.referenceLink}>Забыли пароль?</Text>
          </Pressable>

          <StatusBar backgroundColor='#161622' style='light' />

          <View style={styles.line}>
            <Text style={styles.lines}>Войти с помощью</Text>
          </View>
          <Social style={styles.img} />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default newPassword;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    flex: 1,

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
  },
  lines: {
    fontFamily: 'Aqum2classic',
    fontSize: 14,
    color: '#92B774',
    fontWeight: '900',
  },
  line: {
    marginTop: 125,
  },
  img: {
    marginTop: 6,
  },
});
