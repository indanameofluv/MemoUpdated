import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { 
    View, Text, StyleSheet, TextInput, Keyboard,
} from 'react-native';

import CircleButton from "../components/CircleButton";
import KeyboardSafeView from "../components/KeyboardSafeView";

                //onSubmitEditingはリターンキーを押すとキーボードが引っ込むよ

export default function MemoCreateScreen(props){
    const { navigation } = props;
    return (
        <KeyboardSafeView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput value="" multiline style={styles.input} onSubmitEditing={Keyboard.dismiss} />
            </View>
            <CircleButton name='check' size={32} color='white'  
                onPress={() => { navigation.goBack(); }}
            />
        </KeyboardSafeView>    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        paddingHorizontal: 27,
        paddingVertical: 32,
        flex: 1,
    },
    input:{
        flex:1,
        //ここはAndroidのためのセッティング
        textAlignVertical: 'top',
        fontSize: 16,
        lineHeight: 24,
    }
});