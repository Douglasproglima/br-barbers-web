import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  header {
    display: flex;
    align-items: center;
    align-self: center;

    button {
      border: 0;
      background: none;
      color: ${props => props.theme.colors.color};
    }
    strong {
      color: ${props => props.theme.colors.color};
      font-size: 24px;
      margin: 0 15px;
    }
  }

  hr {
    display: flex;
    align-items: center;
    align-self: center;
    border: 0;
    width: 95%;
    height: 2px;
    background: linear-gradient(
      to right,
      ${props => props.theme.colors.hr.primary} 25%,
      ${props => props.theme.colors.hr.secundary} 51%,
      ${props => props.theme.colors.hr.primary} 100%
    );
    margin: 10px 0 0 0;
    &:hover {
      background: ${props => darken(0.05, props.theme.colors.hr.secundary)};
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
    padding: 0 15px 0 15px;
  }
`;

export const Time = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: ${props => props.theme.colors.li.background};
  border-color: ${props => props.theme.colors.li.border_color};
  box-shadow: 0 0 25px rgb(114 124 245 / 10%);
  opacity: ${props => (props.past ? 0.6 : 1)};

  &:hover,
  &:focus,
  &:active {
    z-index: 10;
    opacity: ${props => (props.past ? 0.7 : 1)};
    background: ${props => darken(0.03, props.theme.colors.li.background)};
    box-shadow: 0 0 25px rgb(244 123 0 / 20%);
    transform: translateY(-3px) scale(1.09) rotateX(20deg);
  }

  &:after {
    transform: rotate(25deg);
    top: -40%;
    opacity: 0.15;
  }

  strong {
    display: block;
    color: ${props =>
      props.available
        ? props.theme.colors.li.text
        : props.theme.colors.li.strong_false};
    font-size: 20px;
    font-weight: bold;
  }
  span {
    font-weight: lighter;
    display: block;
    margin-top: 3px;
    color: ${props =>
      props.available
        ? props.theme.colors.li.span_true
        : props.theme.colors.li.span_false};
  }
`;
