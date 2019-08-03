import React, { useState, useEffect} from 'react';
import logo from '../../assets/Nubank_Logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import  { Container, Input, LoginButton, LoginButtonText }  from './styles';
import firebase from 'react-native-firebase';
import { useNavigation } from 'react-navigation-hooks';


export default function LoginForm(){
    const [Email, setEmail] = useState(null);
    const [Pass, setPass] = useState(null);
    const [isAuthenticated, setAuthenticationStatus] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const { navigate } = useNavigation();

    useEffect(() => {
            if(isAuthenticated){navigate('Main')} 
        }, [isAuthenticated])

    async function trylogin(){
        try{
            console.log('Try to loggin:');
            console.log(Email);
            console.log(Pass)
            const user = await firebase.auth().signInWithEmailAndPassword(Email,Pass);

            setAuthenticationStatus(true);
        }
        catch (err){
            setAuthenticationStatus(false)
            setErrorMsg(err.message);
            console.log(err);
        }
    };

    return(
        <Container>
            <Input placeholder="Email" autoCapitalize = 'none' onChangeText={email => setEmail(email)} value={Email}/>
            <Input placeholder="Password" secureTextEntry={true} onChangeText={pass => setPass(pass)} value={Pass}/>
            <LoginButton onPress={trylogin}>
                <LoginButtonText>Login</LoginButtonText>
            </LoginButton >
            {isAuthenticated ? null : <LoginButtonText>{errorMsg}</LoginButtonText> }
            
        </Container>
    );

}

