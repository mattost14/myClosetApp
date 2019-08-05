import React, {useState, useEffect} from  'react';
import {Text} from 'react-native-elements';
import firebase from 'react-native-firebase';
import { useNavigation } from 'react-navigation-hooks';

import  Header from '../../components/Header';
import  Tabs from '../../components/Tabs';
import { Container } from './styles';


export default function Main(){
    const { navigate } = useNavigation();
    const currentUser = firebase.auth().currentUser;

    useEffect(() => {
        if(currentUser){
            //Do nothing!
            console.log('User logged on:')
            console.log(currentUser.email)
        }
        else{  
            navigate('Login');
        }
    }, [currentUser]);

    return (
        <Container>
            <Text>email: {currentUser.email}</Text>
            <Header />
            <Tabs />
        </Container>
    );
}