import React from  'react';

import  Header from '../../components/Header';
import  SignupForm from '../../components/SignupForm';


import { Container } from './styles';

export default function Login(props){
    return (
        <Container>
            <Header />
            <SignupForm />
        </Container>
    );
}