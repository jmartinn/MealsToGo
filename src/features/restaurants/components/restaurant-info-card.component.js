import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

import { Card } from 'react-native-paper';

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const { 
        name = 'Some Restaurant',
        icon,
        photos = [
            'https://www.recetasderechupete.com/wp-content/uploads/2020/05/Gazpacho-andaluz-Ajustes-de-rechupete-2.jpg'
        ],
        address = '100 some random street',
        isOpenNow = true, 
        rating = 4,
        isClosedTemporarily = false
     } = restaurant;
    return (
        <Card elevation={5} style={styles.card}>
            <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0]}} />
            <Text style={styles.title}>{name}</Text>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
    },
    cover: {
        padding: 20,
        backgroundColor: "white",
    },
    title: { padding: 16 }
})