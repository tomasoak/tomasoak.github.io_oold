import styled from 'styled-components';

export const Nav = styled.nav`
  min-height: 50px;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
  padding-top: 15px;
  padding-bottom: 5px;

  border: 1px solid transparent;
  border-width: 0 0 1px;
  transition: all 0.3s ease-in-out;
  background-color: ${props =>
    props.isScrolled ? 'rgba(126, 93, 236, 0.8)' : 'transparent'};
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0 0 0 80px;

  display: grid;
  grid-template-columns: 480px 1fr;

  @media (min-width: 1200px) {
    flex: 0 0 75%;
    max-width: 75%;
  }
`;

export const Brand = styled.h1`
  left: 81px;
  top: 62px;

  font-family: 'Voltaire', sans-serif;
  font-size: 52px;
  line-height: 70px;

  color: #faff00;
`;

export const NavItems = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ul {
    display: flex;

    /* @media (max-width: 1080px) {
      display: none;
    } */

    li {
      align-self: center;
      padding: 10px 15px;

      color: #FFF;
      
      font-size: 34px;
      font-weight: normal;
      font-style: normal;
      font-family: 'Staatliches', cursive;
      line-height: 45px;

      &:hover {
      color: rgba(250, 255, 0, 0.8);
      font-weight: 600;
    }
  }
`;