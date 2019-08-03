import React, { useState, useEffect} from 'react';
import logo from '../../assets/Nubank_Logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import  { Container, Input, LoginButton, LoginButtonText, ErrorText, SignUpButton, SignUpButtonText }  from './styles';
import firebase from 'react-native-firebase';
import { useNavigation } from 'react-navigation-hooks';


export default function SignupForm(){
    const [Email, setEmail] = useState(null);
    const [Pass, setPass] = useState(null);

    const { navigate } = useNavigation();

    async function createAccount(){
        try{
            await firebase.auth().createUserWithEmailAndPassword(Email,Pass);
            navigate('Main');
        }
        catch(err){
            console.log(err.message);
        }
    }

    return(
        <Container>
            <Input placeholder="Email" autoCapitalize = 'none' onChangeText={email => setEmail(email)} value={Email}/>
            <Input placeholder="Password" secureTextEntry={true} onChangeText={pass => setPass(pass)} value={Pass}/>
            <LoginButton onPress={()=>{createAccount()}}>
                <LoginButtonText>Create Account</LoginButtonText>
            </LoginButton>   
        </Container>
    );

}

