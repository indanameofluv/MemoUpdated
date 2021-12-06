import React from "react";
import { StyleSheet, TouchableOpacity } from 'react-native';
import { string, shape, oneOf, func } from 'prop-types';
import { Feather } from '@expo/vector-icons';


export default function CircleButton(props){
    const { style, name, size, color, onPress } = props;
    return(
        <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
            <Feather name={name} size={size} color={color}  />
        </TouchableOpacity>
    );
}

CircleButton.propTypes = {
    style: shape(),
    name: oneOf(['plus', 'edit-2', 'check']).isRequired,
    onPress: func,
}

CircleButton.defaultprops = {
    style: null,
    onPress: null,
}

const styles = StyleSheet.create({
    circleButton:{
        backgroundColor: '#467FD3',
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 40,
        bottom: 40,
        shadowColor: '#000000',
        shadowOffset: {width:0, height: 8},
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 8,
      },
    
});