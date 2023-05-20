import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => console.log('Menu pressed')}>
                <Feather name="menu" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('User profile pressed')}>
                <FontAwesome5 name="user" size={15} color="white" style={styles.user} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingRight: 30,
        paddingLeft: 25,
        position: 'absolute',
        top: 50,
        left: 0,
        right: 0,
    },
    user: {
        backgroundColor: 'black',
        width: 35,
        alignContent: 'center',
        textAlign: 'center',
        height: 30,
        paddingTop: 6,
        borderRadius: 6,
    }
});

export default Header;
