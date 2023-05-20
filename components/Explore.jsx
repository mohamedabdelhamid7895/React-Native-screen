import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ProductCard = ({ id, image, title, description, price }) => {
    return (
        <View style={styles.productCard}>
            <View style={styles.productImageContainer}>
                <Image source={{ uri: image }} style={styles.productImage} />
                <View style={styles.favoriteContainer}>
                    <AntDesign name="heart" size={24} color="white" />
                </View>
            </View>
            <View style={styles.productTextContainer}>
                <Text style={styles.productTitle}>{title}</Text>
                <Text style={styles.productDescription}>{description}</Text>
            </View>
            <View style={styles.productPriceContainer}>
                <Text style={styles.productPrice}>{price}</Text>
                <TouchableOpacity style={styles.addButton}>
                    <AntDesign name="plus" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const ExploreSection = ({ productsData }) => {
    return (
        <View style={styles.exploreSection}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Explore</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {productsData.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    exploreSection: {
        marginTop: 180,
    },
    headerContainer: {
        paddingHorizontal: 20,
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom:10,
    },
    productCard: {
        width: 200,
        height: 350,
        marginHorizontal: 10,
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 14,
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }
,
    productImageContainer: {
        position: 'relative',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden',
        // borderWidth: 1,
        // borderColor: '#000',
    },
    productImage: {
        width: '100%',
        height: 150,
    },
    favoriteContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 10,
    },
    productTextContainer: {
        marginHorizontal: 10,
        marginTop: 0,
        marginBottom: 20,
        // borderColor: '#000',
        borderTopWidth:0,
        // borderBottomWidth: 1,
        paddingVertical: 10,
    },
    productTitle: {
        marginHorizontal: 10,
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    productDescription: {
        marginHorizontal: 10,
        marginTop: 5,
        fontSize: 16,
        color: 'black',
    },
    productPriceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop: 10,
        alignItems: 'center',
    },
    productPrice: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    addButton: {
        backgroundColor: 'black',
        width: 35,
        height: 35,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ExploreSection;
