import Button from '@/src/components/Button';
import { ThemeContext } from '@/src/context/ThemeContext';
import { myColors } from '@/src/styles/Colors';
import React, { useState } from 'react'
import { StatusBar, StyleSheet, Switch, Text, View } from 'react-native';

const index = () => {
    const [theme, setTeme] = useState('light');

  return (
      <ThemeContext.Provider value={theme}>
        <StatusBar backgroundColor={ theme === 'light' ? myColors.light : myColors.black} barStyle={theme === 'light' ? 'dark-content': 'light-content'} />
        <View style={[styles.container, theme === 'dark' && {backgroundColor: '#000'}]}>
            <Switch value={theme === 'light'} onValueChange={() => setTeme(theme === 'light' ? 'dark' : 'light')}/>

                <Button title='3' onPress={() => alert('Hi, valeur 3')} />
        </View>
    </ThemeContext.Provider>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: myColors.light,
    }
});

export default index;