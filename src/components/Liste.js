import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

class Liste extends Component {
    render() {
        console.log('render log');
        return(
            <View style={{margin: 16}}>
                <TouchableOpacity>
                    <Text>Click To Get Data From Php</Text>
                </TouchableOpacity>
            </View>
        );       
    }
}

export default Liste; 