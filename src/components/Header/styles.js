import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  height: 65px;
  border-radius: 5px;
  background: #2c2c2c;
  box-shadow: 0 0 25px rgb(244 123 0 / 40%);
  padding: 0 30px;

  img {
    &:hover {
      opacity: 0.6;
    }
  }
`;

export const Content = styled.div`
  height: 65px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      height: 35px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eeeeee;
      &:hover {
        opacity: 0.6;
      }
    }

    a {
      font-weight: bold;
      color: #f47b00;
      &:hover {
        opacity: 0.6;
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eeeeee;

  div {
    text-align: right;
    margin-right: 20px;

    strong {
      display: block;
      color: #ffffff;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #f47b00;
      &:hover {
        opacity: 0.6;
      }
    }
  }

  img {
    height: 32px;
    border-radius: 50%;
    &:hover {
      opacity: 0.6;
    }
  }
`;
