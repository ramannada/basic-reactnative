import React, { Component } from 'react';
import {View, Text} from 'react-native';

export default  Header = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
    );
}

const styles = {
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#f8f8f8',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 20},
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative',
    },
    textStyle: {
        fontSize: 20,
    }
}