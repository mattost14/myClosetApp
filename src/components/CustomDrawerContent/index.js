import React, { useState, useEffect} from 'react';
import logo from '../../assets/Nubank_Logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import  { Container, Input, LoginButton, LoginButtonText, ErrorText, SignUpButton, SignUpButtonText }  from './styles';
import firebase from 'react-native-firebase';
import { Button } from 'react-native-elements';
import { useNavigation, SafeAreaView } from 'react-navigation-hooks';


export default function CustomDrawerContent(props){

    const { navigate } = useNavigation();

    signOutUser = async () => {
        try {
            await firebase.auth().signOut();
            navigate('Login');
        } catch (e) {
            console.log(e);
        }
    }

    return(
        <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always', horizontal: 'never' }}>
            <DrawerItems {...props} />
            <Button title="Sign out" onPress={()=>signOutUser()}/>
        </SafeAreaView > 
    );

}

