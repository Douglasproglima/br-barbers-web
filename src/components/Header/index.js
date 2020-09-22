import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo_min.svg';
import { Container, Content, Profile } from './styles';
import Notifications from '~/components/Notifications';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="Br Barber" />
          </Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Perfil</Link>
              <Link to="/">Sair</Link>
            </div>
            <img
              src={
                profile.avatar.url ||
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt="Douglas Lima"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
