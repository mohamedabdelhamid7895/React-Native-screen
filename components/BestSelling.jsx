import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const BestSelling = ({ Bestselling }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Best Selling</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {Bestselling.map((product) => (
                    <View key={product.id} style={styles.productCard}>
                        <View style={styles.productImageContainer}>
                            <Image source={{ uri: product.image }} style={styles.productImage} />
                        </View>
                        <View style={styles.productInfoContainer}>
                            <Text style={styles.productTitle}>{product.title}</Text>
                            <Text style={styles.productDescription}>{product.description}</Text>
                            <Text style={styles.productPrice}>{product.price}</Text>
                        </View>
                        <TouchableOpacity style={styles.arrowContainer}>
                            <AntDesign name="arrowright" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = {
    container: {
        // marginTop: 10,
        marginBottom: 20,
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: 10,
    },
    productCard: {
        width: 330,
        marginRight: 10,
        marginLeft:10,
        marginBottom:20,
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        shadowColor: 'black',
        borderWidth:2,
        borderColor:'#fff00',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0,
        shadowRadius: 5,
        elevation: 5,
    },
    productImageContainer: {
        width: 60,
        height: 60,
        borderRadius: 10,
        overflow: 'hidden',
    },
    productImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    productInfoContainer: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
    },
    productTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    productDescription: {
        fontSize: 12,
        marginBottom: 5,
    },
    productPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
    },
    arrowContainer: {
        marginTop:35,
        backgroundColor:'black',
    },
};

export default BestSelling;
