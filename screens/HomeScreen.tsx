import React from 'react';
import { Button, View, Text } from 'react-native';

export default function HomeScreen({ route, navigation }) {
    const {numero, usuario} = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text> {numero}</Text>
            <Text>{usuario}</Text>
            <Button
                title="Go to Details... again"
                onPress={() =>
                    navigation.push('DETALLE', {
                        itemId: Math.floor(Math.random() * 100),
                    })
                }
            />
            <View>
                <Text> {usuario}</Text>
                <Text> {numero}</Text>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('DETALLE')}
                />
            </View>

            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>


    );
}
