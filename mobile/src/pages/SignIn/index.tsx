import React from 'react';
import { Image } from 'react-native';

import { Container, Title } from './styles';

import LogoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={LogoImg} />
      <Title>Faça o seu logon</Title>
    </Container>
  );
};

export default SignIn;
