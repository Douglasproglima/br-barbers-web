import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  /*color: #f47b00;*/
  color: ${props => props.theme.colors.header.text};
  background: ${props => props.theme.colors.background};
`;
