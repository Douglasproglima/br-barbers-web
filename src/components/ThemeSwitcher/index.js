import React, { useContext } from 'react';
import Switch from 'react-switch';
import { shade } from 'polished';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';

export default function({ toggleTheme }) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon
        uncheckedIcon={false}
        height={10}
        width={45}
        handleDiameter={20}
        offColor={shade(0.3, colors.secundary)}
        onColor={colors.secundary}
      />
    </Container>
  );
}
