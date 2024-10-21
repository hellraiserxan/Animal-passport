import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import { useState, useRef, useEffect } from 'react'
import EyeCl from '../assets/icons/free-icon-font-crossed.svg'
import EyeOp from '../assets/icons/free-icon-font-eye.svg'

const FormField = ({ inputRef, hadleNextFocus, title, value, placeholder, handleChangeText }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [password, setPassword] = useState();
    const isPasswordField = title === 'ПАРОЛЬ' || title === 'ПОВТОРИТЕ ПАРОЛЬ'

    useEffect(() => {
        console.log(value);
    }, [value])

    return (

        <View style={styles.textField}>
            <TextInput
                secureTextEntry={isPasswordField && !showPassword}
                style={styles.textField_input}
                value={value}
                selectTextOnFocus={false}
                ref={inputRef}
                onBlur={() => setIsFocused(false)}
                onFocus={() => console.log(value)}
                placeholder={isFocused
                    ? '' : title}
                onSubmitEditing={hadleNextFocus}
                returnKeyType='next'
                keyboardType='default'
                autoCapitalize="none"
                autoCorrect={false}
                multiline={false}
                autoCompleteType='off'
                textContentType="oneTimeCode"
                placeholderTextColor='#000000'
                selectionColor="#3B543C"
                clearTextOnFocus={false}
                onChangeText={handleChangeText}
            />
            {isPasswordField && (
                <TouchableOpacity style={styles.img} onPress={() => setShowPassword((prev) => !prev)}>
                    {!showPassword ? <EyeCl />
                        :
                        <EyeOp />
                    }
                </TouchableOpacity>
            )}
        </View>

    )
}

export default FormField

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        fontFamily: 'Aqum2classic',

    },
    textField_input: {
        fontFamily: 'Aqum 2 Small caps',
        backgroundColor: 'rgba(146, 183, 116, 0.3)',
        height: 50,
        width: 305,
        borderRadius: 30,
        borderColor: '#92B774',
        borderWidth: 5,
        paddingLeft: 20,
        paddingRight: 50,
        fontWeight: 900,
        fontSize: 14,
        lineHeight: 17,

    },
    textField: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25,
    },
    img: {
        position: 'absolute',
        right: 23,
    }
})