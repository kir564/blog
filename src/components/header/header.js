import { Logo, ControlPanel } from './components';
import styled from 'styled-components';

const Discription = styled.div`
  font-style: italic;
`;

const HeaderContainer = ({ className }) => (
  <header className={className}>
    <Logo />
    <Discription>
      Веб-технологии
      <br /> Написание кода
      <br /> Разбор ошибок
    </Discription>
    <ControlPanel />
  </header>
);

export const Header = styled(HeaderContainer)`
  position: fixed;
  display: flex;
  justify-content: space-between;
  top: 0;
  width: 1000px;
  height: 120px;
  padding: 20px 40px;
  box-shadow: 1px 1px 12px #000;
  background-color: #fff;
  z-index: 10;
`;
