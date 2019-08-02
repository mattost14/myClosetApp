import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: flex-end;
`;

export const Input = styled.TextInput`
    background-color: #FFF;
    height: 45px;
    alignSelf: stretch;
    margin-bottom: 20px;
    padding-horizontal: 20px;
`;

export const LoginButton = styled.TouchableOpacity`
    background-color: rgba(255,255,255,0.2);
    height: 55px;
    alignSelf: stretch;
    margin-bottom: 20px;
    padding-horizontal: 20px;
    align-items: center;
    justify-content: center;
    margin-bottom: 150px;
`;

export const LoginButtonText = styled.Text`
    color: #FFF;
    font-size: 18px;
    font-weight: bold;
`;