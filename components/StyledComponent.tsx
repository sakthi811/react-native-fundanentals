import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
`;

const StyledText = styled.Text`
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
`;

const StyledButton = styled.TouchableOpacity`
  padding: 10px 20px;
  background-color: #034sdd;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
`;

const StyledComponent = () => {
    return (
        <Container>
            <StyledText > Hello from Styled Component!</StyledText>
            <StyledButton>
                <ButtonText>Click Me</ButtonText>
            </StyledButton>
        </Container>
    )
};

export default StyledComponent;