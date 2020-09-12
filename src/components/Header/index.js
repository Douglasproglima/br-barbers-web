import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo_min.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Br Barber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Douglas Lima</strong>
              <Link to="/profile">Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Douglas Lima"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
