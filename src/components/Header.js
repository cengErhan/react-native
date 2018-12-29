import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

//fonksiyon tanımladık ve bir değişkene atadık html return ediyor
const Header = () => { //bunu app.js de tıpkı html tag gibi kullan
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Header Kısmı</Text>
        </View>
    );
};

// styles içini yazdık
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: 'rgba(10,10,10,0.8)'
    },
    viewStyle: {
        backgroundColor: 'rgb( 244, 244, 244)',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        shadowOpacity: 0.8,
        shadowOffset: { height: 1, width: 0 } 
    }
});

export default Header;