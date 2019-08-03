import React from  'react';

import  Header from '../../components/Header';
import  LoginForm from '../../components/LoginForm';


import { Container } from './styles';

export default function Login(props){
    return (
        <Container>
            <Header />
            <LoginForm navigation={props.navigation} />
        </Container>
    );
}