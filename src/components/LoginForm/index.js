import React, { useState } from 'react';
import logo from '../../assets/Nubank_Logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import  { Container, Input, LoginButton, LoginButtonText }  from './styles';
//import firebase from 'react-native-firebase';


export default function LoginForm(props){
    const [Email, setEmail] = useState(null);
    const [Pass, setPass] = useState(null);
    const [isAuthenticated, setAuthenticationStatus] = useState(false);


    function trylogin(){
        try{
            const user = firebase.auth().signInWithEmailAndPassword(Email,Pass);

            setAuthenticationStatus(true);
        }
        catch (err){
            setAuthenticationStatus(false)
            console.log(err);
        }
    };

    return(
        <Container>
            <Input placeholder="Email" onChangeText={email => setEmail(email)} value={Email}/>
            <Input placeholder="Password" onChangeText={pass => setPass(Pass)} value={Pass}/>
            <LoginButton onPress={trylogin}>
                <LoginButtonText>Login</LoginButtonText>
            </LoginButton>
            {isAuthenticated ? <LoginButtonText>Logado!</LoginButtonText> : <LoginButtonText>Erro!</LoginButtonText> }
            
        </Container>
    );

}

