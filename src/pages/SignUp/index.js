import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';
// import logo from '~/assets/logo60x60.svg';

const schemaYup = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório.'),
  email: Yup.string()
    .email('E-mail inválido.')
    .required('O e-mail é obrigatório.'),
  password: Yup.string()
    .min(6, 'A senha precisa ter no mínimo 6 caracteres.')
    .required('Password obrigatório.'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <Form schema={schemaYup} onSubmit={handleSubmit}>
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
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Informe o seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Informe a sua senha"
        />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
