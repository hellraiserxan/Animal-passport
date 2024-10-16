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
import { useState, useRef } from 'react';
import Logo from '../../assets/icons/logog.svg';
import FormField from '../../components/FormField.jsx';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button.jsx';
import Social from '../../assets/icons/Group 1.svg';
import { StatusBar } from 'expo-status-bar';
import { registerUser } from '../../lib/appwrite.js';

const SignUp = ({ navigation }) => {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const repeatPasswordInputRef = useRef(null);
  const fadeAnimPas = useRef(new Animated.Value(0)).current;
  const fadeAnimEmp = useRef(new Animated.Value(0)).current;
  const [form, setForm] = useState({
    email: '',
    password: '',
    secondPassword: '',
  });

  const fadeInPassword = () => {
    Animated.timing(fadeAnimPas, {
      toValue: 1,
      duration: 10,
      useNativeDriver: true,
    }).start()

  }
  const fadeOutPassword = () => {
    Animated.timing(fadeAnimPas, {
      toValue: 0,
      duration: 10,
      useNativeDriver: true,
    }).start()
  }
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


  const handleRegister = async () => {
    try {
      const { email, password, secondPassword } = form;
      if (!email || !password) {
        fadeInEmpty();
        return;
      }
      if (password !== secondPassword) {
        fadeInPassword();
        return
      }
      await registerUser(email, password);
      navigation.navigate('Auth')
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
            inputRef={emailInputRef}
            hadleNextFocus={() => passwordInputRef.current.focus()}
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e },
              fadeOutEmpty())}
            keyboardType="email-address"
          />
          <Animated.View style={{ opacity: fadeAnimPas }}>
            <Text style={styles.animated}>Пароли не совпадают!</Text>
          </Animated.View>
          <FormField
            title="ПАРОЛЬ"
            inputRef={passwordInputRef}
            hadleNextFocus={() => repeatPasswordInputRef.current.focus()}
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e },
              fadeOutPassword(),
              fadeOutEmpty()
            )}
          />
          <FormField
            title="ПОВТОРИТЕ ПАРОЛЬ"
            inputRef={repeatPasswordInputRef}
            value={form.secondPassword}
            handleChangeText={(e) => setForm({ ...form, secondPassword: e },
              fadeOutPassword(),
              fadeOutEmpty()
            )}
          />
          <Button
            title="Зарегистрироваться"
            backgroundColor="#3B543C"
            color="#92B774"
            handlePress={handleRegister}
          />
          <View style={styles.line}>
            <Text style={styles.text}>Войти с помощью</Text>
          </View>
          <Social style={styles.img} />
          <StatusBar backgroundColor="#161622" style="light" />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  logo: {
    width: 328,
    height: 136,
    marginTop: 116,
  },
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    flex: 1,
    fontFamily: 'Aqum2classic',
  },
  text: {
    fontSize: 14,
    color: '#92B774',
    fontWeight: '900',
  },
  line: {
    marginTop: 131,
  },
  img: {
    marginTop: 6,
  },
  text: {
    fontFamily: 'Aqum2classic',
    fontSize: 14,
    color: '#92B774',
    fontWeight: '900',
    lineHeight: 17,
    fontWeight: 900,
  },
  animated: {
    fontSize: 14,
    color: '#AB4242',
    fontFamily: 'Aqum2classic',
    marginRight: 110,
    position: 'absolute',
    left: -150,
    bottom: -25,
  },
  referenceLinkToBack: {
    marginTop: 10,
    marginLeft: 282,
    color: '#92B774',
    textAlign: 'center',
    fontFamily: 'Aqum2classic'
  },
});
