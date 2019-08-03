import React from 'react';
import logo from '../../assets/Nubank_Logo.png';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import  { Container, Top, Logo, Title}  from './styles';


export default function Header(){
    return(
        <Container>
            <Top>
                {/*<Logo source={logo}/> -->*/}
                <IconMCI name='hanger' size={30} color="#FFF"/>
                <Title>My Closet</Title>
            </Top>
            <IconMI name='keyboard-arrow-down' size={20} color="#FFF"/>
        </Container>
    );
}
