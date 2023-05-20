import React from 'react';
import { View, TextInput, StyleSheet,Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Feather name="search" size={20} color="gray" style={styles.icon} />
                <TextInput placeholder="Search" style={styles.input} />
            </View>
            <View style={styles.cartContainer}>
                <Feather name="shopping-cart" size={20} color="black" style={styles.icon} />
                <View style={styles.cartCountContainer}>
                    <Text style={styles.cartCountText}></Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // alignItems: 'center',
        // backgroundColor: '#f2f2f2',
        paddingVertical: 10,
       position:'absolute',
       top:120,
        paddingHorizontal: 15,
    },
    searchContainer: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        height:40,
        width: 240,
        marginRight:20,
        marginLeft:4,
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    input: {
        flex: 1,

        fontSize: 16,
        marginLeft: 10,
    },
    icon: {
        marginRight: 20,
    },
    cartContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    cartCountContainer: {
        backgroundColor: 'red',
        borderRadius: 10,
        minWidth: 13,
        height: 13,
        marginRight:14,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        right: -1,
    },
    cartCountText: {
        color: 'white',
        fontSize: 12,
    },
});

export default SearchBar;
