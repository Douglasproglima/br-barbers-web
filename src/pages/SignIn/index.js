import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { MdNotifications } from 'react-icons/md';
import logo from '~/assets/logo.svg';

import { signInRequest } from '~/store/modules/auth/actions';

// A estilização das msg está no arquivo _layouts/auth/styles.js
const schemaYup = Yup.object().shape({
  email: Yup.string()
    .email('E-mail inválido.')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha precisa ter no mínimo 6 caracteres.')
    .required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
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

        <Input name="email" type="email" placeholder="Informe o seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Informe a sua senha"
        />

        <button type="submit">{loading ? 'Carregando...' : 'Entrar'}</button>
        <Link to="/register">Ainda não possui conta? Cadastre-se</Link>
      </Form>
    </>
  );
}
