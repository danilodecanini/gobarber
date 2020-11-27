import React from 'react';
import { Image } from 'react-native';

import { Container, Title } from './styles';

import LogoImg from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={LogoImg} />
      <Title>Faça o seu logon</Title>

      <Input name="email" icon="mail" placeholder="Email" />
      <Input name="password" icon="lock" placeholder="Senha" />

      <Button
        onPress={() => {
          console.log('pressionado!');
        }}
      >
        Entrar
      </Button>
    </Container>
  );
};

export default SignIn;
