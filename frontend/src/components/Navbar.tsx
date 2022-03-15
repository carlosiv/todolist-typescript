import styled from "styled-components";

const NavBarContainer = styled.div`
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  background: black;
  text-align: center;
`;

const NavbarH1 = styled.h1`
  padding-left: 10px;
`;
const Navbar = () => {
  return (
    <NavBarContainer>
      <NavbarH1>My Todo List</NavbarH1>
    </NavBarContainer>
  );
};

export default Navbar;
