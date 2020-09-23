import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';
import { Container, Time } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft size={36} color="FFF" />
        </button>
        <strong>23 de Setembro</strong>
        <button type="button">
          <MdChevronRight size={36} color="FFF" />
        </button>
      </header>

      <hr />

      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Andy Rose</span>
        </Time>
        <Time available>
          <strong>09:00</strong>
          <span>Em aberto</span>
        </Time>
        <Time available>
          <strong>10:00</strong>
          <span>Em aberto</span>
        </Time>
        <Time available>
          <strong>11:00</strong>
          <span>Em aberto</span>
        </Time>
        <Time past>
          <strong>12:00</strong>
          <span>Ruan Sanches</span>
        </Time>
        <Time past>
          <strong>13:00</strong>
          <span>Bryan Adams</span>
        </Time>
        <Time available>
          <strong>14:00</strong>
          <span>Em aberto</span>
        </Time>
        <Time past>
          <strong>15:00</strong>
          <span>David Gilmour</span>
        </Time>
      </ul>
    </Container>
  );
}
