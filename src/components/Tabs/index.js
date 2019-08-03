import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AddIcon from 'react-native-vector-icons/Ionicons';
import  { Container, TabsContainer, TabItem, TabText, Logo, AddButtonContainer, AddButton, AddButtonInnerContainer}  from './styles';
import jeansIcon from '../../assets/jeans.png';


export default function Tabs(){
    return(
        <Container>
            <AddButtonContainer>
                <AddButton onPress={()=>{}}>
                    <AddButtonInnerContainer >
                        <AddIcon name="ios-add-circle-outline" size={50} color="#FFF"/>
                    </AddButtonInnerContainer > 
                </AddButton>
                   
            </AddButtonContainer>
            <TabsContainer>
                <TabItem>
                    <Icon name="tshirt-crew-outline" size={30} color="#FFF"/>
                    <TabText>T-shirts</TabText>
                </TabItem> 
                <TabItem>
                    <Logo source={jeansIcon} size={30} color="#FFF"/>
                    <TabText>Pants</TabText>
                </TabItem>
            </TabsContainer>
        </Container>
    );
}
