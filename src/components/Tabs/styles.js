import styled from 'styled-components/native';

export const Container = styled.View`
    height: 170px;
    margin-bottom: 40px;
`;

export const TabsContainer = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle:{ paddingLeft: 10, paddingRight: 20 },
    showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
    width: 100px;
    height: 100px;
    background: rgba(255,255,255,.2);
    border-radius: 3px;
    margin-left: 10px;
    padding: 10px; 
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.Image`
`;

export const TabText = styled.Text`
    font-size: 13px;
    color: #FFF;
`;

export const AddButtonContainer = styled.View`
    height: 50px;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`;

export const AddButtonInnerContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const AddButton = styled.TouchableOpacity`
    height: 50px;
    width: 50px;
    align-items: center;
    border-radius: 25;
`;

export const TabItemButton = styled.TouchableOpacity`
`;