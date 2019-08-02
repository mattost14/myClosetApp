import React, { Component } from 'react';

import { Text, View, Button } from 'react-native';


export default class Despesas extends Component {
    /*
    static navigationOptions = {
        title: 'Second Screen',
    };*/
    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('otherParam', 'A Nested Details Screen')
        };
      };

    render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>
            <Button
                title="Refresh"
                onPress={() =>
                    this.props.navigation.push('Despesas', {
                    itemId: Math.floor(Math.random() * 100),
                    })}
            />
            <Button
                title="Go to Home"
                onPress={() => this.props.navigation.navigate('Home')}
            />
            <Button
                title="Go back"
                onPress={() => this.props.navigation.goBack()}
            />
        </View>
        );
    }
}