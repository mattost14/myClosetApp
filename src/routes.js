import { createStackNavigator, DrawerItems, SafeAreaView, createDrawerNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import React from 'react';
import {View, Button, Text, ScrollView} from 'react-native-elements';
import firebase from 'react-native-firebase';

import Main from './pages/Main';
import Login from './pages/Login';
import SignUp from './pages/SignUp';




const AuthenticationNavigator= createSwitchNavigator({
    Login,
    SignUp,
});

const CustomDrawerContent = (props) => (
    <ScrollView>
        <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always', horizontal: 'never' }}>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);
 
signOutUser = async (navigation) => {
    try {
        await firebase.auth().signOut();
        navigation.navigate('Login');
    } catch (e) {
        console.log(e);
    }
}

const DrawerStack = createDrawerNavigator({
    Main,
},
{
    contentComponent: props => (
        <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always', horizontal: 'never' }}>
            <DrawerItems {...props} />
            <Button title="Sign out" onPress={()=>signOutUser(props.navigation)}/>
        </SafeAreaView > 
    )
}
);


const Root = createSwitchNavigator({
    AuthenticationNavigator,
    DrawerStack,
});

export default createAppContainer(Root);


/*
const AppNavigator = createStackNavigator(
    {
        Main: Main,
        Receita: Receita,
        Despesas: Despesas
    },
    {
        initialRouteName: "Main",
        /*
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    }
);
export default createAppContainer(AppNavigator);
*/

/*
const TabNavigator = createBottomTabNavigator({
    Home: Main,
    SecondScreen: Second,
  });
  
export default createAppContainer(TabNavigator);
*/