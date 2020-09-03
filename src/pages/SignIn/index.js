import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/logo_3.svg';

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <img
          src={logo}
          alt="BR Barber"
          style={{
            width: 300,
            height: 300,
            alignSelf: 'center',
            marginBottom: -90,
          }}
        />
        <Input name="email" type="email" placeholder="Informe o seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Informe a sua senha"
        />

        <button type="submit">Entrar</button>
        <Link to="/register">Crie uma conta gratuita</Link>
      </Form>
    </>
  );
}
