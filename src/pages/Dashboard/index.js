/*
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaGithub, FaSpinner } from 'react-icons/fa';
import api from '../../services/api';
import Container from '../../components/Container';
import { Form, SumitButton, List } from './styles';

export default class Dashboard extends Component {
  render() {
    return (
      <Container>
        <h1>
          <FaSpinner size={21} />
          Dashboard
        </h1>
      </Container>
    );
  }
}
*/

import React from 'react';
import api from '~/services/api';

export default function Dashboard() {
  api.get('appointments');
  return <h1>DASHBOARD</h1>;
}
