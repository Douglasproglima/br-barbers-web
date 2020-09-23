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
      color: #727cf5;
    }
    strong {
      color: #f47b00;
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
      #727cf5 25%,
      #a8a8ff 51%,
      #727cf5 100%
    );
    margin: 10px 0 0 0;
    &:hover {
      background: ${darken(0.05, '#a8a8ff')};
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
    padding: 0 15px 0 15px;
  }

  /* ul:hover {
    opacity: 0.6;
  } */
`;

export const Time = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #363633;
  box-shadow: 0 0 25px rgb(114 124 245 / 10%);
  opacity: ${props => (props.past ? 0.6 : 1)};

  &:hover, &:focus, &:active {
    z-index: 10;
    opacity: ${props => (props.past ? 0.7 : 1)};
    background: ${darken(0.03, '#363633')};
    box-shadow: 0 0 25px rgb(244 123 0 / 20%);
    transform: translateY( -3px ) scale( 1.09 ) rotateX( 20deg );
  }

  &:after {
    transform: rotate( 25deg );
    top: -40%;
    opacity: .15;
  }

/*   &:hover {
    content: '';
    z-index: 10;
    width: 100%;
    height: 100%;
    top: -90%;
    left: -20px;
    opacity: .1;
    overflow: hidden;
    transform-origin: center top;
    transform-style: preserve-3d;
    transition: .3s;
    transform: rotate( 20deg );
    background: linear-gradient( to top, transparent, #fff 15%, rgba( #fff, .5 ) );
  } */

  strong {
    display: block;
    color: ${props => (props.available ? '#09e36f' : '#ff5240')};
    /* color: ${props => (props.available ? '#f47b00' : '#727cf5')}; */
    font-size: 20px;
    font-weight: bold;
  }
  span {
    font-weight: lighter;
    display: block;
    margin-top: 3px;
    color: ${props => (props.available ? '#727cf5' : '#ffffff')};
    /* color: ${props => (props.available ? '#12c968' : '#d15649')}; */
  }
`;
