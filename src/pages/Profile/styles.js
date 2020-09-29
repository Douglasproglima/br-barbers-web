import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding: 30px;
    width: 100%;
    input {
      background-color: ${props => props.theme.colors.inputPlaceholder};
      background-clip: padding-box;
      border-color: ${props => darken(0.1, props.theme.colors.secundary)};
      border: 50px ${props => props.theme.colors.secundary};
      box-shadow: 0 0 25px rgba(114 124 245 / 20%);
      border: 0;
      border-radius: 4px;
      height: 44px;
      width: 100%;
      padding: 15px;
      color: ${props => props.theme.colors.inputColor};
      margin: 0 0 10px;
      &::placeholder {
        color: ${props => props.theme.colors.inputColor};
      }
      img {
        padding: 10px;
      }
    }
    hr {
      border: 0;
      height: 2px;
      background: linear-gradient(
        to right,
        ${props => props.theme.colors.hr.primary} 25%,
        ${props => props.theme.colors.hr.secundary} 51%,
        ${props => props.theme.colors.hr.primary} 100%
      );
      margin: 10px 0 20px;
      &:hover {
        background: ${props => darken(0.1, props.theme.colors.hr.secundary)};
      }
    }
    span {
      color: ${props => darken(0.1, props.theme.colors.hr.secundary)};
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      box-shadow: 0 0 25px rgba(114 124 245 / 20%);
      background: ${props => props.theme.colors.hr.secundary};
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.5s;
      &:hover {
        background: ${props => darken(0.1, props.theme.colors.hr.secundary)};
        transition: background 0.5s;
      }
    }
    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }
  }

  > button {
    width: 88%;
    margin: 0 30px 0;
    height: 44px;
    background: ${props => props.theme.colors.hr.secundary};
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    &:hover {
      background: ${props => darken(0.1, props.theme.colors.hr.secundary)};
    }
  }
`;
