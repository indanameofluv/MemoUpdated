import React from "react";
import {
     View, Text, TextInput, StyleSheet 
} from 'react-native';

import AppBar from "../components/AppBar";
import Button from "../components/Button";

export default function LogInScreen(){
    return(
        <View style={styles.container}>
            <AppBar />
            <View style={styles.inner}> 
                <Text style={styles.title}>Log In</Text>
                <TextInput value='Email Address' style={styles.input}></TextInput>
                <TextInput value='Password' style={styles.input}></TextInput>
                <Button label='Submit' />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Not registered?</Text>
                    <Text style={styles.footerLink}>Sign up here!</Text>
                </View>
            </View>
        </View>
    );
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#f0f4f8',
    },
    inner:{
        paddingHorizontal: 27,
        paddingVertical: 24,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        marginBottom: 24,
    },
    input:{
        fontSize: 16,
        height: 48,
        borderColor: '#dddddd',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 8,
        marginBottom: 16,
    },
    
    footerText:{
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
    },
    footerLink:{
        fontSize:14,
        lineHeight:24,
        color: '#467fd3',
    },
    footer:{
        flexDirection: 'row',
    }
});
