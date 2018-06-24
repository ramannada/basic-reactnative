import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class Komponen extends React.Component{
    render() {
        return(
            <View>
                <Text>{this.props.tes}</Text>
            </View>
        );
    }
}