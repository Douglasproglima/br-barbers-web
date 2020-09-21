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
      background-color: #404954;
      background-clip: padding-box;
      border-color: #727cf5;
      border: 50px #727cf5;
      box-shadow: 0 0 25px rgba(114 124 245 / 20%);
      border: 0;
      border-radius: 4px;
      height: 44px;
      width: 100%;
      padding: 15px;
      color: #e3eaef;
      margin: 0 0 10px;
      &::placeholder {
        color: #dbd9ff;
      }
    }
    hr {
      border: 0;
      height: 2px;
      background: linear-gradient(
        to right,
        #727cf5 25%,
        #a8a8ff 51%,
        #727cf5 100%
      );
      margin: 10px 0 20px;
      &:hover {
        background: ${darken(0.05, '#a8a8ff')};
      }
    }
    span {
      color: #727cf5;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      box-shadow: 0 0 25px rgba(114 124 245 / 20%);
      background: #727cf5;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.5s;
      &:hover {
        background: ${darken(0.05, '#727cf5')};
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
    background: #a8a8ff;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.08, '#A8A8FF')};
    }
  }
`;
