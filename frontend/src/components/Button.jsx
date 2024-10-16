import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import React from 'react'

const Button = ({ title, handlePress, backgroundColor, color }) => {

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: backgroundColor }]}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <Text style={[styles.buttonText, { color: color }]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    width: 305,
    height: 55,
    marginTop: 20,
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10 50 30 0'
  },
  buttonText: {
    fontFamily: 'Aqum2classic',
    fontSize: 20,
    fontWeight: 900,
    lineHeight: 25.2,
    color: '#3B543C',
  }
})