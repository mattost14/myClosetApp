import React from  'react';
import  Header from '../../components/Header';
import  LoginForm from '../../components/LoginForm';

import { Container } from './styles';

export default function Login(){
    return (
        <Container>
            <Header />
            <LoginForm/>
        </Container>
    );
}